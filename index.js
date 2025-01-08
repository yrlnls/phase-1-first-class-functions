// 1) The receivesAFunction function
function receivesAFunction(callback) {
    callback(); // Call the callback function
  }
  
  // 2) The returnsANamedFunction function
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("I am a named function!");
    }
    return namedFunction; // Return the named function
  }
  
  // 3) The returnsAnAnonymousFunction function
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("I am an anonymous function!");
    }; // Return an anonymous function
  }
  
  // Test cases:
  
  // Test receivesAFunction
  receivesAFunction(() => console.log("Callback function called!"));
  
  // Test returnsANamedFunction
  const namedFunc = returnsANamedFunction();
  namedFunc(); // Logs: "I am a named function!"
  
  // Test returnsAnAnonymousFunction
  const anonFunc = returnsAnAnonymousFunction();
  anonFunc(); // Logs: "I am an anonymous function!"
  