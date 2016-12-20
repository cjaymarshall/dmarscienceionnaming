//add an event to an element

function addEvent(elem, evtType, func) {

	 if (elem && typeof(elem) == "object") {

		 // first try the W3C DOM method
		if (elem.addEventListener) {

			elem.addEventListener(evtType, func, false);

		} else {
				     
		// otherwise use the 'traditional' technique
		elem["on" + evtType] = func;

		}

	}

}							
