(function (window) {
    'use strict';        
    var App = window.App || {};
    // Your web app's Firebase configuration
              // For Firebase JS SDK v7.20.0 and later, measurementId is optional
              var FirebaseConfig = {
                apiKey: "AIzaSyD-KGG2u0Cb65rOPir3w0Ra1IOjM1h69nc",
                authDomain: "coffeerun-56c9b.firebaseapp.com",
                projectId: "coffeerun-56c9b",
                storageBucket: "coffeerun-56c9b.appspot.com",
                messagingSenderId: "47895541782",
                appId: "1:47895541782:web:45afd992717fef9064dd37",
                measurementId: "G-7CLEK2MBTK"
              };
            
              App.FirebaseConfig = FirebaseConfig;
              // Initialize Firebase
              firebase.initializeApp(App.FirebaseConfig);
              
              window.App = App;

})(window);