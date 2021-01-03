import React from "react";
import InstagramEmbed from "react-instagram-embed";

const InstagramBlock = ({ node }) => {

  const { url } = node

  if (!url) {
    return <pre>Missing URL for Instagram post</pre>;
  }

  return (
    <InstagramEmbed
      url={url}
      containerTagName="div"
      injectScript
      className={`ig-embed`}
    />
  )
}

export default InstagramBlock