import React from 'react';
import Navbar from '../components/Navbar';
import { useState, useEffect } from "react";
import RateLimitedUI from "../components/RateLimitedUI"
import axios from "axios"

function HomePage() {
  const [isRateLimited, setRateLimited] = useState(true);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try{
        const res = await axios.get("http://localhost:5001/api/notes")
        const data = res.data;
        console.log(data);
      }
      catch (error) {
        console.log("Error fetching notes")
      }
    }

    fetchNotes();
  }, [])

  return (
    <div className='min-h-screen'>
      <Navbar />

      {isRateLimited && <RateLimitedUI />}
    </div>
  );
};

export default HomePage;