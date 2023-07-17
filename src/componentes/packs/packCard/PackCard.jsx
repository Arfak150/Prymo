import './packcard.css'

const PackCard = ({ icon, packname, packtext, price, items  }) => {
  return (
    <div className='packCard'>
      <div className="packCardContent">
      <i className='packicon'><img src={icon} alt='icon' /></i>
      <h3>{packname}</h3>
      <h4>{packtext}</h4>
      <br />
        {items}
      </div>
      <strong> <b>{price}</b> </strong>
    </div>
  )
}

export default PackCard