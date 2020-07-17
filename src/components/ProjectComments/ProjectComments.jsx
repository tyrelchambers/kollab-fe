import React, { useEffect, useState } from 'react'
import Comment from '../Comment/Comment'
import getApi from '../../api/getApi'

const ProjectComments = ({projectId}) => {
  const [status, setStatus] = useState("pending")
  const [comments, setComments] = useState([])

  useEffect(() => {
    getApi({
      url: '/comments/all',
      params: {
        projectId
      }
    }).then(res => {
      if (res) {
        setComments([...res])
      }
    })
  }, [status])

  return (
    <>
      {comments.length > 0 &&
        comments.map((comment, id) => (
          <>
            <Comment 
              comment={comment} 
              key={id} 
              setStatus={setStatus}
            />
            {comment.CommentReplies.map((reply, replyId) => (
              <Comment
                comment={reply}
                key={replyId}
                isReply
                parent={comment}
                setStatus={setStatus}
              />
            ))}
          </>
        ))
      }
    </>
  )
}

export default ProjectComments
