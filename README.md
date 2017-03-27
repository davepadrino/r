<h1>Executing R script in MeteorJS</h1>

We are using npm package from https://github.com/albertosantini/node-rio

Steps to go:  (after clone the code)

install RServe in your R console (you could also use R studio)

´´´
install.packages("Rserve")
install.packages("RSclient")
´´´

After install those package you could do:

`require("Rserve")
Rserve(args  = "--vanilla")`


With only that you could have going RServe

And you can stop your RServer with


´´´
# To shutdown the server from R console
require("RSclient")
c <- RSconnect()
RSshutdown(c)
´´´

Now you will have to change the global path of your folder in the file /lib/global_vars.js

In my case muy route is

´´´
const ruta = "/home/miguel/Documentos/meteor/r/r_code/";
´´´

Finally you can go a play around with the few examples we have here 

ENJOY!!



<h2></h2>
test2 - return 