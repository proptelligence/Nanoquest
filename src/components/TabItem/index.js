import './index.css'

const TabItem = props => {
  const {tabId, displayText, isActive, clickTabItem} = props

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }
  return (
    <li className="tabContainer">
      <button
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem