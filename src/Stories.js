import React from "react";
import { useGlobalContext } from "./context";

function Stories() {
  const { isLoading, hits, removeStory } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="stories">
      {hits.map((story) => {
        console.log(story);
        const { objectID, title, num_comments, url, points, auther } = story;
        return (
          <article className="story" key={objectID}>
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by <span>{auther} | </span> {num_comments}{" "}
              comments{" "}
            </p>
            <a
              href={url}
              className="read-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
            <button
              className="remove-btn"
              onClick={() => removeStory(objectID)}
            >
              Remove
            </button>
          </article>
        );
      })}
    </section>
  );
}

export default Stories;
