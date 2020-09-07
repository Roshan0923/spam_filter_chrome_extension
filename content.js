replaceText(document.body)
var data=document.getElementsByTagName("P");

[...data].forEach(data=>{
    console.log(data.innerText)
})

function replaceText(element){
    if(element.hasChildNodes()){
        element.childNodes.forEach(replaceText) 
       }

        else if(element.nodeType===Text.TEXT_NODE){

        
           // if(element.textContent.match(/coronavirus/gi)){
               // element.parentElement.style.color = 'black'
            //    element.parentElement.style.backgroundColor = 'black'
           // }
                //element.textContent= element.textContent.replace(/coronavirus/gi,'DEMO')
        }


}


// chrome.runtime.onMessage.addListener(function(request,sender,response){
    
//     const re= new RegExp(/user/g);
//     const matches=document.documentElement.innerHTML.match(re);
//     response({count:matches.length});
// });

// replaceText()

// function replaceText(){

//     alert("EHdfkjvn")

// }



