
const shoppingCart = [
    {productid: 101, qty: 1}
  ];
  const allProducts = [
    { // 0
        id:1,
        image: `./images/velocity_tetron.jpeg`,
        name: `Velocity Tetron`,
        footwear: `Men`,
        price: `20`,
        brand: `Puma`,
        size: `7`,
        color: `Black`,
        type: `Casual`,
        quantity: `2`,

    }, {

        // 1
        id:2,
        image: `./images/adidas sneakers.jpg`,
        name: `Sneakers`,
        footwear: `Men`,
        price: `30`,
        brand: `Adidas`,
        size: `8`,
        color: `White`,
        type: `Casual`,
        quantity: `4`,

    }, {

        // 2
        id:3,
        image: `./images/reebok.jpeg`,
        name: `Sneakers`,
        footwear: `Men`,
        price: `40`,
        brand: `Reebok`,
        size: `6`,
        color: `Gray`,
        type: `Casual`,
        quantity: `5`,

    }
    , {

        // 3
        id:4,
        image: `./images/army.jpeg`,
        name: `Boots`,
        footwear: `Men`,
        price: `50`,
        brand: `Woodland`,
        size: `9`,
        color: `brown`,
        type: `Army`,
        quantity: `3`,

    }, {

        // 4
        id:5,
        image: `./images/lee cooper.jpg`,
        name: `Sneakers`,
        footwear: `Men`,
        price: `60`,
        brand: `Lee Cooper`,
        size: `8`,
        color: `Black`,
        type: `Casual`,
        quantity: `6`,

    }
    , {

        // 5
        id:6,
        image: `./images/red tape.jpg`,
        name: `Office Shoes`,
        footwear: `Men`,
        price: `70`,
        brand: `Red Tape`,
        size: `8`,
        color: `Black`,
        type: `Formal`,
        quantity: `3`,

    }
    , {

        // 6
        id:7,
        image: `./images/cowboy.jpg`,
        name: `Boots`,
        footwear: `Men`,
        price: `40`,
        brand: `Salvi`,
        size: `8`,
        color: `Brown`,
        type: `Cowboy`,
        quantity: `10`,

    }
    , {

        // 7
        id:8,
        image: `./images/puma women casual.jpg`,
        name: `Suede`,
        footwear: `Women`,
        price: `80`,
        brand: `Puma`,
        size: `6`,
        color: `Black`,
        type: `Casual`,
        quantity: `30`,

    }
    , {

        // 8
        id:9,
        image: `./images/red tape women.jpeg`,
        name: `Sneakers`,
        footwear: `Women`,
        price: `60`,
        brand: `Red Tape`,
        size: `8`,
        color: `White`,
        type: `Casual`,
        quantity: `20`,

    }
    , {

        // 9
        id:10,
        image: `./images/adidas women.jfif`,
        name: `Sneakers`,
        footwear: `Women`,
        price: `40`,
        brand: `Adidas`,
        size: `7`,
        color: `Gray`,
        type: `Casual`,
        quantity: `10`,

    }
    , {

        // 10
        id:11,
        image: `./images/Reebok women.jpg`,
        name: `Shoes`,
        footwear: `Women`,
        price: `90`,
        brand: `Reebok`,
        size: `9`,
        color: `Brown`,
        type: `Casual`,
        quantity: `13`,

    }
    , {

        // 11
        id:12,
        image: `./images/puma highneck women.jpg`,
        name: `Highneck`,
        footwear: `Women`,
        price: `60`,
        brand: `Puma`,
        size: `6`,
        color: `Black`,
        type: `Casual`,
        quantity: `39`,

    }
    , {

        // 12
        id:13,
        image: `./images/flat adidas women.jpg`,
        name: `Flat Shoes`,
        footwear: `Women`,
        price: `70`,
        brand: `Adidas`,
        size: `9`,
        color: `Red`,
        type: `Casual`,
        quantity: `60`,

    }
    , {

        // 13
        id:14,
        image: `./images/asian shoes women.jpeg`,
        name: `Sneakers`,
        footwear: `Women`,
        price: `40`,
        brand: `Asian`,
        size: `6`,
        color: `Gray`,
        type: `Casual`,
        quantity: `50`,

    }
    , {

        // 14
        id:15,
        image: `./images/asian shoes men sports.jpg`,
        name: `SuperFit`,
        footwear: `Men`,
        price: `30`,
        brand: `Asian`,
        size: `8`,
        color: `Blue`,
        type: `Sports`,
        quantity: `13`,

    }
    , {

        // 15
        id:16,
        image: `./images/asian shoes men casual.jpg`,
        name: `Beeta`,
        footwear: `Men`,
        price: `30`,
        brand: `Asian`,
        size: `8`,
        color: `Black`,
        type: `Casual`,
        quantity: `36`,

    }
    , {

        // 16
        id:17,
        image: `./images/asian shoes men skypy.jpg`,
        name: `Skypy`,
        footwear: `Men`,
        price: `30`,
        brand: `Asian`,
        size: `7`,
        color: `Gray`,
        type: `Basic`,
        quantity: `120`,

    }
    , {

        // 17
        id:18,
        image: `./images/asian shoes women black.jpg`,
        name: `Spicy 51`,
        footwear: `Women`,
        price: `60`,
        brand: `Asian`,
        size: `6`,
        color: `Black`,
        type: `Basic`,
        quantity: `89`,

    }
    , {

        // 18
        id:19,
        image: `./images/asian shoes women red.jpg`,
        name: `Face 31`,
        footwear: `Women`,
        price: `40`,
        brand: `Asian`,
        size: `9`,
        color: `Red`,
        type: `Casual`,
        quantity: `69`,

    }
    , {

        // 19
        id:20,
        image: `./images/asian shoes women white.jpg`,
        name: `Paris 52`,
        footwear: `Women`,
        price: `30`,
        brand: `Asian`,
        size: `7`,
        color: `White`,
        type: `Casual`,
        quantity: `3`,

    }


];
function getProductsAsHtmlString(product) {
    return `
    <article class="product">
    <img src="${product.image}" alt="" id="productImage"> 
    <p id="productDescription">${product.type} ${product.name} by ${product.brand} for ${product.footwear} (${product.color}) </p>
    <p id="productPrice">Price:<strong>${product.price}</strong></p></strong> 
    <p id="size">Size Available:<strong>${product.size}</strong></p>
    <p id="quantity">In Stock:<strong>${product.quantity}</strong></p>
    <button type="button" class="course-register" data-courseid="${product.id}">Add To Cart</button>
    </article>
`;
}


