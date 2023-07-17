import './packcard.css'
import FStar from '../../../assets/icons/fstar.svg'

const packitem = ({itemtext}) => {
  return (
    <div className='packItem'>
      <i><img src={FStar} alt="" /></i>
      <p>{itemtext}</p>
    </div>
  )
}

export default packitem