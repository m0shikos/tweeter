/******************************
 * Tweeter Project
 * MVC - Model
******************************/

const Tweeter = function() {

    let postCount = 2
    let commentCount = 6

    // POSTS DATA
    const posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    // ADD POST
    const addPost = function(text) {
       postCount++
        let newId = "p" + postCount
        posts.unshift( { 
            text: text,
            id: newId,
            comments: []
        } )
    }

    // GET POST
    let getPosts = () => posts

    // REMOVE POST
    let removePost = function(postId) {
        for ( let p in posts ) {
            if ( posts[p].id == postId) {
                posts.splice(p, 1)
            }
        }
    }

    // ADD COMMENT
    let addComment = function(text, postId){
        commentCount++
        let newId = "c" + commentCount
        for ( let c in posts ) {
            if ( posts[c].id == postId) {
                posts[c].comments.push( {
                    id: newId,
                    text: text
                })
            }
        }
    }

    // REMOVE COMMENT
    let removeComment = function(postId, commentId) {
        for ( let i in posts ) {
            if (posts[i].id == postId) {
                for (let n in posts[i].comments) {
                    if (posts[i].comments[n].id == commentId) {
                        posts[i].comments.splice(n, 1)
                    }
                }
            }
        }
    }

    return {
        getPosts: getPosts,
        addPost: addPost,
        addComment: addComment,
        removePost: removePost,
        removeComment: removeComment
    }
}

// const tweeter = Tweeter()
