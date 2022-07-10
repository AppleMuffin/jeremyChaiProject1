const navButton = document.querySelector('.navButton');
const closeNav = document.querySelector('.closeSlideOut');
const slideOutNav = document.querySelector('div.slideOutNav');

//toggle nav slideout open and close
navButton.addEventListener('click', (event) => {
  navToggle(event);
});

//slideOut nav has its own button to close the nav. in the case user cant close the slideout via hamburger cause its blocked, can use this x button instead
closeNav.addEventListener('click', (event) => {
  navToggle(event);
  console.log(slideOutNav.style.left)
})

//created a function to handle closing the nav since both the hamburger nav and X button on the slideout should have this function.
function navToggle(event) {
  event.preventDefault();
  if (slideOutNav.style.left === "0px") {
    slideOutNav.style.left = "-2000px";
  } else {
    slideOutNav.style.left = "0px";
  }

}

//search bar for magnifying glass search icon
const searchIcon = document.querySelector('.searchIcon');
const searchBar = document.querySelector('.searchBar');
searchIcon.addEventListener('click', (event) => {

  console.log(searchBar);
  event.preventDefault()
  if (searchBar.style.top === "") {
    searchBar.style.top = "50px";
  } else if (searchBar.style.top === "-50px") { 
    searchBar.style.top = "50px"
  } else {
    searchBar.style.top = "-50px"
  }

});

// modal for submitting feedback
const feedbackButton = document.querySelector('.contactSubmit');
const modalSubmitNotice = document.querySelector('.submitNotice');
const submitNoticeCloseWindow = document.querySelector('.submitNotice button');

feedbackButton.addEventListener('click', (event) => {
  event.preventDefault();
  modalSubmitNotice.style.display = "inline";
});

submitNoticeCloseWindow.addEventListener('click', (event) => {
  event.preventDefault();
  modalSubmitNotice.style.display = "";
})

// simple stuff so far, and it could be simplified/DRYer, but good enough for now. in future should consider saving these functions as they can be applied to multiple elements in the page

