const links = [
  {
    link: "../index.html",
    title: "Main page",
  },
  {
    link: "../team/index.html",
    title: "Team page",
  },
  {
    link: "../services/index.html",
    title: "Services page",
  },
  {
    link: "../basketball/index.html",
    title: "Krepšinis",
  },
  {
    link: "../snake/index.html",
    title: "Kūbas",
  },
];
let addLinks = "";
for (const check of links) {
  // console.log(check.link);
  addLinks += `<a class="button" href="${check.link}">${check.title}</a>`;
}
// console.log(addLinks);

const headerNav = `<header class="headerMain">
  <img class="img" src="https://cdn.icon-icons.com/icons2/510/PNG/512/at_icon-icons.com_50456.png" alt="lopas">
  <nav class="navigation">${addLinks}</nav>
</header>`;

function header(stuff) {
  return stuff + headerHTML.innerHTML;
}
// headerHTML.innerHTML = header(headerNav);
document.body.insertAdjacentHTML("afterbegin", headerNav);
