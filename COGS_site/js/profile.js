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

    const editBtn = document.getElementById('edit-btn');
    const changeBtn = document.getElementById('change-btn');
    const affiliation = document.getElementById('affiliation');
    const bio = document.getElementById('bio');
    const website = document.getElementById('website');
    const interestAreas = document.getElementById('interest-areas');
    const status = document.getElementById('status');

    const profileImg = document.getElementById('profile_img');
    const fullName = document.getElementById('full-name');

    const profile = document.getElementById('profile_profile');
    const signUp = document.getElementById('sign_up_profile');
    const seperator = document.getElementById('profile_seperator');
    const logout = document.getElementById('logout_profile');

    const adminBtn = document.getElementById('admin-panel');

    logout.addEventListener('click', function() {
        firebase.auth().signOut();
        update();
    });

    function update() {
        const uid = sessionStorage.getItem('profile_uid');

        if (uid == null) {
            alert('Error. UID = null.');
        }

        var user = firebase.auth().currentUser;

        if (user != null) {

            if (user.uid == uid) {
                editBtn.classList.remove('hide');
                changeBtn.classList.remove('hide');

                editBtn.addEventListener('click', function() {
                  window.location.href = 'editprofile.html';
                });

                changeBtn.addEventListener('click', function() {
                   window.location.href = 'changepwd.html';
                });

            }
        }

        return firebase.database().ref('/users/' + uid).once('value').then(function (snapshot) {



            fullName.textContent = snapshot.val().fullname;

            const photoURL = snapshot.val().photourl;

            if(photoURL != '') {
                profileImg.src = photoURL;
            }

            var isFaculty = snapshot.val().faculty == 1;
            var isAdmin = snapshot.val().admin == 1;

            if(isAdmin && isFaculty) {
                status.textContent = 'Faculty Member, Administrator';
            } else if(isAdmin) {
                status.textContent = 'Administrator';
            } else if (isFaculty) {
                status.textContent = 'Faculty Member';
            }

            if(isAdmin) {
               adminBtn.classList.remove('hide');
            }

            affiliation.textContent = snapshot.val().affiliation;

            bio.textContent = snapshot.val().bio;

            website.textContent = snapshot.val().website;
            website.href = 'http://' + snapshot.val().website;



            interestAreas.textContent = 'Interest / Contact Areas: ' + snapshot.val().contactAreas;
        });
    }

    firebase.auth().onAuthStateChanged(function(firebaseUser) {

        var user = firebase.auth().currentUser;

        if(firebaseUser) {
            if(user != null) {
                profile.classList.remove('hide');
                seperator.classList.remove('hide');
                logout.classList.remove('hide');
                signUp.classList.add('hide');
            } else {
                profile.classList.add('hide');
                seperator.classList.add('hide');
                logout.classList.add('hide');
                signUp.classList.remove('hide');
            }

        }

        update();

    });

}());
