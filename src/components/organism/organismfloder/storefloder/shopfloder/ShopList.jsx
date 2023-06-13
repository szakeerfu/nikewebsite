 import React from 'react';
 import { useSelector,useDispatch } from 'react-redux';
 import './Shop.css'
 import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
 import  {cardToAdd} from '../../../../../features/cartSlice'
 
 
 const ShopList = ( ) => {
  
  const items = useSelector((state) => state.allCart.items);
  const dispatch = useDispatch()
 
   return (
   
    <div className='mainclass'>

 
     <div className='mapclass'>
    
    
      
      {
        items.map((item, index)=>(
          <div className='container'  key={index} > 
          <div className='card'>
            
          <div className='imgBx'  >
            <img src={item.productImage} alt="img"  />
            
              <div className='contentBx'>
                <h2>{item.productName}</h2>
                <div className='size'>
                <p> ${item.price}</p>

                </div>
                <div className="color">
                   <h3>Color :</h3>
                     <span></span>
                   <span></span>
                    <span></span>
                </div>
               <div  className='  cardbutton '>
                <button onClick={()=> dispatch (cardToAdd(item))}>
                   <p>
                    SHOP NOW
                   </p>
                  <ShoppingBagOutlinedIcon  style={{color:"greenyellow"}} className='logo'/>
                </button>
                </div>


              </div>
          </div>
          </div>
          </div>
        ))
      

      }
 
     </div>
     </div>
   )
 }
 
 
 export default ShopList

















//  import axios from "axios";
// import { useState } from "react";
//  const Store = () => {

//   const [data,setData] = useState([])

 

// const options = {
//   method: 'GET',
//   url: 'https://kohls.p.rapidapi.com/products/list',
//   params: {
//     limit: '24',
//     offset: '1',
//     dimensionValueID: 'AgeAppropriate:Teens'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'b54d04d2demsha515701d3de8e25p198a40jsn47100c146abb',
//     'X-RapidAPI-Host': 'kohls.p.rapidapi.com'
//   }
// };

// try {
// 	  axios.request(options).then((response)=>{
//       console.log(response.data.payload.products);
//       // setData(response.data.payload.products)
     

//     });
	 
// } catch (error) {
// 	console.error(error);
// }




//    return (
//     <>
//     <div>
//       {
//         data.map((e, id)=>{
//           const {image} = data;
//           return (
//             <div key={id}>
//               <img src={image} alt="img"   />
//             </div>

//           )
//         }

         
            
//         )
//       }
//     </div>
//     </>
//    )
     
   
//  }
 
//  export default Store