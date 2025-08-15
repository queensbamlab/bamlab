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

  const profile = document.getElementById('profile_editprofile');
  const signUp = document.getElementById('sign_up_editprofile');
  const seperator = document.getElementById('editprofile_seperator');
  const logout = document.getElementById('logout_editprofile');

  // Fields

  const name = document.getElementById('ep-name');
  const photo = document.getElementById('ep-photo');
  const website = document.getElementById('ep-website');
  const bio = document.getElementById('ep-research');
  const affiliation = document.getElementById('ep-affiliation');

  // Button

  const submit = document.getElementById('ep-submit');

  // Checkboxes

  // const cogpsy = document.getElementById('ep_checkbox_psyc');
  // const neuroscience = document.getElementById('ep_checkbox_neuro');
  // const lingusitics = document.getElementById('ep_checkbox_ling');
  // const ai = document.getElementById('ep_checkbox_ai');
  // const phil = document.getElementById('ep_checkbox_phil');

  const checkboxes = document.getElementsByClassName('checkbox_info');

  function updateInfoOnScreen() {

    var uid = sessionStorage.getItem('profile_uid');

    return firebase.database().ref('/users/' + uid).once('value').then(function (snapshot) {
      name.value = snapshot.val().fullname;
      photo.value = snapshot.val().photourl;
      website.value = snapshot.val().website;
      bio.textContent = snapshot.val().bio;
      affiliation.value = snapshot.val().affiliation;

      var contactAreas = snapshot.val().contactAreas;

      for(var i = 0; i < checkboxes.length; i++) {
        if(contactAreas.indexOf(checkboxes[i].defaultValue) != -1) {
          checkboxes[i].checked = true;
        }
      }

    });

  }

  function updateUserInformation() {

    var uid = sessionStorage.getItem('profile_uid');

    var checkedFields = "";

    for(var x = 0; x < checkboxes.length; x++) {
        if(checkboxes.item(x).checked) {
            if(checkedFields == "") {
                checkedFields = checkboxes.item(x).defaultValue;
            } else {
                checkedFields = checkedFields + "," + checkboxes.item(x).defaultValue;
            }
        }
    }

    return firebase.database().ref('/users/' + uid).once('value').then(function (snapshot) {
      var updatedInfo = {
        bio: bio.value,
        fullname: name.value,
        photourl: photo.value,
        affiliation: affiliation.value,
        website: website.value,
        contactAreas: checkedFields,
        faculty: snapshot.val().faculty,
        primarycontact: snapshot.val().primarycontact,
        admin: snapshot.val().admin
      };

      firebase.database().ref('users/' + uid).set(updatedInfo).then(function () {
        window.location.href = 'profile.html';
      });
    });
  }

  submit.addEventListener('click', function() {
    updateUserInformation();
  });

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

      updateInfoOnScreen();

  });

}());
