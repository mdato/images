import axios from "axios";
import { useEffect, useState } from "react"

const useAxios = (param) => {
  const [response, setResponse] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');
  
  axios.defaults.baseURL = 'https://api.unsplash.com';

  const fetchInfo = async (url) => {
    try {
      setLoad(true);
      const res = await axios(url);
      setResponse(res.data.results)
    } catch(err) {
      setError(err)
    } finally {
      setLoad(false)
    }
  }

  useEffect(() => {
    fetchInfo(param);
  }, [param])

  return {
    response,
    load,
    error,
    fetchInfo: url => fetchInfo(url)
  }
}

export default useAxios