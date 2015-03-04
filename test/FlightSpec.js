/**
 * New node file
 */
var appWithData = require('./helper/app.js').appWithData;
var appWithoutData = require('./helper/app.js').appWithoutData;

var should = require('should');
var supertest = require('supertest');

describe('flights', function(){
	 it('Get request should pass for flight number 18',function(done) {
		 supertest(appWithData)
		 .get(('/flights/18'))
		 .expect(200)
		 .end(function(err, res){
			 res.status.should.equal(200);
			 done();
		 });
		 
	 });
	 
	 it('Get request should fail for flight number 577',function(done) {
		 supertest(appWithData)
		 .get(('/flights/577'))
		 .expect(404)
		 .end(function(err, res){
			 res.status.should.equal(404);
			 done();
		 });
		 
	 });
	 
	 it('Put request(departed) should pass for flight number 18',function(done) {
		 supertest(appWithData)
		 .put(('/flights/departed/18'))
		 .expect(200)
		 .end(function(err, res){
			 res.status.should.equal(200);
			 res.body.should.equal('Flight status updated');
			 supertest(appWithData)
			 	.get(('/flights/18'))
			 	.expect(200)
			 	.end(function(err, res){
			 		 res.status.should.equal(200);
			 		res.body.flightData.scheduledDeparture.should.not.equal(undefined);
			 		done();
			 	});
			 });
		 
	 });
	 
	 it('Put request(departed) should fail for flight number 577',function(done) {
		 supertest(appWithData)
		 .put(('/flights/departed/577'))
		 .expect(404)
		 .end(function(err, res){
			 res.status.should.equal(404);
			 done();
		 });
		 
	 });
	 
	 it('Put request(arrived) should pass for flight number 18',function(done) {
		 supertest(appWithData)
		 .put(('/flights/arrived/18'))
		 .expect(200)
		 .end(function(err, res){
			 res.status.should.equal(200);
			 res.body.should.equal('Flight status updated');
			 supertest(appWithData)
			 	.get(('/flights/18'))
			 	.expect(200)
			 	.end(function(err, res){
			 		 res.status.should.equal(200);
			 		res.body.flightData.scheduledDeparture.should.not.equal(undefined);
			 		done();
			 	});
			 });
		 
	 });
	 
	 it('Put request(arrived) should fail for flight number 577',function(done) {
		 supertest(appWithData)
		 .put(('/flights/arrived/577'))
		 .expect(404)
		 .end(function(err, res){
			 res.status.should.equal(404);
			 done();
		 });
		 
	 });
	 
	 it('Get request should pass for total',function(done) {
		 supertest(appWithData)
		 .get(('/total'))
		 .expect(200)
		 .end(function(err, res){
			 res.status.should.equal(200);
			 done();
		 });
		 
	 });
	 
//	 it('Get request should fail for empty DB',function(done) {
//		 supertest(appWithoutData)
//		 .get(('/flights/18'))
//		 .expect(404)
//		 .end(function(err, res){
//			 res.status.should.equal(404);
//			 done();
//		 });
//		 
//	 });
	 
	 
});