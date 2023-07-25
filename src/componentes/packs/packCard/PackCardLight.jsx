import './packcard.css'

const PackCardLight = ({ icon,packname, packtext }) => {
  return (
    <div className='packCard light'>
      <div className="packCardContent">
      <i className='packicon'><img src={icon} alt="" /></i>
      <h3>{packname}</h3>
      <h4>{packtext}</h4>
      </div>
    </div>
  )
}

export default PackCardLight