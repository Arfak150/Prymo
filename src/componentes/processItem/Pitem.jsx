import './pitem.css'

const Pitem = ({ icon , name , text }) => {
  return (
    <div className='pItem'>
      <img src={icon} alt='icon' />
      <h3>{name}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Pitem