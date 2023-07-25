import './packcard.css'

const PackCard = ({ icon, packname, packtext  }) => {
  return (
    <div className='packCard'>
      <div className="packCardContent">
      <i className='packicon'><img src={icon} alt='icon' /></i>
      <h3>{packname}</h3>
      <h4>{packtext}</h4>
      </div>
    </div>
  )
}

export default PackCard