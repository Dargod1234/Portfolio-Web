import React from "react";
import Home from "../pages/Home";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { I18nextProvider } from "react-i18next";
import i18n from "../componets/i18n.jsx";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyAy9rqllJ0hJdv9fUQZbHOSgxJNhV5IbWY",
    authDomain: "mi-portafolio-51d71.firebaseapp.com",
    projectId: "mi-portafolio-51d71",
    storageBucket: "mi-portafolio-51d71.appspot.com",
    messagingSenderId: "372195531559",
    appId: "1:372195531559:web:12b6de6f1ce37c6197a702",
    measurementId: "G-QQGSRV059R",
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <I18nextProvider i18n={i18n}>
      <div className="dark:bg-gray-900 dark:text-white">
        <Home />
      </div>
    </I18nextProvider>
  );
}

export default App;
