(function () {

    var pswp = document.querySelectorAll('.pswp')[0];

    var options = {
        index: 0
    };

    function loadDataForElement(item) {
        var path = item.getAttribute("path");
        var count = parseInt(item.getAttribute("count"));
        var data = [];
        var dimensions = item.getAttribute("dimensions").split(",");

        for (var j = 0; j < count; j++) {

            var w = dimensions[j].split("x")[0];
            var h = dimensions[j].split("x")[1];

            var newData = {
                src: path + "/" + j + ".jpg",
                w: w,
                h: h
            };
            data.push(newData);
        }

        return data;
    }

    // Start of Blog Items

    const students = document.getElementById("Students");
    students.addEventListener('click', function () {
        var gallery = new PhotoSwipe(pswp, PhotoSwipeUI_Default, loadDataForElement(students), options);
        gallery.init();
    });



}());