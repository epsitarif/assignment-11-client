import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const getData = useLoaderData();
    console.log(getData);
    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-5 mb-5 ml-80">
  <figure><img src={getData.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h1 className="card-title font-bold">{getData.name}</h1>
    <h3 className='font-bold mt-3'>Seller Name: {getData.seller}</h3>
    <h3 className='font-bold'>Email: {getData.sellerEmail}</h3>
    <h3 className='font-bold'>Price: ${getData.price}</h3>
    <p className='font-bold'>Sub Category: {getData.subCategory}</p>
    <p>{getData.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default ViewDetails;