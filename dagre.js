// Configurable academic year + term
const catalogYear = "2025";
const catalogTerm = "fall";

function buildCourseUrl(label) {
  if (!label) return "#";

  // Split into subject + number
  const parts = label.trim().split(/\s+/);
  if (parts.length < 2) return "#";

  const subject = parts[0].toLowerCase(); // e.g. "cmpt"
  let number = parts[1];                  // e.g. "105W"

  // ensure trailing W gets converted to lowercase
  number = number.replace(/W$/, "w");

  return `https://www.sfu.ca/students/calendar/${catalogYear}/${catalogTerm}/courses/${subject}/${number}.html`;
}

// Build Cytoscape elements
const elements = [
  ...courses.map(c => ({
    data: {
      id : c.label.replace(" ",""),
      label: c.label,
      url: buildCourseUrl(c.label),
      color: c.color,   // explicit color (optional)
      group: c.group,    // group name (optional)
      rank: c.rank
    }
  })),
  ...prerequisites.map(p => ({ data: { source: p.from, target: p.to } }))
];

const cy = cytoscape({
  container: document.getElementById("cy"),
  elements: elements,
  layout: {
    name: "dagre",
    rankDir: "TB",
    ranker: "longest-path",
    nodeSep: 120,
    rankSep: 180,
    edgeSep: 50,
  },
  style: [
    {
      selector: "edge",
      style: {
        width: 2,
        "events": "no",
        "line-color": "#f3f3f3ff",
        "target-arrow-shape": "triangle",
        "target-arrow-color": "#0f0f0fff",
        "curve-style": "bezier",
        'arrow-scale': 2,
        'width': 2
      }
    }
  ]
});

// Use nodeHtmlLabel — handle both node object or plain data
cy.nodeHtmlLabel([
  {
    query: "node",
    // tpl may receive a node object (with .data()) or the plain data object — handle both
    tpl: function(nodeOrData) {
      const d = (typeof nodeOrData.data === "function") ? nodeOrData.data() : nodeOrData;
      const color = d.color || (d.group && groupColors[d.group]) || "#e3f2fd";
      const border = d.borderColor || color;
      const textColor = d.textColor || getContrastColor(color);
      const label = d.label || "";
      const url = d.url || "#";
      // inline styles ensure CSS won't accidentally override color choices
      return `<div class="course-node"
                   style="background:${color}; color:${textColor};"
                   onclick="window.open('${url}', '_blank')">
                ${label}
              </div>`;
    },
    valign: "center",
    halign: "center"
  }
]);

cy.nodes().forEach(node => {
  let dragTimeout = null;

  node.on("grab", e => {
    // prevent immediate drag
    e.preventDefault();

    // add a delay before enabling dragging
    dragTimeout = setTimeout(() => {
      node.unlock();   // allow dragging after delay
    }, 200); // delay in ms
  });

  node.on("free", () => {
    clearTimeout(dragTimeout);
    node.lock(); // relock when not dragging
  });

  node.lock(); // lock by default
});