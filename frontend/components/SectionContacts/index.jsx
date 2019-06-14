import React, {Component} from 'react'


class SectionContacts extends Component {

  render(){
    return(
      <section className="section--contacts bg-dark">
        <div className="container max-w__1280 pd-80 flex f-d__c a-i__c j-c__c">
          <h2 className="section--contacts__title">Тонировка в Красносельском и Кировском районах города.</h2>
          <div className="wrd-tabs">
            <div className="wrd-tabs__links">
              <a href="#tab-1" className="wrd-tabs__link active">Брестский бульвар 9А</a>
              <a href="#tab-2" className="wrd-tabs__link">ул. Маршала Говорова 37В</a>
            </div>
            <div className="wrd-tabs__tabs">
              <ul className="wrd-tabs__tab section--contacts__list">
                <li className="section--contacts__list_item flex">
                  <h6 className="section--contacts__list_item-title">Звонить по номеру</h6>
                  <p className="section--contacts__list_item-discription">985-71-62 </p>
                </li>
                <li className="section--contacts__list_item flex">
                  <h6 className="section--contacts__list_item-title">Писать на почту </h6>
                  <p className="section--contacts__list_item-discription">info@tonelab.ru </p>
                </li>
              </ul>
            </div>
          </div>
          <p className="section--contacts__discription">Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании форм </p>
          <img src="images/5-layers.png" className="xerota" alt=""/>
          <div className="section--contacts__social-icons flex a-i__c" ></div>
          <p className="section--contacts__discription">подписывайтесь на нас в соц.сетях, чтобы быть в курсе последних событий </p>
        </div>
      </section>
    )
  }
}


export default SectionContacts
