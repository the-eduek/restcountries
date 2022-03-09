import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [ data, setData ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ errorMessage, setErrorMessage ] = useState(null);
  
  useEffect(() => {
    const cleanup = new AbortController();

    fetch(url, {signal: cleanup.signal})
    .then(response => {
      if(response.ok) return response.json()
      else throw Error('sorry, couldn\'t fetch the data')
    }).then(data => {
      setData(data)
      setIsLoading(false)
      setErrorMessage(null)
    }).catch(err => {
      if (!(err.name === 'AbortError')) {
        setData(null)
        setIsLoading(false)
        setErrorMessage(err.message)
        if (err.name === 'TypeError') setErrorMessage('sorry, couldn\'t fetch the data')
      }
    })

    return () => cleanup.abort();
    }, [url]);
    
  return { data, isLoading, errorMessage };
}
 
export default useFetch;