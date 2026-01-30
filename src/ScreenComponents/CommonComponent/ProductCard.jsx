import './productCardStyle.scss';
import vectorImage from '../../assets/Vector 2.svg'
import image1 from '../../assets/gunImage.png'
import ruppesIcon from '../../assets/fa_rupee.svg'
import ruppesIcon1 from '../../assets/fa_rupee (1).svg'

const ProductCard = ({ imgSrc, title, mainPrice, discountPrice }) => {
    return (
        <div className='productCardMainDiv container'>
            <div className='productCardImgDiv'>
                <img src={vectorImage} className='vectorImg' />
                <img src={imgSrc} className='gunImage' />
            </div>
            <div className='productcardSecondDiv'>
                <div className='productCardHeading'>{title}</div>
                <div className='productCardMainPrice d-flex align-items-center'><img src={ruppesIcon1} />{mainPrice}</div>
                <div className='productCardDiscountPrice d-flex align-items-center  '><img src={ruppesIcon} />{discountPrice}</div>
            </div>
        </div>
    )
}

export default ProductCard