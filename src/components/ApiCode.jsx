import { useState, useEffect } from "react" 


export default function ApiCode() {

    const [starWarData, setStarWarData] = useState({});

    console.log("Component Rendered")

   

    useEffect(() => {
         fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => setStarWarData(data))
    }, []);

  return (
    <div>
        <pre>{JSON.stringify(starWarData, null, 2)}</pre>
    </div>
  )
}
