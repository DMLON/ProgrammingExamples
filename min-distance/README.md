# The closest numbers

Your mission is to write a function that will receive a list of numbers and should return the distance between the closest pair of numbers.

For example, if the numbers received are 8, 4 and 10, the answer would be 2, since the numbers that are closest to each other are 10 and 8, and the distance between them is 2 (keep in mind the *distance* between two numbers is always a positive number or 0, differently from the *difference*, which can also be negative).

### Constraints

- your function can receive a list of up to 10 thousands numbers
- each number will be an integer (`int` for Go language) in the supported range for each language
- avoid calculating the difference between all the possible pairs of numbers, since that would be a brute-force solution with complexity O(n^2); we know you can do better than that