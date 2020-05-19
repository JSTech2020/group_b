import React, { useState } from "react";

//import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import "./StoryPage.css";
import dataStories from "../mockdata.json";
import dataQuizzes from "../mockDataQuiz.json";
import QuizForm from "./QuizForm.js";
import { List, Card } from "antd";

class StoryPage extends React.Component {
  constructor(pages) {
    super(pages);
    const quizzes = dataQuizzes.quizzes;
    const stories = dataStories.stories;

    const first = [];

    for (var i in quizzes) {
      first.push({
        title: quizzes[i].question,
        answerOne: quizzes[i].answerOne,
        answerTwo: quizzes[i].answerTwo,
        answerThree: quizzes[i].answerThree,
        answerFour: quizzes[i].answerFour,
        correctAnswer: quizzes[i].correctAnswer,
        storyId: quizzes[i].storyId,
      });
    }

    this.state = {
      currentIndex: -1,
      quizzes: quizzes,
      stories: stories,
      data: first,
    };
  }

  handleEdit = (index) => {
    this.setState({
      currentIndex: index,
    });
  };

  handleDelete = (index) => {
    var list = dataQuizzes.quizzes;
    list.splice(index, 1);
    this.setState({ list, currentIndex: -1 });
    this.updateGrid();
  };

  onAddOrEdit = (data) => {
    var list = dataQuizzes.quizzes;
    if (this.state.currentIndex == -1) list.push(data);
    else list[this.state.currentIndex] = data;
    this.setState({ list, currentIndex: -1 });
    this.updateGrid();
  };

  updateGrid() {
    this.first = [];
    for (var i in this.state.quizzes) {
      this.first.push({
        title: this.state.quizzes[i].question,
        answerOne: this.state.quizzes[i].answerOne,
        answerTwo: this.state.quizzes[i].answerTwo,
        answerThree: this.state.quizzes[i].answerThree,
        answerFour: this.state.quizzes[i].answerFour,
        correctAnswer: this.state.quizzes[i].correctAnswer,
        storyId: this.state.quizzes[i].storyId,
      });
    }

    this.setState({ data: this.first });
  }

  getStoryTitle(storyId) {
    if (this.state.stories.find((element) => element.id === storyId)) {
      return this.state.stories.find((element) => element.id === storyId).title;
    } else {
      return "";
    }
  }

  render() {
    return (
      <div>
        <h2>Admin Panel</h2>
        <QuizForm
          onAddOrEdit={this.onAddOrEdit}
          currentIndex={this.state.currentIndex}
          list={this.state.quizzes}
          stories={this.state.stories}
        ></QuizForm>
        <h2>Database Quizzes</h2>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={this.state.data}
          renderItem={(item, index) => (
            <List.Item>
              <Card title={item.title}>
                <div className={item.correctAnswer === 0 ? "correct" : ""}>
                  {item.answerOne}
                </div>
                <div className={item.correctAnswer === 1 ? "correct" : ""}>
                  {item.answerTwo}
                </div>
                <div className={item.correctAnswer === 2 ? "correct" : ""}>
                  {item.answerThree}
                </div>
                <div className={item.correctAnswer === 3 ? "correct" : ""}>
                  {item.answerFour}
                </div>
                <div>According Story: {this.getStoryTitle(item.storyId)}</div>
                <button onClick={() => this.handleEdit(index)}>Edit</button>
                <button onClick={() => this.handleDelete(index)}>Delete</button>
              </Card>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default StoryPage;
