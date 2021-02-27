# Initial assessment: small exercises

## Introduction

This is a set of four small exercises. If you are good at programming, you will be able to finish them in a small amount of time, and that's good. There are no tricks in these exercises, they are just an initial test to make sure you know how to program without taking much time out of you.

For each exercise, you can choose any of the four available languages: **JavaScript** (with Node.js runtime), **Python**, **Ruby**, and **Go**. You will find templates for each of the four languages all of them ending in a `.example` extension. In order to select a language you just need to remove the `.example` extension from the file, leaving the normal extension for that programming language (`.js`, `.py`, `.rb` and `.go`). It's important that you respect the content of the template file since the automated tests that will run against your code will need the specific function names, arguments, and structure the templates have.

## The exercises

You will find the full description of each specific exercise in a `README.md` file in each of the folders: [safe](./safe), [min-distance](./min-distance), [accumulator](./accumulator), and [deep-sum](./deep-sum). Feel free to choose the order in which you want to solve them, but just as a suggestion: `safe` is the easiest one.

## How to work on these exercises

### Carefully read the instructions

These exercises are not hard, but you need to make sure you fully understand the instructions or you won't have good results. If you have questions about the instructions, feel free to reach us at engineers@matildaexp.com or through the messaging platform where you applied.

### Choose a language

Once you choose the language, you need to remove the `.example` extension from the corresponding template file.

### Write your code

Inside the template file, you will see a function already declared, which is the function that the tests will run against. You can write code either in the function's body or outside of it if you need to, just don't change the function's signature 🙂

#### Important rules

1. The exercises are short enough that you should be comfortable writing the entire code in the same file. No need to create additional files.
2. **You cannot use any external dependency for your program**. You can use the language's own libraries, but no third-party dependencies.

#### How to test your code

All exercises ask you to write an exportable function. The automated tests will just _require_ your code and will then execute the function with different arguments. If you want to test your own function while developing, you can just write additional code in the template section marked for that purpose. Alternatively, you can create an additional file that requires your code and runs the function, since additional files will just be ignored by our automated tests.

### Automated tests

While working on your solutions, you should commit and push to non-master branches. Once you feel all the four exercises are complete, you can merge your changes to the `master` branch. A commit pushed to the `master` branch will trigger our automated tests. If they pass, you are clear to submit your assessment. If they don't pass, you can fix your program and make sure it passes all the tests before a submission.

Read [here](https://github.com/matilda-applicants/common-tasks-instructions/wiki/Automatic-task-validation#how-do-i-know-if-the-tests-passed) to know how to check if the tests pass. If they don't, just open the Jenkins job using the link:

![image](https://user-images.githubusercontent.com/632782/91464047-20032880-e85a-11ea-96f4-53af9b70b9fb.png)

And then open this step:

![image](https://user-images.githubusercontent.com/632782/91463670-abc88500-e859-11ea-98db-4aa04fdecfbc.png)

You will see all the details of the tests that passed and the ones that didn't, as well as any output your programs might have printed.

![image](https://user-images.githubusercontent.com/632782/91464267-622c6a00-e85a-11ea-9c1d-400e953e0c39.png)

### Submitting your task

Before you submit your task, you need to make sure the tests on your `master` branch's latest commit (HEAD) are successful. The submission will be just that: the latest commit on `master`. So when you are ready, just **let us know** (engineers@matildaexp.com) and we'll proceed with the human revision. Please include in this notice how much time it took for you to solve these four exercises (an estimate is ok).

## Evaluation

From the previous explanation you know there are automated tests and a human revision once those automated tests pass. The evaluation criteria for the automated tests is simple: be green. Tests cover a considerable amount of cases, so being green almost ensures the correctness of your solution.

As for the human revision, the actual result will not only depend on what you submitted, but also on the level of seniority we expect from you. But in general, human revision is focused on:

- **good code**: what does this mean exactly? we want to learn what it means to you by looking at the code you write
- **performant solution**: we won't expect the most performant solution possible, but we do expect you to be mindful of performance. You can tell that from the code you write

Have fun!