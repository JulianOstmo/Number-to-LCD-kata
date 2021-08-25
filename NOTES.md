Write a program that given a number (with arbitrary number of digits)
converts it into LCD style numbers using the following format:
```
   _  _     _  _  _  _  _  _
 | _| _||_||_ |_   ||_||_|| |
 ||_  _|  | _||_|  ||_| _||_|
```

# Pomodoro 1
[x] Guard: input is not a number, throw error
[x] input is 0 return: _
                      | |
                      |_|
[x] input is 1 return: |
                       |
[x] input is 2 return: _
                       _|
                      |_
[x] input is 3 return: _
                       _|
                       _|
[x] continue for input is 4-9

# Pomodoro 2
[x] input is double digit. e.g 85
[ ] input is tripe digit: e.g. 379
[ ] big input: 9362935648

# Tech Debt
- refactor single digit tests into `test.each`
- refactor tests so that `expectedOutput` are fixtures
