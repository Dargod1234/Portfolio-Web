// eslint-disable-next-line no-unused-vars
import React from 'react'
import Home from '../pages/Home'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

function App () {
  const firebaseConfig = {
    apiKey: 'AIzaSyAy9rqllJ0hJdv9fUQZbHOSgxJNhV5IbWY',
    authDomain: 'mi-portafolio-51d71.firebaseapp.com',
    projectId: 'mi-portafolio-51d71',
    storageBucket: 'mi-portafolio-51d71.appspot.com',
    messagingSenderId: '372195531559',
    appId: '1:372195531559:web:12b6de6f1ce37c6197a702',
    measurementId: 'G-QQGSRV059R'
  }

  const app = initializeApp(firebaseConfig)
  // eslint-disable-next-line no-unused-vars
  const analytics = getAnalytics(app)

  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <Home />
    </div>
  )
}

export default App
