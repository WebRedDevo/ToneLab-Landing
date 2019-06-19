import React, {Component} from 'react'

class Header extends Component {
  constructor(props){
    super(props);

    this.state = {
      isOpen:true
    };

  }
  render(){
    const {svgSprite} = this.props



    return(
      <header className="header flex j-c__s-b a-i__c container max-w__1280 pd-80">
        <div className="header__left flex a-i__c">
          <div className="header__logo">
            <img src="images/tonelab_logo.png" alt=""/>
          </div>
          <nav className="header__nav flex a-i__c">
            <ul className="header__list flex">
              <li className="header__list_item">
                <a className="header__list_link b-line" href="#">Акции</a>
              </li>
              <li className="header__list_item">
                <a className="header__list_link b-line" href="#">Отзывы</a>
              </li>
              <li className="header__list_item">
                <a className="header__list_link b-line" href="#">Контакты</a>
              </li>
            </ul>
          </nav>
          <div className="header__social-icons flex a-i__c" ></div>
        </div>
        <div class="header__telephones flex f-d__c j-c__f-e">
          <a class="header__telephone b-line" href="tel:926-37-53">926-37-53</a>
          <a class="header__telephone b-line" href="tel:985-71-62">985-71-62</a>
        </div>
      </header>
    )



  }
}


export default Header
