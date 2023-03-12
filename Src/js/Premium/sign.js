var sign = document.getElementsByName("sign")

function check(){
    for (const key of sign) {
        if (key.value=="") {
            alert("Bạn cần điển dầy đủ thông tin")   
                return false 
        }
        
    }
    let a;
    for(let i =4; i<7;i++)
        if(sign[i].checked==false){
              
            a=1
        }
if(a==1)
{alert("Bạn cần điển dầy đủ thông tin") 
return false}
    return true
}


