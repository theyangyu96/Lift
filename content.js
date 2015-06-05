var stops = [];
var index = 0;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.method == "up") {
  	if (stops.length <= 0) {
  		alert("place markers first!")
  	} else {
  		index-=1;
  		if (index < 0) { index = 0; }
  		this.scrollTo(0, stops[index]);
  		console.log("moved up to " + stops[index]);
  
  	}
  }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.method == "down") {
  	if (stops.length <= 0) {
  		alert("place markers first!")
  	} else {
  		index+=1;
  		if (index > stops.length) { index = stops.length; }
  		this.scrollTo(0, stops[index]);
  		console.log("moved down to " + stops[index]);
  	}
  }
});


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.method == "mark") {
  	stops.push(document.body.scrollTop);
  	stops.sort( function (a,b) { return a-b });  // Sort Numerically
  	highlightSelection();
  	console.log(stops);
  }
});

function highlightSelection()  {
  var selection;

  //Get the selected stuff
  if(window.getSelection) 
    selection = window.getSelection();
  else if(typeof document.selection!="undefined")
    selection = document.selection;

  //Get a the selected content, in a range object
  var range = selection.getRangeAt(0);

  //If the range spans some text, and inside a tag, set its css class.
  if(range && !selection.isCollapsed)
  {
    if(selection.anchorNode.parentNode == selection.focusNode.parentNode)
    {
      var span = document.createElement('span');
      span.className = 'highlight-orange';
      range.surroundContents(span);
      console.log("success");
    }
  }
}