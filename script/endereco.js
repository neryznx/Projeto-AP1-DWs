const raw = "";

const requestOptions = {
    method: "GET",
    body:raw,
    redirect:"follow"
};

fetch("https://viacep.com.br/ws/01001000/json/",requestOptions)
    .then((Response) => Response.text())
    .then((Result) => console.log(Result))
    .then((Response) => console.error(error));

    