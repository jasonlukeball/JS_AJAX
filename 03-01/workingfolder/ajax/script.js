$("button").click(function() {

    console.log("button clicked");

    // JSON AJAX REQUEST
    $.getJSON('data.json', function(data) {
        // THIS IS THE SUCCESS CALLBACK FUNCTION
        // LOG THE RESULT IN THE CONSOLE
        console.log(data);

        // LOG THE VALUES FROM THE FIRST "RECORD"
        console.log("NAME = " + data[0].name);
        console.log("SHORTNAME = " + data[0].shortname);
        console.log("REKNOWN = " + data[0].reknown);
        console.log("BIO = " + data[0].bio);

        // OPEN <ul>
        $("#update").append("<ul>");

        // LOOP THROUGH ALL RECORDS AND APPEND THEM TO THE PAGE
        for (var record in data) {
            $("#update").append("<li>" + data[record].name + "</li>");
        }

        // CLOSE <ul>
        $("#update").append("</ul>");

    });

});


// AJAX ERROR HANDLING
$(document).ajaxError(function (evt, jqXHR, settings, err) {
    console.log("Hmmm. Seems like there was a problem: " + err);
});