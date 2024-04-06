// 3. Toggle the state of the rating component and the thankyou component

const ratingBtns = document.querySelectorAll("ul li button");
const rating = document.querySelector("#rating");
const ratingSec = document.querySelector(".rating");
const thankyouSec = document.querySelector(".thankyou");
const submitBtn = document.querySelector(".submit");

const getRatingNum = (e) => {
  const ratingBtn = e.target;

  // 1. Save the value of the rating buttons into a variable (ratingNum)
  const ratingNum = ratingBtn.innerHTML;

  // 2. Insert ratingNum to change the text between the span tag (id="rating")
  rating.innerHTML = ratingNum;
};

const submitRating = () => {
  ratingSec.setAttribute("hidden", "hidden");
  thankyouSec.removeAttribute("hidden");
};

ratingBtns.forEach((btn) => btn.addEventListener("click", getRatingNum));
submitBtn.addEventListener("click", submitRating);
