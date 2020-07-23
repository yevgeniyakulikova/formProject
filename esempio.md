{
  	type: [“climb”,”forset”,”bike”],
  	date: “{data}”,
	  time: [“moarning”,”afternoon”], 
// if type === “forest”

   	duration: [1,2,3], 
// if type === “bike"

    persons: number, 
// if type === “climb” && max = 8 (range)
	client: “string”,	
  email: “string”,

  }
  
  
 Settare lo state della form step:  definisce il momento del processo
  {	persons-data: [
    		{			fullname:“string” 
        // fill first with client
        birthday: “{data}”,
        nation: “string”,},
         ]
 }
