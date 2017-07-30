# js-collections-framework
provides the basic javascript implementation of commonly used data structures.It includes following data structres 
* [Stack](#stack)
* [Queue](#queue)
* [LinkedList](#linked-list)
* [Tree](#tree)
* [Graph](#graph)

## Demo
 [LIVE DEMO](https://rohithsathya.github.io/JSD/index.html)

### Get started
This library is been bulit to use on both server side (nodeJs) as well as on client (Html/JS).
* install it using npm
```js
    npm install js-collections-framework
```

* or [download](https://github.com/rohithsathya/JSD/archive/master.zip) the project and refer the JCF file present in the dist/ folder
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
        <script src="https://rohithsathya.github.io/JSD/dist/JCF.min.js"></script>
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
## Queue
Queue is an abstract data structure, somewhat similar to Stacks. Unlike stacks, a queue is open at both its ends. One end is always used to insert data (enqueue) and the other is used to remove data (dequeue). Queue follows First-In-First-Out methodology, i.e., the data item stored first will be accessed first.

### How to use queue in JCF
* In nodeJS
```js
        var JCF = require('js-collections-framework');
        var queue = JCF.Queue;
        var myQueue = new queue();
```
* On Client Side(HTML/JS)
```js
        //JCF is a global variable and will be available as soon as JCF lib is included
        var queue = JCF.Queue;
        var myQueue = new queue();
``` 
### Methods/Operations on stack
| Method       | Explanation  | Example  |
| ------------- | ------------- |------------- |
| .add(data) | used to push data on to queue | myQueue.add(data); |
| .remove()      | used to remove an item from the queue | myQueue.remove(); |
| .peek()      | returns the next item from the queue | myQueue.peek(); |
|  myQueue[index] | returns the data at the given index | myQueue[3] |
| .length      | retruns the length of the queue | myQueue.length; |

### Complete Example
```html
    <html>
    <head>
        <script src="https://rohithsathya.github.io/JSD/dist/JCF.min.js"></script>
        <script>
             var queue = JCF.Queue;
             var myQueue = new queue();
             //push Data
             myQueue.add("1");
             myQueue.add("2");
             myQueue.add("3");

             //print the stack data
             console.log("Printing Queue");
              for (var i = 0; i < myQueue.length; i++) {
                console.log(myQueue[i]);
            }

            //pop data
            myQueue.remove();

             //print the stack data
             console.log("Printing Queue");
              for (var i = 0; i < myQueue.length; i++) {
                console.log(myQueue[i]);
            }

            //peaking Queue
            console.log("Peaking Queue")
            console.log(myQueue.peek());

        </script>
    </head>
    <body>
        <h3>
            Look at the developer console for output
        </h3>
    </body>
</html>

```

## Linked List
A linked list is a sequence of data structures, which are connected together via links.
Linked List is a sequence of links which contains items. Each link contains a connection to another link. Linked list is the second most-used data structure after array.

### How to use linkedlist in JCF
* In nodeJS
```js
        var JCF = require('js-collections-framework');
        var linkedList = JCF.LinkdeList;
        var myLinkedList = new linkedList();
```
* On Client Side(HTML/JS)
```js
        //JCF is a global variable and will be available as soon as JCF lib is included
        var queue = JCF.LinkdeList;
        var myLinkedList = new linkedList();
``` 
### Methods/Operations on stack
| Method       | Explanation  | Example  |
| ------------- | ------------- |------------- |
| .addAtStart(data) | used to add data at the start of linked list | myLinkedList.addAtStart(data); |
| .addAtEnd(data) | used to add data at the end of linked list | myLinkedList.addAtEnd(data); |
| .addAt(data,pos) | used to add data at the given position of linked list | myLinkedList.addAtStart(data,pos); |
| .getHead() | used to add data at the Head/begining of linked list | myLinkedList.getHead(); |
| .getTail() | used to add data at the Tail/end of linked list | myLinkedList.getTail(data,pos); |
| .itemAt(pos) | used to get data at the given position of linked list | myLinkedList.itemAt(pos); |
| .removeHead()      | used to remove head from the linked list | myLinkedList.removeHead(); |
| .removeTail()      | used to remove tail from the linked list | myLinkedList.removeTail(); |
| .removeAt(pos)       | used to remove an item at a given position from the linked list | myLinkedList.removeAt(position); |
| .length      | retruns the length of the linked list | myLinkedList.length; |

### Complete Example
```html
   <html>
    <head>
        <script src="https://rohithsathya.github.io/JSD/dist/JCF.min.js"></script>
        <script>
             var linkedList = JCF.LinkedList;
             var myLinkedList = new linkedList();

        //add Data to LL
        console.log("Adding 1,2,3 to linked list");
        myLinkedList.addAtStart("1");
        myLinkedList.addAtStart("2");
        myLinkedList.addAtStart("3");
        console.log("prinitng...it should print 3,2,1");
        prinitLinkedList();
        myLinkedList.addAtEnd("4");
        console.log("prinitng...it should print 3,2,1,4");
        prinitLinkedList();
        myLinkedList.addAt("5", 2);
        console.log("prinitng...it should print 3,2,5,1,4");
        prinitLinkedList();

        console.log("Getting Head Node");
        console.log(myLinkedList.getHead());

        console.log("Getting Tail Node");
        console.log( myLinkedList.getTail());

        console.log("Getting Node At Position 2");
        console.log(myLinkedList.itemAt(2));
        

        console.log("Removing Node At Position 3");
        myLinkedList.removeAt(3);
        console.log("prinitng...it should print 3,2,5,4");
        prinitLinkedList();

        console.log("Removing Head Node");
        myLinkedList.removeHead();
        console.log("prinitng...it should print 2,5,4");
        prinitLinkedList();

        console.log("Removing Tail Node");
        myLinkedList.removeTail();
        console.log("prinitng...it should print 2,5");
        prinitLinkedList();

        function prinitLinkedList(){
            for (var i = 0; i < myLinkedList.length; i++) {
                console.log(myLinkedList.itemAt(i));
            }
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
## Tree
In computer science, a tree is a widely used abstract data type (ADT)—or data structure implementing this ADT—that simulates a hierarchical tree structure, with a root value and subtrees of children with a parent node, represented as a set of linked nodes.


### How to use tree in JCF
* In nodeJS
```js
        var JCF = require('js-collections-framework');
        var treeNode = JCF.Tree;
        var myRootNode = new treeNode("root");
```
* On Client Side(HTML/JS)
```js
        //JCF is a global variable and will be available as soon as JCF lib is included
        var treeNode = JCF.Tree;
        var myRootNode = new treeNode("root");
``` 
### Methods/Operations on stack
| Method       | Explanation  | Example  |
| ------------- | ------------- |------------- |
| .addChild(node) | used to add a child node to a given node | myRootNode.addChild(node); |
| .getRoot() | used to get the root node of a given node | myChildNode.getRoot(); |
| .getParent() | used to get the immediate parent of a given node | myChildNode.getParent(); |
| .getChildren() | returns the list of all the imediate children of a given nodes | myRootNode.getChildren(); |
| .getValue() | returns the value of a given node | myRootNode.getValue(); |
| .delete() | deletes the given node from the tree | myRootNode.delete(); |
| .toJson()      | retruns the tree as json object | myRootNode.toJson(); |
| .toString()    | retruns the tree as string  | myRootNode.toString(); |

### Complete Example
```html
  <html>
    <head>
        <script src="https://rohithsathya.github.io/JSD/dist/JCF.min.js"></script>
        <script>
             var treeNode = JCF.Tree;

        var rootNode = new treeNode("CEO");
        var engNode = new treeNode("ENG");
        var manNode = new treeNode("MAN");
        var opsNode = new treeNode("OPS");


        var emp1Node = new treeNode("emp1");
        var emp2Node = new treeNode("emp2");
        var emp3Node = new treeNode("emp3");
        var emp4Node = new treeNode("emp4");
        var emp5Node = new treeNode("emp5");
        var emp6Node = new treeNode("emp6");

        //now create a tree
        rootNode.addChild(engNode);
        rootNode.addChild(manNode);
        rootNode.addChild(opsNode);

        engNode.addChild(emp1Node);
        engNode.addChild(emp2Node);
        manNode.addChild(emp3Node);
        manNode.addChild(emp4Node);
        opsNode.addChild(emp5Node);
        opsNode.addChild(emp6Node);

        console.log("\n=====================TREE=====================\n");
        console.log("Printing Tree");
        console.log(rootNode.toJson());
        console.log("Printing root");
        console.log(emp1Node.getRoot());
        console.log("printing parent of emp3, it should be MAN");
        console.log(emp3Node.getParent());
        console.log("Prinitng children of ENG, should be emp1 and 2");
        console.log(engNode.getChildren());
        console.log("Prinitng the value of OPS dept, it should be OPS");
        console.log(opsNode.getValue());
        console.log("Deleting the OPS node");
        opsNode.delete();
        console.log(emp1Node.getRoot());
        </script>
    </head>
    <body>
        <h3>
            Look at the developer console for output
        </h3>
    </body>
</html>

```
## Graph
A graph is a pictorial representation of a set of objects where some pairs of objects are connected by links. The interconnected objects are represented by points termed as vertices, and the links that connect the vertices are called edges.
Formally, a graph is a pair of sets (V, E), where V is the set of vertices and E is the set of edges, connecting the pairs of vertices.


### How to use graph in JCF
* In nodeJS
```js
        var JCF = require('js-collections-framework');
        var graphNode = JCF.GraphNode;
        var graph = JCF.Graph;

        var myGraph = new graph();

```
* On Client Side(HTML/JS)
```js
        //JCF is a global variable and will be available as soon as JCF lib is included
        var graphNode = JCF.GraphNode;
        var graph = JCF.Graph;

        var myGraph = new graph();
        var nodeA = new JSDNode("A");
``` 
### Methods/Operations on stack
| Method       | Explanation  | Example  |
| ------------- | ------------- |------------- |
| .addVertex(graphNode) | used to add a vertex into to a given graph |  myGraph.addVertex(nodeA); |
| .addEdge(graphNodeSrc,graphNodeDest) | used to add an edge from src node to dest node | myGraph.addEdge(nodeA,nodeB); |
| .removeVertex(graphNode) | removes the given vertex from graph | myGraph.removeVertex(nodeA); |
| .removeEdge(graphNodeSrc,graphNodeDest) |removes an edge b/w src node and dest node | myGraph.removeEdge(nodeA,nodeB); |
| .getAllVertices() | returns the list of all the vertices in the graph | myGraph.getAllVertices(); |
| .getAdjacentVertices(graphNode) | returns the list of adjacent vertices of a given vertex | myGraph.getAdjacentVertices(nodeA); |
| .getOutdegree(graphNode) | retruns the out degree of a given vertex | myGraph.getOutdegree(nodeA); |
| .getIndegree(graphNode)  | retruns the in degree of a given vertex  | myGraph.getIndegree(nodeA); |
| .toJson()  | retruns the graph as json object for persistence  | myGraph.toJson(); |
| .toString()  | retruns the graph as string for persistence  | myGraph.toString(); |
| .loadFromJson(jsonObj)  | used to load the graph from json persisted previously  | myGraph.loadFromJson(graphJson); |
| .dfs(startingNode)  | retruns DFS path for a given starting node | myGraph.dfs(nodeA); |
| .bfs(startingNode)  | retruns BFS path for a given starting node | myGraph.bfs(nodeA); |

### Complete Example
```html
  <html>

<head>
    <script src="https://rohithsathya.github.io/JSD/dist/JCF.min.js"></script>
    <script>
        var graphNode = JCF.GraphNode;
        var graph = JCF.Graph;

        var myGraph = new graph();
        var nodeA = new graphNode("A");
        var nodeB = new graphNode("B");
        var nodeC = new graphNode("C");
        var nodeD = new graphNode("D");


        myGraph.addVertex(nodeA);
        myGraph.addVertex(nodeB);
        myGraph.addVertex(nodeC);
        myGraph.addVertex(nodeD);

        myGraph.addEdge(nodeA, nodeB);
        myGraph.addEdge(nodeA, nodeC);
        myGraph.addEdge(nodeA, nodeD);
        myGraph.addEdge(nodeB, nodeD);

        console.log("\n============GRAPH===================\n");
        console.log("Prinitng all vertices");
        console.log(myGraph.getAllVertices())
        console.log("Prinitng Neigbhours of nodeA, this should be B,C,D");
        console.log(myGraph.getAdjacentVertices(nodeA));
        console.log("Prinitng outdegree of A, it should be 3");
        console.log(myGraph.getOutdegree(nodeA));
        console.log("Prinitng indegree of B, it should be 1");
        console.log(myGraph.getIndegree(nodeB));
        console.log("Prinitng the graph in JSON");
        console.log(myGraph.toJson());
        console.log("DFS startting with nodeB");
        console.log(myGraph.dfs(nodeB));
        console.log("BFS startting with nodeA");
        console.log(myGraph.dfs(nodeA));
        console.log("remove Edge between a and b");
        myGraph.removeEdge(nodeA, nodeB);
        console.log("Prinitng outdegree of A, it should be 2");
        console.log(myGraph.getAdjacentVertices(nodeA));
        console.log("Removing vertex nodeB");
        myGraph.removeVertex(nodeB);
        console.log("Prinitng the graph in JSON");
        console.log(myGraph.toJson());
    </script>
</head>

<body>
    <h3>
        Look at the developer console for output
    </h3>
</body>

</html>

```



