document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    const team = button.dataset.team;
    const points = parseInt(button.dataset.points);
    const column = document.getElementById(team);
    const scoreEl = column.querySelector(".score");

    let currentScore = parseInt(scoreEl.textContent);
    scoreEl.textContent = currentScore + points;
  });
});