Functional Programming Quiz


Paste the link below in your browser to be taken to the instrunctions for this quiz


https://docs.google.com/document/d/1DBOMQqvEBQypcjJmjN8xkPF-RXPHykzspeQJAylQ9BQ/edit?usp=sharing


Functional Programming
The ReadyMart is doing their payroll. They want you as a developer to create a few functions, packaged in a class, that they can streamline the process. The class will take in an array of objects. Have at least 3 objects. Each object should contain the following properties and values. 

Properties
Name
Hourly Rate
Hours Worked
	
Values
Must be full name written as one string.
Must be a number with decimal of two places.
Must be an integer no larger than 80 and no less than 20.
	
Next name the class Payroll and add the following methods inside of the class.
Question 1
Make a function named getNames that returns an array using the map function that orders alphabetically the names of the items. To do this, you need to get an array from the map function that grabs all the names of the items and then apply the sort function.
return newarray.sort()	 (i.e. [].sort())
Question 2
Make a method called getFullTime that returns an array using the filter function that returns all the employees that have worked longer than 60 hours.
Question 3
Make a function called getTotalLabor that returns a value using the reduce function that returns the total cost for all employees. To do this you must add to the accumulator the product of the hours worked multiplied by the hourly rate.
