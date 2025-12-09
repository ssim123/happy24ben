document.getElementById("heartsGrid").addEventListener("click", function (event) {
  const heartButton = event.target.closest(".heart");
  if (!heartButton) return;

  const messageText = heartButton.dataset.message;
  const messageBox = heartButton.parentElement.querySelector(".message");

  const isVisible = messageBox.classList.contains("visible");

  if (isVisible) {
    messageBox.classList.remove("visible");
    messageBox.textContent = "";
    heartButton.classList.remove("opened");
  } else {
    messageBox.classList.add("visible");
    messageBox.textContent = messageText;
    heartButton.classList.add("opened");
  }
});