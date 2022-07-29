import React from "react";

import downloadIcon from '../icons/download_icon.svg';
import "../styles/SongItem.css";

export default function SongItem({
  artist,
  title,
  path
}) {
  return (
    <div className="song-item">
      <a href={`/playlist/${path}`} className="play-link">
        <div className="song-info">
          <span className="title">{title}</span>
          <span className="artist">{artist}</span>
        </div>
      </a>
      <a download href={`/playlist/${path}`} className="download-link">
        <img src={downloadIcon} className='download-icon' alt=""></img>
      </a>
    </div>
  );
}