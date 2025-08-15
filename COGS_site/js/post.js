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

    const postSection = sessionStorage.getItem('selected-target');
    const timestamp = sessionStorage.getItem('selected-timestamp');

    const title = document.getElementById('post-title');
    const author = document.getElementById('post-author');
    const content = document.getElementById('post-content');

    document.addEventListener('DOMContentLoaded', function () {
        updatePost();
    }, false);

    function updatePost() {

        var ref = firebase.database().ref('posts/' + postSection + '/' + timestamp).orderByKey();
        ref.once('value', function (snapshot) {
            title.textContent = snapshot.val().title;
            author.textContent = snapshot.val().author;
            content.textContent = snapshot.val().content;
        });
    }

}());