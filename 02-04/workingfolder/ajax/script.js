var request;

// Feature Check
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}

// Get JSON Data
request.open('GET', 'data.json');


request.onreadystatechange = function() {
    if ((request.readyState===4) && (request.status===200)) {

        var items = JSON.parse(request.responseText);
        console.log (items);

        // Output JSON to Page
        var output = "";

        for (var item in items) {
            output += items[item].name;
            output += "</br>";
            output += items[item].reknown;
            output += "</br></br>";
        }

        document.getElementById('update').innerHTML = output;
    }
};

request.send();
