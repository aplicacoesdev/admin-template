import { getApp, getApps, initializeApp, } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const configFirestore = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
}

const app = getApps().length ? getApp() : initializeApp(configFirestore)
const auth = getAuth(app)

export { app, auth }
