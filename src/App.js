import React from 'react';
import AlbumLayout from './Components/AlbumLayout';
import SongsLayout from './Components/SongsLayout';

function App() {
  return (
    <div>
      <AlbumLayout headerLeft="Top Albums" headerRight="Collapse" fetchAPI="https://qtify-backend-labs.crio.do/albums/top"/>
      <AlbumLayout headerLeft="New Albums" headerRight="Collapse" fetchAPI="https://qtify-backend-labs.crio.do/albums/new"/>
      <SongsLayout/>
    </div>
  );
}

export default App;
