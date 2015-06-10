// SEARCHBOX KEYUP EVENT

$( "#searchBox" ).keyup(function() {
    console.log( ".keyup() handler called." );


    // GET THE VALUE TYPED IN #searchBox
    var search = $("#searchBox").val();
    console.log(search);

    // SETUP WHAT WAS TYPED AS A REGULAR EXPRESSION
    var myExpression = new RegExp(search, "i");
    console.log(myExpression);


    // -----------
    // GET JSON
    // -----------
    $.getJSON("data.json", function(data){
        // LOG THE JSON DATA ARRAY
        console.log(data);

        // -----------
        // OUTPUT
        // -----------

        // OPEN <ul>
        var output = "<ul class=searchResults>";

        $.each(data, function( index,object ){

            // IF WHAT I TYPED MATCHES A NAME OR A BIO, OUTPUT IT
            if ( ( object.name.search(myExpression) != -1) || ( object.bio.search(myExpression) != -1) ) {
                output += "<li>";
                // NAME
                output += "<h2>" + object.name + "</h2>";
                // IMAGE
                output += "<img src=images/" + object.shortname + "_tn.jpg>";
                // BIO
                output += "<p>" + object.bio + "</p>";
                output += "</li>";
            }
        });

        // CLOSE <ul>
        output += "</ul>";

        // ADD output TO #update DIV
        $("#update").html(output);

    });

});




