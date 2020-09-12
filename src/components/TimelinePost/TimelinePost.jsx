import React from "react";
import { format, parseISO } from "date-fns";
import "./TimelinePost.css";

const TimelinePost = ({ post }) => {
  return (
    <div className="timeline-post-wrapper flex w-full">
      <img
        src={post.User.avatar}
        alt=""
        className="profile-avatar rounded-full mr-6"
      />

      <div className="flex flex-col w-full">
        <div className="flex w-full  items-center">
          <p className="mr-4 font-bold text-indigo-800">{post.User.name}</p>
          <p className="mr-4">-</p>
          <p className="text-gray-600 italic text-sm">
            {format(parseISO(post.createdAt), "PPP")}
          </p>
        </div>

        <pre className="text-gray-800 timeline-post-body  ">{post.body}</pre>
      </div>
    </div>
  );
};

export default TimelinePost;
