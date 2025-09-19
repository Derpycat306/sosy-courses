const groupColors = {
  lower: "#4caf50",
  upper_all: "#2196f3",
  upper_two: "#fffb00ff",
  upper_four: "#ffc061ff",
  capstone: "#f44336",
  null: "#929292ff"
};

const groupNames = {
  lower: "Required Lower Division",
  upper_all: "Required Upper Division",
  upper_two: "Must Take 6 units",
  upper_four: "Must Take 12 units",
  capstone: "Capstone",
  null: "Prerequisite Only"
};

// ---------- LEGEND ---------- //

const legendContainer = document.getElementById("legend");

for (const group in groupColors) {
  const item = document.createElement("div");
  item.className = "legend-item";

  const box = document.createElement("span");
  box.className = "color-box";
  box.style.background = groupColors[group];

  const label = document.createTextNode(groupNames[group] || group);

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