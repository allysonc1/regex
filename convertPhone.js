
// take str and return 555-555-5555

function convertPhone(phoneStr){
	
	var tempstr1 = phoneStr.replace(/[^\d]/g,'');
	// console.log(tempstr1);

	var phoneNumberStr = tempstr1.replace(/^1/,'');
	// console.log(tempstr1);
	
	if (phoneNumberStr.length < 10){
		// throw (error);
		// console.log("error - too short")
		phoneNumberStr = 0;
		return phoneNumberStr ;
	}else if(phoneNumberStr.length > 10){
		phoneNumberStr = phoneNumberStr.slice(0,10);
	}
	var splits = phoneNumberStr.split(/(\d\d\d)/);
	// console.log(splits);
	phoneNumberStr = splits[1] + '-' + splits[3] + '-' + splits[5] + splits[6];
	

	return phoneNumberStr;
}


// possible inputs
var numbers = [
    '555-555-5555',
    '(555)555-5555',
    '555 555 5555',
    '555 555-5555',
    '1-555-555-5555',
    '(1)555-555-5555',
    '5555555555',
    '555-five-55-aebdgtxi;;3tt4greqr6seven',
    '5-trumprules-555-5-5-5-5-5-5',
    '2798504trumpforprez23587928579428795458792',
    '1-800-ninjas-are-cool',
    '1900-acdc4life',
]


numbers.map((number)=>{
    console.log(convertPhone(number));  
})



