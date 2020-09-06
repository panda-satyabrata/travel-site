//Function to select elements
const selectElememt = (s) => document.querySelector(s);
//Open Menu onClick
selectElememt(".open").addEventListener("click", () => {
  selectElememt(".nav-list").classList.add("active");
});
//Close Menu onClick
selectElememt(".close").addEventListener("click", () => {
  selectElememt(".nav-list").classList.remove("active");
});
