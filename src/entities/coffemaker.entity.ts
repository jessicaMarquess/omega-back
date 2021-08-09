import Entity from "./base.entity";

class CoffeMaker extends Entity{

    public readonly name : string
    
    constructor(name : string){
        super()
        this.name = name
    }
}

export default CoffeMaker