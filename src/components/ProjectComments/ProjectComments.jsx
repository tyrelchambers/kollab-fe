import React, { useEffect, useState } from 'react'
import Comment from '../Comment/Comment'
import getApi from '../../api/getApi'
import { inject, observer } from 'mobx-react'
import ProfileMini from '../ProfileMini/ProfileMini'
import CommentForm from '../Forms/CommentForm'

const ProjectComments = ({projectId, UserStore}) => {
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
        console.log(res)
        setComments([...res])
      }
    })
    setStatus("pending")
  }, [status])

  return (
    <>
      <ProfileMini user={UserStore.getUser()} />
      <CommentForm projectId={projectId} setStatus={setStatus} />

      <hr />
      {comments.length > 0 &&
        comments.map((comment, id) => (
          <>
            <Comment 
              comment={comment} 
              key={id} 
              setStatus={setStatus}
            />
            {comment.Replies.map((reply, replyId) => (
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

export default inject("UserStore")(observer(ProjectComments))
