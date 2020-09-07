console.log("BackGround")

chrome.runtime.onMessage.addListener(receiver);

window.userSelectedData=""


function receiver(request,sender,sendResponse){
    console.log(request)
    window.userSelectedData=request.text;
}