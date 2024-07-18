import Adidas from './images/brands/adidas.svg'
import Gucci from './images/brands/gucci.svg'
import Airjordan from './images/brands/airjordan.svg'
import Nike from './images/brands/nike.svg'
import Converse from './images/brands/converse.svg'
import Vans from './images/brands/vans.svg'
import Champion from './images/brands/champion.svg'
import running from './images/categories/running.jpg'
import basket from './images/categories/basket.jpg'
import other from './images/categories/other.png'
import skaterboard from './images/categories/skaterboard.jpg'
import Logo from '/public/logo.svg'
import Cart from "./images/icon/Cart.svg"
import Heart from "./images/icon/Heart.svg"
export const logo = <Logo/>
export const hero ={
    title1:"A NEW, APPROACHABLE FACE FOR YOUR ENVIRONMENTALE CONSCIOUS SHOPPING",
    title2:"Enjoy limeted series sneakers without limitations",
    button:"SHOP NOW"
}
export const topSneakersLists = [
    {
        url: "https://image.goat.com/375/attachments/product_template_pictures/images/021/545/481/original/509480_00.png.png",        
        name: "Wmns Air Jordan 1 Retro High OG 'Twist'",
    },
    {
        url: "https://image.goat.com/375/attachments/product_template_pictures/images/020/840/270/original/491192_00.png.png",
        name: "Kyrie 5 'Friends'"
    },
    {
        url: "https://image.goat.com/375/attachments/product_template_pictures/images/018/552/840/original/476518_00.png.png",
        name: "Tyler, The Creator x Foot Locker x Chuck 70 'Artist Series'",
    }
]
export const statistics = {
    value:"3k",
    description:"Customers who buy our products"
}
export const brands = {
    title:'some of our trusted brands',
    logo:[
        {
            name:"adidas",
            svg: <Adidas/>
        },
        {
            name:"gucci",
            svg: <Gucci/>
        },
        {
            name:"airjordan",
            svg: <Airjordan/>
        },
        {
            name:"nike",
            svg: <Nike/>
        },
        {
            name:"vans",
            svg: <Vans/>
        },
        {
            name:"converse",
            svg: <Converse/>
        },
        {
            name:"champion",
            svg: <Champion/>
        }
    ]
}
export const sneakersCategories = {
    title:"",
    categories:[
        {
            image:running,
            name:"running"
        },
        {
            image:basket,
            name:"basketball"
        
        },
        {
            image:skaterboard,
            name:"skaterboard"
        },
        {
            image:other,
            name:"other"
        }
        
    ]
}
export const footer =[
    {
        media:[
        {
            name:"Facebook",
            icon:""
        },
        {
            name:"Twitter",
            icon:""
        },
        {
            name:"YouTube",
            icon:""
        },
        {
            name:"Instagram",
            icon:""
        }
    ]
    },
    {
        title:"Categories",
        items:["Running","BasketBall","Sport","SkaterBoard"]
    },
    {
        title:"Collection",
        items:["Womeb","Men"]
    }
]
export const menuItems = [
    "SHOP",
    "MEN",
    "WOMEN",
    "SHOP",
    "FAVORITE"
  ];
export const menuItems_url = [
  {
    name:"SHOP",
    href:'/shop',
  },
  {
    name:"RECOMMENDED",
    href:'/recommended',
  },
  {
    name:"TRENDS",
    href:'/trends',
  },
]
export const  icon = {
    cart : <Cart/>,
    favorite: <Heart/>
}
