window.document.addEventListener("DOMContentLoaded",()=>{
    alert("pagina carregada .... ")

    window.document.getElementById("form").addEventListener('submit', async (e) => {
        e.preventDefault()
        
        await fetch("https://fakestoreapi.com/auth/login",{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                username:document.getElementById("email").value,
                password:document.getElementById("senha").value,
            })

        }).then(e=>{
            alert("vc foi logado com suceso")
        }).catch(e=>{
            alert("houve um  erro enesperado"+ e)
        })
    })

})