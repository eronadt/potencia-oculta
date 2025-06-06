
document.getElementById("leadForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const nome = e.target.nome.value;
    const whatsapp = e.target.whatsapp.value;

    fetch("https://SEUWEBHOOK.n8n.app/webhook/potencia", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nome, whatsapp })
    }).then(() => {
        alert("Acesso liberado! Verifique seu WhatsApp.");
    });
});
