import { useState } from 'react'
import useStore from '@/store'

function CommentForm({ slug }) {
  const [comment, setComment] = useState('')
  const addComment = useStore(state => state.addComment)

  const handleSubmit = (event) => {
    event.preventDefault()
    const newComment = {
      text: comment,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      })
    };
    addComment(slug, newComment)
    setComment('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder=" "
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default CommentForm

