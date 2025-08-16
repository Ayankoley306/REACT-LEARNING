import React, { useEffect, useState } from 'react'


function Github() {
    const [data, setdata] = useState();
    useEffect(() => {
        fetch("https://api.github.com/user/Ayankoley306")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setdata(data);
            })
    }, [])
    return (
        <div className='bg-gray-100 text-orange-400 hover:text-orange-700 flex justify-center items-center text-2xl h-18 w-full'>Github followers: </div>
    )
}

export default Github