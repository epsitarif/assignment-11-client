import About from "../About/About";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import PToys from "../PToys/PToys";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <About></About>
            <PToys></PToys>
        </div>
    );
};

export default Home;