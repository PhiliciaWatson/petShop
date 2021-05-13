const products = [
    {
        title:'Product1',
        image:'/petShop/images/pedigree.png',
        price: 20.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product2',
        image:'/petShop/images/purplefood.png',
        price: 20.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product3',
        image:'/petShop/images/pedigree2.png',
        price: 20.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product4',
        image:'/petShop/images/dogchow.png',
        price: 20.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product5',
        image:'/petShop/images/whiskasFood.png',
        price: 20.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product6',
        image:'/petShop/images/purinaCat.png',
        price: 20.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product7',
        image:'/petShop/images/catComplete.png',
        price: 20.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product8',
        image:'/petShop/images/kitCat.png',
        price: 20.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product9',
        image:'/petShop/images/Nutrirve.png',
        price: 20.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product10',
        image:'/petShop/images/Rio.png',
        price: 20.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product11',
        image:'/petShop/images/tretra.png',
        price: 20.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product12',
        image:'/petShop/images/chichlide.png',
        price: 20.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product13',
        image:'/petShop/images/Crispy.png',
        price: 20.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product14',
        image:'/petShop/images/Atrelexa.png',
        price: 20.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },

]


var postHTML = "";

for(var i = 0; i < products.length;i++){

    var productImage = '<div class="card mb-3 col-2 p-2 text-center"><img src="'+products[i].image+'"class="p-2"><div class="card-body">'
    var productTitle = '<h5 class="card-title">'+products[i].title+'</h5>'
    var productPrice = '<p class="card-text"><b>$'+products[i].price+'</b></p>'
    var productDescription = '<p class="card-text"><em>'+products[i].description+'</em></p>'
    var buttons = '<button class="btn btn-primary mb-2">Purchase</button><button class="btn btn-success">Add to cart</button></div></div>'

    var concat = productImage+ productTitle+productPrice+productDescription+buttons;
    postHTML = postHTML+concat
}

document.getElementById('products').innerHTML = postHTML;
