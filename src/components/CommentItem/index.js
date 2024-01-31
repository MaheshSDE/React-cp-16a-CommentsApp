// Write your code here
import './index.css'

const CommentItem = props => {
  const {itemDetails, toggleLikeIcon, deleteComment} = props
  const {
    name,
    comment,
    isLiked,
    imgUrl,
    date,
    initialClassName,
    id,
  } = itemDetails
  const letter = name.slice(0, 1)

  const onClickLikeButton = () => {
    toggleLikeIcon(id)
  }

  const onClickDeleteComment = () => {
    deleteComment(id)
  }

  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <>
      <li className="listItems">
        <div className="top">
          <div className={initialClassName}>
            <p>{letter}</p>
          </div>
          <p className="name">{name}</p>
          <p className="date">{date}</p>
        </div>
        <p className="comment">{comment}</p>
        <div className="bottom">
          <button
            type="button"
            className="likeImgContainer"
            onClick={onClickLikeButton}
          >
            <img src={likeImgUrl} alt="like" className="likeImage" />
            <p className="likeImgText">Like</p>
          </button>

          <button
            type="button"
            className="delete-button"
            data-testid="delete"
            onClick={onClickDeleteComment}
          >
            <img src={imgUrl} alt="delete" className="deleteImage" />
          </button>
        </div>
        <hr className="separator" />
      </li>
    </>
  )
}
export default CommentItem
