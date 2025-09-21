// Courses list for Software Systems Major (SFU), non-electives, with groups/colors
const courses = [
  // Lower Division Requirements
  { label: "CMPT 105W", group: "lower", rank: 1  },
  { label: "CMPT 130", group: "lower", rank: 1 },
  { label: "CMPT 135", group: "lower", rank: 1 },
  { label: "CMPT 201", group: "lower", rank: 2 },
  { label: "CMPT 210", group: "lower", rank: 2 },
  { label: "CMPT 213", group: "lower", rank: 2 },
  { label: "CMPT 225", group: "lower", rank: 2 },
  { label: "CMPT 276", group: "lower", rank: 2 },
  { label: "CMPT 295", group: "lower", rank: 2 },
  { label: "MACM 101", group: "lower", rank: 1 },
  { label: "MATH 151", group: "lower", rank: 1 },
  { label: "MATH 152", group: "lower", rank: 1 },
  { label: "MATH 232", group: "lower", rank: 2 },
  { label: "STAT 271", group: "lower", rank: 2 },
  { label: "CMPT 303", group: "upper_four", rank: 3 },
  { label: "CMPT 307", group: "upper_all", rank: 3 },
  { label: "CMPT 354", group: "upper_four", rank: 3 },
  { label: "CMPT 371", group: "upper_four", rank: 3 },
  { label: "CMPT 272", group: "null", rank: 2 },
  { label: "CMPT 372", group: "upper_four", rank: 3 },
  { label: "CMPT 373", group: "upper_all", rank: 3 },
  { label: "CMPT 376W", group: "upper_all", rank: 3 },
  { label: "CMPT 379", group: "upper_two", rank: 3 },
  { label: "CMPT 383", group: "upper_two", rank: 3 },
  { label: "CMPT 384", group: "upper_two", rank: 3 },
  { label: "CMPT 431", group: "upper_four", rank: 4 },
  { label: "CMPT 433", group: "upper_four", rank: 4 },
  { label: "CMPT 454", group: "upper_four", rank: 4 },
  { label: "CMPT 471", group: "upper_four", rank: 4 },
  { label: "CMPT 473", group: "upper_all", rank: 4 },
  { label: "CMPT 474", group: "upper_two", rank: 4 },
  { label: "CMPT 477", group: "upper_two", rank: 4 },
  { label: "CMPT 494", group: "capstone", rank: 4 },
  { label: "CMPT 495", group: "capstone", rank: 4 }
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