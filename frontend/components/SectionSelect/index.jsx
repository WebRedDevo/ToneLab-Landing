import React, {Component} from 'react'
import ArticleProduct from '../ArticleProduct'

class SectionSelect extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen:true
    }
  }

  render(){
    return(
      <section className="section--select container flex a-i__c j-c__s-b">
        <div className="section--select__slider ">
          <div class="section--select__slider_wrap flex a-i__c">
            <ArticleProduct title="Классическая тонировка" img="images/car-ton-1.png"/>
            <ArticleProduct title="Атермальная тонировка" img="images/car-ton-2.png" />
            <ArticleProduct title="Классическая тонировка" img="images/car-ton-1.png" active/>
          </div>
        </div>
        <div className="section--select__info flex f-d__c a-i__f-e">
          <h2 className="section--select__title">Выберите вид тоировки</h2>
          <p className="section--select__discription">Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании форм </p>
          <button className="button button--bg-red">заказать тонировку</button>
        </div>


      </section>
    )
  }
}


export default SectionSelect