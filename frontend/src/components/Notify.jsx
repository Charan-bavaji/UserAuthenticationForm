import { React, useState, useEffect } from 'react';

const Notify = ({ response, notify }) => {
    const [shoepop, setShowpop] = useState(false);
    useEffect(() => {

        setShowpop(true);
        setTimeout(() => {
            setShowpop(false);
        }, 5000);
    }, []);

    return (
        <>
            {
                shoepop && !notify ? <span className=" absolute bottom-12 bg-[#faf1e2] text-red-500 py-3 px-3 rounded-3xl">{response}</span> : <span></span>
            }
        </>
    )
}

export default Notify
