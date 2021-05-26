
const products = [
    {
        title:'Product1',
        image:'../images/pedigree.png',
        price: 18.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product2',
        image:'../images/purplefood.png',
        price: 23.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product3',
        image:'../images/pedigree2.png',
        price: 12.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product4',
        image:'../images/dogchow.png',
        price: 10.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product5',
        image:'../images/whiskasFood.png',
        price: 20.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product6',
        image:'../images/purinaCat.png',
        price: 26.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product7',
        image:'../images/catComplete.png',
        price: 30.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product8',
        image:'../images/kitCat.png',
        price: 40.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product9',
        image:'../images/Nutrirve.png',
        price: 24.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product10',
        image:'../images/Rio.png',
        price: 21.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product11',
        image:'../images/tretra.png',
        price: 22.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product12',
        image:'../images/chichlide.png',
        price: 26.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product13',
        image:'../images/Crispy.png',
        price: 27.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },
    {
        title:'Product14',
        image:'../images/Atrelexa.png',
        price: 25.99,
        description:'lcekkmewkoxmqwkomsowmsko2wmdkosowmkdmkodwmkowmd'

    },

]




    // future challenge sort method
    // function Low(e){

    //     return postHTML += products.sort(function(a, b) {
    //         return parseFloat(a.price) - parseFloat(b.price);
    //     });
    // }

    


var postHTML = " ";

for(var i = 0; i < products.length;i++){

    var productImage = '<div class="col-sm-4 p-2"><div class="card border-0 text-center"><img src="'+products[i].image+'"class="p-2" style="height:120px;width:100px;margin:auto"><div class="card-body">'
    var productTitle = '<h5 class="card-title" style="font-family:italic">'+products[i].title+'</h5>'
    var productPrice = '<p class="card-text"><b>$'+products[i].price+'</b></p>'
    var productDescription = '<p class="card-text"><span style="font-family:italic">'+products[i].description+'</span></p>'
    var buttons = '<button class="btn btn-primary m-2">Purchase</button><button class="btn btn-success m-2">Add to cart</button></div></div></div>'

    var concat = productImage+ productTitle+productPrice+productDescription+buttons;
    postHTML = postHTML+concat
}

document.getElementById('products').innerHTML = postHTML;

