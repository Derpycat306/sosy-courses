// Courses list for Software Systems Major (SFU), non-electives, with groups/colors
const courses = [
  // Lower Division Requirements
  { id: "CMPT105W", label: "CMPT 105W", url: "#", group: "lower", rank: 1  },
  { id: "CMPT130", label: "CMPT 130", url: "#", group: "lower", rank: 1 },
  { id: "CMPT135", label: "CMPT 135", url: "#", group: "lower", rank: 1 },
  { id: "CMPT201", label: "CMPT 201", url: "#", group: "lower", rank: 2 },
  { id: "CMPT210", label: "CMPT 210", url: "#", group: "lower", rank: 2 },
  { id: "CMPT213", label: "CMPT 213", url: "#", group: "lower", rank: 2 },
  { id: "CMPT225", label: "CMPT 225", url: "#", group: "lower", rank: 2 },
  { id: "CMPT276", label: "CMPT 276", url: "#", group: "lower", rank: 2 },
  { id: "CMPT295", label: "CMPT 295", url: "#", group: "lower", rank: 2 },
  { id: "MACM101", label: "MACM 101", url: "#", group: "lower", rank: 1 },
  { id: "MATH151", label: "MATH 151", url: "#", group: "lower", rank: 1 },
  { id: "MATH152", label: "MATH 152", url: "#", group: "lower", rank: 1 },
  { id: "MATH232", label: "MATH 232", url: "#", group: "lower", rank: 2 },
  { id: "STAT271", label: "STAT271", url: "#", group: "lower", rank: 2 },
  { id: "CMPT303", label: "CMPT 303", url: "#", group: "upper_four", rank: 3 },
  { id: "CMPT307", label: "CMPT 307", url: "#", group: "upper_all", rank: 3 },
  { id: "CMPT354", label: "CMPT 354", url: "#", group: "upper_four", rank: 3 },
  { id: "CMPT371", label: "CMPT 371", url: "#", group: "upper_four", rank: 3 },
  { id: "CMPT272", label: "CMPT 272", url: "#", group: "null", rank: 2 },
  { id: "CMPT372", label: "CMPT 372", url: "#", group: "upper_four", rank: 3 },
  { id: "CMPT373", label: "CMPT 373", url: "#", group: "upper_all", rank: 3 },
  { id: "CMPT376W", label: "CMPT 376W", url: "#", group: "upper_all", rank: 3 },
  { id: "CMPT379", label: "CMPT 379", url: "#", group: "upper_two", rank: 3 },
  { id: "CMPT383", label: "CMPT 383", url: "#", group: "upper_two", rank: 3 },
  { id: "CMPT384", label: "CMPT 384", url: "#", group: "upper_two", rank: 3 },
  { id: "CMPT431", label: "CMPT 431", url: "#", group: "upper_four", rank: 4 },
  { id: "CMPT433", label: "CMPT 433", url: "#", group: "upper_four", rank: 4 },
  { id: "CMPT454", label: "CMPT 454", url: "#", group: "upper_four", rank: 4 },
  { id: "CMPT471", label: "CMPT 471", url: "#", group: "upper_four", rank: 4 },
  { id: "CMPT473", label: "CMPT 473", url: "#", group: "upper_all", rank: 4 },
  { id: "CMPT474", label: "CMPT 474", url: "#", group: "upper_two", rank: 4 },
  { id: "CMPT477", label: "CMPT 477", url: "#", group: "upper_two", rank: 4 },
  { id: "CMPT494", label: "CMPT 494", url: "#", group: "capstone", rank: 4 },
  { id: "CMPT495", label: "CMPT 495", url: "#", group: "capstone", rank: 4 }
];


// Prerequisite edges
const prerequisites = [
  { to: "CMPT135", from: "CMPT130" },

  { to: "CMPT201", from: "CMPT135" },
  { to: "CMPT201", from: "MACM101" },

  { to: "CMPT210", from: "CMPT135" },
  { to: "CMPT210", from: "MATH232" },

  { to: "CMPT213", from: "CMPT225" },

  { to: "CMPT225", from: "MACM101" },
  { to: "CMPT225", from: "CMPT135" },

  { to: "CMPT276", from: "MATH151" },
  { to: "CMPT276", from: "CMPT225" },
  { to: "CMPT276", from: "CMPT105W" },

  { to: "CMPT295", from: "MACM101" },
  { to: "CMPT295", from: "CMPT135" },

  { to: "STAT271", from: "CMPT210" },

  { to: "MATH152", from: "MATH151" },

  { to: "MATH232", from: "MATH151" },
  { to: "MATH232", from: "MACM101" },

  { to: "CMPT307", from: "CMPT225" },
  { to: "CMPT307", from: "CMPT210" },

  { to: "CMPT376W", from: "CMPT276" },

  { to: "CMPT303", from: "CMPT225" },
  { to: "CMPT303", from: "CMPT295" },
  { to: "CMPT303", from: "CMPT201" },

  { to: "CMPT354", from: "CMPT225" },

  { to: "CMPT371", from: "CMPT225" },
  { to: "CMPT371", from: "MATH151" },

  { to: "CMPT372", from: "CMPT225" },
  { to: "CMPT372", from: "CMPT272" },

  { to: "CMPT431", from: "CMPT201" },
  { to: "CMPT431", from: "CMPT371" },

  { to: "CMPT433", from: "CMPT201" },
  { to: "CMPT433", from: "CMPT295" },

  { to: "CMPT454", from: "CMPT201" },
  { to: "CMPT454", from: "CMPT354" },
 
  { to: "CMPT471", from: "CMPT201" },
  { to: "CMPT471", from: "CMPT371" },
  
  { to: "CMPT373", from: "CMPT276" },

  { to: "CMPT473", from: "CMPT276" },

  { to: "CMPT379", from: "CMPT210" },
  { to: "CMPT379", from: "CMPT295" },
  { to: "CMPT379", from: "CMPT225" },

  { to: "CMPT383", from: "CMPT225" },

  { to: "CMPT384", from: "CMPT225" },

  { to: "CMPT474", from: "CMPT371" },

  { to: "CMPT477", from: "CMPT276" },

  { to: "CMPT494", from: "CMPT373" },

  { to: "CMPT495", from: "CMPT494" },
];