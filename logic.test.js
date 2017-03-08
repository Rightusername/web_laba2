var assert = require("assert");
var logic = require("./logic");
logic.calc(0.2, 2, 0.004);
var should = require('should');


it("0 element", function(){
    logic.getArY()[0].should.be.approximately(-2.66520095, 0.00001);
});
it("175 element", function(){
    logic.getArY()[175].should.be.approximately(2.8717928, 0.00001);
});
it("450 element", function(){
    logic.getArY()[450].should.be.approximately(1.40286115, 0.00001);
});
it("maxY element", function(){
    logic.getArY()[logic.getMaxY()].should.be.approximately(2.8717927972, 0.00001);
});
it("minY element", function(){
    logic.getArY()[logic.getMinY()].should.be.approximately(-2.665200954, 0.00001);
});