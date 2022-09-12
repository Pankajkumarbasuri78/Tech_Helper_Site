import React from "react";
import { useGlobalContext } from "../Context";


export const Search = () => {
  const { query, searchPost } = useGlobalContext();
  return (
    <>
      <h1>Tech Website</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="search tech related topics"
            value={query}
            onChange={(e) => searchPost(e.target.value)}
          />
        </div>
      </form>
    </>
  );
};
