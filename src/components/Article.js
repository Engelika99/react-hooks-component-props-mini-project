/** @format */

import React from "react";
import { minutesToRead } from "../utilities";

const Article = ({ date = "January 1, 1970", minutes, preview, title }) => {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      {minutesToRead(minutes)}
    </article>
  );
};

export default Article;
