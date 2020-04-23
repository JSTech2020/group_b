import React from 'react';
import './App.css';
import {QuestionModel} from "./Model/QuestionModel";
import QuizForm from "./Components/QuizForm"
import StoryPage from "./Components/StoryPage";


function App() {

    const quiz = new QuestionModel();

    function addQuestion() {

    }

    return (
        <div className="App">
            <StoryPage/>
        </div>
    );
}


export default App;
