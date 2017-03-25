var rio = require("rio");

if (Meteor.isServer) {
	Meteor.methods({

		test: function (a,b){
			return a*b;
		},

		test2:function(){
			rio.e({command: "pi / 2 * 2"});
			rio.e({command: "c(1, 2)"});
			rio.e({command: "as.character('Hello World')"});
			rio.$e({
				command: "pi / 2 * 2"
			}).then(function (res) {
    			var a = res;
    			return a;
			});
		}

		/*Parametros del rio.e(config)
		config = {
		    command: "",
		    filename: "",

		    entrypoint: "",
		    data: {},

		    callback: function (err, res) {
		        if (!err) {
		            console.log(res);
		        } else {
		            console.log("Rserve call failed. " + err);
		        }
		    },

		    host = "127.0.0.1",
		    port = "6311",
		    path = undefined,

		    user = "anon",
		    password = "anon"
		}*/
	});
}