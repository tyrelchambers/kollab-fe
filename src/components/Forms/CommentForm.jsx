import React from 'react'
import { SecondaryButton } from '../Buttons/Buttons'

const CommentForm = () => {
  return (
    <form>
      <div className="field-group">
        <label htmlFor="comment" className="form-label">Comment</label>
        <div className="flex items-center h-12">
          <input type="text" name="comment" className="form-input flex-2 mr-4" placeholder="Have any questions or want to say how awesome this is?" />
          <SecondaryButton 
            text="Post"
            className="flex-1"
          />
        </div>
      </div>
    </form>
  )
}

export default CommentForm
