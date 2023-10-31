import shoe1 from "./Components/Assets/Imgs/gallery1.svg";
import shoe2 from "./Components/Assets/Imgs/gallery2.svg";
import shoe3 from "./Components/Assets/Imgs/gallery3.svg";
import shoe4 from "./Components/Assets/Imgs/gallery4.svg";
import aboutshoe1 from './Components/Assets/Imgs/RunningShoe1.svg'
import aboutshoe2 from './Components/Assets/Imgs/RunningShoe2.svg'
import aboutshoe3 from './Components/Assets/Imgs/RunningShoe3.svg'
import aboutshoe4 from './Components/Assets/Imgs/RunningShoe4.svg'
import categoriesshoe1 from "./Components/Assets/Imgs/categoriesShow1.svg";
import categoriesshoe2 from "./Components/Assets/Imgs/categoriesShow2.svg";
export const shoescategories=[
    {img:categoriesshoe1,about:"Lifestyle Shoes"},
    {img:categoriesshoe2,about:"Basketball Shoes"},
    {img:categoriesshoe1,about:"Lifestyles Shoes"},
    {img:categoriesshoe2,about:"Basketballs Shoes"},

]
export const shoesData = [
  {
    id: 1,
    thumbNailImg: shoe1,
    title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
    aboutProduct: {
      aboutTitle: "Shadow Navy / Army Green",
      aboutOffers:
        "This product is excluded from all promotional discounts and offers.",
      aboutusPoints: [
        "Pay over time in interest-free installments with Affirm, Klarna or Afterpay.",
        "Join adiClub to get unlimited free standard shipping, returns, & exchanges.",
      ],
    },
    // shoeImg:[aboutshoe1,aboutshoe2,aboutshoe3,aboutshoe4],
     typesOfcolor:[
        {key0:[aboutshoe1,aboutshoe2,aboutshoe3,aboutshoe4]},
     {key1:[aboutshoe1,aboutshoe2,aboutshoe3,aboutshoe4]},
    ],
     
     color:["#232321","#707E6E"],
     favourties:false,
     gender:'Male',
     type:"sports_shoes"
  },
  {
    id: 2,
    thumbNailImg: shoe2,
    title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
    aboutProduct: {
      aboutTitle: "Shadow Navy / Army Green",
      aboutOffers:
        "This product is excluded from all promotional discounts and offers.",
      aboutusPoints: [
        "Pay over time in interest-free installments with Affirm, Klarna or Afterpay.",
        "Join adiClub to get unlimited free standard shipping, returns, & exchanges.",
      ],
    },
     typesOfcolor:[
        {key0:[aboutshoe1,aboutshoe2,aboutshoe3,aboutshoe4]},
     {key1:[aboutshoe1,aboutshoe2,aboutshoe3,aboutshoe4]},
    ],
     
     color:["#232321","#707E6E"],
     favourties:false,
     gender:'Male',
     type:"Golf_shoes"
  },
  {
    id: 3,
    thumbNailImg: shoe3,
    title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
    aboutProduct: {
      aboutTitle: "Shadow Navy / Army Green",
      aboutOffers:
        "This product is excluded from all promotional discounts and offers.",
      aboutusPoints: [
        "Pay over time in interest-free installments with Affirm, Klarna or Afterpay.",
        "Join adiClub to get unlimited free standard shipping, returns, & exchanges.",
      ],
    },
     typesOfcolor:[
        {key0:[aboutshoe1,aboutshoe2,aboutshoe3,aboutshoe4]},
     {key1:[aboutshoe1,aboutshoe2,aboutshoe3,aboutshoe4]},
    ],
     
     color:["#232321","#707E6E"],
     favourties:false,
     gender:'Female',
     type:"Hiking_shoes"
  },
  {
    id: 4,
    thumbNailImg: shoe4,
    title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
    aboutProduct: {
      aboutTitle: "Shadow Navy / Army Green",
      aboutOffers:
        "This product is excluded from all promotional discounts and offers.",
      aboutusPoints: [
        "Pay over time in interest-free installments with Affirm, Klarna or Afterpay.",
        "Join adiClub to get unlimited free standard shipping, returns, & exchanges.",
      ],
    },
     typesOfcolor:[
        {key0:[aboutshoe1,aboutshoe2,aboutshoe3,aboutshoe4]},
     {key1:[aboutshoe1,aboutshoe2,aboutshoe3,aboutshoe4]},
    ],
     
     color:["#232321","#707E6E"],
     favourties:false,
     gender:'Male',
     type:"Casual_shoes"
  },
];
 export const shoesTypes=['Casual shoes','Runners','Hiking']

