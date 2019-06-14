import svgSprite from './inc/svg-sprite';



import React from 'react'
import {render} from 'react-dom'
import App from '../components/App'

render(<App/>, document.getElementById('root'))


const header__socialIcons = document.querySelector('.header__social-icons');
const header__telephone = document.querySelectorAll('.header__telephone');
let masSocialIcon = []

masSocialIcon.push({
  href:'#',
  class:'header__social_icon',
  svg:'<svg class="icon icon-icon-vk"><use xlink:href="#icon-icon-vk"></use></svg>'
})
masSocialIcon.push({
  href:'#',
  class:'header__social_icon',
  svg:'<svg class="icon icon-icon-instagram"><use xlink:href="#icon-icon-instagram"></use></svg>'
})
masSocialIcon.push({
  href:'#',
  class:'header__social_icon',
  svg:'<svg class="icon icon-icon-youtube"><use xlink:href="#icon-icon-youtube"></use></svg>'
})
masSocialIcon.push({
  href:'#',
  class:'header__social_icon',
  svg:'<svg class="icon icon-icon-odnoklassniki"><use xlink:href="#icon-icon-odnoklassniki"></use></svg>'
})
masSocialIcon.push({
  href:'#',
  class:'header__social_icon',
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

function insertSVG(item, root) {
  const a = document.createElement('a');
  if(item.class) a.className = item.class;
  if(item.href) a.href=item.href
  a.innerHTML = item.svg;
  if(item.position === 'left') {
    root.prepend(a);
  }else{
    root.appendChild(a);
  }


}


svgSprite(window, document);
