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
    nodeSep: 40,
    rankSep: 100,
    edgeSep: 50,
  },
  style: [
    {
      selector: "node",
      style: {
        "width": 110,           // make the hitbox wider
        "height": 22,           // make it taller
        "background-opacity": 0, // hide the default background
        "border-opacity": 0,
        "shape": "round-rectangle",
      }
    },
    {
      selector: "edge",
      style: {
        width: 2,
        "line-color": "#f3f3f3ff",
        "target-arrow-shape": "triangle",
        "target-arrow-color": "#0f0f0fff",
        "curve-style": "bezier",
        'arrow-scale': 2,
        'width': 2,
        "events": "no"
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
                   style="background:${color}; color:${textColor};">
                ${label}
              </div>`;
    },
    valign: "center",
    halign: "center"
  }
]);

cy.on("cxttap", "node", function (evt) {
  const node = evt.target;

  if (confirm(`Delete ${node.data("label")}?`)) {
    cy.remove(node.connectedEdges());
    cy.remove(node);

    // Rerun the dagre layout after removal
    cy.layout({
      name: "dagre",
      rankDir: "TB",
      ranker: "longest-path",
      nodeSep: 40,
      rankSep: 100,
      edgeSep: 50,
    }).run();
  }
});

cy.on("tap", "node", function(evt) {
  const node = evt.target;
  const url = node.data("url");
  if (url && url !== "#") {
    window.open(url, "_blank");
  }
});