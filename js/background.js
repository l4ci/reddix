// Add Event Listener to return the localStorage Key
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.method == "getLocalStorage")
      sendResponse({data: localStorage[request.key]});
    else if (request.method == "getLocalStorageAll")
      sendResponse({data: localStorage});
    else
    	sendResponse({}); // snub them.
});