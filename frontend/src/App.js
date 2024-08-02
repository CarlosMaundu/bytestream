import React from 'react';
import VideoList from './components/VideoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ByteStream Video Streaming</h1>
      </header>
      <main>
        <VideoList />
      </main>
    </div>
  );
}

export default App;

