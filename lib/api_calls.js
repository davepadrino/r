var rio = require("rio");
var path = require("path");


if (Meteor.isServer) {
	var resolve = Meteor.wrapAsync(rio.e);
	Meteor.methods({

		test: function (a,b){
			return a*b;
		},	

		/*
		test0: async function (route) {
			var route = route;
			//return route;
			const x = rio.$e({
				command: "setwd(route); getwd()"
			})
			.then(function (res) {
				return res;
			})
			.catch(function(err){
				return err;
			});
			
			//return typeof(x);  
			return x; 
		},*/

		// Here trying to fucking print the fucking route from the fucking JS
		test2: async function(route){
			var r = route;
			//var r = {route: route};
			//var r = {};
			//r.t = ["IBM", "YHOO", "MSFT"];
			rio.e({command: "print(r)",
					callback: function (err, res) {
				        var data;
				        if (err) {
				            console.log(err);
				            console.log("Large packet failed");
				        } else {
				            //data = json_parse(res);
				            data = JSON.parse(res);
				            console.log("Large packet ok");
				    }
				}
			});
			return r;
			rio.e({command: "pi / 2 * 2"});
			rio.e({command: "c(1, 2)"});
			rio.e({command: "Sys.sleep(5); 11"});
			//rio.e({command: "as.character('Hello World')"});
			//rio.e({command: "library(dplyr)"});

			/*
			const promisedResult = rio.$e({
			    //command: "pi / 2 * 2"
			    //command: "library(dplyr); filter(iris, Petal.Length < 1.4)"
			    //command: "require(RJSONIO); library(dplyr); a = sessionInfo(); toJSON(a)"
			    command: "require(RJSONIO); library(dplyr); a = sessionInfo(); return a"
			    //command: "require(RJSONIO); a=matrix(1:6, nrow=2, ncol=3, byrow=T); toJSON(a)"
			    //command: "sc <- spark_connect(master = 'local',spark_home = '/usr/local/spark/')"
			})
			.then(function (res) {
			    return res;
			})
			.catch(function (err) {
			    return JSON.parse(err);
			});
			*/

			function displayResponse(err, res) {

			    if (!err) {
			        res = JSON.parse(res);
			        console.log(unescape(res.hello)); // Hello 'world'!
			    } else {
			        console.log(err, "Rserve call failed");
			    }
			}
			const promisedResult = rio.e({
			    //filename: path.join(__dirname, "/home/vit/Escritorio/r/lib/ex11.R"),

			    //filename: path.join("file_path_as_absolute('ex11.R')"),
			    filename: path.join("/home/vit/Escritorio/r/lib/ex11.R"),
			    entrypoint: "run",
			    data: {
			        "hello": escape("Hello 'world'!")
			    },
			    callback: displayResponse
			});

			//rio.e({command: "as.character('Hello \\'World\\'!')"});
			//rio.e({command: "source('ex11.R')"});

			return promisedResult;
		}
	});
}


async function sendTextMessage(user) {
  const toNumber = await phoneLookup.findFromEmail(user.emails[0].address);
  return await client.sendMessage({
    to: toNumber,
    from: '+14506667788',
    body: 'Hello world!'
  });
}
