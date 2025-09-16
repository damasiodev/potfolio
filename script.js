// MOBILE TOGGLE
        document.getElementById('menu-toggle').addEventListener('click', function () {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
                menu.classList.add('max-h-screen');
            } else {
                menu.classList.add('hidden');
                menu.classList.remove('max-h-screen');
            }
        });

        // CLOSE MENU MOBILE
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', function () {
                document.getElementById('mobile-menu').classList.add('hidden');
                document.getElementById('mobile-menu').classList.remove('max-h-screen');
            });
        });

        //WPP FORM
const form = document.getElementById('whatsapp-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    
    const submitButton = this.querySelector('button[type="submit"]');
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Enviando...'; 
    submitButton.disabled = true; 

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    const texto = `Olá, meu nome é ${nome}. E-mail: ${email}. Assunto: ${assunto}. Mensagem: ${mensagem}`;
    const numero = "5561996069693"; // Seu número
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    
    window.open(url, '_blank');

    setTimeout(() => {
        submitButton.innerHTML = 'ENVIAR MENSAGEM <i class="fab fa-whatsapp ml-2"></i>'; 
        submitButton.disabled = false;
    }, 2000);
});