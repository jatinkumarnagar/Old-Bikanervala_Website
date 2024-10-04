const btns = [
    {
        id: 0,
        name: 'Show All'
    },
    {
        id: 1,
        name: 'Sweets'
    },
    {
        id: 2,
        name: 'Cakes & Pastries'
    },
    {
        id: 3,
        name: 'Chat & Snacks'
    }
];

$('#categoryFilter').html(
    $.map(
        btns,
        function (btn) {
            return `
                <li>
                    <a href="#" class="text-decoration-none text-white fs-4" onclick="filterItems(${btn.id})">${btn.name}</a>
                </li>`;
        }
    ).join('')
);

//Second Code

const product = [
    {
        id: 1,
        image: 'images/product-gallery/all/sweets/kala-jammun.jpg',
        title: 'Kala Jammun',
        category: 'sweets'
    },
    {
        id: 1,
        image: 'images/product-gallery/all/sweets/02.jpg',
        title: 'Chakkar Pista',
        category: 'sweets'
    },
    {
        id: 1,
        image: 'images/product-gallery/all/sweets/03.jpg',
        title: 'Khoya Kesar Barfi',
        category: 'sweets'
    },
    {
        id: 1,
        image: 'images/product-gallery/all/sweets/04.jpg',
        title: 'Anurodh',
        category: 'sweets'
    },
    {
        id: 1,
        image: 'images/product-gallery/all/sweets/05.jpg',
        title: 'Sugar Free Kaju Barfi',
        category: 'sweets'
    },
    {
        id: 1,
        image: 'images/product-gallery/all/sweets/06.jpg',
        title: 'Sandesh Kacha Gola',
        category: 'sweets'
    },
    {
        id: 1,
        image: 'images/product-gallery/all/sweets/07.jpg',
        title: 'Mango Malai',
        category: 'sweets'
    },
    {
        id: 1,
        image: 'images/product-gallery/all/sweets/08.jpg',
        title: 'Pista King',
        category: 'sweets'
    },
    {
        id: 1,
        image: 'images/product-gallery/all/sweets/09.jpg',
        title: 'Badam Chikki',
        category: 'sweets'
    },
    {
        id: 1,
        image: 'images/product-gallery/all/sweets/10.jpg',
        title: 'Mathura Peda',
        category: 'sweets'
    },
    {
        id: 1,
        image: 'images/product-gallery/all/sweets/11.jpg',
        title: 'Malai Cup',
        category: 'sweets'
    },
    {
        id: 1,
        image: 'images/product-gallery/all/sweets/12.jpg',
        title: 'Chaka Chak',
        category: 'sweets'
    },
    {
        id: 2,
        image: 'images/product-gallery/all/cakes/01.jpg',
        title: 'Black Forest Cake',
        category: 'cakes'
    },
    {
        id: 2,
        image: 'images/product-gallery/all/cakes/02.jpg',
        title: 'Choco Chip Cake',
        category: 'cakes'
    },
    {
        id: 2,
        image: 'images/product-gallery/all/cakes/03.jpg',
        title: 'Pineapple Cake',
        category: 'cakes'
    },
    {
        id: 2,
        image: 'images/product-gallery/all/cakes/04.jpg',
        title: 'Pineapple Pastry',
        category: 'cakes'
    },
    {
        id: 2,
        image: 'images/product-gallery/all/cakes/05.jpg',
        title: 'Black Forest Cake',
        category: 'cakes'
    },
    {
        id: 2,
        image: 'images/product-gallery/all/cakes/06.jpg',
        title: 'Muffine',
        category: 'cakes'
    },
    {
        id: 2,
        image: 'images/product-gallery/all/cakes/07.jpg',
        title: 'Pineapple Pastry',
        category: 'cakes'
    },
    {
        id: 2,
        image: 'images/product-gallery/all/cakes/08.jpg',
        title: 'Chocolate Pastry',
        category: 'cakes'
    },
    {
        id: 3,
        image: 'images/product-gallery/all/snacks/01.jpg',
        title: 'Pani Puri',
        category: 'snacks'
    },
    {
        id: 3,
        image: 'images/product-gallery/all/snacks/02.jpg',
        title: 'Raj Kachori',
        category: 'snacks'
    }
];

const cat = [...new Set(product.map((item) => item))];

const filterItems = (a) => {
    const filterCategories = $.grep(cat, function(item) {
        return item.id == a;
    });
    displayItem(filterCategories);
};

const displayItem = (items) => {
    $('#productContainer').html(items.map((item) => {
        var { image, title } = item;
        return `
            <div class="col-lg-4 text-center my-4">
                <div class="img-box mb-3">
                    <img class="img-fluid img-thumbnail" src="${image}"></img>
                </div>
                <div class='bottom'>
                    <a href="#" class="text-decoration-none text-black">${title}</a>
                </div>
            </div>`;
    }).join(''));
}

displayItem(cat);
//
//Order Page
$(document).ready(function(){
    $(".order-dp-button button").click(function(){
        $(this).toggleClass("toggle");
    });
});


