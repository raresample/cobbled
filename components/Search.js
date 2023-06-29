import { useState } from "react"

export default function Search({ getSearchResults }) {
   const [title, setTitle] = useState('asics')

   const handleSubmit = async (e) => {
    e.preventDefault()

    const apiUrlEndpoint = `/api/data-search`;
    const postData = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
      }),
    };
    const response = await fetch(apiUrlEndpoint, postData);
    const matches = await response.json();

    getSearchResults(matches)

   }

  return (
    <div className="text-center my-20">
        <form onSubmit={handleSubmit}>
            <input className="text-black border-2 border-black rounded-full px-3 py-2" type="text" placeholder="Search sneakers by name" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button className="bg-black text-white rounded-full px-3 py-2 hover:bg-black/60" type="submit">Search</button>
        </form>
        <div>{title}</div>
    </div>
  )
}