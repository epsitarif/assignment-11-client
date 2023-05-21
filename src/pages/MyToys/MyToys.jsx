import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toy, setToy] = useState([]);

  const url = `https://assignment-11-server-indol-eta.vercel.app/toys?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToy(data));
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you want to delete the toy?");
    if (proceed) {
      fetch(`https://assignment-11-server-indol-eta.vercel.app/toys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = toy.filter((toy) => toy._id !== id);
            setToy(remaining);
          }
        });
    }
  };

  const handleConfirm = (id) => {
    fetch(`https://assignment-11-server-indol-eta.vercel.app/toys/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = toy.filter((toy) => toy._id !== id);
          const updated = toy.find((toy) => toy._id === id);
          updated.status = "confirm";
          const newToy = [updated, ...remaining];
          setToy(newToy);
        }
      });
  };

  return (
    <div>
      <h2 className="text-5xl">my toys: {toy.length} </h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Toys</th>
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
            {toy.map((toy) => (
              <MyToysRow
                key={toy._id}
                toy={toy}
                handleDelete={handleDelete}
                handleConfirm={handleConfirm}
              ></MyToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
