import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";


const Home = () => {
    return (
        <div className="mx-12">
            <Banner></Banner>
            <Gallery></Gallery>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;