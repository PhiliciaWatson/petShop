let toggleNavStatus = false;

let toggleNav = function(){

    let getSideBar = document.querySelector('.nav-sidebar')
    let getSideBarUI = document.querySelector('.nav-sidebar');
    let getSideBarTitle = document.querySelector('.nav-sidebar ul');
    let getSideBarLinks = document.querySelectorAll('.nav-sidebar ul a');

    if (toggleNavStatus === false){

        getSideBarUI.style.visibility = 'visible';
        getSideBar.style.width = '272px';
        getSideBarTitle.style.opacity = '0.5';

        let arrayLength = getSideBarLinks.length;

        for(var i = 0; i < arrayLength; i++){

            getSideBarLinks[i].style.opacity = '1';
        }

        toggleNavStatus = true;

    } else if(toggleNavStatus === true){

        
        getSideBar.style.width = '50px';
        getSideBarTitle.style.opacity = '0';
        
        
        let arrayLength = getSideBarLinks.length;

        for(var i = 0; i < arrayLength; i++){

            getSideBarLinks[i].style.opacity = '0';
        }

        getSideBarUI.style.visibility = 'hidden';

        toggleNavStatus = false;
    }
}

var posts = [

    {
        title: 'Numquam necessitatibus',
        picture: 'https://s7d6.scene7.com/is/image/bjs/196235?$bjs-Zoom$',
        price: 4.99,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit sed natus. Accusamus, perferendis!'
    },
    {
        title: 'Numquam necessitatibus',
        picture: 'https://lifesabundance.com/thumbnails/dry-food-dog-400.png',
        price: 4.99,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit sed natus. Accusamus, perferendis!'
    },
    {
        title: 'Numquam necessitatibus',
        picture: 'https://cdn.shopify.com/s/files/1/0155/7069/8288/products/toy-rope-octopus_1800x1800.jpg?v=1557288373',
        price: 4.99,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit sed natus. Accusamus, perferendis!'
    },
    {
        title: 'Numquam necessitatibus',
        picture: 'https://cdns.webareacontrol.com/prodimages/1000-X-1000/1/y/13920194950Spot-Mop-Pets-Dog-Toys---Monkey-Monkey-Dog-Toy-L.png',
        price: 4.99,
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit sed natus. Accusamus, perferendis!'
    },
    {
        title: 'Numquam necessitatibus',
        picture: 'https://images-na.ssl-images-amazon.com/images/I/81kMG9FG1AL._AC_SL1500_.jpg',
        price: 4.99,
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit sed natus. Accusamus, perferendis!'
    },
    {
        title: 'Numquam necessitatibus',
        picture: 'https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_product_carousel_regular/public/BA.png?itok=FUxMY2Uf',
        price: 4.99,
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit sed natus. Accusamus, perferendis'
    },
    {
        title: 'Numquam necessitatibus',
        picture: 'https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_product_carousel_regular/public/FR_Original_800x1000.png?itok=4iqKotUb',
        price: 4.99,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit sed natus. Accusamus, perferendis!'
    },

]



var postHTML = '';

    
for(var i= 0; i< posts.length; i ++){

    var heading = "<div class='card text-center'><h5>"+posts[i].title+"</h5>";
    var pic = '<img src ="' +posts[i].picture+ '" width=150px; height=150px id="product-image"><br/>';
    var price = '<p><b>$'+posts[i].price+'</b></p>';
    var des = '<p>'+posts[i].description+'</p></div>';
    var concatThis = heading + pic + price + des;
    postHTML = postHTML + concatThis;
            
}
        
        console.log(postHTML);
        
        document.getElementById('products').innerHTML = postHTML;
        


