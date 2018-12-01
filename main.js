/******************************
 * Tweeter Project
 * MVC - Controler
******************************/


const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())


// ADD POST
let post = function() {
    tweeter.addPost( $("#input").val() )
    renderer.renderPosts(tweeter.getPosts())
}

// REMOVE POST
$("#posts").on("click", ".delete", function(){
    tweeter.removePost($(this).closest(".post").data().id)
    renderer.renderPosts(tweeter.getPosts())
})

// ADD COMMENT
$("#posts").on("click", "button", function() {
let text = $(this).siblings("input").val()
let postId = $(this).closest(".post").data().id
    tweeter.addComment(text, postId)
    renderer.renderPosts(tweeter.getPosts())
})

// RERMOVE COMMENT
$("#posts").on("click", ".delete-comment", function() {
    let postId = $(this).closest(".post").data().id
    let commentId = $(this).closest(".entry-comment").data().id
    tweeter.removeComment(postId, commentId)
    renderer.renderPosts(tweeter.getPosts())
})






  


// $(".posts").on("click", ".delete" function(){

// tweeter.removePost($(this).data().id)
// })