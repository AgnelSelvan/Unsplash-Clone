import  { useState, useEffect } from "react";
import Axios from "axios";

const api = process.env.REACT_APP_UNSPLASH_API;
const secret = process.env.REACT_APP_UNSPLASH_KEY;

export default function useFetchOneImage(){
  const [oneImage, setOneImage] = useState();
  const [errors, setErrors] = useState();
  const [isLoading, setIsLoading] = useState(false);

  function fetchOneImage(){
    Axios.get(`${api}/photos/?client_id=${secret}&page=1&per_page=2`)
    .then((res) => {
      setIsLoading(false);
      setOneImage(res.data[0].urls.regular)
    })
    .catch(() => {
      setErrors(["Unable to fetch images"]);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    setIsLoading(true);
    fetchOneImage()
  }, [])

  return [oneImage, isLoading, errors]
}