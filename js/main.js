document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("celebrantForm");
  const list = document.getElementById("celebrantList");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const occasion = document.getElementById("occasion").value;
      const date = document.getElementById("date").value;

      const li = document.createElement("li");
      li.innerHTML = `${name} - ${occasion} (${date}) 
        <button class="remove">Remove</button>`;
      list.appendChild(li);

      form.reset();
    });
  }

  if (list) {
    list.addEventListener("click", function (e) {
      if (e.target.classList.contains("remove")) {
        e.target.parentElement.remove();
      }
    });
  }
});
