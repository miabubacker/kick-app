import React, { useRef, useState } from 'react'
import './Categories.scss'
 import buttonRight from '../Assets/iconsImg/chevron_forward.svg'
 import buttonLeft from '../Assets/iconsImg/leftbtn.svg'
  import shoe1 from '../Assets/Imgs/categoriesShow1.svg'
  import shoe2 from '../Assets/Imgs/categoriesShow2.svg'
   import rightArrow from '../Assets/iconsImg/arrowtright_up.svg'
export default function Categories() {
     const shoes=[
        {img:shoe1,about:'Lifestyle Shoes'},
        {img:shoe2,about:'Basketball Shoes'},
        {img:shoe1,about:'Lifestyle Shoes'},
        {img:shoe2,about:'Basketball Shoes'},
    ]
     const sliderRef= useRef(null)
      const[lengthimg,setLengthIMg]=useState(0)
      const scrollAmount=650;
      const scrollShoes=(moves)=>{
         if(moves==='left'){
            if(window.innerWidth>=650){
            const container = sliderRef.current;
            container.scrollLeft -= scrollAmount;
             setLengthIMg(container.scrollLeft -= scrollAmount)
            }
            else{
                const container = sliderRef.current;
                
                container.scrollLeft -= 100;
                 setLengthIMg(container.scrollLeft -= window.innerWidth) 
            }
         }
          else{
            if(window.innerWidth>=650){
            const container = sliderRef.current;
            container.scrollLeft += scrollAmount;
            setLengthIMg(container.scrollLeft += scrollAmount)
            }
            else{
                const container = sliderRef.current;
                 console.log(container)
                // container.scrollLeft += container;
                 setLengthIMg( container.scrollLeft += window.innerWidth) 
            }
          }
         
      }
    console.log(lengthimg)
    //   const  imgContainer= window.innerWidth >= 650 ? scrollShoes() : mobilescroll();
    
  return (
    <>
    <section className='categoriesContainer'>
<div className='header'>
<div className='categoriesTitle'>Categories</div>
<div className='buttonContainer'>
    <button onClick={()=>{scrollShoes('left')}}  disabled={lengthimg===0|| lengthimg===-48} className={lengthimg===0|| lengthimg===-48?'disabled':'view'}>
        <img  style={{transform:'rotate(-180deg'}}src={buttonLeft} />
        </button>
    <button disabled={lengthimg===1300} className={lengthimg===1300?'disabled':'view'} onClick={()=>{scrollShoes('right')}}><img src={buttonRight}/></button>
    </div>
</div>
<div className='ShoesContainer' ref={sliderRef}>
    {shoes.map((data,index)=><div  className='showsMain' key={index}>
        <div className='shoeimgContainer'><img src={data.img}/></div>
        <div className='aboutAndIcon'>
        <div className='aboutshoes'>{data.about}</div>
        <div className='ArrowIcon'><img src={rightArrow}/></div>
        </div>
    </div>)}
</div>
    </section>
    </>
  )
}
