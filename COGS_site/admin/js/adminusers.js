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

  const userTable = document.getElementById('users-table');

  function update() {
    firebase.database().ref('users').once('value', function (snapshot) {
      snapshot.forEach(function (childSnapshot) {

        var newRow = document.createElement('tr');
        newRow.classList.add('posts-row');

        var userName = document.createElement('td');
        userName.appendChild(document.createTextNode(childSnapshot.val().fullname));

        var website = document.createElement('td');
        website.appendChild(document.createTextNode(childSnapshot.val().website));

        var faculty = document.createElement('td');
        if(childSnapshot.val().faculty == 1) {
          faculty.appendChild(document.createTextNode('YES'));
        } else {
          faculty.appendChild(document.createTextNode('NO'));
        }

        newRow.appendChild(userName);
        newRow.appendChild(website);
        newRow.appendChild(faculty);

        newRow.addEventListener('click', function() {
          sessionStorage.setItem('selected-uid', childSnapshot.key);
          window.location.href = 'adminuser.html';
        });


        userTable.appendChild(newRow);

      });
    });
  }

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

    update();
  }, false);



}());
