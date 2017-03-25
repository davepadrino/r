var rio = require("rio");

if (Meteor.isServer) {
	Meteor.methods({

		test: function (a,b){
			return a*b;
		},

		test2: async function(){
			rio.e({command: "pi / 2 * 2"});
			rio.e({command: "c(1, 2)"});
			rio.e({command: "as.character('Hello World')"});



			const promisedResult = rio.$e({
			    command: "pi / 2 * 2"
			}).then(function (res) {
			    return res;
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
