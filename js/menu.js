/*jshint esversion: 6 */

$(document).ready(function () {
  // Sample menu data
  const menuItems = [
    {
      name: "Margherita Pizza",
      image: "../images/menu-1.jpg",
      price: "$8",
      cuisine: "Italian",
      ingredients: ["tomato", "mozzarella", "basil"],
    },
    {
      name: "Green Curry",
      image: "../images/menu-8.webp",
      price: "$12",
      cuisine: "Thai",
      ingredients: ["chicken", "coconut milk", "basil", "green curry paste"],
    },
    {
      name: "Beef Tacos",
      image: "../images/menu-3.jpg",
      price: "$9",
      cuisine: "Mexican",
      ingredients: ["tortilla", "beef", "cheese", "lettuce", "tomato"],
    },
    {
      name: "Sushi Platter",
      image: "../images/menu-5.jpg",
      price: "$20",
      cuisine: "Japanese",
      ingredients: ["rice", "seaweed", "tuna", "salmon", "avocado"],
    },
    {
      name: "Caesar Salad",
      image: "../images/menu-12.jpg",
      price: "$7",
      cuisine: "American",
      ingredients: ["lettuce", "croutons", "parmesan", "caesar dressing"],
    },
    {
      name: "Chana Masala",
      image: "../images/menu-10.jpg",
      price: "$9",
      cuisine: "Indian",
      ingredients: ["chickpeas", "tomato", "onion", "spices"],
    },
    {
      name: "Chicken Alfredo Pasta",
      image: "../images/menu-2.webp",
      price: "$13",
      cuisine: "Italian",
      ingredients: ["fettuccine", "chicken", "cream", "parmesan"],
    },
    {
      name: "Pad Thai",
      image: "../images/menu-7.jpg",
      price: "$10",
      cuisine: "Thai",
      ingredients: ["noodles", "shrimp", "peanuts", "bean sprouts"],
    },
    {
      name: "Butter Chicken",
      image: "../images/menu-9.jpg",
      price: "$14",
      cuisine: "Indian",
      ingredients: ["chicken", "butter", "cream", "tomato", "spices"],
    },
    {
      name: "Cheeseburger",
      image: "../images/menu-11.jpeg",
      price: "$10",
      cuisine: "American",
      ingredients: ["beef patty", "cheese", "lettuce", "tomato", "bun"],
    },
    {
      name: "Ramen Noodles",
      image: "../images/menu-6.jpg",
      price: "$11",
      cuisine: "Japanese",
      ingredients: ["noodles", "broth", "pork", "egg", "scallions"],
    },
    {
      name: "Pho",
      image: "../images/menu-13.jpg",
      price: "$10",
      cuisine: "Vietnamese",
      ingredients: ["rice noodles", "broth", "beef", "bean sprouts", "herbs"],
    },
    {
      name: "Lamb Kebabs",
      image: "../images/menu-16.jpg",
      price: "$12",
      cuisine: "Middle Eastern",
      ingredients: ["lamb", "spices", "yogurt", "pita"],
    },
    {
      name: "Banh Mi",
      image: "../images/menu-14.webp",
      price: "$8",
      cuisine: "Vietnamese",
      ingredients: ["baguette", "pork", "pickled vegetables", "cilantro"],
    },
    {
      name: "Falafel Wrap",
      image: "../images/menu-15.jpg",
      price: "$8",
      cuisine: "Middle Eastern",
      ingredients: ["falafel", "pita", "lettuce", "tomato", "tahini"],
    },
    {
      name: "Vegetarian Burrito",
      image: "../images/menu-4.webp",
      price: "$8",
      cuisine: "Mexican",
      ingredients: ["tortilla", "beans", "rice", "cheese", "avocado"],
    },
  ];

  // Function to display all menu items
  function displayMenu(items) {
    const menuContainer = $("#menu_list .container");
    menuContainer.empty();

    if (items.length) {
      items.forEach((item) => {
        const menuItem = $(`
            <div id="menu_item_box">
                <div id="image_box">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div id="info_box">
                    <p class="price">${item.price}</p>
                    <h3>${item.name}</h3>
                    <p class="cuisine">Cuisine: <span>${
                      item.cuisine
                    }</span></p><br>
                    <p class="ingredients">Made with <span>${item.ingredients.join(
                      ", "
                    )}</span>.</p>
                </div>
            </div>
        `);
        menuContainer.append(menuItem);
      });
    } else {
      menuContainer.append("<p class='empty_state'>No result found</p>");
    }
  }

  // Function to search dishes based on input
  function searchDishes() {
    const searchTerm = $("#search").val().toLowerCase();
    const filteredItems = menuItems.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchTerm) ||
        item.cuisine.toLowerCase().includes(searchTerm) ||
        item.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(searchTerm)
        )
      );
    });
    displayMenu(filteredItems);
  }

  // Debounce function to limit the rate of search execution
  function debounce(func, delay) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  }

  // Event listener for search input with debounce
  $("#search").on("input", debounce(searchDishes, 500));

  // Initial display of menu items
  displayMenu(menuItems);
});
