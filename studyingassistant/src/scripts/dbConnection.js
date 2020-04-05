// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA6ZNfAGfd_Gx-KHkzOisiHZH7FnHlGTaI",
    authDomain: "study-app-65268.firebaseapp.com",
    databaseURL: "https://study-app-65268.firebaseio.com",
    projectId: "study-app-65268",
    storageBucket: "study-app-65268.appspot.com",
    messagingSenderId: "610286816090",
    appId: "1:610286816090:web:30c3b8a261b1666c378163",
    measurementId: "G-9M78YK2ST7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var signupBtn = document.getElementById("submitBtn");

signupBtn.addEventListener('click', function(){
    var emailField = document.getElementById("inputEmail3").value;
    var passField = document.getElementById("inputPassword3").value;

    firebase.auth().createUserWithEmailAndPassword(emailField, passField).catch(function(error){
        if(error != null)
        {
            console.log(error.message);
        }
        else
        {
            emailField = "";
            passField = "";
        }
    })

});