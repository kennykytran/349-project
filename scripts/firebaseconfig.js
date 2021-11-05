(function (window) {
    'use strict';        
    var App = window.App || {};
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var FirebaseConfig = {
        apiKey: "AIzaSyA34-tWrMtoke3lP-kap4-B0RlzR0Yw4T0",
        authDomain: "personality-quiz-projec.firebaseapp.com",
        projectId: "personality-quiz-projec",
        storageBucket: "personality-quiz-projec.appspot.com",
        messagingSenderId: "1002094943929",
        appId: "1:1002094943929:web:024b65a648c2de91450568"
        //measurementId: "G-7CLEK2MBTK"
    };
  
    App.FirebaseConfig = FirebaseConfig;
    // Initialize Firebase
    firebase.initializeApp(App.FirebaseConfig);
    console.log('Firebase has been initialized. ')

    window.App = App;

})(window);
