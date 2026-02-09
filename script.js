const submitBtn = document.getElementById("submitReco");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const recoList = document.getElementById("recoList");

submitBtn.addEventListener("click", function () {
  const name = document.getElementById("userName").value.trim();
  const message = document.getElementById("userMessage").value.trim();

  if (message === "") {
    alert("Please write a recommendation before submitting.");
    return;
  }

  const newReco = document.createElement("div");
  newReco.classList.add("reco-card");

  if (name !== "") {
    newReco.textContent = `"${message}" — ${name}`;
  } else {
    newReco.textContent = `"${message}"`;
  }

  recoList.appendChild(newReco);

  document.getElementById("userName").value = "";
  document.getElementById("userMessage").value = "";

  popup.style.display = "flex";
});

closePopup.addEventListener("click", function () {
  popup.style.display = "none";
});
