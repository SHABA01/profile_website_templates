/*
const query = `
{
  user(username:"PelumiAdebayo") {
    publication {
      posts(page: 0){
        title
        brief
        slug
        cuid
        coverImage
        replyCount
        totalReactions
      }
    }
  }
}`;
async function getData() {
  const response = await fetch("https://api.hashnode.com", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query: query })
  });
  const body = await response.json();
  let html = "";
  var read = "Read More";

  body.data.user.publication.posts.forEach((post) => {
      console.log(JSON.stringify(post))
    html += `<div id="blog-item" class="owl-item"><div class="item" data-animate="fadeInUp">
    <div class="service-box"><a href="https://pswith.me/${post.slug}"><img src="${post.coverImage}"/></a><h3>${post.title}</h3><p>${post.brief}</p>`;
    html += `<a style="color: blue;" href="https://pswith.me/${post.slug}">${read}</a></div></div></div>`;
    
  document.getElementById("blog").innerHTML = `${html}`;

});

}
{/* <div id="blog" class="owl-item" style="width: 299.5px; margin-right: 20px;">
    <div class="item animate" data-animate="fadeInUp">
        <div class="service-box">
            <span class="service-icon"><i class="fa fa-camera" aria-hidden="true"></i></span>
            <h3>Digital Marketing</h3>
            <p>Nullam auctor, justo vitae accumsan ultrices, arcu ex molestie massa, eu maximus enim tortor vitae quam. </p>
        </div>
    </div> 
</div> **}

getData();
*/