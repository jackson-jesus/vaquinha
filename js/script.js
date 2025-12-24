document.addEventListener('DOMContentLoaded', () => {
    const btnPix = document.getElementById('btn-pix');
    const btnShare = document.getElementById('btn-share');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');

    const PIX_KEY = "81985898200";

    function showToast(message) {
        toastMessage.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    async function copyToClipboard(text, successMessage) {
        try {
            await navigator.clipboard.writeText(text);
            showToast(successMessage);
        } catch (err) {
            console.error('Falha ao copiar:', err);
            // Fallback for older browsers
            const textArea = document.createElement("textarea");
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                showToast(successMessage);
            } catch (err) {
                console.error('Fallback failed:', err);
                showToast("Erro ao copiar. Tente manualmente.");
            }
            document.body.removeChild(textArea);
        }
    }

    btnPix.addEventListener('click', () => {
        copyToClipboard(PIX_KEY, "Chave PIX copiada, obrigado por ajudar!");
    });

    btnShare.addEventListener('click', () => {
        copyToClipboard(window.location.href, "Link copiado, obrigado por ajudar!");
    });
});
