import { useEffect, useState } from "react";

const useParts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('https://polar-shelf-14291.herokuapp.com/singleParts')
            .then(res => res.json())
            .then(data => setParts(data));
    }, []);
    return [parts]
}

export default useParts;

