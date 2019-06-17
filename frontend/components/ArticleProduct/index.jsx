import React, {Component} from 'react'

class ArticleProduct extends Component {

  render(){
    const product = this.props
    let classProduct = "article-product"
    if(product.active) classProduct += " active"

    return(
      <article className={classProduct}>
        <h3 className="article-product__title">{product.title}</h3>
        <img src={product.img} alt="" className="article-product__image"/>
        <p className="article-product__discription">Классическая тонировка отлично подходит для прохождения ТО. Является особенно популярной среди автомобилистов.</p>
        <button className="button button--border-red">выбрать</button>
      </article>
    )

  }


}


export default ArticleProduct
