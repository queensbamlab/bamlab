(function () {

    'use strict';

    var config = {
        apiKey: "AIzaSyATSjtROLHRfgBd-ZRuYCsciLDfIpTRSGk",
        authDomain: "morgans-website-353fc.firebaseapp.com",
        databaseURL: "https://morgans-website-353fc.firebaseio.com",
        projectId: "morgans-website-353fc",
        storageBucket: "",
        messagingSenderId: "868608961431"
    };
    firebase.initializeApp(config);

    const currentPwd = document.getElementById('current_pwd');
    const newPwd = document.getElementById('new_pwd');
    const newPwdConfirm = document.getElementById('confirm_new_pwd');

    const cancelBtn = document.getElementById('cancelBtn');
    const submitBtn = document.getElementById('submitBtn');

    cancelBtn.addEventListener('click', function () {
       window.location.href = 'profile.html';
    });

    submitBtn.addEventListener('click', function () {

        var requiredDocs = document.getElementsByClassName('required');
        for (var i = 0; i < requiredDocs.length; i++) {
            if (requiredDocs.item(i).value == "") {
                alert("One or  more required fields are not filled out.");
                return;
            }
        }

        if(newPwd.value != newPwdConfirm.value) {
            alert("Error. New Passwords do not match.");
            return;
        }

        var user = firebase.auth().currentUser;

        if(user == null) {
            alert('Error. You are not logged in.');
            window.location.href = '../index.html';
            return;
        }

        var credentials = firebase.auth.EmailAuthProvider.credential(user.email, currentPwd.value);

        user.reauthenticateWithCredential(credentials).then(function() {
            console.log('Re-Authenticated Successfully.');
        }).catch(function(error) {
            alert(error);
            return;
        });

        user.updatePassword(newPwd.value).then(function () {
            console.log('Completed');
            window.location.href = 'profile.html';
            return;
        }).catch(function (error) {
            alert(error);
            return;
        });

    });

}());