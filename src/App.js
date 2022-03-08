import {Component} from 'react'
import './App.css'

// Replace your code here
class App extends Component {
  state = {inputValue: '', isShowInput: true}

  onChangeValue = event => {
    this.setState({inputValue: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({isShowInput: !prevState.isShowInput}))
  }

  render() {
    const {inputValue, isShowInput} = this.state

    const displayButtonText = isShowInput ? 'Save' : 'Edit'
    return (
      <>
        <div className="main-bg-container">
          <div className="card-container">
            <h1 className="main-text-heading">Editable Text Input</h1>
            <div className="display-in-lines">
              {isShowInput ? (
                <input
                  className="inputElement"
                  onChange={this.onChangeValue}
                  value={inputValue}
                  type="text"
                />
              ) : (
                <p className="display-text">{inputValue}</p>
              )}
              <button
                onClick={this.onClickButton}
                type="button"
                className="buttons"
              >
                {displayButtonText}
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App
