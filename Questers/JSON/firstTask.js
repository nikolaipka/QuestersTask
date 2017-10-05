
var toJoin = {"type" : "notification", "params": {
    "title": "Questers", "message" : "Questers task"}
}

Ajax.request('GET', 'JSON.json', true, function(response) {
	var listUpdate = JSON.parse(response);
	for (let prop in listUpdate) {
		if (prop == "actions") {
			listUpdate.actions.push(toJoin);
			console.log(listUpdate);
		}
	}
});