var express = require('express');
var router = express.Router();
const QuizModel = require('../models/quiz.model');
const StoryModel = require('../models/story.model');

router.get('/dummydata', async function(req, res, next){
  let story = await StoryModel.findOne({author: 'Felix'}).exec();
  console.log(story);
  story = new StoryModel({
    title: "Test Story",
    author: "Felix",
    shortDescription: "Short Description of Story",
    story: "Actual story content... Bla bla bla..."
  });
  story.save()
  .then(res => {
    let quiz = new QuizModel({
      questions: [{
        question: "Question placeholder?",
        answers: [
          {
            answer: "A",
            isCorrect: true,
          },
          {
            answer: "B",
            isCorrect: false,
          },
          {
            answer: "C",
            isCorrect: false,
          },
          {
            answer: "D",
            isCorrect: false,
          }
        ],
        reward: 5,
        image: "./images/questionPlaceholderImage.jpeg"
      },
      {
        question: "Another placeholder?",
        answers: [
          {
            answer: "A2",
            isCorrect: true,
          },
          {
            answer: "B2",
            isCorrect: false,
          },
          {
            answer: "C2",
            isCorrect: false,
          },
          {
            answer: "D2",
            isCorrect: false,
          }
        ],
        reward: 10,
        image: "./images/questionPlaceholderImage.jpeg"
      }],
      story: res.id,
    });
    quiz.save();
  }).then(result => {
    res.json({success: true});
  }).catch(reason => res.json({success: false}));
});

/* POST quiz answer. */
router.post('/:id/submit', async function(req, res, next) {
  // TODO check that answer was correct and give user reward
  let quizId = req.params.id;
  let quiz = await QuizModel.findById(quizId).exec();
  if(quiz !== null){
    // Check "user input" reward that can't exceed the sum of all questions rewards
    const { reward } = req.body;
    let maxReward = quiz.questions.reduce((q1, q2) => q1.reward + q2.reward);
    let resp = {
      reward: reward <= maxReward ? reward : 0,
      allCorrect: reward === maxReward
    }
    res.json(resp);
  } else {
    res.status(404).json({error: 'Quiz id not found.'});
  }
});

/* GET quiz. */
router.get('/:id', function(req, res, next) {
  let quizId = req.params.id;
  QuizModel.findById(quizId, (err, quizRes) => {
    if(!err){
      res.json(quizRes);
    } else {
      res.json(err);
    }
  });
});

module.exports = router;
