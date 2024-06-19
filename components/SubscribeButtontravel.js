import React from 'react';

const SubscribeButton = ({ ytmag }) => {
  // Construct the YouTube subscription link using the channelID from ytmag data
  const subscribeLink = `https://www.youtube.com/channel/${ytmag.channelid}?sub_confirmation=1`;

  const handleSubscribe = () => {
    window.open(subscribeLink, '_blank');
  };

  return (
    <button onClick={handleSubscribe}  style={{
      marginBottom: '10px',
      fontFamily: 'Poppins, sans-serif',
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#40D7BC',
      textShadow: '2px 5px 5px #000000'
    }}
   >
        <span style={{ fontSize: '40px' }}>👉</span> Please Click to Subscribe the Channel.
    
    </button>
  );
};

export default SubscribeButton;
