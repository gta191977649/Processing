class RenderWare {
    constructor(nodeList) {
        this.NodeList = nodeList
    }
    renderGrid() {
        let x = 1
        let y = 1
        for(let i = 1; i <= SQUARE_SIZE * SQUARE_SIZE; i++) {
            this.renderNode(x,y)
            x++
            if(i % SQUARE_SIZE == 0) { // change line
                console.log(i)
                y++
                x = 1
            }
        }
    }
    renderNode(x,y){
        if (NodeList[x][y].type == "node") {
            fill(color(255, 255, 255))
            square((x-1)*NODE_SIZE,(y-1)*NODE_SIZE,NODE_SIZE)
        }
        if (NodeList[x][y].type == "block") {
            fill(color(0, 0, 0))
            square((x-1)*NODE_SIZE,(y-1)*NODE_SIZE,NODE_SIZE)
        }
        if (NodeList[x][y].type == "start") {
            fill(color(255, 0, 0))
            square((x-1)*NODE_SIZE,(y-1)*NODE_SIZE,NODE_SIZE)
        }
        if (NodeList[x][y].type == "target") {
            fill(color(0, 0, 255))
            square((x-1)*NODE_SIZE,(y-1)*NODE_SIZE,NODE_SIZE)
        }
            
    }
    render(nodeList) {
        this.NodeList = nodeList        
        this.renderGrid()
    }
}