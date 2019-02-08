# battlecode-2019-unit-tests

Some example units tests for MapLocation and Direction

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

  <more output>
```
