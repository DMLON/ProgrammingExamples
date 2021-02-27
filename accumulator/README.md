# Reducing and accumulating

Your mission is to write a very special function. This one needs to receive:

- a function that receives two integer arguments and returns an integer
- an integer we can call the **initial value**

And it should return **a function** that receives a single integer and returns an integer.

So the `accumulator` function you will write needs to support the following *pseudocode*:

```
// assuming `reducer` is a function/lambda that receives two integers and returns the sum of them
acc = accumulator(reducer, 10)
acc(5) // returns 15: 10 (the initial value) plus 5 (the number given here)
acc(7) // returns 22: 15 (the result returned in the previous call of `acc`) plus 7 (the number given here)
acc(20) // returns 42: 22 (the result returned in the previous call of `acc`) plus 20 (the number given here)
```

Note in this example the operation done is **plus** because that's what the `reducer` is doing in this case. But this will change depending on whatever the `reducer` does with their two arguments. You should always assume the first argument will be what you have accumulated so far, and the second argument is the new number to consider.

If this pattern sounds familiar to you that's good, you know the *fold* or *reduce* operation of functional programming.

### Constraints

- you can assume all the operations will yield a result that will still be in the integer boundaries for your language

### Specific language considerations

The first argument for your function `accumulator` will be a `function` in JavaScript, a `lambda` in Python and Ruby, and a `func(int, int) int` in Go.

The return value for your function will be a `function` in JavaScript, a `function` in Python, a `lambda` in Ruby and a `func(int) int` in Go.
