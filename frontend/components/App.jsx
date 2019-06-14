import React from 'react'
import Header from './Header'
import InitialScreen from './InitialScreen'
import SectionMaterials from './SectionMaterials'
import SectionSelect from './SectionSelect'
import SectionContacts from './SectionContacts'





const masData = [
  {
    "title": "title news 1"
  }
]

function App(){
  return(
    <div>
      <Header article={masData[0]}  flag freg={true}/>
      <main>
      <InitialScreen />
      <SectionMaterials />
      <SectionSelect />
      <SectionContacts />
      </main>
    </div>
  )
}


export default App
