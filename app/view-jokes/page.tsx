"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const ViewJokes = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    async function fetchJokes() {
      const response = await axios.get(
        `${process.env.DELIVERY_JOKE}/jokes/category/General`
      );

      console.log(response);

      setJokes(response.data.body.jokes);
    }
    fetchJokes();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <h1>Jokes List</h1>
      <ul>
        {jokes.map((joke: any) => (
          <li key={joke.id}>
            <p>
              <strong>{joke.author}</strong>: {joke.jokeText}
            </p>
            <p>
              <em>Category: {joke.category}</em>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewJokes;
