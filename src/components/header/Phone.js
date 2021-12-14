import phone from '../../images/phone.png';

function Phone() {
  return (
    <div className="phone">
      <img className="phone__icons" alt="phone" src={phone}></img>
      <a className="phone__links" href="tel:+79946643627">
        +7 994-664-36-27
      </a>
    </div>
  );
}
export default Phone;
