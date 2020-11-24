import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({username, caption, imageURL}) {
  return (
    <div>
      <div className="post_header ">
        <Avatar
          className="post_avatar"
          alt={username}
          src="/static/images/avatar/1.jpg"
        />

        <h3>{username}</h3>
      </div>

      <img
        className="post_image"
        src={imageURL}
        alt=""
      ></img>
      <h4 className="post_text">
        <strong>{username}</strong> {caption}
      </h4>
      {/* Image */}

      {/* Username */}

      {/* Username+Caption */}
    </div>
  );
}

export default Post;
