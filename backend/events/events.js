let events = {
  user: {
    signIn: 'onUserSignIn',
    signUp: 'onUserSignUp'
  },
  quiz: {
    submit: 'onQuizSubmit'
  },
  achievement: {
    completed: 'onAchievementCompleted'
  }
}

module.exports = events;