import React, { useState } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import "./StoryPage.css";
import dataStories from "../mockdata.json";
import dataQuizzes from "../mockDataQuiz.json";
import QuizForm from "./QuizForm.js";

class StoryPage extends React.Component {
  constructor(pages) {
    super(pages);
    const quizzes = dataQuizzes.quizzes;

    this.state = {
      currentIndex: -1,
      quizzes: quizzes,
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
  };

  onAddOrEdit = (data) => {
    var list = dataQuizzes.quizzes;
    if (this.state.currentIndex == -1) list.push(data);
    else list[this.state.currentIndex] = data;
    this.setState({ list, currentIndex: -1 })
};

  render() {
    //const classes = useStyles();
    let quizzes = this.state.quizzes;

    const storyList = quizzes.map((quiz, index) => {
      return (
        <div className="quiz-item">
          <ListItem button>{quiz.question}</ListItem>
          <button onClick={() => this.handleEdit(index)}>Edit</button>
          <button onClick={() => this.handleDelete(index)}>Delete</button>
        </div>
      );
    });

    return (
      <div>
        <h2>Admin Panel</h2>
        <QuizForm
          onAddOrEdit={this.onAddOrEdit}
          currentIndex={this.state.currentIndex}
          list={this.state.quizzes}
        ></QuizForm>
        <h2>Database Quizzes</h2>
        <List component="nav" aria-label="main mailbox folders">
          <ul>{storyList}</ul>
        </List>
      </div>
    );
  }
}

export default StoryPage;
