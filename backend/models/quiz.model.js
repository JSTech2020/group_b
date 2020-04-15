const mongoose = require('mongoose');

const Quiz = mongoose.Schema({
  questions: [{
    question: String,
    image: String,
    reward: Number,
    answers: [{ 
      answer: String, 
      isCorrect: Boolean
    }]
  }],
  story: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Story'
  }
});

module.exports = mongoose.model('Quiz', Quiz);