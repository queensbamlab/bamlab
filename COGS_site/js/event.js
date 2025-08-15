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

    const name = document.getElementById('event-name');
    const timeDate = document.getElementById('event-timedate');
    const loc = document.getElementById('event-location');
    const desc = document.getElementById('event-description');
    const author = document.getElementById('event-author');

    const timestamp = sessionStorage.getItem('event-timestamp');

    document.addEventListener('DOMContentLoaded', function () {
        updateEvent();
    }, false);

    function updateEvent() {

        var ref = firebase.database().ref('posts/Events/' + timestamp).orderByKey();
        ref.once('value', function (snapshot) {
            name.textContent = snapshot.val().name;
            timeDate.textContent = snapshot.val().date + " | " + snapshot.val().time;
            loc.textContent= snapshot.val().location;
            desc.textContent = snapshot.val().description;
            author.textContent = snapshot.val().author;
        });
    }
}());