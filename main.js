// ღილაკის დამალვა და მოდალის გახსნა
let openModalBtn = document.getElementById("openModalBtn");
let modal = document.getElementById("modal");

openModalBtn.addEventListener("click", function() {
  modal.style.display = "block";
});

// მოდალის დახურვა
let closeModalBtn = document.getElementById("closeModalBtn");

closeModalBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// მოდალის გადახვევა კლიკზე გარე ფონზე
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
