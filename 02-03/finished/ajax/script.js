var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'data.xml');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {

        // Log the XML response to the console
        console.log(request.responseXML);

        // Parse the response for the first child in the first <name> tag
        console.log(request.responseXML.getElementsByTagName('name')[0].firstChild.nodeValue);

        // Get all <name> tags
		var items = request.responseXML.getElementsByTagName('name');
        console.log(items);

        var output = '<ul>';
		for (var i = 0; i < items.length; i++) {
			output += '<li>' + items[i].firstChild.nodeValue + '</li>';
		}
		output += '</ul>';
		document.getElementById('update').innerHTML = output;
	}
};
request.send();
