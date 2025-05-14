// Toggle Modal Visibility
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");
const modal = document.getElementById("modal");

openModalButton.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeModalButton.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Example of a Function with Parameters and Return Value
function calculateVacationCost(days, costPerDay) {
  return days * costPerDay;
}

console.log(`Total cost: $${calculateVacationCost(7, 150)}`);
