# Executing R script in MeteorJS

We are using npm  RIO package from https://github.com/albertosantini/node-rio

Steps to go:  (after clone the code)

install RServe in your R console (you could also use R studio)


	install.packages("Rserve")
	install.packages("RSclient")


After install those package you could do:

	require("Rserve")
	Rserve(args  = "--vanilla")


With only that , you are now running RServe

And you can stop your RServer with

	# To shutdown the server from R console
	require("RSclient")
	c <- RSconnect()
	RSshutdown(c)

Now you will have to change the global path of your folder where we keep the R files in the file /lib/global_vars.js

In my case muy route is

	ruta = "/home/miguel/Documentos/meteor/r/r_code/";


Finally you can go a play around with the few examples we have here 

ENJOY!!



<h2>Examples</h2>

### Example 1

- Return  a simple command from R in JSON and print in the console of browser

### Example 2

- Send data to a specific function in R a get back the response in a JSON

