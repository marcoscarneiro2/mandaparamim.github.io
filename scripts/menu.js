export default function menu() {
    const menu_mobile = document.querySelector('[data-menu-mobile]')
    const itens_menu = document.querySelector('[data-itens_menu]').children
    const menu = document.querySelector('[data-itens_menu]')
    const array_menu = Array.from(itens_menu)
    const tipos = ['click']

    function myFunction() {
        // cria a animação de X
        const hambuguer = Array.from(menu_mobile.children)

        hambuguer.forEach(e => {
            e.classList.toggle('ativo')
        })

        // adiciona ao Ul a classe ativo
        menu.classList.toggle('ativo')

        //muda de none pra block
        const menuLink = array_menu.map(x => {
           x.classList.toggle('ativo')
            return x.firstElementChild
        });

        //remove tudo qnd clica em um link
        tipos.forEach((tipo) => {
            menuLink.forEach(a => {
                a.addEventListener(tipo, (e) => {
                    const x = Array.from(e.target.parentNode.children)
                    x.forEach((i) => {
                        i.classList.remove('ativo')
                    })
                    menu.classList.remove('ativo')
                    hambuguer.forEach(e => {
                        e.classList.remove('ativo')
                    })
                })
            })
        })

    }

    tipos.forEach(tipo => {
        menu_mobile.addEventListener(tipo, myFunction)
    })
}
