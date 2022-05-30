import { useEffect, useState } from "react";

const useParts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/singleParts')
            .then(res => res.json())
            .then(data => setParts(data));
    }, []);
    return [parts]
}

export default useParts;
