import useStore from '@/store'

function Comments({ slug }) {
  const comments = useStore(state => state.artPiecesInfo[slug]?.comments || [])

  return (
    <div>
      {comments.length > 0 ? comments.map((comment, index) => (
        <div key={index}>
          <p>{comment.text}</p>
          <small>Date: {comment.date}</small>
          <small>Hour: {comment.time}</small>
        </div>
      )) : ""}
    </div>
  );
}

export default Comments
