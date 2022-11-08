import master from '../assets/images/master.png';
import visa from '../assets/images/visa.png';

function CreditCard(props) {
  let source = '';
  let expM = '';
  if (props.type === 'Visa') source = visa;
  else source = master;

  if (props.expirationMonth < 10) expM = '0' + props.expirationMonth;
  else expM = props.expirationMonth;

  return (
    <div
      className="CreditCard"
      style={{ backgroundColor: `${props.bgColor}`, color: `${props.color}` }}
    >
      <div className="type">
        <img src={source} />
      </div>
      <div className="number">{'\u2022'}{'\u2022'}{'\u2022'}{'\u2022'} {'\u2022'}{'\u2022'}{'\u2022'}{'\u2022'} {'\u2022'}{'\u2022'}{'\u2022'}{'\u2022'} {props.number.slice(12,17)}</div>
      <div className="expires-bank">
        Expires {expM}/{props.expirationYear} {props.bank}
      </div>
      <div className="owner">{props.owner}</div>
    </div>
  );
}

export default CreditCard;
