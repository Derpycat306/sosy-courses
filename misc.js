const legendContainer = document.getElementById("legend");

// auto generate legend items from groups
for (const group in groups) {
  const item = document.createElement("div");
  item.className = "legend-item";

  const box = document.createElement("span");
  box.className = "color-box";
  box.style.background = groups[group].color;

  const label = document.createTextNode(groups[group].name || group);

  item.appendChild(box);
  item.appendChild(label);
  legendContainer.appendChild(item);
}

function getContrastColor(hex) {
  if (!hex) return "#0d47a1";
  hex = String(hex).replace("#", "");
  if (hex.length === 3) hex = hex.split("").map(c => c + c).join("");
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.65 ? "#000000" : "#ffffff";
}

const currentYear = new Date().getFullYear();
const yearSelect = document.getElementById("yearSelect");
const termSelect = document.getElementById("termSelect");

// Example: show current year + next 3 years
for (let y = currentYear; y <= currentYear + 3; y++) {
  const opt = document.createElement("option");
  opt.value = y;
  opt.textContent = y;
  yearSelect.appendChild(opt);
}

yearSelect.addEventListener("change", () => {
  catalogYear = yearSelect.value;
});

termSelect.addEventListener("change", () => {
  catalogTerm = termSelect.value;
});