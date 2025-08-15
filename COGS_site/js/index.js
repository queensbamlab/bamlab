(function () {

    'use strict';

    //firebase setup

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



    //@getters

    const signupIndex = document.getElementById('sign_up_index');
    const seperatorIndex = document.getElementById('index_seperator');
    const logoutIndex = document.getElementById('logout_index');
    const profileIndex = document.getElementById('profile_index');
    const newPostBtn = document.getElementById('newPostBtn');

    profileIndex.addEventListener('click', function () {
        var user = firebase.auth().currentUser;

        if(user != null) {
            sessionStorage.setItem('profile_uid', user.uid);
            window.location.href = 'html/profile.html'
        }
    });

    //monitoring auth to change menu for Profile

    const listGroupItem = document.getElementById('listGroupItem');

    var target = document.getElementById('index-post-target');

    function updateTable(limit) {

        var postsRef;
        if(limit) {
            postsRef = firebase.database().ref('posts/' + target.value).orderByKey().limitToLast(10);
        } else {
            postsRef = firebase.database().ref('posts/' + target.value).orderByKey();
        }

        while(listGroupItem.firstElementChild) {
            listGroupItem.removeChild(listGroupItem.firstElementChild);
        }

        postsRef.once('value', function(snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var newNode = document.createElement('li');
                newNode.classList.add('list-group-item');
                newNode.classList.add('post-item');

                var h5Node = document.createElement('h5');
                h5Node.appendChild(document.createTextNode(childSnapshot.val().title));

                var timestamp = document.createElement('p');

                timestamp.appendChild(document.createTextNode(childSnapshot.val().author));
                timestamp.classList.add('topic');

                var date = document.createElement('p');
                var keyDate = Date.parse(childSnapshot.key);
                var keyDateActual = new Date(keyDate);
                date.appendChild(document.createTextNode(keyDateActual.toDateString()));
                date.classList.add('post-date');

                newNode.appendChild(h5Node);
                newNode.appendChild(timestamp);
                newNode.appendChild(date);

                newNode.addEventListener('click', function () {
                    sessionStorage.setItem('selected-target', target.value);
                    sessionStorage.setItem('selected-timestamp', childSnapshot.key);
                    window.location.href = 'html/post.html';
                });

                // listGroupItem.appendChild(newNode);

                if(listGroupItem.firstChild === null) {
                    listGroupItem.appendChild(newNode);
                } else {
                    listGroupItem.insertBefore(newNode, listGroupItem.firstChild);
                }
            });
        });
    }

    target.addEventListener('change', function() {

        while (listGroupItem.firstChild) {
            listGroupItem.removeChild(listGroupItem.firstChild);
        }

        updateTable(true);
    });

    document.addEventListener('DOMContentLoaded', function () {
        updateTable(true);
        updateUserTable();
        updateEventsTable(false);
    }, false);

    const newEventBtn = document.getElementById('newEvent');

    firebase.auth().onAuthStateChanged( function(firebaseUser) {
        if (firebaseUser) {
            const user = firebase.auth().currentUser;

            if (user !== null) {  
                profileIndex.classList.remove('hide');
                seperatorIndex.classList.remove('hide');
                logoutIndex.classList.remove('hide');
                signupIndex.classList.add('hide');
                newPostBtn.classList.remove('disabled');
                newEventBtn.classList.remove('disabled');

                if (!user.emailVerified) {
                    window.location.href = 'html/auth.html';
                    return;
                }

                const uid = user.uid;

                return firebase.database().ref('/users/' + uid).once('value').then(function (snapshot) {
                    if (!snapshot.hasChild('affiliation')) {
                        window.location.href = 'html/info.html';
                        return;
                    }
                });

            } else {
                profileIndex.classList.add('hide');
                seperatorIndex.classList.add('hide');
                logoutIndex.classList.add('hide');
                signupIndex.classList.remove('hide');
                newPostBtn.classList.add('disabled');
                newEventBtn.classList.add('disabled');
            }

        }
    });

    newPostBtn.addEventListener('click', function () {
        if(!newPostBtn.classList.contains('disabled')) {
            window.location.href = 'html/compose.html';
        }
        return;
    });

    newEventBtn.addEventListener('click', function () {
        if(!newEventBtn.classList.contains('disabled')) {
            window.location.href = 'html/eventcompose.html';
        }
        return;
    });

    const loadMore = document.getElementById('loadMorePosts');

    loadMore.addEventListener('click', function () {
       updateTable(false);
    });



    //allow the user to logout (which will then trigger AuthStateChangedEvent and update list)

    logoutIndex.addEventListener('click', function () {
        firebase.auth().signOut();
    });

    const facultySelectTarget = document.getElementById('faculty-select-target');

    const usrTable = document.getElementById('usrtable');

    facultySelectTarget.addEventListener('change', function() {
        updateUserTable();
    });

    function updateUserTable() {

        while(usrTable.firstElementChild) {
            usrTable.removeChild(usrTable.firstElementChild);
        }

        firebase.database().ref('/users').once('value').then(function (snapshot) {
            snapshot.forEach(function (user) {
                var areas = user.val().contactAreas;

                if(facultySelectTarget.value == 'All' || areas.indexOf(facultySelectTarget.value) != -1) {

                    if(user.val().faculty == 1) {
                        var listItem = document.createElement('li');
                        listItem.classList.add('user');

                        var name = document.createElement('p');
                        name.classList.add('name');
                        name.appendChild(document.createTextNode(user.val().fullname));

                        var pc = document.createElement('p');
                        pc.classList.add('pc');

                        if(user.val().primarycontact == facultySelectTarget.value) {
                            pc.appendChild(document.createTextNode('PC'));
                        }

                        var web = document.createElement('a');
                        web.classList.add('website');

                        if(user.val().website != "") {
                            web.appendChild(document.createTextNode("Website"));
                        }

                        if(user.val().website.indexOf('http') === -1) {
                            web.href = 'http://' + user.val().website;
                        } else {
                            web.href = user.val().website;
                        }

                        listItem.appendChild(name);
                        listItem.appendChild(pc);
                        listItem.appendChild(web);

                        listItem.addEventListener('click', function() {
                            sessionStorage.setItem('profile_uid', user.key);
                            window.location.href = 'html/profile.html';
                        });

                        usrTable.appendChild(listItem);
                    }

                }
            });
        });
    }

    const eventsTable = document.getElementById('calender-list-group');
    const loadMoreEvents = document.getElementById('loadMoreEvents');

    loadMoreEvents.addEventListener('click', function () {
       updateEventsTable(true);
    });

    function updateEventsTable(showAll) {
        while(eventsTable.firstChild) {
            eventsTable.removeChild(eventsTable.firstChild);
        }

        firebase.database().ref('posts/Events').once('value').then(function(parent) {
            parent.forEach(function(snapshot) {

                var d = Date.parse(snapshot.val().date);
                var date = new Date(d);

                var today = new Date();

                if(showAll || date > today) {
                    var listItem = document.createElement('li');
                    listItem.classList.add('calender-li');

                    var name = document.createElement('p');
                    name.classList.add('name');
                    name.appendChild(document.createTextNode(snapshot.val().name));

                    var time = document.createElement('p');
                    time.classList.add('time');
                    time.appendChild(document.createTextNode(snapshot.val().date + " | " + snapshot.val().time));

                    listItem.appendChild(name);
                    listItem.appendChild(time);

                    listItem.addEventListener('click', function() {
                        sessionStorage.setItem('event-timestamp', snapshot.key);
                        window.location.href = 'html/eventposting.html'
                    });

                    eventsTable.appendChild(listItem);
                }

            });
        });
    }



}());