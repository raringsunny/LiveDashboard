var express = require('express');
var app = express();
var config = require('./config');

var _ = require('lodash');


var path = require('path');


// var asana = require('asana');

var asana = require('asana-api');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(__dirname + '/public'));



// var client = asana.Client.create().useAccessToken('0/24e9d4b59c202b1037275aee0d2319e1');

var client = asana.createClient({
    apiKey: config.asana_apikey
});

var usrlist;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/test.html'));
});

app.get('/Dashboard', function(req, res) {

    // projects = client.projects.findAll({}).then(function(projects){


    // console.log(req.params.id);

    // client.projects.tasks.list({id: 103581983015503}, function(err, tasks) {

    // 	filterp = _.find(tasks,{id: 103581983015503});

    	// console.log(filterp);
    	// res.send(filterp);

// });

    client.projects.list(function(err, projects) {

    	filterp = _.find(projects,{id: 103581983015503});



		// res.send(filterp);

    	// res.send(projects);
        // projectList = projects;

        // res.send(projects);


        // console.log(projectList);
        // res.render('test');
        // res.send()
        // res.render('test', { data: filterp });
    });
res.render('index');
});






// res.render('test', {data: projectList});
// });

// client.users.me()
// 	.then(function(user){
// 		var userId = user.id;

// 		var workspaceId = user.workspaces[0].id;
// 		return client.tasks.findAll({
// 			assignee: userId,
// 			workspace: workspaceId,
// 			completed_since: 'now',
// 			opt_fields: 'id, name, assignee_status, completed'

// 		});
// 	})
// .then(function(response){

// 	return response.data;
// })
// .filter(function(task){
// 	return task.assignee_status === 'today' ||
// 		task.assignee_status === 'new';
// })
// });

app.get('/users', function(req, res) {
    client.users.list(function(err, users) {

        usrlist = users;

        res.send(usrlist);

        // console.log(usrlist);
    });

})

app.listen(3000);
