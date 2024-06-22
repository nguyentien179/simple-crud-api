let posts = [
  { id: 1, title: "post one", body: "this is post one" },
  { id: 2, title: "post two", body: "this is post two" },
  { id: 3, title: "post three", body: "this is post three" },
];

//@desc get all post
//@route GET /api/posts
export const getPosts = (req, res, next) => {
  if (!isNaN) {
    res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
};
//get single post
//@route GET /api/posts/:id
export const getById = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    const error = new Error(`Post with ID ${id} not found`);
    error.status = 404;
    return next(error);
  }
  res.status(200).json(post);
};

//create post
//@route POST /api/posts/create
export const createPost = (req, res, next) => {
  const { title, body } = req.body;
  const newPost = { id: posts.length + 1, title, body };
  if (!title || !body) {
    const error = new Error("Title and body are required");
    error.status = 400;
    return next(error);
  }
  posts.push(newPost);
  res.status(201).json(newPost);
};

//update post
//@route PUT /api/posts/update/:id
export const updatePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const { title, body } = req.body;
  const post = posts.find((post) => post.id === id);
  if (!post) {
    const error = new Error(`Post with ID ${id} not found`);
    error.status = 404;
    return next(error);
  }
  if (!title || !body) {
    const error = new Error("Title and body are required");
    error.status = 400;
    return next(error);
  }
  post.title = title;
  post.body = body;
  res.status(200).json(post);
};

//delete post
//@route DELETE /api/posts/delete/:id
export const deletePost = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    const error = new Error(`Post with ID ${id} not found`);
    error.status = 404;
    return next(error);
  }

  posts = posts.filter((post) => post.id !== id);
  res.status(200).json({ message: `post with id ${id} deleted` });
  res.status(200).json(posts);
};
