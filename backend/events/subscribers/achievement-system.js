import eventEmitter from '../zs-event-emitter'
import events from '../events'

class AchievementSystem{

  constructor(){
    this.eventHandlers = {
      [events.user.onLogin]: this.onLogin
    };
    this.subscribeEvents();
  }

  subscribeEvents(){
    for(eventKey in this.eventHandlers){
      eventEmitter.on(eventKey, eventHandlers[eventKey]);
    }
  }

  unsubscribeEvents(){
    for(eventKey in this.eventHandlers){
      eventEmitter.removeListener(eventKey, eventHandlers[eventKey]);
    }
  }

  onLogin(user){

  }

}

export default AchievementSystem;