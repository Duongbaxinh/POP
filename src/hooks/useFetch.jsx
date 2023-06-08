import axios from "axios";
import { useEffect, useState } from "react";
import axiousClinet from "../api/axiouClient";
const useFetch = (method = 'get', url, param = {}, dependence = []) => {

  const [data, setData] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [isError, setIsError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        if (method.toLocaleLowerCase() === 'get') {
          const { response } = await axiousClinet.get(url, { params: param });
          setData(response)
          setIsloading(false)
          console.log("response ", response)
        }
        if (methodmethod.toLocaleLowerCase() === 'post') {
          const { response } = await axios.get(url, { params: param });
          setData(response);
          setIsloading(false)
        }
        if (methodmethod.toLocaleLowerCase() === 'post') {
          const { response } = await axios.post(url, { params: param });
          setData(response);
        }
        if (methodmethod.toLocaleLowerCase() === 'put') {
          const { response } = await axios.put(url, { params: param });
          setData(response);
        }
        if (methodmethod.toLocaleLowerCase() === 'delete') {
          const { response } = await axios.delete(url, { params: param });
          setData(response);
        }
        setData(response);
        setTimeout(() => {
          setIsloading(false);
        }, 2000);
      } catch (error) {
        setIsError(error);
      }
    };
    getData();
  }
    , dependence)
  return { data, isLoading, isError };
};

export default useFetch;
