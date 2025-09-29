catalogYear = "2025";
catalogTerm = "fall";

const cylayout = {
  name: "dagre",
  rankDir: "TB",
  ranker: "tight-tree",
  nodeSep: 40,
  rankSep: 100,
  edgeSep: 50
}

function buildCourseUrl(label) {
  if (!label) return "#";

  const parts = label.trim().split(" ");
  if (parts.length != 2) return "#";

  const subject = parts[0].toLowerCase();
  let number = parts[1];

  // ensure trailing W gets converted to lowercase
  number = number.replace("W", "w");

  return `https://www.sfu.ca/students/calendar/${catalogYear}/${catalogTerm}/courses/${subject}/${number}.html`;
}

// Build Cytoscape elements
const elements = [
  ...courses.map(c => ({
    data: {
      id : c.label.replace(" ",""),
      label: c.label,
      group: c.group
    }
  })),
  ...prerequisites.map(p => ({ data: { source: p.from, target: p.to } }))
];

// initialize cytoscape
const cy = cytoscape({
  container: document.getElementById("cy"),
  layout: cylayout,
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

// html for the nodes
cy.nodeHtmlLabel([
  {
    query: "node",

    tpl: function(nodeOrData) {
      const d = (typeof nodeOrData.data === "function") ? nodeOrData.data() : nodeOrData;
      const color = d.color || (d.group && groups[d.group].color) || "#e3f2fd";
      const border = d.borderColor || color;
      const textColor = d.textColor || getContrastColor(color);
      const label = d.label || "";
      const url = d.url || "#";

      return `<div class="course-node"
                   style="background:${color}; color:${textColor};">
                ${label}
              </div>`;
    },
    valign: "center",
    halign: "center"
  }
]);

// remove node on right click
cy.on("cxttap", "node", function (evt) {
  const node = evt.target;
  cy.remove(node.connectedEdges());
  cy.remove(node);
});

// generate and follow link on click
cy.on("tap", "node", function(evt) {
  const node = evt.target;
  const url = buildCourseUrl(node.data("label"));
  if (url !== "#") {
    window.open(url, "_blank");
  }
});

function reload() {
  cy.layout(cylayout).run();
}

// reload all elements
function resetGraph() {
  cy.elements().remove();
  cy.add(elements);
  reload();
}

// save current elements and positions
function saveGraph() {
  const elements = cy.elements().jsons(); // nodes + edges
  localStorage.setItem("graphElements", JSON.stringify(elements));
}

// load elements and positions from save
function loadGraph() {
  const saved = localStorage.getItem("graphElements");
  if (saved) {
    cy.elements().remove();
    cy.add(JSON.parse(saved));
    cy.fit(cy.elements(), 30);
  } else {
    cy.add(elements); // your default dataset
    loadGraph();
  }
}

// auto load on startup
loadGraph();