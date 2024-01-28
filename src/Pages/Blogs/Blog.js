import React from 'react';

const Blog = ({blog}) => {
    console.log(blog)
    return (
        <div>
        <div className="card md:max-w-96 bg-base-100 border rounded-none ">
          <figure className="px-10 pt-10">
            <img src={blog.img} alt="Shoes" className=" object-fill h-48" />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title">{blog?.name}</h2>
            <p>{blog?.description}</p>
          </div>
        </div>
      </div>
    );
};

export default Blog;