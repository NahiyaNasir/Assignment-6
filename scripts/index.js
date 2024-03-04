/*

API
LatestPosts: - https://openapi.programming-hero.com/api/retro-forum/latest-posts

AllPosts: - https://openapi.programming-hero.com/api/retro-forum/posts

PostSearchByQuery
PostByQuery: - https://openapi.programming-hero.com/api/retro-forum/posts?category=categoryName

Example
PostByQuery: - https://openapi.programming-hero.com/api/retro-forum/posts?category=coding
*/

const loadAllPost=async()=>{
     const res=await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
     const data=await res.json()
     const allPost=data.posts
     console.log(allPost)

     allPost.forEach(item=>{
  const cardContainer=document.getElementById('card-container')  
  const postDiv= document.createElement('div')
        postDiv.classList=`card card-side bg-teal-200 shadow-xl  gap-8 mb-6 lg:flex-row flex-col`
        postDiv.innerHTML=`
                <div class=" w-3 h-3 rounded-full absolute top-4 left-28       ${item.isActive? "bg-green-700":"bg-red-500"}    ">
               
                </div>
          <div class=" p-6 rounded-2xl"> <figure class="w-[100px] h-[100px]"><img src="${item.image}" alt="Movie"  /></figure></div>
        <div class="card-body">
        <div class=" flex   justify-center ">
  <h1 class="text-center"> #${item.category}</h1>
 <p class="text-center">  Author:${ item.author.name}</p></div>
          <h2 class="card-title">${item.title}</h2>
          <p>${item.description}.</p>
          <div class="card-actions justify-between">
          <p><i class="fa-regular fa-message"></i> ${item.comment_count}</p>
          <p><i class="fa-regular fa-eye"></i>${item.view_count}</p>
        <p><i class="fa-regular fa-clock"></i>${item.posted_time} min</p>
        <button class="btn btn-primary rounded-full" id=" envelope" onclick="getData('${item.title.replace(/'/g,"@")}' ,'${item.view_count}')"><i class="fa-regular fa-envelope"></i></button>
          </div>
        </div>
      </div>
       
      
        `
      //  console.log(post.title)
      //  console.log(post.view_count)
      cardContainer.appendChild(postDiv)
     })
}
//load post & display
 const loadPost=async(categoryName)=>{
    const res= await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${categoryName}`)
    const data= await res.json()
    const posts=data.posts
   // console.log(posts)
    displayPosts(posts)
    
 }
    const displayPosts=(posts)=>{
      const cardContainer=document.getElementById('card-container')  
      cardContainer.textContent=''  
      posts.forEach(post=>{
      // cardContainer.textContent=''
   //     console.log(post)   
        const postDiv= document.createElement('div')
        postDiv.classList=`card card-side bg-teal-200 shadow-xl   gap-8 mb-6   lg:flex-row flex-col `
        postDiv.innerHTML=`
                <div class=" w-3 h-3 rounded-full absolute top-4 left-28       ${post.isActive? "bg-green-700":"bg-red-500"}    ">
               
                </div>
          <div class=" p-6 rounded-2xl "> <figure class="w-[100px] h-[100px]"><img src="${post.image}" alt="Movie"  /></figure></div>
        <div class="card-body ">
        <div class=" flex   justify-center ">
  <h1 class="text-center"> #${post.category}</h1>
 <p class="text-center">  Author:${ post.author.name}</p></div>
          <h2 class="card-title">${post.title}</h2>
          <p>${post.description}.</p>
          <div class="card-actions justify-between">
          <p><i class="fa-regular fa-message"></i> ${post.comment_count}</p>
          <p><i class="fa-regular fa-eye"></i>${post.view_count}</p>
        <p><i class="fa-regular fa-clock"></i>${post.posted_time} min</p>
        <button class="btn btn-primary rounded-full" id=" envelope" onclick="getData('${post.title.replace(/'/g,"@")}' ,'${post.view_count}')"><i class="fa-regular fa-envelope"></i></button>
          </div>
        </div>
      </div>
       
      
        `
      //  console.log(post.title)
      //  console.log(post.view_count)
      cardContainer.appendChild(postDiv)
      })
     /* setTimeout(()=>{
        toggledSpinner(true)
       },2000)*/
      //hide 
      toggledSpinner(false)
  }
  
   //displayPost()
//display data end
  
const getData=async(title,view  )=>{
  console.log('click')
  
  const markAsRead=document.getElementById('read')
  let readCount=parseInt(markAsRead.innerText)
 readCount++
 markAsRead.innerText=readCount
  console.log(markAsRead)
 
  
  
 
 
 
     const readContainer=document.getElementById('read-container')
    
        const titleDiv=document.createElement('div')
        //let markAsRead=document.getElementById('read')
       titleDiv.classList=`card card-side bg-[#F3F3F5] shadow-xl  gap-8 mb-6  p-6`
         titleDiv.innerHTML=`
         <div class="flex  gap-8">
         <h1 class=" font-medium">${title}</h1>
         <p><i class="fa-regular fa-eye"></i>${view}</p>
       </div>
         
         `
        readContainer.appendChild(titleDiv) 
       
    
        

}

  // latest posts
 const loadLatestPost= async()=>{
  const res= await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
  const data= await res.json()
 // console.log(data)
  const latestPosts=document.getElementById('latest-post-container')
  data.forEach(item=>{
   // console.log(item)
    const card=document.createElement('div')
    card.classList=`card w-96 bg-base-100 shadow-xl`
    card.innerHTML=`
    <figure class="overflow-hidden h-72">
    <img class="w-full rounded-xl p-3" src="${item.cover_image}" alt="Shoes" />
    <h6 class="absolute bottom-[40%] right-12"></h6>
</figure>
<div class="card-body">
<p>   <i class="fa-solid fa-calendar-days"></i> ${item.author?.posted_date|| 'No Posted Date'} </p>
       <h1 class="font-bold"> ${item.title} </h1>
      <p> ${item.description}</p>
    <div class="flex space-x-4 justify-start items-start">
       
        <div>
            <img class="w-12 h-12 rounded-full" src="${item.profile_image}" alt="Shoes" />
        </div>
        <div>
            <h2 class="card-title"></h2>
            <div class="flex mt-3">
                <p class="">${item.author.name}</p>
               
            </div>
            <p class="mt-3">${item?.author?.designation||'Unknown' }</p>
        </div>
    </div>
</div>

    
    
    `
    latestPosts.appendChild(card)
  })
 }

// handel show search
const  handelSearch= ( )=>{
 toggledSpinner(true)
 
  const searchInput=document.getElementById('search-input').value
 const searchText=searchInput
 console.log(searchText)
 
 loadPost(searchText)


     //  getData()



}
 // load spinner
   const toggledSpinner=(isLoading)=>{
    const spinner=document.getElementById('loading-spinner')
    //spinner.classList.remove('hidden')
 if(isLoading){
  spinner.classList.remove('hidden')
 }else{
    spinner.classList.add('hidden')
 }
   }
    

  
  


//handelSearch()


loadLatestPost()




loadAllPost()
// loadPost('comedy')



/*
 <div class=" flex  gap-10  justify-center ">
 <h1 class="text-center"> #uytt</h1>
<p class="text-center">bnnbnhj</p></div>
<h2 class="card-title">New movie is released!</h2>
<p>Click the button to watch on Jetflix app.</p>
<div class=" border-dashed border-2"></div>
<div class="card-actions justify-between">
  <p><i class="fa-regular fa-message"></i></p>
         <p><i class="fa-regular fa-eye"></i></p>
       <p><i class="fa-regular fa-clock"></i></p>

  <button class="btn btn-primary rounded-full" id=" envelope"><i class="fa-regular fa-envelope"></i></button>
</div>
</div>*/
/*div class=" h-fit rounded-3xl bg-[#12132D0D] flex justify-between p-8  flex-1">
<h1>Title</h1>
<p>Mark AS Read  <span id="read">0</span></p>
</div>*/

/*const res=await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts/${title}/${view}`)
const  data= await res.json()
 const allDAta= data.posts
 console.log(data)
const readContainer=document.getElementById('read-Container')
allDAta.forEach(item=>{
 console.log(item)*/


 //class=" w-3 h-3 rounded-full absolute top-4 left-28 bg-green-700
// ${post.isActive? "bg-green-700":"bg-red-500"}



/*const handleSearch=()=>{
  const value=document.getElementById('search-box').value
  if(value){
    loadNews(value)
  }else{
    alert("please enter valid ")
  }
}*/
