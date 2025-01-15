import { getUsername } from "../../logic/utils/storage.js";
import { formatDate } from "../shared/formatDate.js";

export function renderPost(container, post) {
  const user = getUsername();
  const postDate = formatDate(post.created);

  console.log(post);

  container.innerHTML += `
  <section class="flex flex-col items-center justify-center">
        <div class ="flex justify-start w-full p-1">  
        <a href="/profile" class="underline decoration-violet-800 text-violet-800 sm: text-sm" > < Back to profile</a>
        </div>
        <article class="mt-3 w-full">
        <div>
            <p class="text-sm  md:text-xl">
              <b>${user}</b>
            </p>
        </div>
          <div>
            <img
              class="object-cover rounded-sm w-full max-h-96 "
              src="${post.media?.url ? post.media.url : "/images/noimg.png"}"
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
            <p class=" text-md px-1 text-left" > ${post.body}</p>
            
                <p class="text-xs italic text-gray-400 px-1 md:text-sm">
                ${postDate}
                </p>
            </div>
          
          <div>
            <p class="text-xs p-1 md:text-sm">
              I really like this post! Keep up the good work!
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
        </article>
        </section>`;
}
