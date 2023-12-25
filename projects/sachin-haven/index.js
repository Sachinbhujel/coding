function search() {
  let search = document.getElementById("search-item").value;
  console.log(search);
  if (
    search == "tshirts" ||
    search == "Tshirts" ||
    search == "ts" ||
    search == "Ts"
  ) {
    let allItem = document.querySelectorAll(".allItem");
    for (var i = 0; i < allItem.length; i++) {
      allItem[i].style.display = "none";
    }
    for (var i = 0; i < document.querySelectorAll(".tshirts").length; i++) {
      document.querySelectorAll(".tshirts")[i].style.display = "flex";
    }
  } else if (search == "watch" || search == "Watch" || search == "watc" || search == "Watc") {
    let allItem = document.querySelectorAll(".allItem");
    for (var i = 0; i < allItem.length; i++) {
      allItem[i].style.display = "none";
    }
    for (var i = 0; i < document.querySelectorAll(".watch").length; i++) {
      document.querySelectorAll(".watch")[i].style.display = "flex";
    }
  } else if(search == "hoodie" || search == "Hoodie" || search == "hoddie" || search == "Hoddie"){
    let allItem = document.querySelectorAll(".allItem");
    for (var i = 0; i < allItem.length; i++) {
      allItem[i].style.display = "none";
    }
    for (var i = 0; i < document.querySelectorAll(".hoodie").length; i++) {
      document.querySelectorAll(".hoodie")[i].style.display = "flex";
    }
  } else if(search == ""){
    let allItem = document.querySelectorAll(".allItem");
    for (var i = 0; i < allItem.length; i++) {
      allItem[i].style.display = "flex";
    }
  } else if(search == "bag" || search == "Bag" || search == "Bags" || search == "bags"){
    let allItem = document.querySelectorAll(".allItem");
    for (var i = 0; i < allItem.length; i++) {
      allItem[i].style.display = "none";
    }
    for (var i = 0; i < document.querySelectorAll(".bag").length; i++) {
      document.querySelectorAll(".bag")[i].style.display = "flex";
    }
  } else if(search == "sneakers" || search == "Snekaers" || search == "Shoes" || search == "shoes" || search == "sneaker" || search == "Sneaker"){
    let allItem = document.querySelectorAll(".allItem");
    for (var i = 0; i < allItem.length; i++) {
      allItem[i].style.display = "none";
    }
    for (var i = 0; i < document.querySelectorAll(".sneakers").length; i++) {
      document.querySelectorAll(".sneakers")[i].style.display = "flex";
    }
  } else if(search == "shirts" || search == "Shirts" || search == "shirt" || search == "Shirt"){
    let allItem = document.querySelectorAll(".allItem");
    for (var i = 0; i < allItem.length; i++) {
      allItem[i].style.display = "none";
    }
    for (var i = 0; i < document.querySelectorAll(".shirts").length; i++) {
      document.querySelectorAll(".shirts")[i].style.display = "flex";
    }
  } else{
    alert("Not Available! Come back soon...")
  }
}