document.getElementById('products').innerHTML = allProducts.map(getProductsAsHtmlString).join('\n');


/*-------Search Filter------*/
const checkForProductName = () => {

    const whatToSearch = document.getElementById('search').value;
    console.log(whatToSearch);
    const cleanVersion = whatToSearch.toLowerCase();
    //console.log(cleanVersion);
  
    const resultsFromSearch = allProducts.filter(c => c.name.toLowerCase().includes(cleanVersion)  );
    renderProductsFromArray(resultsFromSearch)
    // String methods:  trim(), toUpperCase() or toLowerCase(), then includes()
  }
  const renderProductsFromArray = (arr) => {
    document.getElementById('products').innerHTML = arr.map(getProductsAsHtmlString).join('\n');
  
    let res = 'results';
    if (arr.length == 1) {
      res = 'result'
    }
    //let res = (arr.length > 1) ? 'results' : 'result';
  
    //document.getElementById('numResults').innerHTML = `(${arr.length} ${res})`;
  }
  const searchFootwearForMen = () =>
  {
    const whatToSearch = document.getElementById('men').value;
    console.log(whatToSearch);
    const cleanVersion = whatToSearch.toLowerCase();
    console.log(cleanVersion);
  
    const resultsFromSearch = allProducts.filter(c => c.footwear.includes(whatToSearch)  );
    console.log(resultsFromSearch);
    renderProductsFromArray(resultsFromSearch)
  }

  const searchFootwearForWomen = () =>
  {
    const whatToSearch = document.getElementById('women').value;
    console.log(whatToSearch);
    const cleanVersion = whatToSearch.toLowerCase();
    console.log(cleanVersion);
  
    const resultsFromSearch = allProducts.filter(c => c.footwear.includes(whatToSearch)  );
    console.log(resultsFromSearch);
    renderProductsFromArray(resultsFromSearch)
  }
  const searchByPrice = () =>
  {
    const whatToSearch = document.getElementById('ten').value;
    
    console.log(whatToSearch);

  
    const resultsFromSearch = allProducts.filter(c => c.price.includes(whatToSearch)  );
    console.log(resultsFromSearch);
    renderProductsFromArray(resultsFromSearch)
  }
  const searchByPriceTwenty = () =>
  {
    const whatToSearch = document.getElementById('twenty').value;
    
    console.log(whatToSearch);

  
    const resultsFromSearch = allProducts.filter(c => c.price.includes(whatToSearch)  );
    console.log(resultsFromSearch);
    renderProductsFromArray(resultsFromSearch)
  }
  const searchByPriceThirty = () =>
  {
    const whatToSearch = document.getElementById('thirty').value;
    
    console.log(whatToSearch);

  
    const resultsFromSearch = allProducts.filter(c => c.price.includes(whatToSearch)  );
    console.log(resultsFromSearch);
    renderProductsFromArray(resultsFromSearch)
  }
  const searchByPriceForty = () =>
  {
    const whatToSearch = document.getElementById('forty').value;
    
    console.log(whatToSearch);

  
    const resultsFromSearch = allProducts.filter(c => c.price.includes(whatToSearch)  );
    console.log(resultsFromSearch);
    renderProductsFromArray(resultsFromSearch)
  }
  const searchByPriceFifty = () =>
  {
    const whatToSearch = document.getElementById('fifty').value;
    
    console.log(whatToSearch);

    
    const resultsFromSearch = allProducts.filter(c => c.price.includes(whatToSearch)  );
    console.log(resultsFromSearch);
    renderProductsFromArray(resultsFromSearch)
    
  }
  const searchByBrandPuma = () =>
  {
    const whatToSearch = document.getElementById('puma').value;
    const cleanVersion = whatToSearch.toLowerCase();
    console.log(whatToSearch);

    
    const resultsFromSearch = allProducts.filter(c => c.brand.toLowerCase().includes(cleanVersion)  );
    console.log(resultsFromSearch);
    renderProductsFromArray(resultsFromSearch)
    
  }
  const searchByBrandAdidas = () =>
  {
    const whatToSearch = document.getElementById('adidas').value;
    const cleanVersion = whatToSearch.toLowerCase();
    console.log(whatToSearch);

    
    const resultsFromSearch = allProducts.filter(c => c.brand.toLowerCase().includes(cleanVersion)  );
    console.log(resultsFromSearch);
    renderProductsFromArray(resultsFromSearch)
    
  }
  
  const searchByBrandLeeCooper = () =>
  {
    const whatToSearch = document.getElementById('lee_cooper').value;
    const cleanVersion = whatToSearch.toLowerCase();
    console.log(whatToSearch);

    
    const resultsFromSearch = allProducts.filter(c => c.brand.toLowerCase().includes(cleanVersion)  );
    console.log(resultsFromSearch);
    renderProductsFromArray(resultsFromSearch)
    
  }
  const searchByBrandRedTape = () =>
  {
    const whatToSearch = document.getElementById('red_tape').value;
    const cleanVersion = whatToSearch.toLowerCase();
    console.log(whatToSearch);

    
    const resultsFromSearch = allProducts.filter(c => c.brand.toLowerCase().includes(cleanVersion)  );
    console.log(resultsFromSearch);
    renderProductsFromArray(resultsFromSearch)
    
  }
  const searchByBrandReebok = () =>
  {
    const whatToSearch = document.getElementById('reebok').value;
    const cleanVersion = whatToSearch.toLowerCase();
    console.log(whatToSearch);

    
    const resultsFromSearch = allProducts.filter(c => c.brand.toLowerCase().includes(cleanVersion)  );
    console.log(resultsFromSearch);
    renderProductsFromArray(resultsFromSearch)
    
  }
  const searchByBrandAsian = () =>
  {
    const whatToSearch = document.getElementById('asian').value;
    const cleanVersion = whatToSearch.toLowerCase();
    console.log(whatToSearch);

    
    const resultsFromSearch = allProducts.filter(c => c.brand.toLowerCase().includes(cleanVersion)  );
    console.log(resultsFromSearch);
    renderProductsFromArray(resultsFromSearch)
    
  }
  const searchBySize6 = () =>
  {
    const whatToSearch = document.getElementById('Size6').value;
    
    console.log(whatToSearch);

    
    const resultsFromSearch = allProducts.filter(c => c.size.includes(whatToSearch)  );
    console.log(resultsFromSearch);
    renderProductsFromArray(resultsFromSearch)
    
  }
  const searchBySize7 = () =>
  {
    const whatToSearch = document.getElementById('Size7').value;
    
    console.log(whatToSearch);

    
    const resultsFromSearch = allProducts.filter(c => c.size.includes(whatToSearch)  );
    console.log(resultsFromSearch);
    renderProductsFromArray(resultsFromSearch)
    
  }
  const searchBySize8 = () =>
  {
    const whatToSearch = document.getElementById('Size8').value;
    
    console.log(whatToSearch);

    
    const resultsFromSearch = allProducts.filter(c => c.size.includes(whatToSearch)  );
    console.log(resultsFromSearch);
    renderProductsFromArray(resultsFromSearch)
    
  }
  const searchBySize9 = () =>
  {
    const whatToSearch = document.getElementById('Size9').value;
    
    console.log(whatToSearch);

    
    const resultsFromSearch = allProducts.filter(c => c.size.includes(whatToSearch)  );
    console.log(resultsFromSearch);
    renderProductsFromArray(resultsFromSearch)
    
  }
  const searchByColorBlack = () =>
  {
    const whatToSearch = document.getElementById('ColorBlack').value;
    const cleanVersion = whatToSearch.toLowerCase();
    console.log(whatToSearch);

    
    const resultsFromSearch = allProducts.filter(c => c.color.toLowerCase().includes(cleanVersion)  );
    console.log(resultsFromSearch);
    renderProductsFromArray(resultsFromSearch)
    
  }
  const searchByColorWhite = () =>
  {
    const whatToSearch = document.getElementById('ColorWhite').value;
    const cleanVersion = whatToSearch.toLowerCase();
    console.log(whatToSearch);

    
    const resultsFromSearch = allProducts.filter(c => c.color.toLowerCase().includes(cleanVersion)  );
    console.log(resultsFromSearch);
    renderProductsFromArray(resultsFromSearch)
    
  }

  const searchByColorGray = () =>
  {
    const whatToSearch = document.getElementById('ColorGray').value;
    const cleanVersion = whatToSearch.toLowerCase();
    console.log(whatToSearch);

    
    const resultsFromSearch = allProducts.filter(c => c.color.toLowerCase().includes(cleanVersion)  );
    console.log(resultsFromSearch);
    renderProductsFromArray(resultsFromSearch)
    
  }

  const searchByColorBrown = () =>
  {
    const whatToSearch = document.getElementById('ColorBrown').value;
    const cleanVersion = whatToSearch.toLowerCase();
    console.log(whatToSearch);

    
    const resultsFromSearch = allProducts.filter(c => c.color.toLowerCase().includes(cleanVersion)  );
    console.log(resultsFromSearch);
    renderProductsFromArray(resultsFromSearch)
    
  }

  const searchByColorRed = () =>
  {
    const whatToSearch = document.getElementById('ColorRed').value;
    const cleanVersion = whatToSearch.toLowerCase();
    console.log(whatToSearch);

    
    const resultsFromSearch = allProducts.filter(c => c.color.toLowerCase().includes(cleanVersion)  );
    console.log(resultsFromSearch);
    renderProductsFromArray(resultsFromSearch)
    
  }
  const searchByShoeTypeArmy = () =>
  {
    const whatToSearch = document.getElementById('Shoe_Type_Army').value;
    const cleanVersion = whatToSearch.toLowerCase();
    console.log(whatToSearch);

    
    const resultsFromSearch = allProducts.filter(c => c.type.toLowerCase().includes(cleanVersion)  );
    console.log(resultsFromSearch);
    renderProductsFromArray(resultsFromSearch)
    
  }
  const searchByShoeTypeFormal = () =>
  {
    const whatToSearch = document.getElementById('Shoe_Type_Formal').value;
    const cleanVersion = whatToSearch.toLowerCase();
    console.log(whatToSearch);

    
    const resultsFromSearch = allProducts.filter(c => c.type.toLowerCase().includes(cleanVersion)  );
    console.log(resultsFromSearch);
    renderProductsFromArray(resultsFromSearch)
    
  }
  const searchByShoeTypeCasual = () =>
  {
    const whatToSearch = document.getElementById('Shoe_Type_Casual').value;
    const cleanVersion = whatToSearch.toLowerCase();
    console.log(whatToSearch);

    
    const resultsFromSearch = allProducts.filter(c => c.type.toLowerCase().includes(cleanVersion)  );
    console.log(resultsFromSearch);
    renderProductsFromArray(resultsFromSearch)
    
  }
  const searchByShoeTypeCowboy = () =>
  {
    const whatToSearch = document.getElementById('Shoe_Type_Cowboy').value;
    const cleanVersion = whatToSearch.toLowerCase();
    console.log(whatToSearch);

    
    const resultsFromSearch = allProducts.filter(c => c.type.toLowerCase().includes(cleanVersion)  );
    console.log(resultsFromSearch);
    renderProductsFromArray(resultsFromSearch)
    
  }




  const loadProductsByOrder = event => {
    console.log(event.target.value)
  
    let sortedProducts;
  
    if (event.target.value == 'Size') {
      // Smallest to largest
      sortedProducts = allProducts.slice().sort((a, b) => a.size - b.size);
      renderProductsFromArray(sortedProducts);
    } else if (event.target.value == 'Price') {
      // Smallest To Largest
      sortedProducts = allProducts.slice().sort((a, b) => a.price - b.price);
      renderProductsFromArray(sortedProducts);
    } else if (event.target.value == 'Name') {
      // Smallest to Largest
      sortedProducts = allProducts.slice().sort((a, b) => a.type.localeCompare(b.type));
      renderProductsFromArray(sortedProducts);
    } 
     else 
     {
      return;
    }
}

