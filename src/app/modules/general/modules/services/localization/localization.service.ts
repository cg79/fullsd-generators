import language from '../facade/language';
import EventsService from '../pubsub/events.service';
import LocalStorageService from '../storage/LocalStorageService';

class LocalizationService {
  AVAILABLE_LANG = {
    EN: 'EN',
    RO: 'RO'
  }
  language = language.RO;
  langValue = 'RO';

  setLanguage( val ) {
    this.language = language[ val ];
    this.langValue = val;
    
    LocalStorageService.add( 'LANGUAGE', val );
    EventsService.publish( 'refresh', val );

  }
  constructor(
    ) {
    const lang = LocalStorageService.get( 'LANGUAGE' );
    if ( lang && language[ lang ] ) {
      this.setLanguage( lang );

    }
    EventsService.subscribe( 'change-language', null, ( val ) => {
      this.setLanguage( val );

    } );

  }

  formatHelper(val: string, values: any) {
    // tslint:disable-next-line:forin
    for ( const k in values ) {
      val = val.replace( new RegExp( '\\{' + k + '\\}', 'g' ), values[ k ] );
    }
    return val;
  };

  key( key: string ): string {
    return this.language[ key ];
  }

  format(key: string, values: any) {
    const base = this.language[ key ];
    return this.formatHelper(base, values);
  }

}

export default new LocalizationService();