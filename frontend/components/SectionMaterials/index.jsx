import React, {Component} from 'react'

class SectionMaterials extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen:true
    }
  }

  render(){
    return(
      <section className="section--materials container max-w__1280 pd-80">
        <h2 className="section--materials__title">Используем материалы проверенных производителей</h2>
        <ul className="section--materials__list flex j-c__s-b">
          <li className="section--materials__list_item">
            <img src="images/lumar-logo.png" alt="" className="section--materials__list_logo"/>
          </li>
          <li className="section--materials__list_item">
            <img src="images/suncontrol-logo.png" alt="" className="section--materials__list_logo"/>
          </li>
          <li className="section--materials__list_item">
            <img src="images/ultravision-logo.png" alt="" className="section--materials__list_logo"/>
          </li>
        </ul>

      </section>
    )
  }
}


export default SectionMaterials
