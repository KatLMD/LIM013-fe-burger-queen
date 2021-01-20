import Firebase from '@firebase/app'
import '@firebase/firestore'
import '@firebase/auth'
import config from './config'

const firebaseApp = Firebase.initializeApp(config)

const db = firebaseApp.firestore()
db.settings({timestampsInSnapshots: true})

const auth = firebaseApp.auth()

export {db, auth}