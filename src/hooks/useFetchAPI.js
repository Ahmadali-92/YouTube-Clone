import { useEffect, useState } from "react";
import { fetchApiData } from "../utils/api";

const useFetch = ({ url }) => {
  // const [loading, setLoading] = useState(null);
  // const [data, setdata] = useState(false);
  const [selectCategories, setSelectCategories] = useState(url);
  // const [error, setError] = useState(null);

  useEffect(() => {
    // setLoading("Loading...");
    // setdata(null);
    // setError(null);
    try {
      fetchApiData(`search/?q=${selectCategories}`).then((res) => {
        console.log(res);

        // setLoading(null);
        // setdata(res);
      });
    } catch (error) {
      // setLoading(null);
      console.log(error.message);
      // setError(error);
    }
  }, [selectCategories]);
  // return { data, loading, error };
};
export default useFetch;
