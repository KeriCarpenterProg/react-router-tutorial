import React from "react";
import { useState } from "react";
import BlogList from "./BlogList";

export function PropsPractice() {
  const [blogs, setBlogs] = useState([
    {
      title: "Keri Website",
      body: "this is a start...",
      author: "mario",
      id: 1,
    },
    {
      title: "Cary Website",
      body: "this is a start...",
      author: "cary",
      id: 2,
    },
    {
      title: "Jack Website",
      body: "this is a start...",
      author: "jack",
      id: 3,
    },
    {
      title: "Langton Website",
      body: "this is a start...",
      author: "mario",
      id: 4,
    },
  ]);
  return (
    <div className="propsPractice">
      <h1>Props Practice</h1>
      <BlogList
        blogs={blogs}
        title="This will print out all the blogs from an array"
      />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's Blogs"
      />

      <a href="https://youtu.be/PHaECbrKgs0">
        I finished this video. It was only 7 minutes.
      </a>
    </div>
  );
}
