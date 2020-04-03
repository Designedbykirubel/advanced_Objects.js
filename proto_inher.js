let supergirl = {
    name:"Jolie",
    fire:true,

    fight(){
         return 5;
        },
    sign(){
           if(this.fire) {
              console.log(`I just want to ${this.name},the breather of fire `)
            }

        }
}
let human ={

        name:'james',
        fight(){

        return 1;
         }

}

human.__proto__= supergirl;

for (let prop in human ){

    
    if(human.hasOwnProperty(prop)){
    console.log(prop);


    }

}




