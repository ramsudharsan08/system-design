import { useEffect, useState } from "react"

export default function UseFetch(config) {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(config.url)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))
    }, [config.url])
  return { data }
}
