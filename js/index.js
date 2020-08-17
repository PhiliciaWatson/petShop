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
        description: ' debitis odio porro provident sint nesciunt corrupti cum reiciendis vero officiis, quia voluptatum est impedit nemo! Nulla delectus laborum ab aut maiores minus, praesentium facilis exercitationem ipsum corporis nam a quas harum amet perferendis deserunt hic.Omnis, est rerum.Perspiciatis corporis id totam, sed asperiores placeat quibusdam ratione esse eos, minima quia tempore ullam nostrum, cumque iusto accusantium magnam perferendis aliquam sapiente culpa.Hic ipsum ipsam aut similique dolor commodi dolore esse eos eius repudiandae earum officiis neque, exercitationem, temporibus, et voluptatum est illum inventore modi! Quos aliquid hic, accusamus consequuntur velit vero ad autem nihil enim cumque qui ut fugit quo voluptates, ducimus, ipsam dolorum doloribus optio! Cum quaerat esse voluptatibus qui consectetur, illo accusamus corporis dicta animi adipisci necessitatibus, hic aliquam, debitis accusantium assumenda magnam illum ad.Eaque perferendis quaerat unde hic assumenda eos quo, et quisquam.Modi maxime doloribus ducimus laborum! Deserunt reprehenderit exercitationem facilis blanditiis tempora voluptas, similique maiores quas.'
    },
    {
        title: 'Numquam necessitatibus',
        picture: 'https://lifesabundance.com/thumbnails/dry-food-dog-400.png',
        price: 4.99,
        description: ' debitis odio porro provident sint nesciunt corrupti cum reiciendis vero officiis, quia voluptatum est impedit nemo! Nulla delectus laborum ab aut maiores minus, praesentium facilis exercitationem ipsum corporis nam a quas harum amet perferendis deserunt hic.Omnis, est rerum.Perspiciatis corporis id totam, sed asperiores placeat quibusdam ratione esse eos, minima quia tempore ullam nostrum, cumque iusto accusantium magnam perferendis aliquam sapiente culpa.Hic ipsum ipsam aut similique dolor commodi dolore esse eos eius repudiandae earum officiis neque, exercitationem, temporibus, et voluptatum est illum inventore modi! Quos aliquid hic, accusamus consequuntur velit vero ad autem nihil enim cumque qui ut fugit quo voluptates, ducimus, ipsam dolorum doloribus optio! Cum quaerat esse voluptatibus qui consectetur, illo accusamus corporis dicta animi adipisci necessitatibus, hic aliquam, debitis accusantium assumenda magnam illum ad.Eaque perferendis quaerat unde hic assumenda eos quo, et quisquam.Modi maxime doloribus ducimus laborum! Deserunt reprehenderit exercitationem facilis blanditiis tempora voluptas, similique maiores quas.'
    },
    {
        title: 'Numquam necessitatibus',
        picture: 'https://cdn.shopify.com/s/files/1/0155/7069/8288/products/toy-rope-octopus_1800x1800.jpg?v=1557288373',
        price: 4.99,
        description: ' debitis odio porro provident sint nesciunt corrupti cum reiciendis vero officiis, quia voluptatum est impedit nemo! Nulla delectus laborum ab aut maiores minus, praesentium facilis exercitationem ipsum corporis nam a quas harum amet perferendis deserunt hic.Omnis, est rerum.Perspiciatis corporis id totam, sed asperiores placeat quibusdam ratione esse eos, minima quia tempore ullam nostrum, cumque iusto accusantium magnam perferendis aliquam sapiente culpa.Hic ipsum ipsam aut similique dolor commodi dolore esse eos eius repudiandae earum officiis neque, exercitationem, temporibus, et voluptatum est illum inventore modi! Quos aliquid hic, accusamus consequuntur velit vero ad autem nihil enim cumque qui ut fugit quo voluptates, ducimus, ipsam dolorum doloribus optio! Cum quaerat esse voluptatibus qui consectetur, illo accusamus corporis dicta animi adipisci necessitatibus, hic aliquam, debitis accusantium assumenda magnam illum ad.Eaque perferendis quaerat unde hic assumenda eos quo, et quisquam.Modi maxime doloribus ducimus laborum! Deserunt reprehenderit exercitationem facilis blanditiis tempora voluptas, similique maiores quas.'
    },
    {
        title: 'Numquam necessitatibus',
        picture: 'https://cdns.webareacontrol.com/prodimages/1000-X-1000/1/y/13920194950Spot-Mop-Pets-Dog-Toys---Monkey-Monkey-Dog-Toy-L.png',
        price: 4.99,
        description: ' debitis odio porro provident sint nesciunt corrupti cum reiciendis vero officiis, quia voluptatum est impedit nemo! Nulla delectus laborum ab aut maiores minus, praesentium facilis exercitationem ipsum corporis nam a quas harum amet perferendis deserunt hic.Omnis, est rerum.Perspiciatis corporis id totam, sed asperiores placeat quibusdam ratione esse eos, minima quia tempore ullam nostrum, cumque iusto accusantium magnam perferendis aliquam sapiente culpa.Hic ipsum ipsam aut similique dolor commodi dolore esse eos eius repudiandae earum officiis neque, exercitationem, temporibus, et voluptatum est illum inventore modi! Quos aliquid hic, accusamus consequuntur velit vero ad autem nihil enim cumque qui ut fugit quo voluptates, ducimus, ipsam dolorum doloribus optio! Cum quaerat esse voluptatibus qui consectetur, illo accusamus corporis dicta animi adipisci necessitatibus, hic aliquam, debitis accusantium assumenda magnam illum ad.Eaque perferendis quaerat unde hic assumenda eos quo, et quisquam.Modi maxime doloribus ducimus laborum! Deserunt reprehenderit exercitationem facilis blanditiis tempora voluptas, similique maiores quas.'
    },
    {
        title: 'Numquam necessitatibus',
        picture: 'https://images-na.ssl-images-amazon.com/images/I/81kMG9FG1AL._AC_SL1500_.jpg',
        price: 4.99,
        description: ' debitis odio porro provident sint nesciunt corrupti cum reiciendis vero officiis, quia voluptatum est impedit nemo! Nulla delectus laborum ab aut maiores minus, praesentium facilis exercitationem ipsum corporis nam a quas harum amet perferendis deserunt hic.Omnis, est rerum.Perspiciatis corporis id totam, sed asperiores placeat quibusdam ratione esse eos, minima quia tempore ullam nostrum, cumque iusto accusantium magnam perferendis aliquam sapiente culpa.Hic ipsum ipsam aut similique dolor commodi dolore esse eos eius repudiandae earum officiis neque, exercitationem, temporibus, et voluptatum est illum inventore modi! Quos aliquid hic, accusamus consequuntur velit vero ad autem nihil enim cumque qui ut fugit quo voluptates, ducimus, ipsam dolorum doloribus optio! Cum quaerat esse voluptatibus qui consectetur, illo accusamus corporis dicta animi adipisci necessitatibus, hic aliquam, debitis accusantium assumenda magnam illum ad.Eaque perferendis quaerat unde hic assumenda eos quo, et quisquam.Modi maxime doloribus ducimus laborum! Deserunt reprehenderit exercitationem facilis blanditiis tempora voluptas, similique maiores quas.'
    },
    {
        title: 'Numquam necessitatibus',
        picture: 'https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_product_carousel_regular/public/BA.png?itok=FUxMY2Uf',
        price: 4.99,
        description: ' debitis odio porro provident sint nesciunt corrupti cum reiciendis vero officiis, quia voluptatum est impedit nemo! Nulla delectus laborum ab aut maiores minus, praesentium facilis exercitationem ipsum corporis nam a quas harum amet perferendis deserunt hic.Omnis, est rerum.Perspiciatis corporis id totam, sed asperiores placeat quibusdam ratione esse eos, minima quia tempore ullam nostrum, cumque iusto accusantium magnam perferendis aliquam sapiente culpa.Hic ipsum ipsam aut similique dolor commodi dolore esse eos eius repudiandae earum officiis neque, exercitationem, temporibus, et voluptatum est illum inventore modi! Quos aliquid hic, accusamus consequuntur velit vero ad autem nihil enim cumque qui ut fugit quo voluptates, ducimus, ipsam dolorum doloribus optio! Cum quaerat esse voluptatibus qui consectetur, illo accusamus corporis dicta animi adipisci necessitatibus, hic aliquam, debitis accusantium assumenda magnam illum ad.Eaque perferendis quaerat unde hic assumenda eos quo, et quisquam.Modi maxime doloribus ducimus laborum! Deserunt reprehenderit exercitationem facilis blanditiis tempora voluptas, similique maiores quas.'
    },
    {
        title: 'Numquam necessitatibus',
        picture: 'https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_product_carousel_regular/public/FR_Original_800x1000.png?itok=4iqKotUb',
        price: 4.99,
        description: ' debitis odio porro provident sint nesciunt corrupti cum reiciendis vero officiis, quia voluptatum est impedit nemo! Nulla delectus laborum ab aut maiores minus, praesentium facilis exercitationem ipsum corporis nam a quas harum amet perferendis deserunt hic.Omnis, est rerum.Perspiciatis corporis id totam, sed asperiores placeat quibusdam ratione esse eos, minima quia tempore ullam nostrum, cumque iusto accusantium magnam perferendis aliquam sapiente culpa.Hic ipsum ipsam aut similique dolor commodi dolore esse eos eius repudiandae earum officiis neque, exercitationem, temporibus, et voluptatum est illum inventore modi! Quos aliquid hic, accusamus consequuntur velit vero ad autem nihil enim cumque qui ut fugit quo voluptates, ducimus, ipsam dolorum doloribus optio! Cum quaerat esse voluptatibus qui consectetur, illo accusamus corporis dicta animi adipisci necessitatibus, hic aliquam, debitis accusantium assumenda magnam illum ad.Eaque perferendis quaerat unde hic assumenda eos quo, et quisquam.Modi maxime doloribus ducimus laborum! Deserunt reprehenderit exercitationem facilis blanditiis tempora voluptas, similique maiores quas.'
    },

]



var postHTML = '';

    
for(var i= 0; i< posts.length; i ++){

    var heading = "<div class='card'><h2>"+posts[i].title+"</h2>";
    var pic = '<img src ="' +posts[i].picture+ '" width=100px; height=100px>';
    var price = '<p> $'+posts[i].price+'</p>';
    var des = '<p>'+posts[i].description+'</p><div><br/><br/>';
    var concatThis = heading + pic + price + des;
    postHTML = postHTML + concatThis;
            
}
        
        console.log(postHTML);
        
        document.getElementById('products').innerHTML = postHTML;
        


