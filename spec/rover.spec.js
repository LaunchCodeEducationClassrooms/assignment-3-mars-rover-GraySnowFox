const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  it("constructor sets position and default values for mode and generatorWatts", function(){
    let testRover = new Rover(42);
    expect(testRover.position).toEqual(42);
    expect(testRover.mode).toEqual('NORMAL');
    expect(testRover.generatorWatts).toEqual(110);
  });

  it("response returned by receiveMessage contains name of message", function() {
    let testRover = new Rover(42);
    let command = new Command("STATUS_CHECK");
    testRover = testRover.receiveMessage(new Message("Hello", command));
    expect(testRover.message).toEqual("Hello");
  });

  it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
    let commands = [new Command("MODE_CHANGE", "LOW_POWER"), new Command("MOVE", 20)];
    let message = new Message("Two command test message", commands);
    let testRover = new Rover(42);
    testRover = testRover.receiveMessage(message);
    expect(testRover.commands.length).toEqual(commands.length);
  });

  it("responds correctly to status check command", function(){
    let testRover = new Rover(42);
    let commands = new Command("STATUS_CHECK", testRover);
    expect(commands.value).toEqual(testRover);
  });  

});
