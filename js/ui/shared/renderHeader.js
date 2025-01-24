export function renderHeader() {
  // Clear the container

  const container = document.querySelector("header");

  // Create the header element
  const header = document.createElement("header");
  header.classList.add(
    "flex",
    "justify-between",
    "mt-3",
    "mx-3",
    "mb-1",
    "md:mx-20",
    "xl:mx-72"
  );

  // Create the first div (logo container)
  const logoContainer = document.createElement("div");
  const logoLink = document.createElement("a");
  logoLink.href = "/feed/";
  const logoImage = document.createElement("img");
  logoImage.classList.add("w-20", "md:w-28", "lg:w-32", "xl:w-34");
  logoImage.src = "/images/logo.svg";
  logoImage.alt = "Vibely logo";
  logoLink.appendChild(logoImage);
  logoContainer.appendChild(logoLink);

  // Create the second div (icons container)
  const iconsContainer = document.createElement("div");
  iconsContainer.classList.add(
    "flex",
    "justify-center",
    "items-center",
    "gap-3"
  );

  // Create the heart icon
  const heartIconContainer = document.createElement("div");
  const heartIcon = document.createElement("img");
  heartIcon.classList.add("w-5", "lg:w-6", "xl:w-7");
  heartIcon.src = "/images/heart.png";
  heartIcon.alt = "heart icon";
  heartIconContainer.appendChild(heartIcon);

  // Create the logout icon
  const logoutIconContainer = document.createElement("div");
  const logoutLink = document.createElement("a");
  logoutLink.href = "/index.html";
  const logoutIcon = document.createElement("img");
  logoutIcon.classList.add("w-5", "lg:w-6", "xl:w-7");
  logoutIcon.src = "/images/logout.png";
  logoutIcon.alt = "message icon";
  logoutLink.appendChild(logoutIcon);
  logoutIconContainer.appendChild(logoutLink);

  // Append icons to the icons container
  iconsContainer.appendChild(heartIconContainer);
  iconsContainer.appendChild(logoutIconContainer);

  // Append both containers to the header
  header.appendChild(logoContainer);
  header.appendChild(iconsContainer);

  // Append the header to the body
  container.appendChild(header);

  // Create and append the horizontal rule (hr)
  const hr = document.createElement("hr");
  container.appendChild(hr);
}
