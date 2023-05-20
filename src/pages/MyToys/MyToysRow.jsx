import React from 'react';

const MyToysRow = ({toy, handleDelete, handleConfirm}) => {
    const {_id, image, name, price, quantity, rating, seller, sellerEmail, subCategory, status} = toy;
    
    return (
      <tr>
      <th>
        
      </th>
      <td>
        <div className="avatar">
          
            <div className="rounded w-24 h-24">
              { image && <img src={image} alt="Avatar Tailwind CSS Component" />}
            </div>
          </div>
      </td>
      <td>{name}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>{rating}</td>
      <td>{seller}</td>
      <td>{sellerEmail}</td>
      <td>{subCategory}</td>
      <th>
      <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
      </th>
      <th>
        {
            status === 'confirm' ? <span className='font-bold text-primary'>Confirmed</span> :
            <button onClick={()=> handleConfirm(_id)} className="btn btn-success">Please Confirm</button>}
</th>
    </tr>
    );
};

export default MyToysRow;