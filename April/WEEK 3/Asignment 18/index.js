const inputs = document.getElementById("passwords")
const cnfinputs = document.getElementById("cnfpassword")
const consclusion = document.getElementById("conclusion")

const validate = ()=>{
    console.log(inputs.value);
    console.log(cnfinputs.value);
    if(inputs.value.length!=0){
        if(inputs.value==cnfinputs.value){
            consclusion.innerHTML+=`<span>Password Matched</span><br>`
            consclusion.style.color="green"
        }
        else{
            consclusion.innerHTML+=`<span>Password not Matched</span><br>`
            consclusion.style.color="red"
        }
    }
    else{
        consclusion.innerHTML+=`<span>Enter password first</span><br>`
        consclusion.style.color="red"
    }
}