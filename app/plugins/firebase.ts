import firebase from 'firebase/app'
import 'firebase/auth'
import { SetupContext } from '@vue/composition-api'
import gql from 'graphql-tag'

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

export const signinProcesses: {
  [type in keyof typeof providers]: (
    result: firebase.auth.UserCredential,
    context: SetupContext
  ) => void
} = {
  async twitter(result, context) {
    const email = result.user!.email!
    const {
      data: {
        user: {
          id,
          screenName,
          name,
          icon,
          birthday: { formatted },
          twitterId,
          twitterScreenName
        }
      }
    } = await context.root.$apolloProvider.clients.defaultClient.query({
      query: gql`
        query($email: String!) {
          user(where: { email: $email }) {
            id
            screenName
            name
            icon
            birthday {
              formatted
            }
            twitterId
            twitterScreenName
          }
        }
      `,
      variables: {
        email
      }
    })

    context.root.$accessor.login({
      id,
      email,
      screenName,
      name,
      icon,
      birthday: formatted,
      twitter:
        twitterId && twitterScreenName
          ? { id: twitterId, screenName: twitterScreenName }
          : undefined
    })
    context.root.$router.push('/home')

    /* else {
      context.root.$accessor.preRegister({
        email,
        account: result.additionalUserInfo!.username!,
        username: result.additionalUserInfo!.profile!.name,
        icon: (result.additionalUserInfo!.profile!
          .profile_image_url_https as string).replace(/_normal/g, ''),
        providerId: result.additionalUserInfo!.providerId
      })
      context.root.$router.push('/register')
    }
    */
  }
}
