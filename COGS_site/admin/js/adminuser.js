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

  const name = document.getElementById('name-input');
  const photo = document.getElementById('photo-input');
  const website = document.getElementById('website-input');
  const contact = document.getElementById('contact-input');
  const bio = document.getElementById('bio-input');
  const affiliation = document.getElementById('affiliation-input');
  const primaryContact = document.getElementById('p-contact');
  const faculty = document.getElementById('faculty-input');
  const admin = document.getElementById('admin-input');

  const updateBtn = document.getElementById('update-data');

  const uid = sessionStorage.getItem('selected-uid');

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

      firebase.database().ref('users/' + uid).once('value', function (snapshot) {

          name.value = snapshot.val().fullname;
          photo.value = snapshot.val().photourl;
          website.value = snapshot.val().website;
          contact.value = snapshot.val().contactAreas;
          bio.value = snapshot.val().bio;
          affiliation.value = snapshot.val().affiliation;

          if(snapshot.val().primarycontact != "") {
            primaryContact.value = snapshot.val().primarycontact;
          }

          faculty.value = snapshot.val().faculty;
          admin.value = snapshot.val().admin;

      });
  }, false);

  updateBtn.addEventListener('click', function() {

    var pContactValue = "";

    if(primaryContact.value != "None") {
      pContactValue = primaryContact.value;
    }

    var userData = {
        fullname: name.value,
        photourl: photo.value,
        website: website.value,
        contactAreas: contact.value,
        bio: bio.value,
        affiliation: affiliation.value,
        primarycontact: pContactValue,
        faculty: faculty.value,
        admin: admin.value
    };

    firebase.database().ref('users/' + uid).set(userData).then(function () {
            window.location.href = 'adminusers.html';
        });
  });


}())
