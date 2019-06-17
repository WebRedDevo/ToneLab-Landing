import React, {Component} from 'react'

class InitialScreen extends Component {

  render(){
    return(
      <section className="initial-screen">
        <div class="initial-screen__tonirovka">
          <div class="initial-screen__tonirovka_line">
            <button class="initial-screen__tonirovka_button"></button>
          </div>
          <div class="initial-screen__tonirovka_bg"></div>
        </div>
        <p class="initial-screen__tonirovka-text">
          <span>До тонировки</span>
        </p>

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


          <div class="initial-screen__slider_control container max-w__1280 pd-80">
            <div className="initial-screen__slider_buttons flex">
              <button className="initial-screen__slider_button button--prev flex j-c__c a-i__c"></button>
              <button className="initial-screen__slider_button button--next flex j-c__c a-i__c"></button>
            </div>

            <div class="initial-screen__slider-switches flex j-c__s-b">
              <button class="initial-screen__slider-switches_button active"><span>01</span></button>
              <button class="initial-screen__slider-switches_button"><span>02</span></button>
              <button class="initial-screen__slider-switches_button"><span>03</span></button>
              <button class="initial-screen__slider-switches_button"><span>04</span></button>
            </div>
          </div>

        </div>


      </section>
    )
  }


}


export default InitialScreen
