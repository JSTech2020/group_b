import React from 'react';
import './App.css';
import {QuestionModel} from "./Model/QuestionModel";
import QuizForm from "./Components/QuizForm"


function App() {

    const quiz = new QuestionModel();

    function addQuestion() {

    }

    return (
        <div className="App">
            <QuizForm pages={4}/>
        </div>
    );
}


export default App;
