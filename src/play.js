class Question extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div>
                <table className="question-list">
                    <tbody>
                        {QUESTIONS.map(question => ( 
                            <tr className="question-item" key={question.id}>
                                <td className="question">
                                    {question.question} 
                                    <Answer />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>  
            </div>
        );
    }