import React, { useEffect, useState } from 'react';

import SongsContainer from './components/SongsContainer';
import SongItem from './components/SongItem';
import './styles/App.css';

function App() {
  const [songs, setSongs] = useState([]);
  const [sortBy, setSortBy] = useState("artist");
  const [reverseSort, setReverseSort] = useState(false);

  useEffect(() => {
    fetch("/playlist")
      .then(res => res.json())
      .then(songsDict => setSongs(Object.values(songsDict)))
  }, []);

  return (
    <SongsContainer>
      {songs.sort((a, b) => {
        if (a[sortBy].toLowerCase() > b[sortBy].toLowerCase()) return (-1) ** reverseSort;
        if (a[sortBy].toLowerCase() < b[sortBy].toLowerCase()) return (-1) ** !reverseSort;
        return 0;
      }).map(song => <SongItem {...song} />)}
    </SongsContainer>
  );
}

export default App;
