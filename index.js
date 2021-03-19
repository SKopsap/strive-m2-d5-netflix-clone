import { HeaderComponent } from './components/HeaderComponent.js'

function App() {

  return /*html*/ `
    ${HeaderComponent()} 
    <main id="main-wrapper">
    
    <main>
    `
}

document.getElementById('root').innerHTML = App()