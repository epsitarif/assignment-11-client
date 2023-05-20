import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toy, setToy] = useState([]);

    const url = `http://localhost:5000/toys?email=${user.sellerEmail}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])

    return (
        <div>
            <h2 className="text-5xl">Amr toys amake dee: </h2>
        </div>
    );
};

export default MyToys;