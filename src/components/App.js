// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
  const [randomDogImage, setRandomDogImage] = useState(null);
  const [loadingText, setLoadingText] = useState(true);

  useEffect(() => 
  {
    // fetch request to the API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        setRandomDogImage(data.message);
        setLoadingText(false); 
      })

  }, []); 

  return (
    <div>
      <h1>Random Dog Image</h1>
      {loadingText ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img src={randomDogImage} alt="A Random Dog" />
        </div>
      )}
    </div>
  );
}

export default App;
