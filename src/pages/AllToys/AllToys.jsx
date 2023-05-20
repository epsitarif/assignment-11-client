import { useEffect, useState } from "react";
import AllToysTable from "./AllToysTable";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <div className="mb-5">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-2">All Toys</h2>
        <p>
          Welcome to our toy shop, where endless joy and imagination come to
          life! <br /> Discover a treasure trove of toys that will ignite the
          imagination of children and bring smiles to their faces.
        </p>
      </div>
      <div>
        {/* {
                    toys.map(toy => <AllToysTable
                    key={toy._id}
                    toy={toy}
                    ></AllToysTable>)
                } */}
        <div className="overflow-x-auto">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th>No.</th>
                <th>Seller</th>
                <th>Toy Name</th>
                <th>Sub Category</th>
                <th>Picture</th>
                <th>Available Quantity</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {toys.map((toy, index) => (
                <tr>
                  <th>{index+1}</th>
                  <td>{toy.seller}</td>
                  <td>{toy.name}</td>
                  <td>{toy.subCategory}</td>
                  <td><img className="rounded w-24 h-24" src={toy.image} alt="" /></td>
                  <td>{toy.quantity}</td>
                  <td><Link to={`/view/${toy._id}`} className="btn btn-accent">View Details</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
