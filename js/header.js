const headerHTML = document.getElementsByTagName("body");
function header(stuff) {}
console.log(headerHTML);
const headerDOM = headerHTML[0];
const headerNav = `<header class="headerMain">
  <img class="img" src="https://cdn.icon-icons.com/icons2/510/PNG/512/at_icon-icons.com_50456.png" alt="lopas">
  <nav class="navigation">
    <a class="button" href="#">Spausk</a>
    <a class="button" href="#">Nespausk</a>
    <a class="button" href="#">O gal paspausk</a>
  </nav>
</header>`;
headerDOM.innerHTML += headerNav;
