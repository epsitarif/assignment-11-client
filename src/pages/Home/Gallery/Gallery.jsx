import img from '../../../assets/images/gallery/gallery.jpg'
const Gallery = () => {
    return (
        <div>
            <h1 className='text-center font-bold mt-10 mb-3'>Our Toys Gallery</h1>
            <img className='w-full rounded-xl' src={img} alt="" />
        </div>
    );
};

export default Gallery;