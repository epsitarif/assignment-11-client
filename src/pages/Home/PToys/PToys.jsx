import { useEffect, useState } from "react";

const PToys = () => {
    const [toy, setToy] = useState([]);

    useEffect( () =>{
        fetch('')
        .then(res => res.json())
        .then(data => setToy(data));
    }, [])
    return (
        <div className="mt-5">
            <div className="text-center">
                <h2 className="text-5xl font-bold text-red-600">Our Best Toys</h2>
                <p className="mt-2">Shop their favorite brands, characters,<br /> and more at your favorite childhood toy store!</p>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default PToys;