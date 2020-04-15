import React from 'react';
import "./Quiz.css";
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Stars from './Stars'

class Quiz extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      showResult: false,
      currentQuestion: 0,
      starsCollected: 0
    }
  }

  componentDidMount(){
    this.loadQuiz();
  }

  loadQuiz(){
    const { id } = this.props;
    fetch(`http://localhost:3000/quiz/${id}`)
      .then(res => res.json())
      .then(json => this.setState(json))
      .catch(reason => console.log(reason));
  }

  onAnswer(e, answer){
    const { showResult, questions, currentQuestion, starsCollected } = this.state;
    if(showResult)
      return;

    questions[currentQuestion].correctlyAnswered = answer.isCorrect;
    const newStarsCollected = answer.isCorrect ? starsCollected + questions[currentQuestion].reward : starsCollected;
    this.setState({questions: questions, showResult: true, starsCollected: newStarsCollected}, () => this.nextQuestion());
  }

  nextQuestion(){
    const { questions, currentQuestion } = this.state;
    let nextQuestionIndex = currentQuestion + 1;
    if(nextQuestionIndex < questions.length){
      setTimeout(() => {
        this.setState({ showResult: false, currentQuestion: nextQuestionIndex });
      }, 3000);
      
    } else { // Finished all questions
      // Send request to server to save reward
      if(starsCollected > 0){
        const { starsCollected } = this.state;
        let requestBody = {
          quizId: this.props.id,
          reward: starsCollected
        }
      }
      setTimeout(()=>{
        this.setState({showResult: false}, this.props.onFinish);
      }, 3000);
    }
  }

  render(){

    const { questions, currentQuestion, showResult, starsCollected } = this.state;

    if(questions){
      const question = currentQuestion < questions.length ? questions[currentQuestion] : null;
      const { image } = question;

      return <>
      <div className="quiz-progress">
        <Stars amount={starsCollected}/>
        <ProgressBar>
          {questions.filter(question => question.correctlyAnswered !== undefined)
            .map((question, index) => {
              return (
                <ProgressBar striped 
                  variant={question.correctlyAnswered ? "success" : "danger"} 
                  now={100.0 / questions.length} key={index+1} 
                />
              )
            })
          }
        </ProgressBar>
      </div>
      <div className="quiz-question">
        { question.question }
        {image && 
          <div>
            <Image src={image} className="quiz-image" fluid rounded />
          </div>
        }
      </div>
      <div className="quiz-answers">
        {question.answers.map((answer, i) => {
          let classNames = "";
          if(showResult){
            classNames = answer.isCorrect ? "correct-answer" : "wrong-answer";
          }
          return <Button className={classNames} onClick={(e)=>this.onAnswer(e, answer)} variant="primary" size="lg" block>{answer.answer}</Button>
        })}
      </div>
      </>
    } else {
      return <div>
        <span>Loading Quiz...</span>
      </div>
    }

    
  }

}

export default Quiz;