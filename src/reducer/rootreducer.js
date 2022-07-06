

const initialState = {
     
    currentCategory:'All',
    filterPrice:'All',
    filterShipping:'All',
    sortValue:1,
    registerForm:false,
    login:{loginStatus:false,
        loginInfo:{
            account: '',
                password: ''
        }},

    usersPool:[],
    productsList:'',
    collectionList:'',
    checkOutId:'',
    checkOutWebUrl:'',
    checkOutProducts:[],
    openCheckOut:false,
    searchTerm:'',
    eventsList:'2',
    events:[
        {
            title: 'Rain BBQ at Waiheke Vineyard!',
            imageSrc: 'https://gallery.mailchimp.com/59f3454a441e4fb18052927ef/images/3c375cb5-26a4-48d0-b356-044acc8f821e.jpeg',
            date: '2018-04',
            brief: 'This covers your meat, rub, fuel, and classroom time. Make sure to bring a chilly bin to take home your BBQ. ​ There are only 16 spots available for each class! Come join us for an afternoon of learning and smoking, rain or shine.',
            content:'<div> <strong>Rain BBQ at Waiheke Vineyard!</strong> Detailed content of the event will be availabel soon.</div>'
        },

        {

            title: 'Garden Party at West Spring!',
            imageSrc: 'https://gallery.mailchimp.com/59f3454a441e4fb18052927ef/images/08b0dfb9-6b18-43ae-9ccc-6a743d38a76d.jpeg',
            date: '2018-05',
            brief: 'You are invited to enjoy a lovely afternoon at the Tauranga Historical Society’s annual Vintage Garden Party in the lovely garden of the Brain Watkins House Museum on the corner of Cameron Road and Elizabeth Street.',
            content:'<div><strong>Garden Party at West Spring!</strong> Detailed content of the event will be availabel soon.</div>'

        },
        {

            title: 'Family competition games at Victoria Park!',
            imageSrc: 'https://gallery.mailchimp.com/59f3454a441e4fb18052927ef/images/06ebe26a-b06b-4dcd-8f49-c23795bfee43.jpeg',
            date: '2018-06',
            brief: 'Minute to Win It Games are perfect for your next outdoor summer block party, family reunion, or backyard bash! Great for all ...',
            content:'<div><strong>Family competition games at Victoria Park!</strong> Detailed content of the event will be availabel soon. </div>'
        },

    ],
}



export const rootReducer = (state=initialState, action) =>{
    switch (action.type) {
   

        case "CHANGE_CATEGORY":
        return Object.assign({},state,{currentCategory:action.text})

        case "CHANGE_PRICE":
        return Object.assign({},state,{filterPrice:action.text})

        case "CHANGE_SHIPPING":
        return Object.assign({},state,{filterShipping:action.text})

        case "CHANGE_SORTVALUE":
        return Object.assign({},state,{sortValue:action.text})

        case "CHANGE_SEARCHTERM":
        return Object.assign({},state,{searchTerm:action.text})

        case "CHANGE_LOGIN":
        return Object.assign({},state,{login:action.text},{usersPool:[...state.usersPool, action.text.loginInfo]})

        case "LOG_OUT":
        return Object.assign({},state,{login:{loginStatus:false,
            loginInfo:''}})
        case "CHANGE_PRODUCTSLIST":
        return Object.assign({},state,{productsList:action.text})
        
        case "CHANGE_COLLECTIONLIST":
        return Object.assign({},state,{collectionList:action.text})

        case "CREATE_CHECKOUT_ID":
        return Object.assign({},state,{checkOutId:action.text})

        case 'CREATE_CHECKOUT_WEBURL':
        return Object.assign({},state,{checkOutWebUrl:action.text})

        case "ADD_TO_CART":

return Object.assign({},state,{checkOutProducts:[...state.checkOutProducts,action.text]})

        case "REMOVE_ITEM":

        return Object.assign({},state,{checkOutProducts:state.checkOutProducts.filter((element)=>element.uniqueCheckOutNumber!==action.text.uniqueCheckOutNumber)})

        case "UPDATE_ITEM":
        return Object.assign({},state,{checkOutProducts:state.checkOutProducts.map((element)=>{
            if (element.uniqueCheckOutNumber===action.text.uniqueCheckOutNumber){
                return action.text
            }
            return element
        })})

        case "RESTORE_CART":
        return Object.assign({},state,{checkOutProducts:action.text})

        case "CLEAR_CART":
        return Object.assign({},state,{checkOutProducts:''})

        case 'ADD_EVENTS':
        return Object.assign({},state,{eventsList:action.text})

        case "OPEN_CHECKOUT":
        return Object.assign({},state,{openCheckOut:true})
        default:
        return state
    
    }
}

