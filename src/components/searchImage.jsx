import { useState } from "react";

export const SearchImage = ({ setSearch }) => {
  const [term, setTerm] = useState("");
  const handleInput = (e) => {
    setTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.prevetnDefault;
    setSearch(term);
    setTerm("");
  };
  return (
    <form onSubmit={handleSubmit} className="my-2 pb-4 flex justify-center">
      <input
        className="border border-slate-500 px-4 py-2 rounded-lg"
        type="text"
        name="searchTerm"
        placeholder="Search term..."
        value={term}
        onChange={handleInput}
      />
      <button className="ml-2 bg-slate-500 px-4 rounded-lg font-bold text-white uppercase" type="submit">Search</button>
    </form>
  );
};
