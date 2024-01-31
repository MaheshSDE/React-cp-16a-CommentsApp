import {Component} from 'react'

import {formatDistanceToNow} from 'date-fns'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
  }

  toggleLikeIcon = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    const {commentsList} = this.state
    const filteredCommentsList = commentsList.filter(
      eachItem => id !== eachItem.id,
    )
    this.setState({commentsList: filteredCommentsList})
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const initialContainerBackgroundClassName = `${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      date: formatDistanceToNow(new Date()),
      isLiked: false,
      initialClassName: initialContainerBackgroundClassName,
      imgUrl:
        'https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png',
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeNameInput = event => {
    this.setState({name: event.target.value})
  }

  onChangeCommentInput = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {name, comment, commentsList} = this.state
    const count = commentsList.length

    return (
      <div className="comment-container">
        <div className="comments-info-container">
          <div>
            <h1 className="heading">Comments</h1>

            <form onSubmit={this.onAddComment}>
              <p className="para">say something about 4.0 technologies</p>
              <input
                type="text"
                value={name}
                placeholder="Your Name"
                onChange={this.onChangeNameInput}
                className="inputName"
              />
              <br />
              <textarea
                rows="6"
                value={comment}
                placeholder="Your Comment"
                className="inputComment"
                onChange={this.onChangeCommentInput}
              />
              <br />
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>

          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="commentImage"
            />
          </div>
        </div>
        <hr className="separator" />
        <div className="countComment">
          <div className="count-button">
            <p>{count}</p>
          </div>
          <p className="comment-para">comments</p>
        </div>
        <ul className="unOrderList">
          {commentsList.map(eachComment => (
            <CommentItem
              itemDetails={eachComment}
              key={eachComment.id}
              toggleLikeIcon={this.toggleLikeIcon}
              deleteComment={this.deleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
