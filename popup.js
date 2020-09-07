
document.addEventListener('DOMContentLoaded', function () {
    console.log("Demo")
    document.getElementById("selectedTextBtn").addEventListener('click', runScript, false)
    document.getElementById("pastedTextBtn").addEventListener('click', getEnteredData, false)


    function getEnteredData() {
      var pastedText=  document.getElementById("myTextarea").value
      if (pastedText.length < 15) {
        showLessWord();
    }
    else{
      verifyTheContent(pastedText);}
    }

    function runScript() {
        let data = chrome.extension.getBackgroundPage();
        let selectedText = data.userSelectedData;

        if (selectedText.length < 15) {
            showLessWord();
        }
        else {
            verifyTheContent(selectedText);
        }
    }

})

function showLessWord() {
    const div = document.createElement('div');
    div.textContent = "Please select more words to verify"
    document.body.appendChild(div)
    document.body.appendChild(div)
    div.setAttribute("class", "alert alert-warning");
 
}



function setData(data) {

    if (data == "spam") {
    
        const div = document.createElement('div');
        div.textContent = "It looks like spam Content"
        document.body.appendChild(div)
        div.setAttribute("class", "alert alert-danger");
      
        
    }
    else { 
        const div = document.createElement('div');
        div.textContent = "It doesn't look like spam content"
        document.body.appendChild(div)
        document.body.appendChild(div)
        div.setAttribute("class", "alert alert-info");
       
    }


}

function verifyTheContent(selectedText) {
    let url = "https://plino.herokuapp.com/api/v1/classify/";

    var obj = { "email_text": selectedText };
    console.log(obj)
    var myJSON = JSON.stringify(obj);


    const req = new XMLHttpRequest();
    req.open("POST", url, true);
    req.setRequestHeader("Content-Type", "application/json");
    req.send(myJSON);


    req.onreadystatechange = function () {
        console.log("state changed")
        // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            console.log(this.responseText)
            var tempData = JSON.parse(this.responseText);
            console.log(tempData.email_class)
            setData(tempData.email_class)

        }
    }


}