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

    const fullName = document.getElementById('info_full_name');
    const photoUrl = document.getElementById('info_photo'); //not required
    const bio = document.getElementById('info_bio');
    const affiliation = document.getElementById('info_affiliation');
    const website = document.getElementById('info_website'); //not required

    //checkboxes

    const psycCheckbox = document.getElementById('checkbox_psyc');
    const neuroCheckbox = document.getElementById('checkbox_neuro');
    const lingCheckbox = document.getElementById('checkbox_ling');
    const aiCheckbox = document.getElementById('checkbox_ai');
    const philCheckbox = document.getElementById('checkbox_phil');

    //btn

    const authEmails = ["zmjiang@cse.yourku.ca",
"ksalomaa@cs.queensu.ca",
"shatkay@cis.udel.edu",
"gabor@cs.queensu.ca",
"lederman@post.queensu.ca",
"juris@ai.utoronto.ca",
"amal.zouaq@rmc.ca",
"kunz@cs.queensu.ca",
"nasser@cs.queensu.ca",
"salay@queensu.ca",
"keyvan.hashtrudi-zaad@queensu.ca",
"karen.rudie@queensu.ca",
"hefny@cs.queensu.ca",
"wendy@cs.queensu.ca",
"malamb@cs.queensu.ca",
"taha@cs.queensu.ca",
"ahmed@cs.queensu.ca",
"winnl@queensu.ca",
"john.schreiner@krcc.on.ca",
"troje@queensu.ca",
"daver@cs.queensu.ca",
"oteafy@cs.queensu.ca",
"knight-s@rmc.ca",
"sartipi@mcmaster.ca",
"elgazzar@cs.queensu.ca",
"scott@cs.queensu.ca",
"dove@cs.queensu.ca",
"rgc@cs.queensu.ca",
"janice@cs.queensu.ca",
"blostein@cs.queensu.ca",
"mzulker@cs.queensu.ca",
"salimur.choudhury@algomau.ca",
"ying.zou@queensu.ca",
"mozersky@queensu.ca",
"martin@cs.queensu.ca",
"purang@ece.ubc.ca",
"mcleod@cs.queensu.ca",
"graham@cs.queensu.ca",
"kelly-d@rmc.ca",
"dalamb@cs.queensu.ca",
"robert.benkoczi@uleth.ca",
"akl@cs.queensu.ca",
"jstewart@cs.queensu.ca",
"linley@cs.queensu.ca",
"hossam@cs.queensu.ca",
"roel@cs.queensu.ca",
"emad.shihab@rit.edu",
"dawes@cs.queensu.ca",
"oteafy@cs.queensu.ca",
"eposse@cs.queensu.ca",
"gunnar.blohm@queensu.ca",
"burton@cse.yorku.ca",
"javad.hashemi@queensu.ca",
"neilglossop@gmail.com",
"nagy@cs.queensu.ca",
"redfearn@queensu.ca",
"duan@cs.queensu.ca",
"ungi@cs.queensu.ca",
"dingel@cs.queensu.ca",
"kunz@cs.queensu.ca",
"david.maslove@queensu.ca",
"rodger@cs.queensu.ca",
"dean@cs.queensu.ca",
"farhana@cs.queensu.ca",
"michael.greenspan@queensu.ca",
"rdt@cs.queensu.ca",
"ellis@cs.queensu.ca",
"alalfi@cs.queensu.ca",
"jfr1@queensu.ca",
"bram@cs.queensu.ca",
"tyryshki@cs.queensu.ca",
"wfeng@trentu.ca",
"jpoppenk@queensu.ca",
"skill@cs.queensu.ca",
"pmousavi@cs.queensu.ca",
"cordy@cs.queensu.ca",
"levison@cs.queensu.ca",
"lessard@cs.queensu.ca",
"morgan@morgangallant.com", "nathan.little.613@gmail.com"];

    const submitBtn = document.getElementById('submitBtn');

    submitBtn.addEventListener('click', function() {

        var requiredDocs = document.getElementsByClassName('required');
        for(var i = 0; i < requiredDocs.length; i++) {
            if(requiredDocs.item(i).value == "") {
                alert("One or  more required fields are not filled out.");
                return;
            }
        }

        var checkboxes = document.getElementsByClassName('checkbox_info');
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

        var doesContain = false;


        var user = firebase.auth().currentUser;
        for (const index in authEmails) {
            if (authEmails[index] == user.email) {
                doesContain = true;
                break;
            }
        }

        var isFaculty = 0;

        if(doesContain) {
            isFaculty = 1;
        }




        return firebase.database().ref('users/' + user.uid).set( {
            bio: bio.value,
            fullname: fullName.value,
            photourl: photoUrl.value,
            affiliation: affiliation.value,
            website: website.value,
            contactAreas: checkedFields,
            faculty: isFaculty,
            primarycontact: "",
            admin: 0
        }).then(function () {
            window.location.href = '../index.html';
        });



    });


}());
