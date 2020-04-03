
//reference types 

var obj1 ={ val:10};
var obj2 =obj1;
var obj3= {value:14};

//array are objects 
console.log(obj2)

obj2=obj3;
//---------------CONTEXT VS SCOPE ----
//$$ as soon as a function is made a new scope is made 
function a(){
    let a=3;

    return a

}

const obja ={
 a:function(){
     console.log(this);
 }
}

//_____Instatiion___ making a copy of object

class Player{
    //
    constructor(name, type){
        console.log(this)
        this.name =name;
        this.type=type;
    }
    intro(){
        console.log(`hi${this.name},Im a a ${this.type}`)
    }
}

class Wizard extends Player{
   constructor(name, type){
        super(name,type)
    }
    play(){

        console.log(`WEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('shell','healer');
const Wizard2 = new Wizard('jack', 'dark ');
wizard1.play();
Wizard2.intro();
Wizard2.play();
