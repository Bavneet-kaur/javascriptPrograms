// error handling can only work with synchronous code
setTimeout(()=>{
    console.log("Hy bro I will work after 1 second")
    /*try block allows you to define a block of code to be tested for errors 
    while it is being executed.*/
    try{  
        console.log(bro)
    }
    /*The catch statement allows you to define a block of code to be executed, 
    if an error occurs in the try block.*/
    catch(error){
        console.log("Bro error catched")
    }
},1000)

setTimeout(()=>{
    console.log("Hy bro I will work after 2 seconds")
},2000)
setTimeout(()=>{
    console.log("Hy bro I will work after 3 seconds")
},3000)
//error object & custom error messages
try{
    throw new ReferenceError("too big to handle") //throw statement allows you to create a custom error.
} catch(e){
    // JavaScript will actually create an Error object with two properties: name and message.
    console.log("Name/Type of the Error: ",e.name)
    console.log("Message in the Error: ",e.message)
}
try{
    console.log(boo)
} catch(er){
    console.log("Name/Type of the Error: ",er.name)
    console.log("Message in the Error: ",er.message)
}
// finally statement lets you execute code, after try and catch, regardless of the result
const f = () =>{
    try{ 
        let a = 23;
        // console.log("Try Clause: ","Bruh.....")
        console.log(t)
        return
    }
    catch(error){
        console.log("catch Clause: ","Bro error catched")
    }
    finally{
        console.log("Final Clause: ","2"+"3"+"Bruh")
    }
}

f()
