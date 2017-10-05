

var toJoin = {"type" : "notification", "params": {
    "title": "Questers", "message" : "Questers task"}
}

Ajax.request('GET', 'JSON.json', true, function(response) {
	var listUpdate = JSON.parse(response);
	for (let prop in listUpdate) {
		if (prop == "actions") {
			listUpdate.actions.push(toJoin);
		}
	}	
});
	
function getObject(theObject) {
    var result = null;
    if(theObject instanceof Array) {
        for(var i = 0; i < theObject.length; i++) {
            result = getObject(theObject[i]);
        }
    } else {
        for(var property in theObject) {

            if(property == 'link') {
            	delete theObject[property];        	
            	return theObject;               
            }
            if(theObject[property] instanceof Object || theObject[property] instanceof Array)
                result = getObject(theObject[property]);
        }
    }
    return result;
}