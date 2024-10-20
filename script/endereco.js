const url = "https://go-wash-api.onrender.com/api/auth/address";

async function endereco() {
  let titulo = document.getElementById("title").value;
  let cep = document.getElementById("cep").value;
  let endereco = document.getElementById("address").value;
  let numero = document.getElementById("number").value;
  let complemento = document.getElementById("complement").value;

  // Recuperar o token do localStorage
  const token = localStorage.getItem('access_token');

  let api = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      title: titulo,
      cep: cep,
      address: endereco,
      number: numero,
      complement: complemento
    }),
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  });

  if (api.ok) {
    let resposta = await api.json();
    alert("Endereco cadastrado com sucesso");
    return;
  } else {
    console.error('Erro na requisição:', api.statusText);
  }
}