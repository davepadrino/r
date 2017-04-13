var rio = require("rio");
var path = require("path");
var fs = require("fs");
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
				console.log(res);
				console.log(JSON.parse(res));
			    return JSON.parse(res);
			})
			.catch(function (err) {
				console.log(err);
			    return (err);
			});

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
				console.log(res);
				console.log(JSON.parse(res));
			    return JSON.parse(res);
			})
			.catch(function (err) {
			    return (err);
			});

			return promisedResult;
		},

		example3 : async function(){

			const promisedResult = rio.$e({
				filename: route + "example3.R"
			}).then(function (res) {
				console.log(res);
			    return JSON.parse(res);
			})
			.catch(function (err) {
			    return (err);
			});

			return promisedResult;
		},

		example5 : async function(){
			const promisedResult = rio.$e({
				filename: route + "example5.R",
				entrypoint: "test"
			}).then(function (res) {
				console.log(res);
			    return JSON.parse(res);
			})
			.catch(function (err) {
			    return (err);
			});

			return promisedResult;
		},

		example6: async function(){
			const promisedResult = rio.$e({
				filename: route + "example6.R",
    			entrypoint: "createDummyPlot"
			}).then(function (res) {
				console.log(res);
				fs.writeFile(routeImg+"test.png", res, {encoding: "binary"}, (err) => {
  					if (err) throw err;
  					console.log('The file has been saved!');
				});
			    // return JSON.parse(res);
			})
			.catch(function (err) {
			    return (err);
			});
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