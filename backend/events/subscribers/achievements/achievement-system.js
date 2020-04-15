var eventEmitter = require('../../zs-event-emitter');
var events = require('../../events');
var achievements = require('.');

class AchievementSystem{

  constructor(){
    eventEmitter.on(events.achievement.completed, this.onAchievementCompleted);
    console.log("Achievement system imported.");
  }

  onAchievementCompleted(achievementIdentifier, eventData){
    console.log(achievementIdentifier, eventData);
  }

}

module.exports = new AchievementSystem();