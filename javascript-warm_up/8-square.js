#!/usr/bin/node
const x = parseInt(process.argv[2]);
if (isNaN(x)) {
   console.log('Missing size');
 }else {
	if (x > 0){
          for (i = 0; i < x; i++){
			 console.log('x'.repeat(x));
		 }
	 }
 }
