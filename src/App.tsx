import { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  const API_KEY = "39787137-de46b12c5f6cc880b17217df8";

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className=" dark:bg-slate-900">
      <div className="container mx-auto">
        <ImageSearch searchText={(text: string) => setTerm(text)} />

        {!isLoading && images.length === 0 && (
          <h1 className="text-5xl text-center mx-auto mt-32">
            No Images Found
          </h1>
        )}

        {isLoading ? (
          <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {images.map((image, i) => (
              <>
                <ImageCard key={i} image={image} />
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
