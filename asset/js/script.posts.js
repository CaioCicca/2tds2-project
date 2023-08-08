const posts = [];

function savePost() {
    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const resume = document.getElementById("resume").value;
    const publisher = document.getElementById("publisher").value;
    const date = document.getElementById("date").value;

    if(title && category && resume && publisher && date){
        storePosts(title, category, resume, publisher, date)
    } else{
        alert("Preencha todos os campos! ")
    }
    cleanFields();
}

function cleanFields() {
    document.getElementById("title").value = "";
    document.getElementById("category").value = "";
    document.getElementById("resume").value = "";
    document.getElementById("publisher").value = "";
    document.getElementById("date").value = "";
}

function storePosts(title, category, resume, publisher, date){
    const post = {
        title: title,
        category: category,
        resume: resume,
        publisher: publisher,
        date: date
    };
    posts.push(post)
    console.log(posts)
}