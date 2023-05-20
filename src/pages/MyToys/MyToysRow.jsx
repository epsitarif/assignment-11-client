import React from 'react';

const MyToysRow = ({toy}) => {
    const {image, name, price, quantity, rating, seller, sellerEmail, subCategory, description} = toy
    return (
      <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
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
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
    );
};

export default MyToysRow;