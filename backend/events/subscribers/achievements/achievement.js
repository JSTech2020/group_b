var eventEmitter = require('../../zs-event-emitter');
var events = require('../../events');

class Achievement {

  constructor(achievementIdentifier, reward, eventSubscriptions){
    this.achievementIdentifier = achievementIdentifier;
    this.reward = reward;
    this.eventHandlers = eventSubscriptions;
    this.eventEmitter = eventEmitter;
    this.subscribeEvents();
  }
  
  subscribeEvents(){
    Object.keys(this.eventHandlers).forEach(eventKey => {
      this.eventEmitter.on(eventKey, this.eventHandlers[eventKey]);
    });
  }

  unsubscribeEvents(){
    Object.keys(this.eventHandlers).forEach(eventKey => {
      this.eventEmitter.removeListener(eventKey, this.eventHandlers[eventKey]);
    });
  }

  onAchieved(eventData){
    this.eventEmitter.emit(events.achievement.completed, this.achievementIdentifier, eventData);
  }

}

module.exports = Achievement;