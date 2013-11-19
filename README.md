#single page application boilerplate.
this is a simple single page application boilerplate for developing single page applications.

this particular boilerplate uses the html5 boilerplate, backbone, grunt, bootstrap css, jade and less.

it's put together in a way that you can get up and running very quickly.

##prerequisites

it's assumed that you have a version of node installed in able to install dependencies.

##instructions

the boilerplate is intended to be easy enough to use to get you up and running with a single page app relatively quick.

1. simply clone the project

	git clone https://github.com/jheytompkins/single-page-app-boilerplate.git
	
2. navigate into the repo and install dependencies

	cd single-page-app-boilerplate
	npm install
	
3. simply initiate grunt to take care of preprocessing
	
	grunt watch
  

It's reccommended to set up on a webserver but you can run this on a local filesystem. If you don't have a webserver
available there are plenty of ways you can get up and running. For example, something like Apache, or docpad. If you have 
python installed you could make use of __SimpleHTTPServer__ and just run a webserver in the repo as follows.

	python -m SimpleHTTPServer <port>
	
This will get the single page app running on the port of your choosing on localhost.

