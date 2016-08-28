angular.module('starter.filters', [])

.filter("gender",function(){
	  return function(gender){
    		switch(gender)
    		{
        		case 1: return "male";
         		case 2: return "female";
     		}
  	}
});
