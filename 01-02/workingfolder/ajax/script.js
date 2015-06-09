
// Create AJAX Request Object
var request = new XMLHttpRequest();

request.open("GET", "data.txt", false);
// request.open(requestMethod, URL, IsAsynchronous);

// Send Request
request.send();

// Log the request Object
console.log(request);

if ( request.status === 200 ) {
    console.log(request);
    // Write the request to the document

    document.writeln("Status: " + request.status);
    document.writeln("</br>");
    document.writeln("Response: " + request.response);
    document.writeln("</br></br>");

    // Output the response 10 times
    for (var i = 0; i < 10; i++) {
        document.writeln(request.response + "</br>");
    }


}