
document.addEventListener('DOMContentLoaded', function () {
    console.log("Demo")
    document.querySelector('button').addEventListener('click', runScript, false)

    
function runScript(){
    let data=chrome.extension.getBackgroundPage();
   let selectedText=data.userSelectedData;

   if(selectedText.length<15){
       showLessWord();
   }
else
{
    
   let url="https://plino.herokuapp.com/api/v1/classify/";

   var obj={"email_text":selectedText};
   console.log(obj)
   var myJSON = JSON.stringify(obj);


   const req = new XMLHttpRequest();
   req.open("POST", url, true);
   req .setRequestHeader("Content-Type", "application/json");
   req.send(myJSON);


   req.onreadystatechange = function() {
       console.log("state changed")
        // Call a function when the state changes.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        console.log(this.responseText)
       var tempData= JSON.parse(this.responseText);
       console.log(tempData.email_class)
       setData(tempData.email_class)

    }
}


}
}

})

function showLessWord(){
    const div = document.createElement('div');
    div.textContent = "Please select more words to verify"
    document.body.appendChild(div)
}
function setData(data){

    if(data=="spam"){
        const div = document.createElement('div');
        div.textContent = "It is Spam Content"
        document.body.appendChild(div)
    }
    else{
        const div = document.createElement('div');
        div.textContent = "It doesn't look like a spam content"
        document.body.appendChild(div)
    }
  

}

