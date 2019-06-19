import svgSprite from './inc/svg-sprite';



import React from 'react'
import {render} from 'react-dom'
import App from '../components/App'

render(<App/>, document.getElementById('root'))


const header__socialIcons = document.querySelector('.header__social-icons');
const header__telephone = document.querySelectorAll('.header__telephone');
const slider_button = document.querySelectorAll('.initial-screen__slider_button');
const sliderMaterial_button = document.querySelectorAll('.section--select__slider_button');
let masSocialIcon = []

masSocialIcon.push({
  href:'https://vk.com/tonelab',
  class:'header__social_icon',
  target:'_blank',
  svg:'<svg class="icon icon-icon-vk"><use xlink:href="#icon-icon-vk"></use></svg>'
})
masSocialIcon.push({
  href:'#',
  class:'header__social_icon',
  target:'_blank',
  svg:'<svg class="icon icon-icon-instagram"><use xlink:href="#icon-icon-instagram"></use></svg>'
})
masSocialIcon.push({
  href:'#',
  class:'header__social_icon',
  target:'_blank',
  svg:'<svg class="icon icon-icon-youtube"><use xlink:href="#icon-icon-youtube"></use></svg>'
})
masSocialIcon.push({
  href:'#',
  class:'header__social_icon',
  target:'_blank',
  svg:'<svg class="icon icon-icon-odnoklassniki"><use xlink:href="#icon-icon-odnoklassniki"></use></svg>'
})
masSocialIcon.push({
  href:'#',
  class:'header__social_icon',
  target:'_blank',
  svg:'<svg class="icon icon-icon-share"><use xlink:href="#icon-icon-share"></use></svg>'
})


for(let i = 0, max = masSocialIcon.length; i < max; i++){
  insertSVG(masSocialIcon[i], header__socialIcons)
}
for(let i = 0, max = header__telephone.length; i < max; i++){
  insertSVG({
    position: 'left',
    svg:'<svg class="icon icon-call-answer"><use xlink:href="#icon-call-answer"></use></svg>'
  },   header__telephone[i])

}
for(let i = 0, max = slider_button.length; i < max; i++){
  insertSVG({
    position: 'left',
    svg:'<svg class="icon icon-arrow-next"><use xlink:href="#icon-arrow-next"></use></svg>'
  },   slider_button[i])

}
for(let i = 0, max = sliderMaterial_button.length; i < max; i++){
  insertSVG({
    position: 'left',
    svg:'<svg class="icon icon-arrow-next"><use xlink:href="#icon-arrow-next"></use></svg>'
  },   sliderMaterial_button[i])

}

function insertSVG(item, root) {
  const a = document.createElement('a');
  if(item.class) a.className = item.class;
  if(item.href) a.href=item.href
  if(item.target) a.target=item.target
  a.innerHTML = item.svg;
  if(item.position === 'left') {
    root.prepend(a);
  }else{
    root.appendChild(a);
  }


}



(function slider(){
  const root = document;
  const selectSlider = root.querySelector('.section--select__slider');
  const selectSliderWrap = root.querySelector('.section--select__slider_wrap');


  let selectSliderRight = selectSlider.getBoundingClientRect().right;
  let selectSliderWrapRight = selectSliderWrap.getBoundingClientRect().right;
  const dif = selectSliderWrapRight - selectSliderRight;


  selectSliderWrap.style.transform = "translateX( -241px)"

}())


const button = document.getElementsByClassName('initial-screen__tonirovka_button')[0];

button.addEventListener("mousedown", function handleLineTint(e){
  const bg = document.getElementsByClassName('initial-screen__tonirovka_bg')[0];

  let startY = e.clientY;

  document.mousemove = bgMove
  document.mouseup = () => {
    console.log('muose up')
    document.mousemove = null;
  }

  function bgMove(e){
    let dif = startY - e.clientY;
    let heightBg = bg.offsetHeight + dif ;
    console.log("heightBg")
    bg.style.height = heightBg + "px"
  }
})

svgSprite(window, document);
