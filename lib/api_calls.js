var rio = require("rio");

if (Meteor.isServer) {
	var resolve = Meteor.wrapAsync(rio.e);
	Meteor.methods({

		test: function (a,b){
			return a*b;
		},

		test2:function(){
			/*
			rio.e({command: "pi / 2 * 2"});
			rio.e({command: "c(1, 2)"});
			rio.e({command: "as.character('Hello World')"});
			var resolve = Meteor.wrapAsync(rio.e);
			return (resolve({command: "pi / 2 * 2"}));
			*/
			
			//return (resolve({command: "pi / 2 * 2"}));

			/*
			resolve({command: "pi / 2 * 2"})
				.then(function(res) {
					return res;
				});
			*/
			
			/*
			resolve({command: "pi / 2 * 2"})
			  .then(function(res) {
				return res;
			});*/


			return(resolve({command: "pi / 2 * 2"}));
			
		}

	});
}

