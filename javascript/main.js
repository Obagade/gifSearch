document.querySelector(".js-go").addEventListener('click',function(){

    var input = document.querySelector("input").value;
    console.log(input);
    pushToDOM(input);
  
  });
  
  document.querySelector(".js-userinput").addEventListener('keyup',function(e){
  
    let input = document.querySelector("input").value;
    console.log(input);
  
    // if the key ENTER is pressed...
    if(e.which === 13) {
      pushToDOM(input);
    }
  
  });
  
  /*  do the data stuff with the API */
  
  let url = "http://api.giphy.com/v1/gifs/search?q=funny+dog&api_key=ZAd6aovRHeYipG1aFkbktOKjR94kRvHK";
  
  // AJAX Request
  let GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open( 'GET', url );
  GiphyAJAXCall.send();
  
  GiphyAJAXCall.addEventListener('load',function(e){
  
    let data = e.target.response;
    
    pushToDOM(data);
  
  });
  
  /* Show me the GIFs */
  
  function pushToDOM(input) {

    let response = JSON.parse(input);
    let imageUrls =response.data
  
   imageUrls.forEach(function(image){
     let src = image.images.fixed_height.url;

     let container = document.querySelector(".js-container");
     container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
   });
  
  }
