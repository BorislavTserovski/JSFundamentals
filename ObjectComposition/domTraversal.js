function traverse(selector) {
    let targetNode = $(selector)
    let maxDepth = 0
    let deepestNode = targetNode

    depthSearch(0, targetNode)
    highLight(maxDepth, deepestNode)


    function highLight(remainingNodes, currentNode) {
        if (remainingNodes === 0) {
            return
        }
        currentNode.addClass('highlight')
        let parent = currentNode.parent()
        highLight(remainingNodes - 1, $(parent))
    }

    function depthSearch(depth, currentNode) {
        if (depth > maxDepth) {
            maxDepth = depth
            deepestNode = currentNode
        }
        let children = currentNode.children()

        for (let child of children) {
            depthSearch(depth + 1, $(child))
        }

    }
}