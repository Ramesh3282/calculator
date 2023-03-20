let displaybtn=''
function display(val){
 
    if(val==='c'){
       
        document.getElementById('display').value=''
        displaybtn=''
    }
    else if (val==='='){
        inputVal=document.getElementById('display').value
        inputVal=inputVal.replace('×','*')  
        inputVal=inputVal.replace('÷','/')   
        document.getElementById('display').value=eval(inputVal)
        displaybtn=eval(inputVal)
        
    }else{
        displaybtn=displaybtn+val
        document.getElementById('display').value=displaybtn
    }
    
}

function getKeyValue(event){
    console.log("keypressed")
}