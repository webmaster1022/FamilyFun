import React from 'react';
import './mainlists.css';


import { ShopByCategory } from './shopbycategory/shopbycategory';
import { HomepageSingleProductListUi } from './homepagesingleproductlistui/homepagesingleproductlistui';
import { NavLink } from 'react-router-dom';
import { Loading } from '../../animation/loading';
import { SingleEventUi } from '../../eventspage/eventslist/singleeventui'

export class MainLists extends React.Component {
  render() {
   
    const newPopularList=[
      {
        title:"New Robe Fille Enfant Daughter Princess Black Striped Dress Casual Family Clothes Girls Long Dresses Baby Costume Clothing",
        imageSrc:"https://cdn.shopify.com/s/files/1/0002/2983/4764/products/product-image-426541472.jpg?v=1519085536",
        variants:[{price: "12.48"}],
        id:"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzE5NDg5Mzc0MjA5Mg==",
      },
      {
        imageSrc:"https://cdn.shopify.com/s/files/1/0002/2983/4764/products/product-image-426543524_a260e501-2abe-4091-a1a5-b64cfb2b3742.jpg?v=1519086592",
        title:"Family Cute Mother Children Long Sleeve T-shirt Tops Blouse Matching Outfit For Kids",
        variants:[{price:'13.92'}],
        id:"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzE5NDkwMTI0NTk2NA==",
      },
    
      {
        imageSrc:"https://cdn.shopify.com/s/files/1/0002/2983/4764/products/product-image-349483725_9591a4a8-632c-467c-a471-0104f4afff51.jpg?v=1519086591",
        title:"Parenting father son clothes Toddler Infant Baby Kids Girls Boys Letter Printing T-Shirt Top Blouse Clothes Drop ship",
        variants:[{price:"7.06"}],
        id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzE5NDkwMTI3ODczMg==",
      },
    
      {
        imageSrc:"https://cdn.shopify.com/s/files/1/0002/2983/4764/products/product-image-349932559.jpg?v=1519086593",
        title:"Family Match Clothes Skirts Mommy and Me Women Skirt High Waist Slim Party Pencil Skirt drop sihpping",
        variants:[{price:'10.42'}],
        id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzE5NDkwMTQ3NTM0MA==",
      },
    
      {
        imageSrc:"https://cdn.shopify.com/s/files/1/0002/2983/4764/products/product-image-432527166_164a3f60-e1f5-4f34-8792-4fc3b7636af8.jpg?v=1519086592",
        title:"Daughter Skinny Printed Stretchy Yoga Pants Leggings Family Tights Clothes Girls Workout Pants #E0",
        variants:[{price:'6.72'}],
        id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzE5NDkwMTczNzQ4NA=="
      },
      {
        imageSrc:"https://cdn.shopify.com/s/files/1/0002/2983/4764/products/product-image-471673125.jpg?v=1519086593",
        title:"Matching Skeleton Family Outfits - Halloween Christmas",
        variants:[{price:'50.58'}],
        id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzE5NDkwMTgwMzAyMA=="
      }
    
    ]

    const newCollectionList=[
      {
    imageSrc:"https://cdn.shopify.com/s/files/1/0002/2983/4764/collections/Gagget.jpeg?v=1519087361",
    title:"All"
    },
    {
    
    imageSrc:"https://cdn.shopify.com/s/files/1/0002/2983/4764/collections/download-whole_family.jpeg?v=1519087475",
    title:"Whole Family"
    },
    {imageSrc:"https://cdn.shopify.com/s/files/1/0002/2983/4764/collections/mummy.jpeg?v=1519087572",
    title:"Parents-Girls"},
    
    {imageSrc:"https://cdn.shopify.com/s/files/1/0002/2983/4764/collections/daddy.jpeg?v=1519087616",
    title:"Parents-Boys"},
    {imageSrc:"https://cdn.shopify.com/s/files/1/0002/2983/4764/collections/download.jpeg?v=1519087670",
    title:"Just For Fun"},
    {
      imageSrc:"https://cdn.shopify.com/s/files/1/0002/2983/4764/collections/product-image-520937854_large_4de739c5-d87a-4996-9615-9df5e223a4d4.jpg?v=1521020797",
    title:"Gadgets"
    }
    
    ]

    

    return (
      <main className="homepage-main-container">

        

        <div className="title1">
          <p>Shop by category</p>
        </div>

        <div className="shopbycategory">

          {newCollectionList.map((element) => <ShopByCategory product={element} key={element.imageSrc} />)}

        </div>

        <div className="title1">
          <p>Most popular products</p>
        </div>

         <div className="popular-product-list">
          {newPopularList.map(element => <HomepageSingleProductListUi product={element} key={element.id} />)}

        </div>

        <div className="see-more-1">
          <NavLink className="active" to="products/list/category=All&price=All&shipping=All&sortValue=1&searchTerm=">See more ></NavLink>
        </div>
        
<div className="eventslist-container">
        <div className="title1">
          <p>Fresh on our events</p>
        </div>

   

        <div className="events-list">
       

          {this.props.eventsList[0].title?this.props.eventsList.slice(0,3).map(element => <SingleEventUi event={element} key={element.title} />):<Loading/>}
        </div>
</div>
      </main>

    )
  }
}


