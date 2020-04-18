import React from "react"

class QuizForm extends React.Component {
    constructor(pages) {
        super(pages);
        this.pages = pages;
        console.log(pages);
        //todo: dont hardcode here
        this.state = {
            questions: Array(4).fill({
                question: "1",
                solutionOne: {solution: "1", isCorrect: false},
                solutionTwo: {solution: "2", isCorrect: false},
                solutionThree: {solution: "3", isCorrect: false},
                solutionFour: {solution: "4", isCorrect: true},
            }),
        };
        console.log(this.state.cats)
    }


    handleChange = (e) => {
        if (["name", "age"].includes(e.target.className)) {
            let cats = [...this.state.cats];
            cats[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase();
            this.setState({cats}, () => console.log(this.state.cats))
        } else {
            this.setState({[e.target.name]: e.target.value.toUpperCase()})
        }
    };

    handleSubmit = (e) => {
        e.preventDefault()
    };

    render() {
        let {questions} = this.state;

        return (
            <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                {
                    questions.map((val, idx) => {
                        let questionId = `cat-${idx}`, solutionOneId = `age-${idx}`, solutionTwoId = `age-${idx}`,
                            solutionThreeId = `age-${idx}`,
                            soltuionFourId = `age-${idx}`;
                        return (
                            <div key={idx}>
                                <label htmlFor={questionId}>{`Question #${idx + 1}`}</label>
                                <input
                                    type="text"
                                    name={questionId}
                                    data-id={idx}
                                    id={questionId}
                                    value={questions[idx].question}
                                    className="name"
                                />
                                <label htmlFor={solutionOneId}>A</label>
                                <input
                                    type="text"
                                    name={solutionOneId}
                                    data-id={idx}
                                    id={solutionOneId}
                                    value={questions[idx].solutionOne.solution}
                                    className="age"
                                />
                                <input
                                    name="isGoing"
                                    type="checkbox"
                                    checked={questions[idx].solutionOne.isCorrect}
                                    onChange={this.handleInputChange} />
                                <label htmlFor={solutionTwoId}>B</label>
                                <input
                                    type="text"
                                    name={solutionTwoId}
                                    data-id={idx}
                                    id={solutionTwoId}
                                    value={questions[idx].solutionTwo.solution}
                                    className="age"
                                />
                                <input
                                    name="isGoing"
                                    type="checkbox"
                                    checked={questions[idx].solutionOne.isCorrect}
                                    onChange={this.handleInputChange} />
                                <label htmlFor={solutionThreeId}>C</label>
                                <input
                                    type="text"
                                    name={solutionThreeId}
                                    data-id={idx}
                                    id={solutionThreeId}
                                    value={questions[idx].solutionTwo.solution}
                                    className="age"
                                />
                                <input
                                    name="isGoing"
                                    type="checkbox"
                                    checked={questions[idx].solutionOne.isCorrect}
                                    onChange={this.handleInputChange} />
                                <label htmlFor={soltuionFourId}>D</label>
                                <input
                                    type="text"
                                    name={soltuionFourId}
                                    data-id={idx}
                                    id={soltuionFourId}
                                    value={questions[idx].solutionThree.solution}
                                    className="age"
                                />
                                <input
                                    name="isGoing"
                                    type="checkbox"
                                    checked={questions[idx].solutionFour.isCorrect}
                                    onChange={this.handleInputChange} />
                            </div>
                        )
                    })
                }
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default QuizForm
