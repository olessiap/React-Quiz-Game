import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const QUESTIONS = [
	{
        "id": 1,
        "question": "question 1"
    },
    {
        "id": 2,
        "question": "question 2"
    },
    {
        "id": 3,
        "question": "Question 3 "
    }
]

const ANSWERS = [
    {
        "id": 1,
        "answer": "answer 1"
    },
    {
        "id": 2,
        "answer": "answer 2"
    },
    {
        "id": 3,
        "answer": "answer 3"
    }
];


class AvoyTest extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <Question />
            </div>
        )
    }
} 

class Question extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div>
                <div className="question-list">
                    {QUESTIONS.map(question => ( 
                        <div className="question-item" key={question.id}>
                            {question.question} 
                            
                        </div>
                    ))}
                </div>
                <Answer />
            </div>
        );
    }
}

class Textarea extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                  
            </div>
        )
    }
}

class Answer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="answer-list">
                {ANSWERS.map(answer => (
                <textarea 
                    rows="10" 
                    cols="60" 
                    key={answer.id}
                    className="answer-item"
                > 
                    {answer.answer}
                </textarea>           
                ))} 
            </div> 
        )
    }  
}

ReactDOM.render(<AvoyTest />, document.querySelector("#app"))

