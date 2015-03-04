
/**
 * Module dependencies.
 */
exports.app = function(data){
	var express = require('express')
	  , routes = require('./routes')
	  , flightRecords = require('./routes/flightRecords')	  
	  , path = require('path');
	
	var app = express();
	app.all('*', function(req, res, next) {
	    if (!req.get('Origin')) return next();
	    // use "*" here to accept any origin
	    res.set('Access-Control-Allow-Origin', '*');
	    res.set('Access-Control-Allow-Methods', 'GET');
	    res.set('Access-Control-Allow-Headers', 'Accept-Encoding,X-Requested-With, Content-Type');
	    res.set('X-Powered-By','Karthik');
	    //Following thing is added to increase response time source http://stackoverflow.com/questions/9353812/node-js-response-time-200ms
	    res.connection.setNoDelay(true);

	    next();
	});
	var cpuCount = require('os').cpus().length;
	console.log(cpuCount);
	// all environments
	app.set('port', process.env.PORT || 4000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
	app.use('/static', express.static(__dirname + '/public'));
	// development only
	if ('development' == app.get('env')) {
	  app.use(express.errorHandler());
	}
	flightRecords.init(data);
	//app.get('/', routes.index);
	app.get('/flights/:number', flightRecords.getDetails);
	app.get('/total', flightRecords.getCount);
	app.put('/flights/arrived/:number', flightRecords.arrived);
	app.put('/flights/departed/:number', flightRecords.departed);
	return app;
	
};

