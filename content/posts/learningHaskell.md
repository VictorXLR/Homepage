+++
title = "Starting Out With Haskell"
date = 2020-01-12T21:21:16-04:00
images = []
categories = ["programming", "code", "development"]
draft = false
+++

Currently using the book [Learn You a Haskell](http://learnyouahaskell.com/) by Miran Lipovaca. Majority of the content here are writeups from her website.

These are my writeups so far, I Will update sooner with a better post with much less code and a lot more structure.

## Introduction to Haskell

ghci - glascow haskell compiler interactive?

- Changing from `Prelude>`
> Use `:set prompt "ghci> "`

- Haskell supports simple arithmetic and logic programming, use parentheses to make precedence explicit or change logic

- Brackets: 
    - `5 * -3` ❌ 
    - `5 * (-3)` ✔

Logical Operators: `&&` is `AND`,  `||` is `OR` and `not` is `NOT`

Equality: `==` or `/=`

Haskell is Type Safe, hence `5 + "Chicken"` or `5 == True` bring up errrors.
Type safety: Strings, chars, ints, doubles can only interact with their types or must be casted to interact with other types. Their types do not match


### Functions

- `succ` - Stands for sucessor, takes anything with a sucessor and retuns it 
eg: `succ 8` returns `9` and `succ 'a'` returns `'b'`

- `min` - takes 2 arguements and returns lesser of both of them. eg `min 4 5` returns `4`

- `max` - opposite of `min`, takes 2 arguements and returns the bigger of both of them. eg `max 5 2` returns `5`

> Infix Functions, functions that take 2 parameters can be made an infix function by adding backticks to the function call. eg

    8 `min` 2 

#### Writing Functions

One parameter function: `doubleFive x = x + (x * 4)`

Two parameter function: `doubleUs x y = x * 2 + y * 2`

Zero parameter functions 
or definitions: `conanO'Brien = "It's a-me, Conan O'Brien!"   `

Functions are defined the same way they are called
> Load files in ghci using the command `:l filename`

```hs
doubleMe x = x + x

doubleUs x y = x * 2 + y * 2
```

If statements
---
```hs
doubleSmallNumber x = if x > 100
                        then x
                        else x *2
```
In haskell, if statements require an else. its mandatory as every expression and function must return something. The function can also be written in one line. IF statements will always return something and thats why its an expression. 

`doubleSmallNumber' x = (if x > 100 then x else  x*2) + 1`

Rules
---
- Functions cannot begin with uppercase letters


### Lists
Lists are the most used data structure. they exist in all major programming languages.In haskell, they are homogenous, can only store data of the same type. Hence you cant have character, ints in the same list. 

Strings are lists of characters

```hs
let lostNumbers = [4, 8, 12, 16, 20, 24, 28, 32]
lostNumbers
```
- Combining lists: `++`
    This is done using the `++` operator. e.g.
    ```hs
    [1,2,3,4,9] ++ [10,11,12]
    "hello" ++ " " ++ "world"
    ['w','o'] ++ ['o', 't']
    ```
- The `++` operator is expensive on long strings because it walks through the list on the left side of `++`. 

- Appending Lists: `:`
    Use the operator `:` when appending an element to a list. 
    it doesnt work for lists just elements. 
    `5:[1,2,3,4,5]`

- Indexing Lists: `!!`
    Indexes of lists start at 0.
    `"Steve Buscemi" !! 6` returns `B`

- Lists can also contain lists

#### List Functions
- Head: returns the first element of a list
- Tail: returns the tail elements of a list, list without first element
- last: returns the last element of a list
- Init: returns a list without the last element of the list
> Do not use these functions on empty lists. it blows up in your face.
![Resource](https://s3.amazonaws.com/lyah/listmonster.png)

- Length: returns the length of a list. 
- null: checks if a list is empty, or `lst == []`
- reverse: reverse a list
- take: takes a number and a list, extracts that many eelements from the beginning of the list. 
- drop: similar to take, but drops elements from the begining of a list and returns modified list
- maximum: takes a list of stuff and returns the biggest element in the list
- mimimum: takes a list and returns the smallest element in the list
- sum: takes a list of numbers and returns their sum
- product: takes a list of numbers and returns their products
- elem: takes a thing and a list and tells if the thing is a member of the list. utilized mostly as an infix function 
```hs
x = [1..10]
elem 5 x  --Returns True
5 `elem` x -- Same logic also returns True
```

#### Ranges
Lists can be created by applying range functions for elements in a sequence.

to create a list of natural numbers from 1 to 20. you use `[1..20]`. to apply steps. you eg. `[2, 4..20]` will return a list of all even numbers from 2 to 20. same for multiples of 3 `[3,6..20]` will return all multiples of 3 from 3 to 20. 
Reverse ranges are also possible same way `[20, 19..1]` will return a reversed list from 20 to 1

- cycle: this takes a list and cycles it into an infinite list. eg `cycle [1..10]`
use with take to slice off somewhere 
```hs
take 10 (cycle [1..5])
```
- repeat : takes an element and produces an infinite list of just that element. `repeat 11`. use with take to slice it off somewhere

- replicate: takes a number and an element and  returns a list of the number elements. `replicate 5 'r'`


#### List Comprehension
this is based of set comprehensions. a set of numbers which is the output passes a set of conditions defined in the set rules. 

Example: getting the 10 even numbers using list comprehension.
```hs
[x*2 | x <- [1..10]]
```
> if we wanted to add more conditions to the list, such as limit as to what element is doubled to. This will return a list of even numbers from 12 to 20.
```hs
[x*2 | x <- [1..10], x*2 >= 12]
```
>Return a list of X*2 where x is from 1 to 10 and x * 2 is greater than or equal to 12

```hs
[x|x <- [50..100], mod x 7 == 3]
[x|x <- [50..100], x `mod` 7 == 3]
```
> Return a list of numbers from 50 to 100, which modulus 7 is equal to 3

This is also regarded as filtering, take a list and filter out by a predicate. 
```hs
boomBangs xs = [ if x < 10  then "BOOM" else "BANG" | x <- xs, odd x]
```
> give me a list where for each odd x in xs, if x < 10 give me "BOOM" or give me "BANG"

```hs
boomBangs xs = [ if x < 10  then "BOOM " ++(show x) else "BANG "++ (show x) | x <- xs, odd x]
```

you can also add several predicates, if we wanted a list with numbers not 13, 15 or 19
```hs
[x|x <-[10..20], x/=13, x/=15, x/=19]
```
> give me all x from 10 to 20, where x is not 13, 15 or 19.

we can also apply multiple predicate to list comprehension.
```hs
[x*y | x <- [2, 5, 10], y <- [8, 10, 11]]
```
> give me all x*y where x is in the list and y is in the list

Applying restrictions such like
```hs
[x*y | x <- [2, 5, 10], y <- [8, 10, 11], x*y > 50]
```

funny applications
```hs
let nouns = ["hobo","frog","pope"] 
let adjectives = ["lazy", "grouchy", "scheming"]
[adjective++ " " ++ noun | adjective <- adjectives, noun <- nouns]
```


Modified function of length
```hs
length' xs = sum [1| _ <- xs]
```
> `sum` sums up a list and we replace all members of a list with 1 hence counting up the sum of elements i the list

remove nonUppercase strings
```hs
removeNonUppercase st = [c | c <- st, c `elem` ['A'..'Z']]
```
> this will remove all nonUppercase characters in any string.

List comprehension will also work for nested lists as far as its refrenced correctly
```hs
let xxs = [[1,3,5,2,3,1,2,4,5],[1,2,3,4,5,6,7,8,9],[1,2,4,2,1,6,3,1,3,2,3,6]]
[[x |  x <- xs, even x] | xs <- xxs]
```


### Tuples
Tuples are like lists but they have very fundamental differences
- Tuples can combine various Values and Types as far as they are know
- Tuples do not have to be homogenous, they can have various types
- Tuples can represent a wide variety of data, they can also contain lists

- fst: takes a pair (2 element tupule) and returns the first element
- snd: takes a pair and returns the second component

- zip: takes 2 lists and zips them together into one list by joining matching elements into pairs. 
```hs
zip [1..5] (replicate 5 5)
> [(1,5),(2,5),(3,5),(4,5),(5,5)]
```
zip also works with elements with different types and if their lists do not match. it cuts off the longer list to match the length of the shorter one. Due to this we can zip finite lists with infinite lists.

```hs
zip [1..]["apple", "mango", "orange", "cherry"]
>[(1,"apple"),(2,"mango"),(3,"orange"),(4,"cherry")]
```
----
Problem: generate all possible right triangles where their sides are equal or smaller than 10 and their perimeter is equal to 24

```hs
let triangles = [(a,b,c)| a <- [1..10], b <- [1..10], c <-[1..10]]
```
Right Triangles
```hs
let rightTriangles = [(a,b,c) | a <-[1..10], b <- [1..10], c<- [1..10],  a^2+ b^2 == c^2]
```

Right Triangles where Perimeter is 24
```hs
let rightTriangles' = [(a,b,c) | a <-[1..10], b <- [1..10],  c<- [1..10],                        a^2+ b^2 == c^2, a+b+c==24]
```