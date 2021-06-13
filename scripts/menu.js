export default function menu() {
    const menu_mobile = document.querySelector('[data-menu-mobile]')
    const itens_menu = document.querySelector('[data-itens_menu]').children
    const menu = document.querySelector('[data-itens_menu]')
    const array_menu = Array.from(itens_menu)

    console.log(menu)
    //muda de none pra block
    function myFunction() {
        array_menu.forEach(x => {
            x.classList.toggle('ativo')
            if (x.classList == "") {
                x.removeAttribute('class')
            }
        });
    }

    // cria a animação de X
    menu_mobile.addEventListener('click', () => {
        const filhos = Array.from(menu_mobile.children)
        filhos.forEach(e => {
            e.classList.toggle('ativo')
        })
    })

    if (window.innerWidth < 955) {
        menu_mobile.addEventListener('click', () => {
            menu.classList.toggle('ativo')
        })
    }

    menu_mobile.addEventListener('click', myFunction)

}
