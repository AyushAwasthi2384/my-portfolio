import React, { useRef, useState } from 'react'
import { ReactTyped } from "react-typed";

export default function Navbar() {

    const [isTyped, setisTyped] = useState(true)
    const typed = useRef(null);


    return (
        <>
            <div className='nav' ref={typed} >
                {/* <ReactTyped strings={["ayush awasthi"]} typeSpeed={40} /> */}
                <ReactTyped
                    strings={[
                        "ayush awasthi"
                    ]}
                    typeSpeed={20}
                    backSpeed={90}
                    stopped={isTyped}
                />

            </div>
            <button onClick={() => setisTyped(false)}>Get Started</button>
        </>
    )
}
