const teamSectionDOM = document.getElementById("team");
const teamMembers = [
  "Jonas",
  "Maryte",
  "Petras",
  "Ona",
  "Arvydas",
  "Aldona nedurna",
  "Zose",
  "Suopis",
];
console.log(teamSectionDOM);

let membersHTML = "";
for (const name of teamMembers) {
  membersHTML += `<li class="member">${name}</li>`;
}
teamSectionDOM.innerHTML = `<ul> ${membersHTML}</ul>`;

const membersListDOM = document.getElementsByClassName("member");
console.log(membersListDOM);
for (const memberDOM of membersListDOM) {
  memberDOM.innerText = "labadiena su vistiena " + memberDOM.innerText;
}

/*
failas header.js  susimportuoti
1. Jis iskvieciamas kiekviename puslapyje 
2. Jame yra funkcija Header. 
3. Sugeneruoja normalu headeri
<header>
  <img src="" alt="">
  <nav>
    <a href=""></a>
    <a href=""></a>
    <a href=""></a>
  </nav>
</header>
4. nuorodos su ciklais?
istatyti i html ir isitikinti jog galima naviguoti po projekto puslapius

 */
