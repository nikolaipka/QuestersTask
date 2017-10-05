
Ajax.request('GET', 'https://api.ipify.org', true, function(response) {
	var ip = response;
	console.log("My Public IP is:", ip);
});