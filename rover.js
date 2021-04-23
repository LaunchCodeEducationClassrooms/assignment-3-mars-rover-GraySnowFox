class Rover {

   constructor(position){
     this.position = position;
     this.mode = 'NORMAL';
     this.generatorWatts = 110; 
     
   }

  receiveMessage(message){
    let incCommand = message.commands;

    let reply = {
      message: message.name,
      results: []
    }
  

    for(let i = 0; i< incCommand.length; i++){

      let test;
    
      if (incCommand[i].commandType === "MODE_CHANGE"){
        test = this.modeChange(incCommand[i]);
      } else if (incCommand[i].commandType === "STATUS_CHECK"){
        test = this.statusCheck();
      }

      reply.results.push(test);

    };    
  reply.message = message.name;
  reply.commands = message.commands;


  return reply;

  };

  

  statusCheck() {
      return{
        roverStatus: {
          position: this.position,
          mode: this.mode,
          generatorWatts: this.generatorWatts
        }
      }
    }

  modeChange(command){

    this.mode = command.value;

    return{
      completed: true
    }
}

moving(){
  if(this.mode == "LOW_POWER"){
    return{
      completed: false
      }
    }
  }
}

module.exports = Rover;