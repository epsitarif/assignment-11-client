  import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const ShopByCategory = () => {
  
    const AllToys = () => {
        const [toys, setToys] = useState([]);
      
        useEffect(() => {
          fetch("http://localhost:5000/toys")
            .then((res) => res.json())
            .then((data) => console.log(data));
        }, []);
    }
  return (
    <Tabs>
      <TabList className="flex">
        {toys.map((toys, index) => (
          <Tab key={index} className="p-4 cursor-pointer">
            {toys.name}
          </Tab>
        ))}
      </TabList>

      {toys.map((toys, index) => (
        <TabPanel key={toys}>
          <h2 className="text-2xl font-bold mb-4">{toys.name}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {category.products.map((product, index) => (
              <div className="grid grid-cols-2 gap-5">
                <div
                  key={index}
                  className="bg-white border border-gray-300 p-4"
                >
                  <img
                    src={img1}
                    alt={product.name}
                    className="w-full h-40 object-cover mb-2"
                  />
                  <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                  <p className="mb-2">Price: {product.price}</p>
                  <p className="mb-2">Rating: {product.rating}</p>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded">
                    View Details
                  </button>
                </div>
                <div
                  key={index}
                  className="bg-white border border-gray-300 p-4"
                >
                  <img
                    src={img2}
                    alt={product.name}
                    className="w-full h-40 object-cover mb-2"
                  />
                  <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                  <p className="mb-2">Price: {product.price}</p>
                  <p className="mb-2">Rating: {product.rating}</p>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default ShopByCategory;   