(function () {
     var config = {
        apiKey: "AIzaSyATSjtROLHRfgBd-ZRuYCsciLDfIpTRSGk",
        authDomain: "morgans-website-353fc.firebaseapp.com",
        databaseURL: "https://morgans-website-353fc.firebaseio.com",
        projectId: "morgans-website-353fc",
        storageBucket: "",
        messagingSenderId: "868608961431"
    };
    firebase.initializeApp(config);

    const name = document.getElementById('event_name');
    const location = document.getElementById('event_location');
    const description = document.getElementById('event_desc');
    const time = document.getElementById('event_time');
    const date = document.getElementById('event_date');

    const cancelBtn = document.getElementById('event_cancel_btn');
    const postBtn = document.getElementById('event_post_button');

    firebase.auth().onAuthStateChanged(function(firebaseUser) {
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

    postBtn.addEventListener('click', function() {
        var requiredDocs = document.getElementsByClassName('required');
        for (var i = 0; i < requiredDocs.length; i++) {
            if (requiredDocs.item(i).value == "") {
                alert("One or  more required fields are not filled out.");
                return;
            }
        }

        submitInfo();
    });

    function submitInfo() {
        const target = "Events";

        const user = firebase.auth().currentUser;
        var timeStamp = new Date().toString();
        var eventData = {};

         firebase.database().ref('/users/' + user.uid).once('value').then(function (snapshot) {

            postData = {
                author: snapshot.val().fullname,
                name: name.value,
                authoruid: user.uid,
                date: date.value,
                location: location.value,
                description: description.value,
                time: time.value
            };

        }).then(function () {

            firebase.database().ref('posts/' + target + '/' + timeStamp).set(postData).then(function () {
                window.location.href = '../index.html';
                return;
            });

        });
    }
    
    cancelBtn.addEventListener('click', function() {
        window.location.href = '../index.html';
        return;
    });


}());