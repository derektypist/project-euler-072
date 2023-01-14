# Project Euler 072 - Counting Fractions

Consider the fraction, n/d, where n and d are positive integers.  If n &lt; d and HCF(n,d) = 1, it is called a reduced proper fraction.

If we list the set of reduced proper fractions for d &le; 8 in ascending order of size, we get:

    1/8, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, 3/8, 2/5, 3/7, 1/2, 4/7, 3/5, 5/8, 2/3, 5/7, 3/4, 4/5, 5/6, 6/7, 7/8

It can be seen that there are 21 elements in this set.

How many elements would be contained in the set of reduced proper fractions for d &le; limit?

Information at [Project Euler 072](https://projecteuler.net/problem=72)

## UX

**Getting Started**

In the input field, enter a whole number (limit) between 2 and 1000000 (without leading zeros) and select the Submit Button.  Unless you have made an invalid input, you will see the number of elements contained in the set of reduced proper fractions for d &le; limit.  Select the Reset Button to clear the information or to start again.

**User Stories**

As a user, I expect to get an error message, if I do any of:

- Not enter anything in the input field
- Entering text other than a number
- Entering a number less than 2 or greater than 1000000
- Including leading zeros (e.g. 08)
- Entering a number, but it is not an integer

As a user, if I select the Reset Button, I can clear the information or start again.

As a user, if I enter 8 and then Submit, I expect the function `countingFractions(8)` to return a number.

As a user, if I enter 8 and then Submit, I expect the function `countingFractions(8)` to return 21.

As a user, if I enter 20000 and then Submit, I expect the function `countingFractions(20000)` to return 121590395.

As a user, if I enter 500000 and then Submit, I expect the function `countingFractions(500000)` to return 75991039675.

As a user, if I enter 1000000 and then Submit, I expect the function `countingFractions(1000000)` to return 303963552391.

User Stories on function `countingFractions(limit)` taken from [FreeCodeCamp - Coding Interview Prep - Project Euler 072](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-72-counting-fractions)

**Information Architecture**

The function `countingFractions(limit)` returns a number, where `limit` is a number between 2 and 1000000.

## Features

Allows the user to enter the limit (number) in order to get the number of elements contained in the set of reduced proper fractions for d &le; limit.  Performs checks on valid user input.  If the input is invalid, an error message is obtained.

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.3.0-alpha1 and Google Fonts.

