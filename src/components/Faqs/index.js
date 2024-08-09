import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      faqsList: props.faqsList,
      clickedIds: [], // Track multiple clicked FAQ item ids
    }
  }

  onClickImage = id => {
    const {clickedIds} = this.state
    const alreadyChecked = clickedIds.includes(id)
    const newCheckedIds = alreadyChecked
      ? clickedIds.filter(each => each !== id)
      : [...clickedIds, id]
    this.setState({
      clickedIds: newCheckedIds,
    })
  }

  render() {
    const {clickedIds, faqsList} = this.state
    return (
      <div className="bg-container">
        <div className="faq-card">
          <h1 className="faq-heading">FAQs</h1>
          <ul>
            {faqsList.map(each => (
              <FaqItem
                onClickImage={this.onClickImage}
                isClicked={clickedIds.includes(each.id)} // Check if this id is in the clickedIds array
                key={each.id}
                faqData={each}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
