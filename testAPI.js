//Register Event Handlers
//These will be processed as statements because we need the event handlers built up on every page for the function calls to work properly. (duh?)





//proposed code for creating new divs:

function newBox(boxCount)   {
	
	var	boxName = "box" + boxCount;
	
	var cBox = document.createElement("div");
	cBox.id = boxName;						//this is how you reference random tag attributes given an elementID
	cBox.className="box";					// note the ambiguity resolution of the class keyword.
	
	document.body.appendChild(cBox);

	//make box  titleBar
	var cTitle=document.createElement("div");
	cTitle.id="box"+boxCount+"title";
    cTitle.className = "title";
	var	boxTitle = "box " + boxCount;
	cTitle.appendChild(document.createTextNode(boxTitle));
												   
	cBox.appendChild(cTitle); 
	
	
	//box Content
	cBox.appendChild(document.createTextNode("Randomized Box Content"));
	
	boxCount=boxCount++;   //explicitly increment boxCount;
	return boxCount;
		
}
	

