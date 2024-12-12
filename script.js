const menuItems = document.querySelectorAll('.menu li');  
  
menuItems.forEach((item, index) => {  
   item.style.animationDelay = `${index * 0.5}s`;  
});
