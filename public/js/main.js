const output = document.querySelector("#output");
const getPostsBtn = document.querySelector("#getPosts");
const createPostBtn = document.querySelector("#create");

async function showPost() {
  try {
    const res = await fetch("http://localhost:8000/api/posts");
    if (!res) {
      throw new Error("Something went wrong");
    }

    const posts = await res.json();
    output.innerHTML = "";

    posts.forEach((post) => {
      const postEl = document.createElement("div");
      postEl.textContent = post.title;
      output.appendChild(postEl);
    });
  } catch (error) {
    throw new Error(error);
  }
}

//submit new post
async function addPost(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const title = formData.get("title");
  const body = formData.get("body");
  try {
    const res = await fetch("http://localhost:8000/api/posts/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    });
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const newPost = await res.json();
    const postEl = document.createElement("div");
    postEl.textContent = newPost.title;
    postEl.textContent = newPost.body;
    output.appendChild(postEl);
    showPost();
  } catch (error) {
    console.error(error);
  }
}

//event listener
getPostsBtn.addEventListener("click", showPost);
createPostBtn.addEventListener("submit", addPost);
