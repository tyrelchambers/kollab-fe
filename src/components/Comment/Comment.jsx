import React, { useState, useEffect } from 'react'
import './Comment.css'
import { ThirdButton, SecondaryButton } from '../Buttons/Buttons'
import getApi from '../../api/getApi'
import isEmpty from '../../helpers/objIsEmpty'

const Comment = ({comment, isReply, parent, setStatus}) => {
  const [state, setState] = useState({
    toReply: false
  })
  const avatar = comment.User.avatar
  const reply = (isReply && !isEmpty(parent))

  useEffect(() => {
    const commentBody = document.querySelectorAll(".commentBody")
    
    for (let index = 0; index < commentBody.length; index++) {
      if (commentBody[index].innerHTML.split(" ")[0].includes("@")) {
        let str = commentBody[index].innerHTML.split(" ")[0]
        const remaining = commentBody[index].innerHTML.split(" ").slice(1, commentBody[index].innerHTML.split(" ").length).join(" ")
      
        commentBody[index].innerHTML = remaining
        commentBody[index].insertAdjacentHTML('afterbegin', `<span class="font-medium text-orange-500 mr-2">${str}</span>`)
      }
    }
  }, [comment,parent])

  const submitHandler = (e) => {
    e.preventDefault();
    const commentInput = document.querySelector("#commentReply").value;

    getApi({
      url: '/comments/commentReply/',
      method: 'post',
      data: {
        comment: commentInput,
        parentId: isReply ? comment.commentParentId : comment.uuid
      }
    }).then(res => {
      if (res) {
        setState({toReply: false})
        setStatus("saved")
      }
    })
  }

  return (
    <div className={`comment flex ${reply ? "reply" : "parent"}`}>
      <img src={avatar ? avatar : require('../../assets/avatar.png')} alt="" className="avatar small mr-4"/>
      <div className="flex flex-col w-full">
        <p className="font-bold mb-4">{comment.User.firstName} {comment.User.lastName}</p>
        <p className="commentBody">{comment.comment}</p>
        <hr/>
        <div className="flex">
          <ThirdButton
            text="Reply"
            onClick={() => setState({toReply: !state.toReply})}
          />
        </div>

        {state.toReply &&
          <div className="flex reply-block mt-6">
            <img src={avatar ? avatar : require('../../assets/avatar.png')} alt="" className="avatar small mr-4" />
            <div className="flex items-center h-12 w-full">
              <input 
                type="text" 
                name="comment" 
                className="form-input flex-2 mr-4" 
                placeholder={`Replying to: ${comment.User.username}`} 
                defaultValue={`@${comment.User.username}`}
                id="commentReply"
              />
              <SecondaryButton
                text="Post"
                className="flex-1"
                onClick={e => submitHandler(e)}
              />
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Comment