const handleClickOfProducts = event => {
    
    if (!event.target.matches('button.course-register')) {
      return;
    }
    const courseid = parseInt(event.target.dataset.courseid);
    console.log("clicked"+courseid);
    addItemToCart(courseid);
  }
  
  const addItemToCart = courseid => {
    // [ {courseid: 101, qty: 1} ]
  
    const cartItem = shoppingCart.find(item => item.courseid == courseid);
  
    if (cartItem) {  // if a cartItem was found
      cartItem.qty++;
    } else {
      shoppingCart.push({courseid: courseid, qty: 1});
    }
}  
  window.addEventListener('load', () => {

    // Event listeners
    //document.getElementById('fallCourses').addEventListener('click', loadCoursesFromTerm);
    //document.getElementById('courseView').addEventListener('click', toggleCourseView);
    //document.getElementById('courseName').addEventListener('input', checkForCourseName);
  
    // Start
    document.getElementById('search').addEventListener('input', checkForProductName);
    document.getElementById('men').addEventListener('input', searchFootwearForMen);
    document.getElementById('women').addEventListener('input', searchFootwearForWomen);
    document.getElementById('ten').addEventListener('input', searchByPrice);
    document.getElementById('twenty').addEventListener('input', searchByPriceTwenty);
    document.getElementById('thirty').addEventListener('input', searchByPriceThirty);
    document.getElementById('forty').addEventListener('input', searchByPriceForty);
    document.getElementById('fifty').addEventListener('input', searchByPriceFifty);
    document.getElementById('puma').addEventListener('input', searchByBrandPuma);
    document.getElementById('adidas').addEventListener('input', searchByBrandAdidas);
    document.getElementById('lee_cooper').addEventListener('input', searchByBrandLeeCooper);
    document.getElementById('red_tape').addEventListener('input', searchByBrandRedTape);
    document.getElementById('reebok').addEventListener('input', searchByBrandReebok);
    document.getElementById('asian').addEventListener('input', searchByBrandAsian);
    document.getElementById('Size6').addEventListener('input', searchBySize6);
    document.getElementById('Size7').addEventListener('input', searchBySize7);
    document.getElementById('Size8').addEventListener('input', searchBySize8);
    document.getElementById('Size9').addEventListener('input', searchBySize9);
    document.getElementById('ColorBlack').addEventListener('input', searchByColorBlack);
    document.getElementById('ColorWhite').addEventListener('input', searchByColorWhite);
    document.getElementById('ColorGray').addEventListener('input', searchByColorGray);
    document.getElementById('ColorBrown').addEventListener('input', searchByColorBrown);
    document.getElementById('ColorRed').addEventListener('input', searchByColorRed);
    document.getElementById('Shoe_Type_Army').addEventListener('input', searchByShoeTypeArmy);
    document.getElementById('Shoe_Type_Formal').addEventListener('input', searchByShoeTypeFormal);
    document.getElementById('Shoe_Type_Casual').addEventListener('input', searchByShoeTypeCasual);
    document.getElementById('Shoe_Type_Cowboy').addEventListener('input', searchByShoeTypeCowboy);
    document.getElementById('sortOrder').addEventListener('change', loadProductsByOrder);
    document.getElementById('products').addEventListener('click', handleClickOfProducts);
    
    
    renderProductsFromArray(allProducts);
  });
  