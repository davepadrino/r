# Executing R script in MeteorJS (also Apache Spark and Hadoop!)

We are using npm  RIO package from https://github.com/albertosantini/node-rio

Steps to go:  (after clone the repo)

install RServe in your R console (you can use R Studio)


	install.packages("Rserve")
	install.packages("RSclient")


After install those packages you should run the next lines to run RServe (TCP/IP server for R):

	require("Rserve")
	Rserve(args  = "--vanilla")

And you can shutdown your R Server by typing:

	require("RSclient")
	c <- RSconnect()
	RSshutdown(c)

Now you will have to change the global path of your folder where we keep the R files in: 

	lib/global_vars.js

In this case the route is , you can change this or find the work around to make this usefull without the need to define a global 

	route = "/home/[user]/Documentos/meteor/r/r_code/";


Finally you can go a play around with the few examples we have here 

ENJOY!!



<h2>Examples</h2>

### Example 1

- Return  a simple command from R in JSON and print in the console of browser

### Example 2

- Send data to a specific function in R a get back the response in a JSON

### Example 3

- Execute sparklyr (Spark library to execute machine learning algorithms using R) and return JSON , you will need to install "sparklyr" in R 

### Example 4

- Another example with sparklyr

### Example 5

- Read csv from HDFS (Hadoop Distributed File System)(you need to install Hadoop and configure it)

### Example 6

- Example of plot in R and save it in your file system like .png , remember to change the file /lib/global_vars.js where you want to keep your image..


