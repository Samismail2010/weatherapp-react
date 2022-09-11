import React from 'react';

const api = {
  key: 'c318a6ab465ab8178b37fae6d51829e2',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
          type="text"
          className='search-bar'
          placeholder="Search..."
           />
        </div>

      </main>
      
    </div>
  );
}

export default App;
