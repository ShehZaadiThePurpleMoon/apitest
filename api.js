/* function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
} */
function loadPost() {
    fetch ('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(json => displayPost(json))
}
loadPost()

function displayPost(json) {
    //console.log(data);
    const ui = document.getElementById('posts');
    for(const post of json){
        //console.log(post.title);
        const li = document.createElement('li');
        li.classList.add('post')
        li.innerText = `Title: ${post.title}   Post ID: ${post.id}`;
        ui.appendChild(li);
    }
    
}


  