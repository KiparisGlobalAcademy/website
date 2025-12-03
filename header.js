// header.js
fetch("/header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    // Скрипт для мобильного меню — выполняем только после вставки хедера
    const mobileMenu = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav ul');
    
    mobileMenu.addEventListener('click', function() {
        nav.classList.toggle('show');
    });
  });
