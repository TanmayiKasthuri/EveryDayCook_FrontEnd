import React from 'react';

const ImageComponent = ({ image_url, name }) => (
  <div className="image-div" style={{ background: '#eee url(' + image_url + ')' }}>
    {/* <img className='card-img-top' src={image_url} alt={name} /> */}
  </div>
);

export default ImageComponent;
