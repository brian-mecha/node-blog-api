module.exports = {
  getPosts(req, res) {
    res.status(200).send(req.store.posts);
  },
  addPost(req, res) {
    let newPost = req.body
    req.store.posts.push(newPost)
    res.status(201).send('Post created successfully.')
  },
  updatePost(req, res) {
    req.store.posts[req.params.postId] = Object.assign(req.store.posts[req.params.postId], req.body)
    res.status(200).send(req.store.posts[req.params.postId])
  },
  deletePost(req, res) {
    req.store.posts.splice(req.params.postId, 1)
    res.status(200).send('Post deleted successfully.')
  }
}