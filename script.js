const tech = [
  { label: "HTML" },
  { label: "CSS" },
  { label: "JavaScript" },
  { label: "Node.js" },
  { label: "React" },
  { label: "Vue" },
  { label: "Next.js" },
  { label: "Mobx" },
  { label: "Redux" },
  { label: "React Router" },
  { label: "GraphQl" },
  { label: "PostgreSQL" },
  { label: "MongoDB" },
];

const ref = {
  techList: document.querySelector(".js-list"),
  filterInput: document.getElementById("filter"),
};

function techListMarkup(techList) {
  return techList
    .map((techItem) => {
      return `<li>${techItem.label}</li>`;
    })
    .join("");
}

ref.techList.innerHTML = techListMarkup(tech);
ref.filterInput.addEventListener("input", _.debounce(onFilterChange, 300));

function onFilterChange(e) {
  const filteredItems = tech.filter((element) => {
    if (element.label.toLowerCase().includes(e.target.value.toLowerCase())) {
      return element;
    }
  });
  ref.techList.innerHTML = techListMarkup(filteredItems);
}
