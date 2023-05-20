import Swal from "sweetalert2";

const AddToys = () => {
    const handleAddToys = event => {
        event.preventDefault();

        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const seller = form.seller.value;
        const email = form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;

        const newToys = {photo, name, seller, email, category, price, rating, quantity, details}
        console.log(newToys);

        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToys)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Toy Added Successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                })
            }
        })
    }


  return (
    <div className="bg-[#F4F3F0] p-20">
      <h1 className="text-5xl font-bold text-center">Add Your Toy</h1>
      <form onSubmit={handleAddToys}>
        {/* photo and row */}
        <div className="flex mb-6 mt-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
                
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ml-8 md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
                
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* seller name and email row */}
        <div className="flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <label className="input-group">
                
              <input
                type="text"
                name="seller"
                placeholder="Seller Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ml-8 md:w-1/2">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <label className="input-group">
                
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* sub category and price row */}
        <div className="flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Sub Category</span>
            </label>
            <label className="input-group">
                
              <input
                type="text"
                name="category"
                placeholder="Sub Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ml-8 md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
                
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* rating and available quantity row */}
        <div className="flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
                
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ml-8 md:w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
                
              <input
                type="text"
                name="quantity"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* details and description row */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Details and Description</span>
            </label>
            <label className="input-group">
                
              <input
                type="text"
                name="details"
                placeholder="Details and Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add Toys" className="btn btn-block"/>
      </form>
    </div>
  );
};

export default AddToys;
