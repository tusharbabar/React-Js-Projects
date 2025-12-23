import React, { useState } from "react";

export default function AddBook({ addBook }) {
  const [title, setTitle] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addBook({ title });
    setTitle("");
  };

  return (
    <form
      onSubmit={handleAdd}
      className="flex mb-6 gap-3"
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter book name..."
        className="flex-1 p-3 rounded-xl bg-white/40 text-black placeholder-gray-700 shadow"
      />
      <button className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 transition">
        Add
      </button>
    </form>
  );
}
