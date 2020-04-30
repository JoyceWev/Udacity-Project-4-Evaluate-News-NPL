const awaitText = async (text)=>{
	const res = await fetch(text)
  	try {
		  const data = await res.json();
    	return data;
  	} catch(error) {
    	console.log("error", error);
    	// appropriately handle the error
  	}
};