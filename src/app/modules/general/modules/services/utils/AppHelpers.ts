// import * as Zlib from 'zlib';
import EventsService from '../pubsub/events.service';
import { inflate, deflate, ungzip } from 'pako';

class AppHelpers {

  datetexte = {
    'EN': {
      now: 'just now',
      secago: 'seconds ago',
      twomin: 'a minute ago',
      minago: 'minutes ago',
      oneh: 'one hour ago',
      hago: 'hours ago',
      yest: 'yesterday',
      days: 'days ago',
      wago: 'weeks ago',
      mago: 'months ago',
      yago: 'years ago',
    },
    'RO': {
      now: 'chiar acum',
      secago: 'secunde',
      twomin: 'un minut',
      minago: 'minute',
      oneh: 'o ora',
      hago: 'ore',
      yest: 'ieri',
      days: 'zile',
      wago: 'saptamani',
      mago: 'luni',
      yago: 'ani',
    }
  } 


  texte = this.datetexte.RO;

  lut = [];
  constructor() {
    for (var i = 0; i < 256; i++) { this.lut[i] = (i < 16 ? '0' : '') + (i).toString(16); }
    EventsService.subscribe('refresh', null, (val) => {
      this.texte = this.datetexte[val];
    });
  }

  guidOk() {
    var d0 = Math.random() * 0xffffffff | 0;
    var d1 = Math.random() * 0xffffffff | 0;
    var d2 = Math.random() * 0xffffffff | 0;
    var d3 = Math.random() * 0xffffffff | 0;
    let lut = this.lut;
    return lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + '-' +
      lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + '-' + lut[d1 >> 16 & 0x0f | 0x40] + lut[d1 >> 24 & 0xff] + '-' +
      lut[d2 & 0x3f | 0x80] + lut[d2 >> 8 & 0xff] + '-' + lut[d2 >> 16 & 0xff] + lut[d2 >> 24 & 0xff] +
      lut[d3 & 0xff] + lut[d3 >> 8 & 0xff] + lut[d3 >> 16 & 0xff] + lut[d3 >> 24 & 0xff];
  }

  jsonToArray(json) {
    var str = JSON.stringify(json, null, 0);
    var ret = new Uint8Array(str.length);
    for (var i = 0; i < str.length; i++) {
      ret[i] = str.charCodeAt(i);
    }
    return ret
  };

  binArrayToJson = function (binArray) {
    var str = "";
    for (var i = 0; i < binArray.length; i++) {
      str += String.fromCharCode(parseInt(binArray[i]));
    }
    return JSON.parse(str)
  }
  guid() {
    function _p8(s) {
      var p = (Math.random().toString(16) + "000000000").substr(2, 8);
      return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
    }
    return _p8(null) + _p8(true) + _p8(true) + _p8(null);
  }

  sortArray(arr, prop) {
    arr.sort((a, b) => (a[prop] > b[prop]) ? 1 : -1);
  };

  removeDoubleSpaces(text) {
    return text.replace(/\s\s+/g, ' ');
  }

  removeStyle(str) {
    str = this.fixBr(str);
    str = this.removeBrSpaces(str);
    var re = / style=".*?">/gmi;
    var s = str.replace(re, function (x, $1, $2) {
      return '>';
    });
    // var a = this.getBoldWords(str);
    // console.log(a);
    return s;
  }

