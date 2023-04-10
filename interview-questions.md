# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Functional programming uses functions as the primary way of communicating. Programs that are built using only functions are functional programming programs. Object oriented programming, such as JavaScript or Ruby, use objects as a way of communicating. Since ruby is object oriented, everything that is in ruby is an object, and then we do things with those objects. That is why when fucntions are created, they are called methods, because a class inside of an object is called a method. 

Researched answer: Functional programming relies on fucntions. OOP is based on classes and the objects inside of those classes. A function in function oriented programming takes in an input, does whatever the function wishes to do with that input, and then returns the output. Since functions are re-usable and relatively simple, they can be very practical when implementing into a program. In object oriented programming, those functions are inside of classes and objects. In OOP, functions can be used more freely, on any other scope of code that doesn't necessarly belong to a class or object. 

2. What is the difference between a Float and an Integer in Ruby?

Your answer: In Ruby, a float is an integer that contains a decimal point: 5.4, 1.2. An integer, on the other hand, is a whole number, or a number that contains no decimals: 2, 5, 9. We can do math operations with both floats and integers.

Researched answer: A float is considered imprecise in ruby, however, a decimal is not the same as a float. When dealing with decimals, decimals can return a lot of number. For example: 3.459586053. A float returns smaller numbers. For example: 2.3, 4.23, and so on. Integers are whole numbers. They can also be negative. 

3. Ruby has an implicit return. What does that mean?

Your answer: Implicit return means that the return is implied, or expected. Therefore, returns are not required when dealing with ruby. One can add the return, but it is not needed. This is different from an explicit return; an explicit return means that a return is not automatically implied, therefore, we must add the return keyword when dealing with explicit return. This is true in JavaScript; JavaScript does have implicit returns, but they are not as common as Ruby, where every return is implicit.

Researched answer: In ruby, returns are implicit because ruby automatically returns the last line of code the user provides. This is the last line before then end keyword. This is why a return keyword is not required in Ruby, however, it can be used. The end result will be exactly the same. 

4. What is a block in Ruby?

Your answer: A block in ruby is an anonymous function that can be used inside of methods in order to execute a specified action. Blocks often require the do and end keywords. That is how we specify the beggining of a block. Blocks can take arguments, we include those arguments inside of pipes, or | |. Blocks can also be written inside of curly brackets {} if they are only a single line of code. There are many blocks in ruby, such as: .map, .filter, .each. 

Researched answer: A block is the same thing as a method, but it does not belong to an object. Blocks can accept arguments and return values, however, blocks do not have a name of their own. 

5. How do you extract a value in a Ruby hash?

Your answer: Since hashes in ruby are objects we can extract values in hash by referring to the hash, and the referring to the key inside of that hash. For example: if we have a hash named cars, we can say p cars[:japanese]. Japanese is referring to the key japanese, which will the extract the value that belongs to the key :japanese.

Researched answer: Whilst the above statement is true, we can literally extract values from an object's keys. We can use the extract method to extract values that we want in ruby. For example, we can say object1.extract!(:a, :b). This will output the values assigned to the keys a and b. 

## Looking Ahead: Terms for Next Week

1. RSpec: RSpec is a testing tool for ruby. Sort of like Jest is for Javascript. It is used for testing in many production applications. Rspec puts emphasis on testing how the application behaves, or what the application actually does. 

2. Test-driven development: Test driven development, or TDD, is a process which relies on testing software before it is fully developed. Sort of like how in these assessments, we have to develop a test, and then later, develop the code that will make the test pass. This checks to make sure that the code works properly against all test cases. TDD encourages simple designs and insipres confidence. 

3. PostgreSQL: SQL stands for Structured Query Language. This langauge is used for communicating with databases. Postgres is a type of SQL. Postgres looks at databases through OOP goggles. Postgres is the primary database for many we applications as well as mobile applications. Many companies use PostgreSQL such as Apple, Cisco, Instagram, etc.

4. CRUD: CRUD is the basic building block for most in web development. It stands for: Create, Read, Update, and Delete. It is used in Ruby on Rails. 

5. HTTP: HTTP stands for Hypertext Transfer Protocol. This is a protocol for fetching documents such as HTML. It is the foundation of an exchange that happens on the World Wide Web. It's used to load webpages using hypertext links by the user sending a message to the server, and the server responding back with a response. 
