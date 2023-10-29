import React, { useState } from 'react'
import './NewDropShoes.scss'
import gallery1 from '../Assets/Imgs/gallery1.svg'
import gallery2 from '../Assets/Imgs/gallery2.svg'
import gallery3 from '../Assets/Imgs/gallery3.svg'
import gallery4 from '../Assets/Imgs/gallery4.svg'
import { useNavigate } from "react-router-dom";

export default function NewDropShoes() {
  const navigate = useNavigate();
     const[gallery,setGallery]=useState([{img:gallery1,content:"ADIDAS 4DFWD X PARLEY RUNNING SHOES",price:"$125"},
     {img:gallery2,content:"ADIDAS 4DFWD X PARLEY RUNNING SHOES",price:"$125"},
     {img:gallery3,content:"ADIDAS 4DFWD X PARLEY RUNNING SHOES",price:"$125"},
     {img:gallery4,content:"ADIDAS 4DFWD X PARLEY RUNNING SHOES",price:"$125"}
    ])
   
     const viewProduct=()=>{
      navigate("/Product_Page");
     }
  return (
   <>
   <section className='galleryContainer'>
<div className='gallery'>
{gallery.map((data,index)=><div className='galleryCardMain' key={index}>
<div className='gallerycard'>
<div className='newLeaf'>New</div>
<div className='imgContainer'><img src={data.img}/></div>
<div className='content'>{data.content}</div>
<button onClick={()=>{viewProduct()}}>View Product - <span className='amount'>{data.price}</span></button>
</div>

</div>
)}
</div>
   </section>
   </>
  )
}
