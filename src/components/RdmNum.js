function RdmNum (props){
    return <div className = "idCard-border">Random value between {props.min} and {props.max} => {Math.floor(Math.random() * (props.max - props.min) + props.min)} </div>
}

export default RdmNum;