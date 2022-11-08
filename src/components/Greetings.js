function Greetings(props) {
    /* se props.lang === "de" => Hallo */
    /* se props.lang === "fr => bonjour */
    if (props.lang === "de"){
      return <div className="idCard-border">
        Hallo {props.children}
      </div>;
    }
    if (props.lang === "fr"){
      return <div className="idCard-border">
        Bonjour {props.children}
      </div>;
    }
    
  }
  
  export default Greetings;  