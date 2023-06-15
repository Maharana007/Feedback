// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: true}

  clickEmoji = () => this.setState({isFeedbackSelected: true})

  renderFeedback = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div>
        <h1 className="title">
          {' '}
          How satisfied are you with our customer support performence?
        </h1>
        <ul className="emoji-list">
          {emojis.map(emoji => (
            <li key={emoji.id} className="emoji">
              <button onClick={this.clickEmoji} type="button">
                <img className="emoji-img" src={emoji.imageUrl} alt="name" />{' '}
                <br />
                <span className="name"> {emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThank = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return(
      <div>
        <img src={loveEmojiUrl} alt="love emoji" className="emoji-img" />
        <h1 className="title">Thank You!</h1>
        <p className="details">
          {' '}
          We will use your feedback to improve our customer support performance.
        </p>
      </div>,
    )
  }

  render() {
    const {isFeedbackSelected} = this.state
    return (
      <div className="container">
        <div className="message-card">
          {isFeedbackSelected ? this.renderThank() : this.renderFeedback()}
        </div>
      </div>
    )
  }
}
export default Feedback
