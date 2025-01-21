export function renderPosts(container, posts) {
  posts.forEach((post) => {
    const imageUrl = post.media?.url ?? "../../../images/no-image.png";
    const bio = post.body ?? "No bio available";

    // console.log(post);
    container.innerHTML += `
      <section class="lg:grid lg:grid-cols-1 gap-5">
        <div class="mb-3">
          <div>
            <img
              class="object-cover rounded-sm w-full max-h-96"
              src="${imageUrl}"
              alt="User avatar"
            />
          </div>
          <div class="flex gap-2 m-2">
            <img
              class="w-5 h-5 md:w-7 md:h-7"
              src="/images/fi-rr-heart.png"
              alt="heart icon"
            />
            <img
              class="w-5 h-5 md:w-7 md:h-7"
              src="/images/comment.png"
              alt="comment icon"
            />
            <img
              class="w-5 h-5 md:w-7 md:h-7"
              src="/images/fi-rr-paper-plane.png"
              alt="send icon"
            />
          </div>
          <div>
            <p class="text-sm p-2 md:text-xl">
              <b>${post.author.name}</b> ${bio}
            </p>
          </div>
          <div class="px-2">
            <input
              class="text-xs p-1 w-full md:placeholder:text-xl md:text-base lg:p-3 lg:text-xl"
              name="comment"
              type="text"
              placeholder="Add a comment"
            />
          </div>
          <hr />
        </div>
        
      </section>
      `;
  });
}
