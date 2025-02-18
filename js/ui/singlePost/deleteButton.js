import { deletePost } from "../../logic/api/deletePost.js";

export function deleteButton(id, user, author, container) {
  const buttonsDiv = document.createElement("div");
  buttonsDiv.className = "flex justify-end gap-2 mt-2 mb-10";

  const editButton = document.createElement("button");
  editButton.className =
    "text-sm bg-blue-500 text-white px-3 py-1 rounded-sm hover:bg-blue-700 md:text-base  md:rounded-md md:hover:bg-blue-700 lg:text-lg  lg:rounded-lg lg:hover:bg-blue-700";
  editButton.textContent = "Edit";
  editButton.id = "editButton";
  editButton.addEventListener("click", () => {
    window.location.href = `/edit/?id=${id}&name=${author}`;
  });

  const deleteButton = document.createElement("button");
  deleteButton.className =
    "text-sm bg-red-500 text-white px-3 py-1 rounded-sm hover:bg-red-700 md:text-base  md:rounded-md md:hover:bg-red-700 lg:text-lg  lg:rounded-lg lg:hover:bg-red-700";
  deleteButton.textContent = "Delete";
  deleteButton.id = "deleteButton";

  buttonsDiv.appendChild(editButton);
  buttonsDiv.appendChild(deleteButton);
  container.appendChild(buttonsDiv);

  if (user !== author) {
    deleteButton.style.display = "none";
  }

  deleteButton.addEventListener("click", async () => {
    const response = await deletePost(id);

    if (response.status === 204) {
      location.href = "/profile/";
    } else {
      throw new Error("Could not delete the post.");
    }
  });
}
