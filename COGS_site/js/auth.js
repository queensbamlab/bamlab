(function () {
    'use strict';

    //firebase setup

    var config = {
        apiKey: "AIzaSyATSjtROLHRfgBd-ZRuYCsciLDfIpTRSGk",
        authDomain: "morgans-website-353fc.firebaseapp.com",
        databaseURL: "https://morgans-website-353fc.firebaseio.com",
        projectId: "morgans-website-353fc",
        storageBucket: "",
        messagingSenderId: "868608961431"
    };
    firebase.initializeApp(config);

    //    Sections

    const loginSection = document.getElementById('login');
    const signupSection = document.getElementById('signup');
    const emailVerifSection = document.getElementById('emailverif');

    //    Buttons

    const dontHaveAcct = document.getElementById('dontHaveAccountBtn');
    const loginBtn = document.getElementById('loginBtn');
    const alreadyHaveAcct = document.getElementById('alreadyHaveAcct');
    const signupBtn = document.getElementById('signUpBtn');

    const hrefMainPage = document.getElementById('href_mainpage');

    //    Fields

    const signupEmail = document.getElementById('auth_signup_email');
    const signupPassword = document.getElementById('auth_signup_password');
    const loginEmail = document.getElementById('auth_login_email');
    const loginPassword = document.getElementById('auth_login_password');

    //    Emails

    // If they need to sign up

    dontHaveAcct.addEventListener('click', function() {
        loginSection.classList.add('hide');
        signupSection.classList.remove('hide');
    });

    //if they need to login

    alreadyHaveAcct.addEventListener('click', function() {
        loginSection.classList.remove('hide');
        signupSection.classList.add('hide');
    });

    //when they signup

    signupBtn.addEventListener('click', function() {

        //checks for null fields

        if (signupEmail.value == "" || signupPassword.value == "") {
            alert('Please enter a value for both the email and password.');
            return;
        }

        //checks if the user email is allowed to join

        

        //adds the user, which triggers the onAuthStateChangedEvent

        const auth = firebase.auth();
        const value = auth.createUserWithEmailAndPassword(signupEmail.value, signupPassword.value);

        value.catch(function() {
            alert(e.message);
            return;
        });



    });

    //login button

    loginBtn.addEventListener('click', function() {
        if (loginEmail.value == "" || loginPassword.value == "") {
            alert('Please enter a value for both the email and password.');
            return;
        }

        const auth = firebase.auth();

        auth.signInWithEmailAndPassword(loginEmail.value, loginPassword.value).catch(function (error) {
            alert(error.message);
            return;
        });
    })

    //performing changes based on current user auth state

    firebase.auth().onAuthStateChanged(function(firebaseUser) {
        if (firebaseUser) {
            const user = firebase.auth().currentUser;

            if (user != null) {

                if (!user.emailVerified) {
                    signupSection.classList.add('hide');
                    emailVerifSection.classList.remove('hide');

                    user.sendEmailVerification().then(function () {
                        console.log('Sent Email');
                    }, function (error) {
                        alert(error.message);
                    });

                } else {

                    const uid = user.uid;

                    return firebase.database().ref('/users/' + uid).once('value').then(function (snapshot) {
                        if (!snapshot.hasChild('affiliation')) {
                            window.location.href = 'info.html';
                            return;
                        } else {
                            window.location.href = '../index.html';
                            return;
                        }
                    });

                    
                }

            }
        }
    });

    hrefMainPage.addEventListener('click', function() {
        window.location.href = '../index.html';
    });


}());
