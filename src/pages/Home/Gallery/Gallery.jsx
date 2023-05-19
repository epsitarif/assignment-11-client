import gallery1 from "../../../assets/images/gallery/gallery1.jpg";
import gallery2 from "../../../assets/images/gallery/gallery2.jpg";
import gallery3 from "../../../assets/images/gallery/galley3.jpg";
import gallery4 from "../../../assets/images/gallery/gallery4.jpg";
import gallery5 from "../../../assets/images/gallery/gallery5.jpg";
import gallery6 from "../../../assets/images/gallery/gallery6.jpg";
const Gallery = () => {
  return (
    <div className="">
      <div className="card bg-base-100 shadow-xl grid grid-cols-6 mx-auto m-5">
        <figure>
          <img className="w-96" src={gallery1} alt="Shoes" />
        </figure>
        <figure>
          <img src={gallery2} alt="Shoes" />
        </figure>
        <figure>
          <img src={gallery3} alt="Shoes" />
        </figure>
        <figure>
          <img src={gallery4} alt="Shoes" />
        </figure>
        <figure>
          <img src={gallery5} alt="Shoes" />
        </figure>
        <figure>
          <img src={gallery6} alt="Shoes" />
        </figure>
      </div>
    </div>
  );
};

export default Gallery;
