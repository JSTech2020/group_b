import React from "react";
import StoryModel from "../Model/StoryModel";

import dataQuizzes from "../mockDataQuiz.json";

import { Select } from "antd";

const { Option } = Select;

class QuizForm extends React.Component {
  state = {
    ...this.returnStateObject(),
  };

  returnStateObject() {
    if (this.props.currentIndex == -1)
      return {
        question: "",
        answerOne: "",
        answerTwo: "",
        answerThree: "",
        answerFour: "",
        correctAnswer: "",
        storyId: "",
      };
    else return this.props.list[this.props.currentIndex];
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.currentIndex != this.props.currentIndex ||
      prevProps.list != this.props.list
    ) {
      this.setState({ ...this.returnStateObject() });
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.onAddOrEdit(this.state);
  };

  changeCorrectAnswer(index) {
    if (index === this.state.correctAnswer) {
      this.setState({
        correctAnswer: -1,
      });
    } else {
      this.setState({
        correctAnswer: index,
      });
    }
  }

  handleStoryChange = (e) => {
    this.setState({
      storyId: e,
    });
  };

  render() {
    const storyList = this.props.stories.map((story, index) => {
      return <Option value={story.id}>{story.title}</Option>;
    });

    return (
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <input
          name="question"
          placeholder="Question"
          onChange={this.handleInputChange}
          value={this.state.question}
        />
        <br />
        <input
          type="checkbox"
          checked={0 === this.state.correctAnswer}
          onChange={() => this.changeCorrectAnswer(0)}
        />
        <input
          name="answerOne"
          placeholder="answerOne"
          onChange={this.handleInputChange}
          value={this.state.answerOne}
        />
        <br />
        <input
          type="checkbox"
          checked={1 === this.state.correctAnswer}
          onChange={() => this.changeCorrectAnswer(1)}
        />
        <input
          name="answerTwo"
          placeholder="answerTwo"
          onChange={this.handleInputChange}
          value={this.state.answerTwo}
        />
        <br />
        <input
          type="checkbox"
          checked={2 === this.state.correctAnswer}
          onChange={() => this.changeCorrectAnswer(2)}
        />
        <input
          name="answerThree"
          placeholder="answerThree"
          onChange={this.handleInputChange}
          value={this.state.answerThree}
        />
        <br />
        <input
          type="checkbox"
          checked={3 === this.state.correctAnswer}
          onChange={() => this.changeCorrectAnswer(3)}
        />
        <input
          name="answerFour"
          placeholder="answerFour"
          onChange={this.handleInputChange}
          value={this.state.answerFour}
        />
        <br />
        <div>
          <Select
            defaultValue="Choose Story"
            style={{ width: 120 }}
            onChange={this.handleStoryChange}
          >
            {storyList}
          </Select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default QuizForm;
