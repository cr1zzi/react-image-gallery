import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import "./assets/app.css";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=21654004-5e9b4ca0e4e7a4ffc6cbe6993&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto px-4 ">
      <Search searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && (
        <h1 className="text-6xl text-center mx-auto mt-32"> No images Found</h1>
      )}

      {isLoading ? (
        <h1>
          <Spinner />
        </h1>
      ) : (
        <div className="grid grid-cols-4 gap-4 ">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
