import { useState } from 'react'
import './App.css'
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <Portfolio />
      <div className="bg-red-500 text-white p-6 text-xl">
        Tailwind está funcionando
      </div>
    </>
  );
}

export default App;
