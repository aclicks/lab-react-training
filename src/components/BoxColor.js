function BoxColor({ r, g, b }) {
  const color = `rgb(${r},${g},${b})`;
  const hexaDecimal =
    '#' +
    '0' +
    r.toString(16).substr(-2) +
    g.toString(16).substr(-2) +
    b.toString(16).substr(-2);
  
  return (
    <div
      style={{ backgroundColor: `${color}`, color: `black` }}
      className="idCard-border BoxColor"
    >
      <p>
        rgb({r},{g},{b})
      </p>
      <p>{hexaDecimal}</p>
    </div>
  );
}

export default BoxColor;
