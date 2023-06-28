function activeScroll (event){
    const menu = document.querySelector('.cabecalho');
    menu.classList.toggle('ativo', scrollY > 0);
    console.log(window.scrollY);
}

window.addEventListener('scroll', activeScroll);

function verificarSenha() {
    let password = document.getElementById('password').value;
    let confPassword = document.getElementById('passwordConfirm').value;

    if (password !== confPassword) {
        let borderColor = document.getElementById('passwordConfirm').style.borderColor;
        let conteudo = document.getElementById('lblPasswordConfirm').innerHTML = 'Senha Incorreta!!';
        document.getElementById('passwordConfirm').style.borderColor = '#f80000';
        document.getElementById('lblPasswordConfirm').innerHTML = 'Senha Incorreta!!';

    } else if (password === confPassword) {
        document.getElementById('passwordConfirm').style.borderColor = borderColor;
        document.getElementById('lblPasswordConfirm').innerHTML = conteudo;
    }
}
