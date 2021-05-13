const products = [
    {
        title:'Product1',
        image:'/images/pedigree.png',
        price: 20.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product2',
        image:'/images/purplefood.png',
        price: 20.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product3',
        image:'/images/pedigree2.png',
        price: 20.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product4',
        image:'/images/dogchow.png',
        price: 20.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product5',
        image:'/images/whiskasFood.png',
        price: 20.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product6',
        image:'/images/purinaCat.png',
        price: 20.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product7',
        image:'/images/catComplete.png',
        price: 20.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product8',
        image:'/images/kitCat.png',
        price: 20.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product9',
        image:'/images/Nutrirve.png',
        price: 20.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product10',
        image:'/images/Rio.png',
        price: 20.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product11',
        image:'/images/tretra.png',
        price: 20.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product12',
        image:'/images/chichlide.png',
        price: 20.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product13',
        image:'/images/Crispy.png',
        price: 20.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product14',
        image:'/images/Atrelexa.png',
        price: 20.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },

]


var postHTML = "";

for(var i = 0; i < products.length;i++){

    var productImage = '<div class="card mb-3 col-sm-3 p-2 text-center"><img src="'+products[i].image+'"class="p-2" style="height:100px;width:100px;margin:auto;"><div class="card-body">'
    var productTitle = '<h5 class="card-title">'+products[i].title+'</h5>'
    var productPrice = '<p class="card-text"><b>$'+products[i].price+'</b></p>'
    var productDescription = '<p class="card-text"><em>'+products[i].description+'</em></p>'
    var buttons = '<button class="btn btn-primary mb-2">Purchase</button><button class="btn btn-success">Add to cart</button></div></div>'

    var concat = productImage+ productTitle+productPrice+productDescription+buttons;
    postHTML = postHTML+concat
}

document.getElementById('products').innerHTML = postHTML;
