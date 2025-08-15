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

    const cancelBtn = document.getElementById('cancelBtn');

    cancelBtn.addEventListener('click', function () {
        window.location.href = '../index.html';
        return;
    });

    const submitBtn = document.getElementById('submitBtn');

    const title = document.getElementById('post_name');
    const postSection = document.getElementById('post_target');
    const content = document.getElementById('post_content');

    submitBtn.addEventListener('click', function () {

        var requiredDocs = document.getElementsByClassName('required');
        for (var i = 0; i < requiredDocs.length; i++) {
            if (requiredDocs.item(i).value == "") {
                alert("One or  more required fields are not filled out.");
                return;
            }
        }
        const user = firebase.auth().currentUser;

        var timeStamp = new Date().toString();

        var postData = {};

        firebase.database().ref('/users/' + user.uid).once('value').then(function (snapshot) {

            postData = {
                author: snapshot.val().fullname,
                title: title.value,
                authoruid: user.uid,
                content: content.value
            };

        }).then(function () {

            firebase.database().ref('posts/' + postSection.value + '/' + timeStamp).set(postData).then(function () {
                window.location.href = '../index.html';
            });

        });

    });


    firebase.auth().onAuthStateChanged(function (firebaseUser) {
        if (firebaseUser) {
            const user = firebase.auth().currentUser;

            if (user == null) {
                window.location.href = '../index.html';

            } else {
                return firebase.database().ref('/users/' + user.uid).once('value').then(function (snapshot) {
                    if (!snapshot.hasChild('affiliation')) {
                        window.location.href = 'info.html';
                        return;
                    }
                });

            }
        }
    });

}());
