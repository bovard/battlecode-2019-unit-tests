# battlecode-2019-unit-tests

Some example units tests for MapLocation and Direction

Note: There are some failing tests! You should fix them :)

## Installation
First you'll need to install deps:
```
npm install
```

## Running Tests
Then you can run the tests:
```
npm run tests
```
(see package.json for the actual mocha command)

### Output
```
  isCardinal
    ✓ should be true for north
    ✓ should be false for north east

  opposite
    ✓ should return south for north
    ✓ should return north east for south west

  isAdjacentTo
    x should be true for location to the north
    x should be true for location to the south_east
    ✓ should be false for same location

  isCardinallyAdjacentTo
    x should be true for location to the north
    ✓ should be false for location to the south_east
    ✓ should be false for same location

  <more output>
```
