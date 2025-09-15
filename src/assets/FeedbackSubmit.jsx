const FeedbackSubmit = (props) => {
    const { text } = props;
    return (
        <div className="feedback-submit" >
            <h1>💚</h1>
            <h2>Thank you for your feedback!</h2>
            <h4>{text}</h4>
        </div>
    )
}
export default FeedbackSubmit;