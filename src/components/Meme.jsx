import React from "react";
import { useState, useEffect } from "react";
// import MemesData from "../memesData.json";

export default function Meme() {

  // const [memeImage, setMemeImage] = useState("")
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages, setAllMemeImages] = useState([]) 

  useEffect(() => {
      fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(apiData => setAllMemeImages(apiData.data.memes))
  }, []);

  // This is to generate random meme images
  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;
    // console.log(url);

    setMeme(prevMeme => ({
      ...prevMeme, 
      randomImage: url 
    }))
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme, 
      [name]: value
    }))
  }

  return (
    <main>
      <div className="form">
        <label>First text: </label>
        <input
          className="form-input"
          type="text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
          placeholder="Enter the top text"
        />

        <label>Second text: </label>
        <input
          className="form-input"
          type="text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
          placeholder="Enter the bottom text"
        />

        <button className="button" onClick={getMemeImage}>
          Search for new image
        </button>
      </div>

      {/* This is the position for the Image */}
      <div className="meme-container">
        <img src={meme.randomImage} alt="The Meme" className="meme-image" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
