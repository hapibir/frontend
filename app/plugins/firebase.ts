import firebase from 'firebase/app'
import 'firebase/auth'
import { SetupContext } from '@vue/composition-api'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
}

if (firebase.apps.length === 0) {
  firebase.initializeApp(config)
}

export default firebase

export const providers = {
  twitter: firebase.auth.TwitterAuthProvider
}

type a = keyof typeof providers

export const signinProcesses: {
  [type in keyof typeof providers]: (
    result: firebase.auth.UserCredential,
    context: SetupContext
  ) => void
} = {
  twitter(result) {
    const userName = result.additionalUserInfo!.username!
    console.log(userName)
  }
}
