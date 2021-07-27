import React from 'react';
import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Home (props) {
    const header = React.createRef();
    
    useEffect(() => {
        gsap.to(header.current, {color: "#7fabfc", duration: 1.5, scale: 1.1, y: "2rem"})
    }, [header])

    return (
        <div className="container" style={{paddingBottom: "6rem"}}>
            <h1 ref={header}>Chore Chart</h1>
            
        </div>
    )
}