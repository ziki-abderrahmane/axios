document.getElementById('Get_Posts').addEventListener('click',getPosts);
document.getElementById('Get_Post_id').addEventListener('click',GetPostId);
document.getElementById('Add_Post').addEventListener('click',AddPost);
document.getElementById('Delete_Post').addEventListener('click',DeletePost);
document.getElementById('Update_Post').addEventListener('click',UpdatePost);

function getPosts(){
    axios('http://jsonplaceholder.typicode.com/posts',{
        method:"GET"
    })
    .then((res)=>{
        let output="";
    res.data.forEach(post => {
        output+=`<div style="margin:20px"><h3>Title:${post.title}</h3>ID:<small>${post.id}</small><br>
        <p>${post.body}</p>
        </div><hr>`;
    });
    document.getElementById('result').innerHTML=output;})
    .catch(err=>document.getElementById('result').innerHTML=`<h1 class="alert alert-error">${err}</h1>`)
    ;
    // axios.get("'http://jsonplaceholder.typicode.com/posts'")
    // .then((res)=>console.log(res)
    // .catch((err)=>document.getElementById('result').innerHTML=`<h1 class="alert alert-error">${err}</h1>`);
}
function GetPostId(){
    axios.get('http://jsonplaceholder.typicode.com/posts/20')
    .then(res=>{ 
        let output="";
           output+=`<div style="margin:20px"><h3>:${res.data.title}</h3><small>${res.data.id}</small><br>
        <p>${res.data.body}</p>
        </div><hr>`;
     document.getElementById('result').innerHTML=output;

    })
    .catch(err=>document.getElementById('result').innerHTML=`<h1 class="alert alert-error">${err}</h1>`)
}

function AddPost(){
    axios.post('http://jsonplaceholder.typicode.com/posts',{
       
            data:{
                title:"new post at :"+new Date(),
                body:"Lorem ipsum dolor sit amet,consectetur adipisicing elit."
            }
          })
    .then((res)=>{
        alert("bien ajouter ");
         console.log(res);
    })
    .catch(err=>document.getElementById('result').innerHTML=`<h1 class="alert alert-error">${err}</h1>`)
}
function DeletePost(){
    axios.delete("http://jsonplaceholder.typicode.com/posts/1",{
       
    }).then(res=>{
        alert("bien supprimer");
        console.log(res)
    })
    .catch(err=>document.getElementById('result').innerHTML=`<h1 class="alert alert-error">${err}</h1>`)
}
function UpdatePost(){
    axios.put("http://jsonplaceholder.typicode.com/posts/1",{
        title:" title is updated",
        body:"body is updated"
    }
).then(res=>{console.log(res);alert("updated")})
.catch(err=>document.getElementById('result').innerHTML=`<h1 class="alert alert-error">${err}</h1>`)
}