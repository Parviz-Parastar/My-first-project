
const $ = document;
const navElem = $.querySelector("#nav")
const navTop = $.querySelector('.navTop')
const navBottom = $.querySelector('.navBottom')
const topMenu = $.querySelector('.topMenu')
const search = $.querySelector('.search')
const logoImage = $.getElementById('logoImage')


$.addEventListener('scroll', () => {
    if ($.documentElement.scrollTop > 100) {
        search.style.display = 'none'
        navElem.classList.add('navSticky')
        topMenu.classList.add("moveTopMenuPosition")

    } else {
        search.style.display = 'flex'
        navElem.classList.remove('navSticky')
        topMenu.classList.remove("moveTopMenuPosition")
    }

})




