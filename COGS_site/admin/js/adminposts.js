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

    var rootRef = firebase.database().ref();

    const target = document.getElementById('postadmin_target');
    const postsTable = document.getElementById('posts-table');

    function updateTable() {
        var postsRef = firebase.database().ref('posts/' + target.value).orderByKey();
        postsRef.once('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {

                var newRow = document.createElement('tr');
                newRow.classList.add('posts-row');

                var postName = document.createElement('td');
                postName.appendChild(document.createTextNode(childSnapshot.val().title));

                var postAuthor = document.createElement('td');
                postAuthor.appendChild(document.createTextNode(childSnapshot.val().author));

                var timestamp = document.createElement('td');
                timestamp.appendChild(document.createTextNode(childSnapshot.key));

                newRow.appendChild(postName);
                newRow.appendChild(postAuthor);
                newRow.appendChild(timestamp);

                newRow.addEventListener('click', function() {
                    sessionStorage.setItem('selected-ts', childSnapshot.key);
                    sessionStorage.setItem('selected-section', target.value) //fix
                    sessionStorage.setItem('selected-uid', childSnapshot.val().authoruid);
                    window.location.href = 'adminpost.html';
                });

                postsTable.appendChild(newRow);
            });
        });
    }

    target.addEventListener('change', function() {
        
        while (postsTable.firstChild) {
                    postsTable.removeChild(postsTable.firstChild);
                }
        
        updateTable();
    });

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

        updateTable();
    }, false);









}());
