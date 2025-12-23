import React, { useState } from "react";

export default function EditModal({ book, updateBook, close }) {
  const [title, setTitle] = useState(book.title);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateBook({ ...book, title });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex justify-center items-center">
      <div className="bg-white p-6 rounded-2xl shadow-2xl w-80">
        <h2 className="text-2xl font-bold mb-4">Edit Book</h2>

        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 mb-4 border rounded-lg"
          />

          <div className="flex justify-between">
            <button className="px-5 py-2 bg-blue-600 text-white rounded-lg">
              Update
            </button>
            <button
              type="button"
              onClick={close}
              className="px-5 py-2 bg-gray-500 text-white rounded-lg"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
