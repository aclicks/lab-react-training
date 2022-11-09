import React, { useState } from 'react';

let colors = ['purple','blue','green','yellow','orange','red'];


function LikeButton() {
    
    const [count, setCount] = useState(0);
    const [color, setColor] = useState(0);

    
    function colorShift (){
        let color = colors.shift();
        colors.push(color);
    }    

    function changeState (){
        setCount(count + 1)
        setColor(colorShift())
    }
    
    return (
        <button onClick={() => changeState()} style={{backgroundColor: `${colors[0]}`}}><p>{count} Likes</p></button>
    );
}



export default LikeButton;