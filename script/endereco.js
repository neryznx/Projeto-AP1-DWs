const url = "https://go-wash-api.onrender.com/api/auth/address";


async function endereco(){

    let title = document.getElementById("title").value;
    let cep = document.getElementById("cep").value;
    let address = document.getElementById("address").value;
    let number = document.getElementById("number").value;
    let complement = document.getElementById("complement").value;

    let api = await fetch(url, {
        method : "POST",
        body : JSON.stringify({
            title : title,
            cep :  cep,
            address : address,
            number : number,
            complement : complement,
            user_type_id: 1
        }),
        headers: {
            "Content-Type": "application/json",
        }
        });

            if (api.ok) {
                let resposta = await api.json();
                console.log(resposta);
            } 
            }
        alert(erro.data.errors);
