import firebaseApp from 'firebase/app'

import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyD9W_J1t_CNLL9U5cV51I2nrB6zYk8GYIA',
  authDomain: 'esteam-2395b.firebaseapp.com',
  projectId: 'esteam-2395b',
  storageBucket: 'esteam-2395b.appspot.com',
  messagingSenderId: '924827967478',
  appId: '1:924827967478:web:cbe89329073168fe4a71d7'
}

if (!firebaseApp.apps.length) {
  firebaseApp.initializeApp(firebaseConfig)
}

const mapUserFromFirebaseAuth = (userCredential) => {
  if (userCredential) {
    const user = userCredential.user || userCredential
    return {
      email: user.email,
      displayName: user.displayName
    }
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged(user => {
    console.log(user)
    // const normalizeUser = mapUserFromFirebaseAuth(user)
    onChange(user)
  })
}

export const loginWIthPassword = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword('easo02@hotmail.fr', 'user123')
    .then(mapUserFromFirebaseAuth)
    .catch((error) => {
      console.log(error)
    })
}

export const logout = () => {
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    console.log('sigout')
  })
}
