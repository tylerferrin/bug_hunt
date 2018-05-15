import React, { Component } from 'react';

const Redeem = () => (
    <div
      css={{
        height: '100vh',
        width: '100vw'
      }}
    >
      <iframe
        css={{
          height: '100%',
          width: '100%',
        }}
        name="Soundcard"
        src="https://www2.atozmedia.com/soundcard/embed.asp"
        frameBorder="0"
      >
      </iframe>
    </div>
  );

export default Redeem;
