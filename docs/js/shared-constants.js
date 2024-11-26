// Indicators, including separate entries for partial completion
const indSeparatedInfo = [
  {indicator: "ind1_uncat", label: "Ratified UN Convention against Torture", country_text: " states", color: "#285391", text_color: "white", partial: false},
  {indicator: "ind2_opcat", label: "Ratified UN Optional Protocol", country_text: " states", color: "#3f84e6", text_color: "black", partial: false},
  {indicator: "ind3_report", label: "Submitted report to CAT", country_text: " states", color: "#8cb5f0", text_color: "black", partial: false},
  {indicator: "ind4_constitution", label: "Prohibit torture in the constitution", country_text: " states", color: "#B38E09", text_color: "black", partial: false},
  {indicator: "ind5_law_level_2", label: "Criminalize torture in domenstic law", country_text: " states (fully criminalized)", color: "#D9B841", text_color: "black", partial: false},
  {indicator: "ind5_law_level_1", label: "", country_text: " states (partially criminalized)", color: "#D9B841", text_color: "white", partial: true},
  {indicator: "ind7_paris", label: "Have an NHRI that meets the Paris Principles", country_text: " states", color: "#e36360", text_color: "black", partial: false},
  {indicator: "ind6_npm_level_2", label: "Have a National Preventive Mechanism", country_text: " states (designated and operational)", color: "#f1b5b5", text_color: "black", partial: false},
  {indicator: "ind6_npm_level_1", label: "", country_text: " states (designated only)", color: "#f1b5b5", text_color: "black", partial: true}
];

// Indicators, no duplicates for partial completion
const indInfo = indSeparatedInfo.filter(entry => entry.partial === false);

// Whether visualisation should be interactive
const isInteractive = true;

// Region filters
// Can use id as label since capitalisation/format is correct
const filters = [
  {id: "All", label: "All regions", isActive: true, textSentence: "around the world"},
  {id: "Americas", label: "Americas", isActive: false, textSentence: "in the Americas"},
  {id: "Africa", label: "Africa", isActive: false, textSentence: "in Africa"},
  {id: "Europe", label: "Europe", isActive: false, textSentence: "in Europe"},
  {id: "Middle East", label: "Middle East", isActive: false, textSentence: "in the Middle East"},
  {id: "Asia-Pacific", label: "Asia-Pacific", isActive: false, textSentence: "in the Asia-Pacific"}
]


// Time series plot
// Visualisation text
const textTsTitle = "A growing commitment to preventing torture";
const textTsP = "The APT has identified seven key legal measures that indicate a commitment to preventing torture. "
  + "Each bar shows the total number of states that have implemented each legal measure, "
  + "with stripes indicating partial implementations.";

// Spacing between text for ybar reference
// need to define here so can update bar location correctly 
const dyRef = 12;
const dyRefLarge = 18;