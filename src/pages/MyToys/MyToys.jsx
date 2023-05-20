import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyToysRow from './MyToysRow';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toy, setToy] = useState([]);

    const url = `http://localhost:5000/toys?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToy(data));
    }, [])

    return (
        <div>
            <h2 className="text-5xl">my toys: {toy.length} </h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Ouantity</th>
        <th>Ratings</th>
        <th>Seller Name</th>
        <th>Email</th>
        <th>Sub Category</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        toy.map(toy => <MyToysRow
        key={toy._id}
        toy={toy}
        ></MyToysRow>)
      }
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default MyToys;