var rio = require("rio");

if (Meteor.isServer) {
	var resolve = Meteor.wrapAsync(rio.e);
	Meteor.methods({

		test: function (a,b){
			return a*b;
		},

		test2: async function(){
			rio.e({command: "pi / 2 * 2"});
			rio.e({command: "c(1, 2)"});
			rio.e({command: "Sys.sleep(5); 11"});
			rio.e({command: "as.character('Hello World')"});
			//rio.e({command: "library(dplyr)"});


			const promisedResult = rio.$e({
			    //command: "pi / 2 * 2"
			    //command: "require(RJSONIO); a = sessionInfo(); toJSON(a)"
			    command: "require(RJSONIO); library(dplyr); a = filter(iris, Petal.Length < 1.4); toJSON(a)"
			    //command: "require(RJSONIO); library(sparklyr); sc <- spark_connect(master = 'local',spark_home = '/usr/local/spark/'); import_iris <- copy_to(sc, iris, 'spark_iris', overwrite = TRUE); sdf_register(partition_iris, c('spark_iris_training','spark_iris_test'));"
			    //command: "require(RJSONIO); a=matrix(1:6, nrow=2, ncol=3, byrow=T); toJSON(a)"
			})
			.then(function (res) {
			    return JSON.parse(res);
			})
			.catch(function (err) {
			    return (err);
			});

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
