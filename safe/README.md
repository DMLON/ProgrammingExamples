# Playing with the safe

![image](https://user-images.githubusercontent.com/632782/91470424-afacd500-e862-11ea-8300-fef81c474e54.png)

This problem is the easiest one, but be careful to get it right.

Consider a safe knob like the one in the picture above. It has positions as integers from 0 to 99 (100 positions in total). You will assume it always starts at position 0. If you turn this knob counter-clockwise ![image](https://user-images.githubusercontent.com/632782/91471466-29918e00-e864-11ea-893f-8f4b4cc4222b.png) you are increasing the position, and if you turn it clockwise ![image](https://user-images.githubusercontent.com/632782/91471270-d4557c80-e863-11ea-88ff-7035969598f4.png) you are decreasing the position. If at some point you reach a full turn, either clockwise or counter-clockwise, you will be back at position 0.

Your mission in this exercise is to write a function that will receive a list of movements on this safe and returns the final position in the wheel after applying all the movements (assuming it started at position 0). Each movement will be an integer that will be positive if it's a counter-clockwise movement (increasing the position) and negative if it's a clockwise movement (decreasing the position).

Example: if you receive two movements, 10 and -5, starting from 0, you will be at position 10 after the first counter-clockwise movement, and then you will be at position 5 after the second one which is clockwise. So the answer, in this case, will be 5.

### Constraints:

- every movement will be an integer, so it can be from the min integer to the max integer available in your language (including, of course, 0)
- your function will receive a list of at most 10 thousand movements.