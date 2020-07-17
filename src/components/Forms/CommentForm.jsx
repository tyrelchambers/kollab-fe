import React, { useState } from 'react'
import { SecondaryButton } from '../Buttons/Buttons'
import { useForm } from 'react-hook-form'
import getApi from '../../api/getApi'
import TextareaAutosize from 'react-textarea-autosize'

const CommentForm = ({projectId}) => {
  const { handleSubmit } = useForm()
  const [state, setState] = useState({
    comment: ""
  })

  const submitHandler = () => {
    getApi({
      url: '/comments/commentParent',
      method: 'post',
      data: {
        comment: state.comment,
        projectId
      }
    })
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="field-group">
        <label htmlFor="comment" className="form-label">Comment</label>
        <div className="flex min-h-12">
          <TextareaAutosize 
            type="text" 
            name="comment" 
            className="form-textarea slim flex-2 mr-4" 
            placeholder="Have any questions or want to say how awesome this is?" 
            value={state.comment} onChange={(e) => setState({comment: e.target.value})}
            minRows={1}
            maxRows={15}
          />
          <SecondaryButton 
            text="Post"
            className="flex-1"
            type="submit"
          />
        </div>
      </div>
    </form>
  )
}

export default CommentForm
