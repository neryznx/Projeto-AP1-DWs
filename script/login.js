const url = "https://go-wash-api.onrender.com/api/user";
async login(){
    let email= document.getElementById('email').value;
    let password= document.getElementById('senha').value;
    fetch(url,{
        method: "POST",
        body:JSON.stringify(
            {
                "email":email,
                "user_type_id":1,
                "password":password
            }
        ),
        headers:{
            'content-type': 'aplication/json' 
        }
    });

        if(api.ok){
            let resposta = await api.json();
            console.log(resposta);
            return;
        }
        let respostaErrors = await api.json():
        alert(respostaErrors.data.errors.email(0))
        let respostaErrors = await api.json():
        alert(respostaErrors.data.errors.password(0))





    



        } 
        )  
}