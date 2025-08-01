// ✅ Use the full published URL, not just the sheet ID
const publicSpreadsheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQrgFhbLMxe37E1aOO4ohoDez-krVef4PNI5oHPl47_KvVZ4s6hP30k3j8swqYvjCzj6leuyvvHJrs3/pubhtml";

window.addEventListener("DOMContentLoaded", init);

function init() {
  Tabletop.init({
    key: publicSpreadsheetURL,
    callback: showMenu,
    simpleSheet: true
  });
}

function showMenu(data) {
  console.log("Fetched data from sheet:", data); // For debugging

  // Clear existing menu items
  document.querySelectorAll(".menu-category ul").forEach(ul => ul.innerHTML = "");

  // Populate menu from each row
  data.forEach(row => {
    if (row.Breakfast) addItem("breakfast", row.Breakfast);
    if (row.Lunch) addItem("lunch", row.Lunch);
    if (row.Snacks) addItem("snacks", row.Snacks);
    if (row.Special) addItem("special", row.Special);
  });

  // Add today's date
  document.getElementById("date").innerText =
    new Date().toLocaleDateString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
}

function addItem(category, item) {
  const ul = document.querySelector(`#${category} ul`);
  const li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
}
