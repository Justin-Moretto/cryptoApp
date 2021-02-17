import * as functions from "firebase-functions";
import * as admin from 'firebase-admin';

const serviceAccount = require('../cryptoapp-7aaed-firebase-adminsdk-5348l-0396f955d1.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://cryptoapp-7aaed-default-rtdb.firebaseio.com/'
});

import * as crypto from 'crypto';
import * as qs from 'querystring';
import axios from 'axios';

import * as CORS from 'cors';
const cors = CORS({ origin: true });

const redirect_uri = 'https://localhost:4200/redirect';
const client_id = functions.config().coinbase.id;
const client_secret = functions.config().coinbase.secret

const defaultParams = {
  client_id,
  client_secret,
  redirect_uri
}

export const redirect = functions.https.onRequest((req, res) => {
  const base = 'https://www.coinbase.com/oauth/authorize?'

  const queryParams = {
    ...defaultParams,
    response_type: 'code',
    scope: 'wallet:accounts:read',
    state: crypto.randomBytes(20).toString('hex')
  }
  const endpoint = base + qs.stringify( queryParams )

  res.redirect(endpoint);
})
  