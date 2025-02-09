export function renderMenu() {
  const currentPageUrl = window.location.pathname;

  // Create the nav element
  const nav = document.createElement("nav");
  nav.className =
    " fixed bottom-0 w-full bg-white md:px-16 xl:block xl:fixed xl:left-6 xl:top-40 xl:w-64 ";

  // Create the ul element
  const ul = document.createElement("ul");
  ul.className =
    "flex justify-between mx-5 py-1 lg:mx-5  xl:flex-col xl:gap-14 items-center ";

  // Create the list items with links and images
  const navItems = [
    {
      href: "/feed/",
      imgSrc: "/images/home.png",
      alt: "home icon",
      text: "Home",
    },
    {
      href: "/feed/#search",
      imgSrc: "/images/search.png",
      alt: "search icon",
      text: "Search",
    },
    {
      href: "/posts/",
      imgSrc: "/images/add.png",
      alt: "create post icon",
      text: "Create",
    },
    {
      href: "/profile/",
      imgSrc: "/images/guest.png",
      alt: "account icon",
      text: "Profile",
    },
  ];

  navItems.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.href;
    a.className = "flex gap-2 items-center";

    const img = document.createElement("img");
    img.src = item.imgSrc;
    img.alt = item.alt;
    img.className = "w-6 lg:w-7 xl:w-8";

    // Check if the link's href matches the current page's URL
    if (item.href === currentPageUrl) {
      li.classList.add("border-b-4", "border-blue-500", "pb-1", "rounded-xs");
    }

    if (item.text === "Profile") {
      img.classList.add("rounded-full", "border", "border-black");
    }

    const span = document.createElement("span");
    span.className = "hidden xl:inline-block";
    span.textContent = item.text;

    a.appendChild(img);
    a.appendChild(span);
    li.appendChild(a);
    ul.appendChild(li);
  });

  // Append the ul to the nav
  nav.appendChild(ul);

  const mainContainer = document.querySelector("#nav");
  mainContainer.appendChild(nav);
}
