### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  Json web token. It is a way to mantain state in regards to a users login status
  as well as permissions or any other days we would like to store for a logged in user.

- What is the signature portion of the JWT?  What does it do?
  the signature portion verifies that the base64 portion has not been altered.

- If a JWT is intercepted, can the attacker see what's inside the payload?
  YES the pay load is not encrypted.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  when a user is logged in, they get a signed token which is made up of a header, payload,
  and signature. the header and payload are encoded in base64. Base 64 data is signed using 
  a secret key that only the server has access to, this allows the server to make sure
  the payload has not been  altered. the token can then be verified using middleware on each route
  where it is needed. 

- Compare and contrast unit, integration and end-to-end tests.
unit tests focus on testing isolated units of code, integration tests verify 
he interaction between different units, and end-to-end tests assess the entire 
application's functionality from the user's perspective.
   
- What is a mock? What are some things you would mock?
when doing a unit test or integration test that has some 
dependency outside our control, a mock is a way to mimic that
dependency. 

- What is continuous integration?
it is a system for adding features to applications on an ongoing daily or weekly basis. as opposed
to once every few months or every year. 
code get pushed onto a repo into a branc it then goes through automation testing and if it passes
someone approves and it gets merged. it allows for much quicker deployment
of code. 

- What is an environment variable and what are they used for?
evironment variables are shell variables that are global to the user. 
they are variables that are accesable via the operating system and
from within your application. they can be used to pass state from
one application to another. and for the application to have access 
to information about the user signed in on the OS.

- What is TDD? What are some benefits and drawbacks?
Test driven developemt is a method for writing code.
step 1 write a test that will fail.
step 2 write some code  anway you can to get the test to pass.
step 3 refactor the code. 

It is a little slower and there is alot of back and forth
beteween the test code and your application code. so its 
a little tedious. Sometimes your tests fail because they 
werent written well and doesn't have to do with your code.
overall it's  a little tedious. A littel less fluid. 
but you end up getting very familiar with your code and you
really work out alot of the kinks you wouldn't have realize
werer there. Also if you test as you go, you don't have to 
write a million tests at the end when so much code is already 
developed. overall it seems like a very solid approach to getting
very good code with few bugs. If you were diligent in your testing.


- What is the value of using JSONSchema for validation?
very simple and uniform way to valdiate require types and values. keeps your code uncluttered
.  also don't have to write any code for validation at all
just specify what you want and you have a unifomr method that is short and simple.
It is a good way to validate code. Even if you are writing validations yourself 
it would be wise to implement it the same way as JSONSchema


- What are some ways to decide which code to test?
  test all code!!!


- What does `RETURNING` do in SQL? When would you use it?
some querys do not return any data like a DELETE or INSERT.
so you may want to get some info back from the query. And returning
allows you to specify which info you want back in that case

- What are some differences between Web Sockets and HTTP?
HTTP follows a request response cycle
http is a stateless request response protocol
websockets are a stateful tcp/ip connection that is opened
between client and server.


- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  I prefer Express over Flask.  I can't really say why. 
  It seems a little cleaner and simpler as well as 
  using JS for the front and back end.
