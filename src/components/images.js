import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useDebounce from "../utils/hooks/useDebounce";
import useFetchImage from "../utils/hooks/useFetchImage";
import Image from "./Image";
import Loading from "./Loading";

export default function Images() {
  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("");
  const [images, setImages, errors, isLoading] = useFetchImage(page, searchTerm);


  function handleRemove(index) {
    // setImages(images.filter((image, i) => i !== index));
    setImages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length),
    ]);
  }

  function ShowImage() {
    return <InfiniteScroll dataLength={images.length} next={() => setPage(page + 1)} hasMore={true} className="">
      {
        images.map((img, index) => (
          <Image
            image={img.urls.regular}
            index={index}
            handleRemove={handleRemove}
            key={index}
          />
        ))
      }
    </InfiniteScroll>;
  }

  const debounce = useDebounce()
  function handleChange(e) {
    const text = e.target.value
    debounce(() => setSearchTerm(text), 1000)
  }

  return (
    <section>
      {errors.length > 0 ? <div className="flex h-screen">
        <p className="m-auto">{errors}</p>

      </div> :
        <div className="gap-0 my-5" style={{ columnCount: 3 }}><ShowImage /></div>}

      {
        isLoading &&
        <Loading />}
    </section>
  );
}
