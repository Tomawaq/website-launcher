import { Controller } from '@hotwired/stimulus'
import '../styles/navigation.scss'

export default class extends Controller {
    connect() {
        // Close menu when click elsewhere
        const navigationSelector = '[data-controller="navigation"]'
        const navigation = document.querySelector(navigationSelector)
        const toggleMenuBtn = navigation.querySelector('input#menu')
        document.addEventListener('click', e => {
            if (toggleMenuBtn.checked == false) return
            if (e.target.matches(`${navigationSelector}, ${navigationSelector} *`) == false)
                toggleMenuBtn.checked = false
        })
    }
}
