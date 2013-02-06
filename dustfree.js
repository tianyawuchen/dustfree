var sleep = function(fn, context, arguments) {
  var params = arguments.slice(2, arguments.length);
    return function(){
      if(!sleep.lock) {
			  sleep.lock = true;
				fn.call(context ? this : context, 1, 2, 3);
				setTimeout(function() {
					sleep.lock = false;
				},sleep.TIME);
				return true;
			}
			return false;
		}
  };
sleep.lock = false;
sleep.TIME = 1000;
