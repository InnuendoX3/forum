import React from 'react'

/**
 * For my information:
 * props.history only appears if the component
 * has been passed as prop:  component={}
 * (Dynamic routing) when routing
 */

// TODO: Send responses // Props for history
export default function ResponseForm(props) {

  function tempHandleSubmitTestHistory() {
    props.history.push('/register')
  }

  return (
    <form onSubmit={tempHandleSubmitTestHistory}>
      <input type="text" name="" id="" placeholder="Response // TODO!"/>
      <button>Send</button>
    </form>
  )
}
