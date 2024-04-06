// 1. Save the value of the rating buttons into a variable (ratingNum)
// 2. Insert ratingNum to change the text between the span tag (id="ratingNum")
// 3. Toggle the state of the rating component and the thankyou component

const ratingBtns = document.querySelectorAll("ul li button");
const rating = document.querySelector("#rating");

const getRatingNum = (e) => {
  const ratingBtn = e.target;
  const ratingNum = ratingBtn.innerHTML;

  rating.innerHTML = ratingNum;
};

ratingBtns.forEach((btn) => btn.addEventListener("click", getRatingNum));
