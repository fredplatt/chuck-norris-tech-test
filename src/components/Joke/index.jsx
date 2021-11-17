import React, { useEffect, useState } from "react";
import "./index.css";

export default function Joke(props) {
  const { currentJoke } = props;
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  const getJoke = () => {
    setLoading(true);
    fetch("http://api.icndb.com/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.value.joke.replaceAll("&quot;", '"'));
        currentJoke(data.value.joke.replaceAll("&quot;", '"'));
      });
    setLoading(false);
  };

  useEffect(() => {
    if (!joke.length) getJoke();
  });

  return (
    <div className="jokeContainer">
      <i className="joke">{loading ? "Loading" : joke}</i>
      <button onClick={getJoke} className="button">
        Chuck me another
      </button>
    </div>
  );
}
