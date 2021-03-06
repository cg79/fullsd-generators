import 'zone.js/node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
import * as fs from 'fs';
import * as cors from 'cors';
import nodemailer from 'nodemailer';
// const smtpSettings = require('./settings');

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/angular-starter/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';
  let transporter = null;

  server.use(express.static('assets'));
  // server.use(express.static('public'));

  // function readFileAsJson (fileName) {
  //   return require(fileName)
  // }

  function readFileAsJson (fileName) {
    const fName = join('dist/angular-starter/server', 'smtp.json');

    var obj = JSON.parse(fs.readFileSync(fName, 'utf8'));
    return obj;

    // return require(fName)
    // return require(fileName)
  }

  const sendEmail = function(obj) {
    // create reusable transporter object using SMTP transport
    // Logger.log(config.smtpSettings);
    // Logger.log(config);
    debugger;

    return new Promise((resolve, reject) => {
      const smtpSettings = readFileAsJson('smtp.json');
      console.log(smtpSettings);
  
      if (transporter == null) {
        transporter = nodemailer.createTransport(smtpSettings);
      }
  
      const emailMessage = {
        from: smtpSettings.from,
        to: 'claudiu9379@yahoo.com',
        subject: 'DevGenerators',
        html: obj.body || 'asd',
      };
      
      transporter.sendMail(emailMessage, (err, data, res) => {
        if (err) {
          console.log(err);
          return reject(err)
        }
        resolve({success: 1});
      });

    })
    
  }

  // server.use(express.json());

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  server.use(cors());

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  // server.post('/email', (req, res) => {
  //   throw new Error('asdasd')
  // })

  server.post('/email', express.json(), (req, res) => {
    // server.post('/email', (req, res) => {
    // echo json
    // res.json(req.body);
    console.log(req.body);

    sendEmail({
      body: req.body
    })
    .then(v => {
      res.send(v);
    })
    .catch(ex => {
      res.send(ex.message);
    })
    // res.send({a:1});
    // throw new Error(req.body)
  });

  // server.get('/assets/*', async (ctx) => {
  //   await send(ctx, ctx.path);
  // });

  return server;
}

function run(): void {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
