let string=""
let buttons =document.querySelectorAll(".button");
  

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == "="){
            string= eval(string);
            document.querySelector('input').value =string;
        }
        else if(e.target.innerHTML== "ac"){
                string ="";
                document.querySelector('input').value =string;
        }
        else if(e.target.innerHTML == "dc"){
            string = (string.slice(0,-1));
            document.querySelector('input').value =string;
        }
        
        else{
        string +=e.target.innerHTML;
        document.querySelector('input').value =string;
        }
    })
})