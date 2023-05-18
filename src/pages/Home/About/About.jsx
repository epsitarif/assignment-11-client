import dino from '../../../assets/images/about/about.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='lg:w-1/2'>
        <img src={dino} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
    <div className='lg:w-1/2 space-y-5 p-4'>
        <h3 className='text-3xl font-bold text-red-600'>About Our Toys</h3>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-outline btn-success">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default About;