import React from 'react';

const ImageComponent = ({ image_url, name }) => (
  <div className="main-image">
    <img className='card-img-top' src={image_url} alt={name} />
  </div>
);

export default ImageComponent;
