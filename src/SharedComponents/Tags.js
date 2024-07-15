import React from 'react';

const Tags = ({ tags }) => (
  <div className="tags">
    {tags.map(tag => (
        <span href="#" class="btn btn-success btn-sm" key={tag}>{tag}</span>
        // <div  class="alert alert-primary" role="alert" key={tag}>
            
        //     {tag}
        // </div>

    ))}
  </div>
);

export default Tags;
