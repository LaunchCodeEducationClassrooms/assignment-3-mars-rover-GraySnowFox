class Rover {

   constructor(position){
     this.position = position;
     this.mode = 'NORMAL';
     this.generatorWatts = 110; 
     
   }

  receiveMessage(incoming){

  var reply = new Object(); 



  reply.message = incoming.name;
  

  
  for(let i = 0; i<incoming.commands.length; i++){
      let currentCommand = incoming.commands[i];
   
    if(currentCommand.commandType === "STATUS_CHECK"){
      
    var roverStatus = new Object();
    console.log("\n\n\n\n");
     roverStatus.position = this.position;
     roverStatus.mode = this.mode;
     roverStatus.generatorWatts = this.generatorWatts;
     
     
    } else if(reply.results === "MODE_CHANGE"){

      if(this.mode ==="NORMAL"){
        this.mode === "LOW_POWER";
      } else {
        this.mode === "NORMAL";
      }
    };

  };  
    console.log(reply);
    return reply;
  };



}

module.exports = Rover;