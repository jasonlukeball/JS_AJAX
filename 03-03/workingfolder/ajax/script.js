$.getJSON("data.json", function(data){
    console.log(data);

    // START <ul>
    var output = "<ul>";

    // BUILD A <li> FOR EACH RECORD
    $.each(data, function( index, object ) {
        console.log(index);
        console.log(object);
    // ADD THE object.name TO output
    output += "<li>" + object.name + "</li>";
    });

    // END <ul>
    output += "</ul>";

    // ADD output TO THE PAGE
    $("#update").append(output);


});