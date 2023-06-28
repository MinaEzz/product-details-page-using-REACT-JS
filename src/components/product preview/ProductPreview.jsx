import React from 'react'
import "./style.css"
import FavoriteIcon from '@mui/icons-material/Favorite';

function ProductPreview(props) {
  return (
    <div className="col col-lg-6 col-12">
        <div className="product-preview">
            <img src={props.previewImg} alt="product preview" />
            {
            props.timeMood ? 
            <div className="time-data">
              <p>
                {`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`}
              </p>
            </div>
            :
            <div className="heart-rate-data">
                <FavoriteIcon/>
                <p>78</p>
            </div>
            }
    </div>
  </div>
  )
}

export default ProductPreview