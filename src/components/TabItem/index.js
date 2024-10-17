// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItems, updateState, isActive} = props
  const {displayText, tabId} = tabItems

  const activeStatus = isActive ? 'appliedCss' : ''
  const clikced = () => {
    updateState(tabId)
  }

  return (
    <li>
      <button className={`button ${activeStatus}`} onClick={clikced}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
