import React, { useState } from 'react';

function ClickablePicture() {
    
    const [pic, setPic] = useState(0);

    let picture = [];
    picture.push(props.img);
    picture.push(props.imgCLicked);

    function setPicture (){
        let click = picture.shift();
        picture.push(click);
    }
    
    return (
        <img src={{picture[0]}} onClick={() => setPicture()} />
    );
}

export default ClickablePicture;