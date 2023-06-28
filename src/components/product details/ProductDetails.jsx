import React from 'react'
import "./style.css"

function ProductDetails(props) {
  // color options
  const colorOptions = props.colorOptions.map((color, index) =>{
    const classArr = []
    if(index === props.active) classArr.push("active") 
    return(
      <li key={index} className={classArr.join(" ")} onClick={()=>props.onColorClick(index)}>
          <img
            src={color.imageUrl}
            alt={color.styleName}
          />
        </li>
    )
  })
  // feature buttons
  const featureBtns = props.featureBtns.map((feature, index)=>{
  const classArr = ["btn"]
  if(index === 0) classArr.push("time-btn") 
  else if (index === 1) classArr.push("heart-rate-btn") 
    return(
      <button className={classArr.join(" ")} key={index} onClick={()=> props.onFeatureClick(index)}> {feature} </button>
    )
  })
  return (
    <div className="col col-lg-6 col-12">
    <div className="product-details">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <h3>select color</h3>
      <ul>
        {colorOptions}
      </ul>
      <h3>features</h3>
      <div className="features-butttons">
        {featureBtns}
      </div>
      <button className="btn buy-btn">buy now</button>
    </div>
  </div>
  )
}

export default ProductDetails