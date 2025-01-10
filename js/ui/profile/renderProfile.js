export function renderProfile(data, container) {
  // Clear the container
  document.querySelector("#loadingContainer").innerHTML = "";

  // Create the section element
  const section = document.createElement("section");

  // Create the first div (profile picture and stats)
  const div1 = document.createElement("div");
  div1.className = "flex justify-between items-center px-6 py-4 lg:p-10";

  // Create the profile picture div
  const profilePicDiv = document.createElement("div");
  const profileImg = document.createElement("img");
  profileImg.className = "rounded-full w-20 md:w-24 lg:w-32 xl:w-36";
  profileImg.src = "/images/guest.png";
  profileImg.src = data.avatar.url ? data.avatar.url : "/images/guest.png";
  profileImg.alt = data.avatar.alt ? data.avatar.alt : "Profile Picture";
  profilePicDiv.appendChild(profileImg);

  // Create the stats div
  const statsDiv = document.createElement("div");
  statsDiv.className =
    "flex justify-center items-center gap-4 text-xs md:text-sm lg:text-lg xl:text-xl xl:gap-8";

  // Create the posts stat
  const postsStat = createStat(data._count.posts, "Posts");
  statsDiv.appendChild(postsStat);

  // Create the followers stat
  const followersStat = createStat(data._count.followers, "Followers");
  statsDiv.appendChild(followersStat);

  // Create the following stat
  const followingStat = createStat(data._count.following, "Following");
  statsDiv.appendChild(followingStat);

  // Append profile picture and stats to the first div
  div1.appendChild(profilePicDiv);
  div1.appendChild(statsDiv);

  // Create the second div (name, bio, and follow button)
  const div2 = document.createElement("div");
  div2.className = "p-1";

  // Create the name div
  const nameDiv = document.createElement("div");
  nameDiv.className = "flex justify-between mx-3";
  const nameHeading = document.createElement("h1");
  nameHeading.className =
    "font-bold text-sm md:text-base lg:text-lg xl:text-xl";
  nameHeading.textContent = data.name;
  nameDiv.appendChild(nameHeading);

  // Create the bio div
  const bioDiv = document.createElement("div");
  bioDiv.className = "mx-3 text-xs md:text-base lg:text-lg xl:text-xl";
  const bioParagraph = document.createElement("p");
  bioParagraph.textContent = data.bio;
  bioDiv.appendChild(bioParagraph);

  // Create the follow button
  const followButton = document.createElement("a");
  followButton.className =
    "flex justify-center text-sm bg-blue-500 text-white rounded-sm p-1 mx-2 my-3 md:text-base lg:text-lg xl:text-xl hover:bg-blue-600 cursor-pointer font-bold";
  followButton.textContent = "Follow";

  // Append name, bio, and follow button to the second div
  div2.appendChild(nameDiv);
  div2.appendChild(bioDiv);
  div2.appendChild(followButton);

  // Append both divs to the section
  section.appendChild(div1);
  section.appendChild(div2);

  // Append the section to the container
  container.appendChild(section);

  function createStat(count, label) {
    const statDiv = document.createElement("div");
    const countPara = document.createElement("p");
    countPara.className =
      "text-sm text-center font-bold md:text-base lg:text-lg xl:text-xl";
    countPara.textContent = count;

    const labelPara = document.createElement("p");
    labelPara.textContent = label;

    statDiv.appendChild(countPara);
    statDiv.appendChild(labelPara);

    return statDiv;
  }
}
