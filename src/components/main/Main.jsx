import React, { useState } from 'react'
import "./style.css"
import ProductPreview from '../product preview/ProductPreview'
import ProductDetails from '../product details/ProductDetails'
import ProductData from "../../data"


function Main() {
  const [previewImg, setPreviewImg]  = useState(ProductData.colorOptions[0].imageUrl)
  const [active, setActive] = useState(0)
  const onColorClick = (index)=>{
    setPreviewImg (ProductData.colorOptions[index].imageUrl)
    setActive(index)
  }
  const [timeMood, setTimeMood] = useState(true)
  const onFeatureClick = (index)=>{
    if(index === 1) setTimeMood(false)
    else if (index === 0) setTimeMood(true)
  }
  return (
    <main>
      <div className="container">
        <div className="main-content">
          <div className="row">
            <ProductPreview previewImg={previewImg} 
            timeMood={timeMood} />
            <ProductDetails 
            colorOptions={ProductData.colorOptions} 
            featureBtns={ProductData.featureList} 
            title={ProductData.title} 
            description={ProductData.description} 
            onColorClick={onColorClick} 
            active={active} 
            onFeatureClick={onFeatureClick}
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main