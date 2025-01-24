export function renderSearchFilter(container) {
  // Create the search section
  const searchSection = document.createElement("section");
  searchSection.className = "m-3";

  // Create the search container
  const searchContainer = document.createElement("div");
  searchContainer.id = "search";
  searchContainer.className =
    "flex rounded-md border-2 border-gray-500 overflow-hidden max-w-sm mx-auto lg:max-w-lg";

  // Create the search input
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search Something...";
  searchInput.className =
    "w-full outline-none bg-white text-gray-600 text-sm p-1 placeholder:text-xs md:placeholder:text-sm md:p-2 lg:p-3 lg:placeholder:text-base";
  searchInput.id = "searchInput";

  // Create the search button
  const searchButton = document.createElement("button");
  searchButton.type = "button";
  searchButton.className =
    "flex items-center justify-center bg-blue-500 px-5 hover:bg-blue-600";
  searchButton.id = "searchButton";

  // Create the search icon SVG
  const searchIcon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  searchIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  searchIcon.setAttribute("viewBox", "0 0 192.904 192.904");
  searchIcon.setAttribute("width", "16px");
  searchIcon.classList.add("fill-white");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"
  );

  searchIcon.appendChild(path);
  searchButton.appendChild(searchIcon);

  // Append the input and button to the search container
  searchContainer.appendChild(searchInput);
  searchContainer.appendChild(searchButton);

  // Append the search container to the search section
  searchSection.appendChild(searchContainer);

  // Create the filter section
  const filterSection = document.createElement("section");

  // Create the filter container
  const filterContainer = document.createElement("div");
  filterContainer.className = "mx-3";

  // Create the filter label
  const filterLabel = document.createElement("label");
  filterLabel.className = "text-sm md:text-xl";
  filterLabel.textContent = "Filter by:";
  filterLabel.setAttribute("for", "filter");

  // Create the filter select dropdown
  const filterSelect = document.createElement("select");
  filterSelect.className = "text-sm md:text-xl";
  filterSelect.id = "filter";
  filterSelect.name = "filter";

  const recentOption = document.createElement("option");
  recentOption.value = "recent";
  recentOption.id = "recent";
  recentOption.textContent = "Recent";

  const oldestOption = document.createElement("option");
  oldestOption.value = "oldest";
  oldestOption.id = "oldest";
  oldestOption.textContent = "Oldest";

  // Append options to the select dropdown
  filterSelect.appendChild(recentOption);
  filterSelect.appendChild(oldestOption);

  // Append the label and select to the filter container
  filterContainer.appendChild(filterLabel);
  filterContainer.appendChild(filterSelect);

  // Append the filter container to the filter section
  filterSection.appendChild(filterContainer);

  // Append both sections to the main container
  container.appendChild(searchSection);
  container.appendChild(filterSection);
}