  removeClass(str) {
    var re = / class="(.+)(">)/gm;
    var s = str.replace(re, function (x, $1, $2) {
      return '>';
    });
    return s;
  }

  removeBrSpaces(str) {
    var re = /(<br)(\s{0,})(\/>)/gm;
    var s = str.replace(re, function (x, $1, $2, $3) {
      return $1 + $3;
    });
    return s;
  }

  fixBr(str) {
    var re = /(<br)(\s{0,})(>)/gm;
    var s = str.replace(re, function (x, $1, $2, $3) {
      return $1 + '/>';
    });
    return s;
  }

  getBoldWords(str) {
    var re = /(<strong>)(.*?)(<\/strong>)/gm;
    var s = str.match(re, (x, a, b, c) => b);
    return s;
  }

  prettyDate2(date) {
    // var date = new Date(parseInt(time));
    return date.toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  friendlyDate(datev) {
    if (!datev) {
      return '';
    }
    var date = new Date(datev);
    var minute = 60,
      hour = minute * 60,
      day = hour * 24,
      week = day * 7,
      month = week * 4,
      year = month * 12;
    // var date = new Date(dateValue);
    var now = new Date();
    var delta = (now.getTime() - date.getTime()) / 1000;
    delta = Math.floor(delta);

    var fuzzy = '';

    if (delta < 30) {
      fuzzy = this.texte.now;
    } else if (delta < minute) {
      fuzzy = delta + ' ' + this.texte.secago;
    } else if (delta < 2 * minute) {
      fuzzy = this.texte.twomin;
    } else if (delta < hour) {
      fuzzy = Math.floor(delta / minute) + ' '+ this.texte.minago;
    } else if (Math.floor(delta / hour) === 1) {
      fuzzy = this.texte.oneh;
    } else if (delta < day) {
      fuzzy = Math.floor(delta / hour) + ' ' + this.texte.hago;
    } else if (delta < day * 2) {
      fuzzy = this.texte.yest;
    } else if (delta < day * 8) {
      fuzzy = Math.floor(delta / day) + ' ' + this.texte.days;
    } else if (delta < week * 5) {
      fuzzy = Math.floor(delta / week) + ' ' + this.texte.wago;
    } else if (delta < month * 12) {
      fuzzy = Math.floor(delta / month) + ' ' + this.texte.mago;
    } else if (delta < year * 10) {
      fuzzy = Math.floor(delta / year) + ' ' + this.texte.yago;
    }

    const fd = this.prettyDate2(date);
    return fuzzy + ' ' + fd;
  }

  combine2Strings(s1, s2) {
    if (s1 < s2) {
      [s1, s2] = [s2, s1];
    }
    var l1 = s1.length;
    var l2 = s2.length;
    var i = 0;
    var result = [];
    var max = l1 > l2 ? l1 : l2;

    while (i < max) {
      if (i < l1) {
        result.push(s1[i]);
      }
      if (i < l2) {
        result.push(s2[i]);
      }
      i++
    }
    return result.join('');

  }

  //unzipZippedData(data: string): string {
    //     var zlib = require('zlib');
    // var input = "Hellow world";

    // var deflated = zlib.deflateSync(input).toString('base64');
    // var inflated = zlib.inflateSync(new Buffer(deflated, 'base64')).toString();

    // console.log(inflated);

  //   var base64Data = "eJztwTEBAAAAwqD1T20JT6AAAHgaCWAAAQ==";
  //   data = base64Data;

  //   const buffer = new Buffer(data); //here ! you can test out with different encodings
  //   var inflated = Zlib.inflateSync(buffer).toString();

  //   return inflated;
  // }

  // unzipFile(filePath: string): Promise<string> {

  //   // not working : see https://stuk.github.io/jszip/documentation/howto/read_zip.html
  //   return new Promise((resolve, reject) => {
  //     var jsZip = require('jszip');
      
  //     jsZip.loadAsync(filePath).then((zip) => {
  //       Object.keys(zip.files).forEach((filename) => {
  //         zip.files[filename].async('string').then(function (fileData) {
  //           console.log(fileData) // These are your file contents   
  //           resolve(fileData);
  //         })
  //       })
  //     })
  //       .catch(ex => {
  //         console.log(ex);
          
  //         reject(ex);
  //       })
  //   });
  // }

  encoding = 'base64';
  zipString(input) {
    const zipped = deflate(input);
    return zipped;
    //return 's';
    // var deflated = Zlib.deflateSync(input).toString(this.encoding); 
    // return deflated;
  }
  unZipString(deflated): string {

    const strData = atob(deflated);

    // split it into an array rather than a "string"
    const charData = strData.split('').map(function(x){return x.charCodeAt(0); });

    // convert to binary
    const binData = new Uint8Array(charData);

    // inflate
    const result = inflate(binData, { to: 'string' });
    return result;

    // let result:any = ungzip(new Uint8Array(deflated), {"to": "string"});
    // return result;

    // const decompressed =  inflate(deflated, {to: 'string'});
    // return decompressed;
  }

  randomBetween(x, y) {
    return Math.floor(Math.random() * y) + x;
  }

  randomString() {
    return Math.random().toString(36).substring(7);
  }

  debug() {
    
  }
  // date = {
  //   //https://stackoverflow.com/questions/26873200/momentjs-getting-javascript-date-in-utc
  //
  //   dateToUtcMilliSecconds: (date)=>
  //     {
  //       return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
  //       date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds())
  //     },
  //   localDateToUtcMilliSecconds: (date) =>
  //     {
  //       return  date.getTime() + (date.getTimezoneOffset() * 60000);
  //     },
  //
  //   utcMilliSeccondsToLocalDate: (millisecconds) =>
  //     {
  //       var now = new Date();
  //       return now.setTime(millisecconds - (now.getTimezoneOffset() * 60000));
  //     },
  //   utcMilliSeccondsToTimeZoneDate: (millisecconds, timezoneOffset) =>
  //     {
  //       var now = new Date();
  //       return now.setTime(millisecconds - (timezoneOffset * 60000));
  //     }
  //
  // }
}

export default new AppHelpers();
