import React, { useState } from 'react';
import axios from 'axios';
import Headernobut from '../components/headernobut';
import { useNavigate } from "react-router-dom";
import '../styles/createmoviePage.css'

const CreateMovie = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [year, setYear] = useState('');
  const [rating, setRating] = useState('');
  const [director, setDirector] = useState('');
  const [actors, setActors] = useState('');
  const [types, setTypes] = useState('');
  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCreateMovie = () => {
    const newMovie = {
      name,
      time,
      year,
      rating,
      director,
      actors,
      types,
      image
    };
console.log(image)
    axios.post('http://localhost:9000/movie', newMovie,{
      headers:{
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        console.log('Movie created succesfully:', response.data);
        setErrorMessage('');
      })
      .catch(error => {
        console.error('Error while creating movie:', error);
        setErrorMessage(error.message);
      });
      navigate("/")
  };

  return (
    <div>
        <Headernobut></Headernobut>
      <h2>Create Movie</h2>
      <div className='box'>
        <label>Movie Name:</label>
        <textarea value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className='box'>
        <label>Movie Time:</label>
        <textarea value={time} onChange={(e) => setTime(e.target.value)} />
      </div>
      <div className='box'>
        <label>Movie Year:</label>
        <textarea value={year} onChange={(e) => setYear(e.target.value)} />
      </div>
      <div className='box'>
        <label>Movie Rating:</label>
        <textarea value={rating} onChange={(e) => setRating(e.target.value)} />
      </div>
      <div className='box'>
        <label>Movie Director:</label>
        <textarea value={director} onChange={(e) => setDirector(e.target.value)} />
      </div>
      <div className='box'>
        <label>Movie Actors:</label>
        <textarea value={actors} onChange={(e) => setActors(e.target.value)} />
      </div>
      <div className='box'>
        <label>Movie Types:</label>
        <textarea value={types} onChange={(e) => setTypes(e.target.value)} />
      </div>
      <div className='box'>
      <label>Resim:</label>
      <input type="file" name='image' onChange={(e) => setImage(e.target.files[0])}/>
      </div>
      {errorMessage && <p style={{ color: 'red', fontSize: '12px' }}>This movie is already created</p>}
      <button onClick={handleCreateMovie}>Create Movie</button>
    </div>
  );
};

export default CreateMovie;