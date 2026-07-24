(() => {
  const controls = document.querySelector("[data-sample-library-controls]");
  const grid = document.querySelector("[data-sample-library-grid]");
  if (!controls || !grid) return;

  const search = controls.querySelector("#sample-library-search");
  const availability = controls.querySelector("#sample-library-availability");
  const count = controls.querySelector("[data-sample-library-count]");
  const countLabel = controls.querySelector("[data-sample-library-count-label]");
  const empty = document.querySelector("[data-sample-library-empty]");
  const cards = Array.from(grid.querySelectorAll("[data-sample-card]"));

  const update = () => {
    const query = search.value.trim().toLocaleLowerCase();
    const selectedAvailability = availability.value;
    let visible = 0;

    cards.forEach((card) => {
      const matchesQuery = !query || card.dataset.search.includes(query);
      const matchesAvailability = selectedAvailability === "all" ||
        card.dataset.availability === selectedAvailability;
      card.hidden = !(matchesQuery && matchesAvailability);
      if (!card.hidden) visible += 1;
    });

    count.textContent = visible;
    countLabel.textContent = visible === 1 ? "sample" : "samples";
    empty.hidden = visible !== 0;
  };

  search.addEventListener("input", update);
  availability.addEventListener("change", update);
})();
