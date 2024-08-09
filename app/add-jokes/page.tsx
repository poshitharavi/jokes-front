"use client";

import React from "react";
import { useState } from "react";
import axios from "axios";

const AddJokes = () => {
  const [jokeText, setJokeText] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  // Fetch joke categories
  useState(() => {
    async function fetchCategories() {
      const response = await axios.get(
        `${process.env.DELIVERY_JOKE}/category/all`
      );

      setCategories(response.data.body.categories);
    }
    fetchCategories();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await axios.post(`${process.env.SUBMIT_JOKE}/joke/create`, {
      jokeText,
      author,
      category,
      moderator: "Un Moderator",
    });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <h1>Add a Joke</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Joke Text</label>
          <textarea
            value={jokeText}
            onChange={(e) => setJokeText(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Author</label>
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select a Category</option>
            {categories.map((cat: any) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddJokes;
