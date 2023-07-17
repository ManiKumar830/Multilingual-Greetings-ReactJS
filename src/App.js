import {Component} from 'react'
import Language from './components/Language'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    imageUrl: languageGreetingsList[0].imageUrl,
    imageAltText: languageGreetingsList[0].imageAltText,
    id: languageGreetingsList[0].id,
  }

  selectedLanguage = (idEl, imageAltTextEl, imageUrlEl) => {
    this.setState({
      imageUrl: imageUrlEl,
      imageAltText: imageAltTextEl,
      id: idEl,
    })
  }

  render() {
    const {imageAltText, imageUrl, id} = this.state

    return (
      <div className="bg-container">
        <h1 className="main-heading">Multilingual Greetings</h1>
        <ul className="ul-list">
          {languageGreetingsList.map(eachItem => (
            <Language
              selectedLanguage={this.selectedLanguage}
              key={eachItem.id}
              languageItem={eachItem}
              isActive={eachItem.id === id}
            />
          ))}
        </ul>
        <img className="imageEl" src={imageUrl} alt={imageAltText} />
      </div>
    )
  }
}

export default App
