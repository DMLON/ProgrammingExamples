# Keep going deep and sum them all

Your mission is to write a function that receives a list and returns the sum of all the numbers found in that list. This list can contain three different types of elements:

- plain numbers
- lists, that can contain these same three possible elements
- hashes, with string keys, and any of these three possible elements as values

The numbers to consider in the total sum are only the plain numbers, but with the above description you can see they can be anywhere: directly in the provided list, inside another sub-list, or as a value in some hash.

### Constraints

- numbers will be any integer or floating point number (`float64` for Go), in the range supported by your language
- the nesting of lists / hashes will have at most 1000 levels
- the total sum won't exceed what your language can support for the number type used as input

### Specific languages considerations

When this exercise talks about lists and hashes, each language will use the following data structures:

| Language  | List | Hash |
| ------------- | ------------- |-------|
| JavaScript  | `Array` | `Object` (`{}`) |
| Python  | `list` | `dict` |
| Ruby  | `Array` | `Hash` |
| Go  | `[]interface{}`<sup>1</sup> | `map[string]interface{}`<sup>1</sup> |

<sup>1</sup> In the case of Go, the `interface{}` received as type will always actually be either a `slice`, a `map` or a `float64`
