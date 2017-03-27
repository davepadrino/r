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
			    return JSON.parse(res);
			})
			.catch(function (err) {
			    return (err);
			});

			return promisedResult;
		},

		example2 : async function(){

			var args = {
    			prods: ["IBM", "YHOO", "MSFT"]
			};

			const promisedResult = rio.$e({
				filename: ruta + "example2.R",
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