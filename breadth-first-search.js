// Iterative Breadth First Search
function bfs(start, end) {
    console.log(start, end);
    var queue = [];
    var children; // List of child nodes.
    var parent; // List of parent nodes.
    var currentNode; // Current node to process.

    currentNode = new NodeTracer(
        start,
        null,
        false
    );
    
    queue.push(currentNode);
    while (queue.length > 0) {
        console.log(queue);

        for (var j = 0; j < queue.length; j++) {
            console.log(queue[j].toString());
        }

        currentNode = queue.shift();

        console.log(currentNode, 'is being visited');
        if (currentNode.visited) {
            console.log('Node', currentNode.toString(), 'was already visited.');
            continue;
        } else {
            console.log('Node', currentNode.toString(), 'is new.');
            currentNode.visited = true;
        }
        
        if (currentNode.node == end) {
            console.log('Node found.');
            return;
        }
        
        parent = currentNode.node.parentNode;
        children = currentNode.node.childNodes;

        if (parent) {
            queue.push(
                new NodeTracer(
                    parent,
                    currentNode,
                    false
                )
            );
        }
        
        children = Array.prototype.slice.call(children);
        
        for (var i = 0; i < children.length; i++) {
            if (children[i]) {
                queue.push(
                    new NodeTracer(
                        children[i],
                        currentNode,
                        false
                    )
                );
            }
        }
    }

    console.log('All nodes processed.');
}

/**
 * 
 * @param {Node} node A DOM node.
 * @param {NodeTracer} prev A NodeTracer Object, used to retrace our steps back to start.
 * @param {Boolean} visited
 */
function NodeTracer(node, prev, visited) {
    this.node = node;
    this.prev = prev;
    this.visited = visited;
}

NodeTracer.prototype.toString = function () {
    var tagName = this.node.tagName;
    var id = (this.node.id) ? '#' + this.node.id : '';
    var className = (this.node.className) ? '.' + this.node.className : '';
    return tagName + id + className + ':' + this.visited;
};

// find a path between node1 and node2.
bfs(document.getElementById('start'), document.getElementById('end'));
