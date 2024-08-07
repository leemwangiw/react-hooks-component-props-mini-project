import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  let coffeeCups = "☕️".repeat(Math.ceil(minutes / 5));
  let bentoBoxes = "🍱".repeat(Math.ceil(minutes / 10));
  let readTime = minutes < 30 ? coffeeCups : bentoBoxes;

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {readTime} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
