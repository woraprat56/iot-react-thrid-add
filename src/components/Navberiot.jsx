import React from 'react';
import {like} from "react-router-dom";

export default function Navberiot() {
  return (
    <div className="fiex justify-center gap-5 p-5 bg-blue-700 text-white">
      <Link to="/">หน้า A</Link>
      <Link to="/PageB">หน้า B</Link>
      <Link to="/PageC">หน้า C</Link>
      <Link to="/PageD">หน้า D</Link>
    </div>
  );
}
