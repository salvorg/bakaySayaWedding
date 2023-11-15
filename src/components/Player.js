import React, {useRef, useState} from 'react';
import {PauseIcon, PlayIcon} from "@heroicons/react/20/solid";
import audioFile from '../assets/audio.mp3';

const Player = () => {
    const [play, setPlay] = useState(false);
    const ref = useRef(null);

    const toggleAudio = () => {
      if (play) {
          ref.current.pause();
          setPlay(false);
      } else {
          ref.current.play();
          setPlay(true);
      }
    };

    return (
        <div>
            <button type="button" className="player-btn" onClick={toggleAudio}>
                {!play ? (
                    <PlayIcon />
                ) : (
                    <PauseIcon />
                )}
            </button>
            <audio ref={ref} loop src={audioFile} />
        </div>
    );
};

export default Player;