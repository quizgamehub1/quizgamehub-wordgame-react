import { useState } from 'react';
import './index.css'; // Use Tailwind

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-blue-600">QuizGameHub</h1>
        <p className="mt-2 text-lg">Tailwind CSS is working 🎉</p>
      </div>

      <div className="bg-white p-6 rounded shadow-md text-center">
        <p className="mb-4 text-lg">Click the button to increase the count:</p>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
