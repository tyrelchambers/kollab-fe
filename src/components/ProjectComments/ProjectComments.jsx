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
    const fn = async () => {
      if(status === "pending") {
        await getApi({
          url: '/comments/all',
          params: {
            projectId
          }
        }).then(res => {
          if (res) {
            setComments([...res])
          }
        })
      }
    }

    fn();
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
              key={comment.uuid} 
              setStatus={setStatus}
            />
            {comment.Replies.map((reply, replyId) => (
              <Comment
                comment={reply}
                key={reply.uuid + "_" + replyId}
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
