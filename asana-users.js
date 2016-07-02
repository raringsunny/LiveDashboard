
    var asana = require('asana-api');
    var config = require('config');

	var client = asana.createClient({
	    apiKey: config.asana_apikey
	});

	var usrlist;

	client.users.list(function(err, users){
	    
	    usrlist = users;
	    
	    // console.log(usrlist);
	});
