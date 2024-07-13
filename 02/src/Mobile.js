import React from 'react';
import MobileList from './MobileList';
import book1 from './book1.json';
// const book1 =[{
//      image : 'https://www.shutterstock.com/image-vector/3d-high-quality-vector-mobile-260nw-2121419597.jpg',
//      title : 'REDMI 12',
//      price : 'Rs 12000'

// },
// {
//     image : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT223?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1693248280978',
//     title : 'Iphone 12',
//     price : 'Rs 120000'

// },
// {
//     image : 'https://i0.wp.com/cellbuddy.in/buddy/wp-content/uploads/2022/09/iphone7-1.jpg?fit=600%2C764&ssl=1',
//     title : 'Iphone 9',
//     price : 'Rs 20000'

// }
// ]


export default function Mobile() {
  return (
    <div>
        {book1.map((ele)=>{
            return     <MobileList image={ele.image} title={ele.title} price={ele.price}/>

        })}
    
    </div>
  )
}
