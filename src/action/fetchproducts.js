import Client from 'shopify-buy';

const client = Client.buildClient({
    domain: 'mynewrainfun.myshopify.com',
    storefrontAccessToken: '7db4c7d5a86c66d886c96c6011440d88'
  });
export const fetchProducts=()=>{

    return (dispatch)=>{
        client.product.fetchAll().then((res) => {
         
            const productsList=res.map((product)=>
            ({
              id:product.id,
              descriptionHtml:product.descriptionHtml,
              title:product.title,
              imageSrc:product.images[0].src,
              imageSrcArray:product.images,
              shipping:product.tags[0].value,
              category:product.productType,
              variants:product.variants.map((variant)=>({
                title:variant.title,
                price:variant.price,
                id:variant.id
              }))
        
            }))
            dispatch({
                type:"CHANGE_PRODUCTSLIST",
                text:productsList,
            })
        })

        client.collection.fetchAllWithProducts().then((collections) => {
            const collectionList = collections.map ((element)=>({
              imageSrc:element.image.src,
              title:element.title
            }))

            dispatch({
              type:"CHANGE_COLLECTIONLIST",
              text:collectionList,
          })
            
        });

      

    }


}
