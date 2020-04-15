var Achievement = require('./achievement');
var events = require('../../events');

class DailyLogin extends Achievement{

  constructor(){

    let onLogin = (user) => {
      console.log("TODO: Implement login reward in file /events/subscribers/achievements/daily.login.js");
      const wasLoggedInToday = false;
      if(!wasLoggedInToday){
        const eventData = {
          user: user
        }
        this.onAchieved(eventData);
      }
    }

    super(
      'daily_login',
      5,
      {
        [events.user.signIn]: onLogin
      }
    );
  }

}

module.exports = new DailyLogin();