import './packcard.css'
import Star from '../../../assets/icons/star.svg'
import PackItem from './PackItem'

const PackCardLight = ({ icon,packname, packtext, price, items }) => {
  return (
    <div className='packCard light'>
      <div className="packCardContent">
      <i className='packicon'><img src={icon} alt="" /></i>
      <h3>{packname}</h3>
      <h4>{packtext}</h4>
      <br/>
        {items}
      </div>
      <strong> <b>{price}</b> </strong>
    </div>
  )
}

export default PackCardLight