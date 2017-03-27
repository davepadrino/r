var rio = require("rio");
var path = require("path");
// ruta of R files


if (Meteor.isServer) {
	var resolve = Meteor.wrapAsync(rio.e);
	Meteor.methods({

		// Return json
		example1: async function(){

			const promisedResult = rio.$e({
			    command: "require(RJSONIO); library(dplyr); a = filter(iris, Petal.Length < 1.4); toJSON(a)"
			})
			.then(function (res) {
			    return res;
			})
			.catch(function (err) {
			    return JSON.parse(err);
			});

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
		},

		example2 : async function(){

			var args = {
    			prods: ["IBM", "YHOO", "MSFT"]
			};

			const promisedResult = rio.$e({
				filename: route + "example2.R",
			    entrypoint: "getOptimalPortfolio",
			    data: args
			}).then(function (res) {
			    return JSON.parse(res);
			})
			.catch(function (err) {
			    return (err);
			});

			return promisedResult;
		}
	});
}


/*config = {
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