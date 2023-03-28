const languageSelectionDiv = document.querySelector(".popup");
const EnglishFooterBtn = document.querySelector(".english");

EnglishFooterBtn.addEventListener("click", function () {
  languageSelectionDiv.classList.toggle("hidden");
});
