let linkOne = document.querySelector(".link_one");
let linkTwo = document.querySelector(".link_two");
let linkThree = document.querySelector(".link_three");
let learnMore = document.querySelector(".learn_more")
let navLinks = document.querySelectorAll("nav a")

linkOne.addEventListener('click', () => {
  navLinks.forEach(links => {
    links.style.color = "silver"
})
});
linkTwo.addEventListener('click', () => {
  navLinks.forEach(links => {
      links.style.color = "black"
  })
});
linkThree.addEventListener('click', () => {
  navLinks.forEach(links => {
    links.style.color = "black"
})
});
learnMore.addEventListener('click', () => {
    navLinks.forEach(links => {
        links.style.color = "black"
    })
  });