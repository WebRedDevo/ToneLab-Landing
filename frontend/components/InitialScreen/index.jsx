import React, {Component} from 'react'

class InitialScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen:true
    }
  }

  render(){
    return(
      <section className="initial-screen">
        <div class="initial-screen__tonirovka"></div>

        <div className="initial-screen__slide">
          <img className="initial-screen__slide_image" src="images/initial-screen-bg.jpg" alt="" />
          <div className="initial-screen__slide_info container max-w__1280 pd-80">
              <p className="initial-screen__slide_sale">Специальное предложение</p>
              <h2 className="initial-screen__slide_title">Каждый понедельник скидка</h2>
              <p className="initial-screen__slide_discription">Разнообразный и богатый опыт постоянное информационно-пропагандистское </p>
              <div className="initial-screen__slide_buttons flex">
                <button className="button button--bg-red">оставить заявку</button>
                <button className="button button--border-red">заказать звонок</button>
              </div>
          </div>
        </div>

        <div className="initial-screen__slider_buttons">
          <button className="initial-screen__slider_button button--prev"></button>
          <button className="initial-screen__slider_button button--next"></button>
        </div>

      </section>
    )
  }
}


export default InitialScreen
