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

    const delPostBtn = document.getElementById('del-post');
    const editPostBtn = document.getElementById('edit-post');

    const titleField = document.getElementById('title-input');
    const timestampField = document.getElementById('timestamp');
    const authorField = document.getElementById('author-input');
    const contentField = document.getElementById('content');

    const selectedSection = sessionStorage.getItem('selected-section');
    const timestamp = sessionStorage.getItem('selected-ts');
    const authorUID = sessionStorage.getItem('selected-uid');

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


        firebase.database().ref('posts/' + selectedSection + '/' + timestamp).once('value', function (snapshot) {

            titleField.value = snapshot.val().title;
            timestampField.textContent = timestamp;
            authorField.value = snapshot.val().author;
            contentField.value = snapshot.val().content;
        });
    }, false);

    delPostBtn.addEventListener('click', function() {
        firebase.database().ref('posts/' + selectedSection + '/' + timestamp).remove();
        window.location.href = 'adminposts.html';
    });

    editPostBtn.addEventListener('click', function() {

        var postData = {
            author: authorField.value,
            title: titleField.value,
            authoruid: authorUID,
            content: contentField.value
        };
        
        firebase.database().ref('posts/' + selectedSection + '/' + timestamp).set(postData).then(function () {
                window.location.href = 'adminposts.html';
            });

    });



}());
