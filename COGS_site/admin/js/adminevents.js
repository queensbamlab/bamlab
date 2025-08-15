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

    var rootRef = firebase.database().ref();

    var eventsTable = document.getElementById('events-table');

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

    function updateEventsTable() {
        var postsRef = firebase.database().ref('posts/Events').orderByKey();
        postsRef.once('value', function (snapshot) {
            snapshot.forEach(function (event) {

                var row = document.createElement('tr');

                var name = document.createElement('td');
                name.appendChild(document.createTextNode(event.val().name));

                var author = document.createElement('td');
                author.appendChild(document.createTextNode(event.val().author));

                var time = document.createElement('td');
                time.appendChild(document.createTextNode(event.val().date + " | " + event.val().time));

                row.appendChild(name);
                row.appendChild(author);
                row.appendChild(time);

                row.addEventListener('click', function() {
                   sessionStorage.setItem('selected-event-key', event.key);
                   window.location.href = 'adminevent.html';
                });

                eventsTable.appendChild(row);

            });
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        updateEventsTable();
    }, false);

}());