(function() {

    var config = {
        apiKey: "AIzaSyATSjtROLHRfgBd-ZRuYCsciLDfIpTRSGk",
        authDomain: "morgans-website-353fc.firebaseapp.com",
        databaseURL: "https://morgans-website-353fc.firebaseio.com",
        projectId: "morgans-website-353fc",
        storageBucket: "",
        messagingSenderId: "868608961431"
    };
    firebase.initializeApp(config);

    const name = document.getElementById('name');
    const date = document.getElementById('date');
    const description = document.getElementById('description');
    const location = document.getElementById('location');
    const time = document.getElementById('time');

    const key = sessionStorage.getItem('selected-event-key');

    const delBtn = document.getElementById('del-event');
    const editBtn = document.getElementById('edit-event');

    var authoruid, author;

    firebase.auth().onAuthStateChanged( function(firebaseUser) {
        if (firebaseUser) {
            const user = firebase.auth().currentUser;

            if(user == null) {
                alert('Error. Not Authorized. Null User');
                window.location.href = "../index.html";
                return;
            } else {
                firebase.database().ref('users/' + user.uid).once('value', function (snapshot) {
                    if(snapshot.val().admin != 1) {
                        alert('Error. Not Authorized.');
                        window.location.href = "../index.html";
                        return;
                    }
                });
            }

        } else {
            alert('Error. Not Authorized. Null User');
            window.location.href = "../index.html";
            return;
        }
    });

    document.addEventListener('DOMContentLoaded', function () {


        firebase.database().ref('posts/Events/' + key).once('value', function (event) {
            name.value = event.val().name;
            date.value = event.val().date;
            description.value = event.val().description;
            location.value = event.val().location;
            time.value = event.val().time;

            authoruid = event.val().authoruid;
            author = event.val().author;
        });
    }, false);

    delBtn.addEventListener('click', function () {
        firebase.database().ref('posts/Events/' + key).remove();
        window.location.href = 'adminevents.html';
    });

    editBtn.addEventListener('click', function () {

        var eventData = {
            name: name.value,
            date: date.value,
            description: description.value,
            location: location.value,
            time: time.value,
            author: author,
            authoruid: authoruid
        };

        firebase.database().ref('posts/Events/' + key).set(eventData).then(function () {
            window.location.href = 'adminevents.html';
        });

    });

}());