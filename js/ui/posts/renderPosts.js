export function renderPosts(container, posts) {
  posts.forEach((post) => {
    container.innerHTML += `
      <section class="lg:grid lg:grid-cols-1 gap-5">
        <div class="mb-3">
          <div>
            <img
              class="object-cover rounded-sm w-full max-h-96"
              src="/images/avatar1.jpg"
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
              <b>Username</b> Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Optio provident aut deserunt voluptates esse placeat libero
              exercitationem facere nisi nesciunt, ratione, veniam minima
              labore! Soluta consectetur officia quod voluptas mollitia.
            </p>
          </div>
          <div class="px-2">
            <input
              class="text-xs p-1 w-full md:placeholder:text-xl md:text-base lg:p-3 lg:text-xl"
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
