const Renderer = function() {

    let renderPosts = function(posts) {
        $("#posts").empty()
        for (let post of posts) {
            let entryPost = $(`
            <div class="entry-post post" data-id="${post.id}">
                <h3 class="post-title post-text">${post.text}</h3>
            </div>
            `)
            let deletePost = $(`<button class="delete"><i class="far fa-trash-alt"></i></button>`)
            let addCommentToPost = $(`
            <div class="add-comment">
                <input type="text" placeholder="Write a comment..">
                <button><i class="fab fa-telegram-plane"></i></button>
            </div>
            `)

            $("#posts").append(entryPost)
            let entryComments = $(`<div class="comments"></div>`)
            $(entryPost).append(entryComments)

            for(let comment of post.comments){
                let entryComment = $(`
                    <div class="entry-comment" data-id="${comment.id}"><i class="fas fa-times delete-comment"></i>${comment.text}</div>
                `)
                $(entryComments).append(entryComment)
            }
            $(entryPost).append(addCommentToPost)
            $(entryPost).append(deletePost)

            // const entryPost = $(`<div class="entry-post"></div>`)
            // let entryPostText = $(`<p class="post-text">${post.text}</p>`)
            // $("#posts").append(entryPost)
            // $(".entry-post").append(entryPostText)
        }
    }

    return{
        renderPosts: renderPosts 
    }
}