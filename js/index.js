import { Router } from "./router.js"

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

// Navbar

const btnLearnMore = document.querySelector('#btn-explore')
const linkHome = document.querySelector('.nav-home');
const linkUniverse = document.querySelector('.nav-universe');
const linkExploration = document.querySelector('.nav-exploration');

linkHome.addEventListener('click', function(){
  navHome()
})

linkUniverse.addEventListener('click', function(){
  navUniverse()
})

linkExploration.addEventListener('click', function(){
  navExploration()
})

if (btnLearnMore) {
  btnLearnMore.addEventListener('click', function() {
    navExploration()
  })
}

function navHome() {
  linkUniverse.classList.remove('active');
  linkExploration.classList.remove('active');
  linkHome.classList.add('active');
}

function navUniverse() {
  linkHome.classList.remove('active');
  linkExploration.classList.remove('active');
  linkUniverse.classList.add('active');
}

function navExploration() {
  linkHome.classList.remove('active');
  linkUniverse.classList.remove('active');
  linkExploration.classList.add('active');
}
