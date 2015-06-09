// Initialize request variable
var request;

// Feature check, see which request type to use
if (window.XMLHttpRequest) {
    // Modern Browsers
    request = new XMLHttpRequest();
} else {
    // Internet Explorer
    request = new ActiveXObject("Microsoft.XMLHTTP");
}

// Define request
request.open('GET', 'data.txt');

// Listen for request state change
request.onreadystatechange = function() {
    // Log the state changes
    console.log (request.readyState);

    if ((request.readyState===4) && (request.status===200)) {
        // Request is successful and has completed
        console.log(request);
        document.writeln(request.responseText);
    }
};

// Send the request
request.send();
