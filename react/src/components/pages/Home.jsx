function Home() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-32 mx-auto max-w-6xl font-mono p-4">
      <div className="w-full">
        <p className="text-5xl">MaJaJa App</p>
      </div>
      <div className="rounded-xl p-4 shadow-xl">
        <form>
          <div className="mb-4">
            <div className="relative">
              <inputs className="py-2 pr-3 pl-8 border rounded focus:outline-none focus:border-gray-500 w-full" />
              <label className="absolute top-2 left-3 bg-white text-gray-500 px-1">
                Email
              </label>
            </div>
          </div>
          <div className="mb-4">
            <div className="relative">
              <input className="py-2 pr-3 pl-8 border rounded focus:outline-none focus:border-gray-500 w-full" />
              <label className="absolute top-2 left-3 bg-white text-gray-500 px-1">
                Password
              </label>
            </div>
          </div>
          <button className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
