# js-collections-framework
provides the basic javascript implementation of commonly used data structures.It includes following data structres 
    * Stack
    * Queue
    * LinkedList
    * Tree
    * Graph

## Demo
 [LIVE DEMO](https://rohithsathya.github.io/JSD/index.html)

### Get started
    This library is been bulit to use on both server side (nodeJs) as well as on client (Html/JS).
    install it using npm
    ```js
        npm install js-collections-framework
    ```

    or [download](https://github.com/rohithsathya/JSD/archive/master.zip) the project and refer the JCF file present in the dist/ folder
    ```html
        <script src="./dist/JCF.min.js"></script>
    ```

## Stack
In computer science, a stack is an abstract data type that serves as a collection of elements, with two principal operations: push, which adds an element to the collection, and pop, which removes the most recently added element that was not yet removed. The order in which elements come off a stack gives rise to its alternative name, LIFO (for last in, first out). Additionally, a peek operation may give access to the top without modifying the stack.

### How to use stack in JCF
    * In nodeJS
    ```js
        var JCF = require('js-collections-framework');
        var stack = JCF.Stack;
        var myStack = new stack();
    ```
    * On Client Side(HTML/JS)
    ```js
        //JCF is a global variable and will be available as soon as JCF lib is included
        var stack = JCF.Stack;
        var myStack = new stack();
    ``` 
### Methods/Operations on stack
| Method       | Explanation  | Example  |
| ------------- | ------------- |------------- |
| .push(data) | used to push data on to stack | myStack.push(data); |
| .pop()      | used to pop data from the stack | myStack.pop(); |
|  myStack[index] | returns the data at the given index | myStack[3] |
| .length      | retruns the length of the stack | myStack.length; |

### Complete Example
```html
    <html>
    <head>
        <script src="../dist/JCF.min.js"></script>
        <script>
             var stack = JCF.Stack;
             var myStack = new stack();
             //push Data
             myStack.push("1");
             myStack.push("2");
             myStack.push("3");

             //print the stack data
             console.log("Printing Stack");
              for (var i = 0; i < myStack.length; i++) {
                console.log(myStack[i]);
            }

            //pop data
            myStack.pop();

             //print the stack data
             console.log("Printing Stack");
              for (var i = 0; i < myStack.length; i++) {
                console.log(myStack[i]);
            }

        </script>
    </head>
    <body>
        <h3>
            Look at the developer console for output
        </h3>
    </body>
</html>

```


