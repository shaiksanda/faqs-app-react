// Write your code here.
import './index.css'

const FaqItem = props => {
  const {faqData, onClickImage, isClicked} = props
  const {id, questionText, answerText} = faqData

  const handleClick = () => {
    onClickImage(id)
  }
  return (
    <li className="faq-item">
      <div className="question-section">
        <h1 className="faq-item-heading">{questionText}</h1>
        <button type="button" onClick={handleClick}>
          {isClicked ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
              alt="minus"
              className="image"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
              alt="plus"
              className="image"
            />
          )}
        </button>
      </div>
      {isClicked && <hr />}
      {isClicked && <p className="answer-text">{answerText}</p>}{' '}
    </li>
  )
}

export default FaqItem
