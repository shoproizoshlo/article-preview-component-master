const shareButton = document.querySelector(".fa-share");
const shareBlock = document.querySelector(".share-wind");

shareButton.addEventListener("click", () => {
  let currentVisibility = shareBlock.style.visibility;
  if (currentVisibility === "visible") {
    shareBlock.style.visibility = "hidden";
  } else {
    shareBlock.style.visibility = "visible";
  }
});
