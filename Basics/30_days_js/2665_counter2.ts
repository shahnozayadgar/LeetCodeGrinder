// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let currentNumber = init;
    return {
        increment: function() {
            currentNumber += 1;
            return currentNumber;
        },
        decrement: function() {
            currentNumber -= 1;
            return currentNumber;
        },
        reset: function() {
            currentNumber = init;
            return currentNumber
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

  // Test cases
  const counter = createCounter(5);
  console.log(counter.increment()); // Expected: 6
  console.log(counter.reset());     // Expected: 5
  console.log(counter.decrement()); // Expected: 4