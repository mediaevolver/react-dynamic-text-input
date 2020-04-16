import React, { useState, useEffect, useRef } from "react"

function App() {
  const ref = useRef()

  const [inputValue, setInputValue] = useState('Hello World')
  const [displayState, setDisplayState] = useState(true)
  const [activityState, setActivityState] = useState(true)

  const handleUpdateText = (e) => {
    const updatePromise = new Promise((resolve, reject) => {
      if (e.key === 'Enter') {
        let valueToUpdate = e.currentTarget.value
        resolve(valueToUpdate)
      } else if (e.key === 'z') {
        reject()
      }
    })

    updatePromise.then((valueToUpdate) => {
      setActivityState('...')
      setTimeout(() => updateTest(valueToUpdate), 1000)
    }, () => {
      setActivityState('...')
      setTimeout(() => failTest(), 1000)
    })
  }


  const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) { return }
        handler(event)
      }
      document.addEventListener('mousedown', listener)
      return () => { document.removeEventListener('mousedown', listener) }
    }, [ref, handler]
    )
  }

  useOnClickOutside(ref, () => {
    if (ref.current.value !== '') {
      setActivityState('...')
      setTimeout(() => updateTest(ref.current.value), 1000)
    }
  })

  const failTest = () => {
    setActivityState('Oops! something has gone terribly wrong!')
    setTimeout(() => setActivityState(null), 1000)
    setInputValue('Hello World')
    setDisplayState(true)
  }

  const updateTest = (valueToUpdate) => {
    setInputValue(valueToUpdate)
    setDisplayState(true)
    setActivityState('Success')
    setTimeout(() => setActivityState(null), 1000)
  }

  return (
    <div className="App">
      <div className="form-group">
        {!displayState
          ? <input
            data-testid="text-input"
            type="text"
            onKeyPress={handleUpdateText}
            ref={ref}
          />
          : <h3
            data-testid="text-printout"
            onClick={() => { setDisplayState(false) }}>
            {inputValue}
          </h3>
        }
        {activityState ? activityState : null}
      </div>
    </div>
  )
}

export default App