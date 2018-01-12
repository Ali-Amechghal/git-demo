console.log('hello es6');
function clone(origin)
{
	if(origin  != Object(origin))
			throw new Error('given parmameter its not an object !');

	
}

function createObj(){
	return Object.create({});
}


