// console.log(document.body.firstChild)
// console.log(document.lastChild)
// console.log(document.childNodes)
// const element = document.getElementById("hi")
// element.style.background="lightblue"
// let p = document.getElementsByTagName("p")
// console.log(p)
// element.innerHTML = "<i><b>Bavneet Kaur</b></i>"
// p.hidden = true
// document.write("Hello guys")
// let tag = document.createElement('p')
// tag.innerHTML = "<br><b>hardwork is the key to success and i lost that key</b>"
// prototype -- object
let js = {
    name: "Javascript",
    type: "dynamic"
  }
  console.log(js)
let p = {
    run: ()=> {
        alert("run")
    }
}
js.__proto__ = p
js.run()