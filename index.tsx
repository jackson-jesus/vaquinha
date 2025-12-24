
const pixKey = "81985898200";

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    
    toastMsg.innerText = message;
    toast.classList.add('show');
    toast.classList.remove('opacity-0');
    
    setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.add('opacity-0');
    }, 3000);
}

async function copyToClipboard(text, msg) {
    try {
        await navigator.clipboard.writeText(text);
        showToast(msg);
    } catch (err) {
        // Fallback para navegadores antigos
        const input = document.createElement('input');
        input.value = text;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        showToast(msg);
    }
}

function copyPix() {
    copyToClipboard(pixKey, "Chave PIX copiada, obrigado por ajudar!");
}

function copyLink() {
    copyToClipboard(window.location.href, "Link copiado, obrigado por ajudar!");
}

// Expõe as funções para o HTML
window.copyPix = copyPix;
window.copyLink = copyLink;

