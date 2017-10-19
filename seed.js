var db = require("./app/models");

var theoryList =[
		 { title: 'Theory1', description: 'Jon Snow is a Targariyn.'},
		 { title: 'Theory2', description: 'Sheldon is dreaming'},
		 { title: 'Theory3', description: 'Kristen shot J.R.'}
		];

db.Theory.remove({}, function(err, theories){

  db.Theory.create(theoryList, function(err, theories){
    if (err) { return console.log('ERROR', err); }
    console.log("all theories:", theories);
    console.log("created", theories.length, "theories");
    process.exit();
  });

});