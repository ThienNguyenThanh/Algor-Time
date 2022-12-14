function* MyGenerator(){
    for(var i = 0; i < 10; i++){
        console.log(i)
        yield 1
        
        console.log(`second: ${i}`)
        yield 2
    }
}

const gen = MyGenerator()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())