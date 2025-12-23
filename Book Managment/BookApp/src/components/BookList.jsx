export default function BookList({ books, search, deleteBook, setEditBook }) {
  const filtered = books.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
      {filtered.map((book) => (
        <div
          key={book.id}
          className="bg-white/30 backdrop-blur-lg p-5 rounded-2xl shadow-xl border border-white/40 hover:scale-105 transition"
        >
          <h3 className="text-white text-xl font-semibold">{book.title}</h3>

          <div className="flex justify-between mt-4">
            <button
              onClick={() => setEditBook(book)}
              className="px-4 py-2 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition"
            >
              Edit
            </button>

            <button
              onClick={() => deleteBook(book.id)}
              className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {filtered.length === 0 && (
        <p className="text-white text-center text-xl col-span-2">No books found</p>
      )}
    </div>
  );
}
