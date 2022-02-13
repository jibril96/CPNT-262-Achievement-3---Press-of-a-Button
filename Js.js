const btn = document.getElementById ("btn");
console.log(btn)

btn.addEventListener("mouseover", function() {
    btn.innerText="touch here"
    console.log('button touched')
    
});