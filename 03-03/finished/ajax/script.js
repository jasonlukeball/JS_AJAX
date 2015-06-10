$.getJSON('data.json', function(data) {
	var output = '<ul>';
	$.each(data, function(index, val) {
		output += '<li>' + val.name + '</li>';
	});
	output +='</ul>';
	$('#update').prepend(output);
});