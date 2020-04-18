var Achievement = require('./achievement');
var events = require('../../events');

class QuizCompleted extends Achievement{

  constructor(){

    let onQuizAnswered = (user, quiz) => {
      console.log("TODO: Implement quiz completion reward in file /events/subscribers/achievements/quiz.completed.js");
    }

    super(
      'quiz_completed',
      5,
      {
        [events.quiz.answered]: onQuizAnswered
      }
    );
  }

}
module.exports = new QuizCompleted();