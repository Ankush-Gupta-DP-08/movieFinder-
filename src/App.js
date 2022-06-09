// import logo from÷÷'./logo.svg';
// import { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=532bcfc2";
  const [movies, setMovies] = useState([]); 
  const fetchTitle = async(title) => {
  
    const response = await fetch(`${API_URL}&s=${title}`); 

    const data = await response.json();
    // console.log(data.Search); 
    setMovies(data.Search); 
    
  }
  
  const [inputValue, setInputValue] = useState(""); 

  useEffect(() => {
    fetchTitle(inputValue)
    // console.log(inputValue);  
  }, [inputValue])


  // let myName = "Ankush Gupta"; 

  const Card = ({Title, Type, Year}) => {
    return (
      <>
        <p>Title: {Title}</p>
        <p>Year: {Year}</p>
        <p>Type: {Type}</p>
      </>
    )
  }
  let cnt = 1;
  // Adding this comment, lets see if it makes it
  return (
   <>
    <h1>Movie LAND</h1>

    <div>
    <input value= {inputValue}
      onChange={(e) => {setInputValue(e.target.value)}}
    />
    <button onClick={() => console.log("From button: ", inputValue)}>Search</button>

    {
      movies?.length ? 
      movies.map((movie) => (
          <Card key ={cnt++} Title={movie.Title} Year={movie.Year} Type={movie.Type}/>
      ))
      :
      <h1>Oops Nothing Found!!!</h1>
    }
    </div>
   </>
  )
}

export default App;
