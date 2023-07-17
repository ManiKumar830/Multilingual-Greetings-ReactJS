import './index.css'

const Language = props => {
  const {languageItem, selectedLanguage, isActive} = props
  const {buttonText, id, imageUrl, imageAltText} = languageItem

  const onclickButton = () => {
    selectedLanguage(id, imageAltText, imageUrl)
  }

  const bgColor = isActive ? 'button-color' : 'button'

  return (
    <li className="list-item">
      <button onClick={onclickButton} className={bgColor} type="button">
        {buttonText}
      </button>
    </li>
  )
}
export default Language
