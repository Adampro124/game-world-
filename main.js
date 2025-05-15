
document.addEventListener("DOMContentLoaded", () => {
  const category = window.location.pathname.split("/").slice(-2)[0];
  if (category === "meisjes") {
    document.body.classList.add("meisjes");
  }
  if (category === "jongens") {
    document.body.classList.add("jongens");
  }
});

function filterGames() {
  const input = document.getElementById('search').value.toLowerCase();
  const items = document.querySelectorAll('.nav-item');
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(input) ? 'block' : 'none';
  });
}
