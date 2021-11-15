import { useEffect, useState } from 'react';

const useDrones = () => {
    const [drones, setDrones] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const size = 6;
    useEffect(() => {
        fetch(`http://localhost:5000/drones?size=${size}&&page=${currentPage}`)
            .then(res => res.json())
            .then(data => {
                setDrones(data.drones);
                const totalDronesData = data.count;
                const pages = Math.ceil(totalDronesData / size);
                setTotalPage(pages)
            })
    }, [currentPage]);
    return { drones, setDrones, totalPage, currentPage, setCurrentPage }
};

export default useDrones;