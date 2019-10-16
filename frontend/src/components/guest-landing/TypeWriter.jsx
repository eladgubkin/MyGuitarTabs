import React, { useState, useEffect, useRef } from 'react';
import useTypewriter from 'react-typewriter-hook';

const songs = [
  'Dust in the wind',
  'The Rolling Stones',
  'Hotel california',
  'Bohemian rhapsody',
  'David Bowie',
  'Wish you were here',
  'Blackbird',
  'Nothing else matters',
  'Sultan of swing',
  'Layla',
  'Comfortably numb',
  'Hey Jude',
  'Let it be',
  'Michael Jackson',
  'Smells like teen spirit',
  'Jimi Hendrix',
  'The Beatles',
  'Metallica',
  'Bob Marley'
];

let index = 0;

const TypeWriter = () => {
  const [magicName, setMagicName] = useState('Stairway to heaven');
  const intervalRef = useRef({});
  const name = useTypewriter(magicName);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      index = index + 1 > 18 ? 0 : ++index + 1;
      index = index > 18 ? 0 : ++index;
      setMagicName(songs[index]);
    }, 5000);
    return function clear() {
      clearInterval(intervalRef.current);
    };
  }, [magicName]);

  return (
    <div id="TypeWriter">
      <div className="underline">
        <h2 className="cursor">{name}</h2>
      </div>
    </div>
  );
};

export default TypeWriter;
