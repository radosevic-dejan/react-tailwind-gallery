import { useState, useEffect } from "react";
import { ImageCard } from "./components/imageCard";
import { SearchImage } from "./components/searchImage";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const url = `https://pixabay.com/api/?key=${import.meta.env.VITE_API_KEY}&q=${searchTerm}&image_type=photo`;
  const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setImages(data.hits);
  };

  useEffect(() => {
    fetchData();
    setIsLoading(false);
  }, [searchTerm]);

  return (
    <div className="container">
      <h1 className="uppercase text-center text-2xl font-bold text-green-500 my-4">Image galery</h1>
      <SearchImage setSearch={term => setSearchTerm(term)}/>
      {isLoading && images.length === 0 && <h1>There is no such image...</h1>}
      <div className="grid grid-cols-3 gap-3">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          images.map((image) => {
            return <ImageCard key={ image.id } imgSrc={ image.webformatURL }
            imgTags={ image.tags } 
            imgAuthor={ image.user }
            />;
          })
        )}
      </div>
    </div>
  );
}

export default App;
