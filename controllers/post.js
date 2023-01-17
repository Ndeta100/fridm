//@desc Updates a single post
//route  get api/v1/post
//access  public
exports.getAllPosts=(req, res,next)=>{
    res.status(200).json({
        success:true, msg:'Show all posts'
    })
}
//@desc Get a single post
//route  get api/v1/posts/:id
//access  public
exports.createPost=(req, res,next)=>{
    res.status(200).json({
        success:true, msg:`Created post with id ${req.params.id}`
    })
}
// @desc Updates a single post
//route  put api/v1/posts/:id
//access  private
exports.updatePost=(req,res,next)=>{
    res.status(200).json({
        success:true, msg:`update post with id ${req.params.id}`
    })
}
// @desc Deletes a single post
//route  delete api/v1/posts/:id
//access  private
exports.deletePost=(req,res,next)=>{
    res.status(200).json({
        success:true, msg:`Delete post with id ${req.params.id}`
    })

}