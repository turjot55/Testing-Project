import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sections from "./Sections";

const Home = () => {
  const [data, setData] = React.useState([]);
  const navigate = useNavigate();
  const handleAddSection = () => {
    navigate("/add-section");
  }

  async function getSections(url = '') {

    const response = await fetch(url, {
      method: 'GET', 
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    return response.json();
  }

  useEffect(() => {
    getSections('http://localhost:3001/')
    .then((data) => {
      setData(data);
    });
  }, [])
  
  return (
    <div className='App'>
      <h1 className='header'>List of saved sections</h1>
      <div className='AddSectionContainer'>
        <button onClick={handleAddSection}>Add Section +</button>
      </div>
      <div className='section-list'>
        <Sections sections={data} />
      </div>
    </div>
  );
}

export default Home;