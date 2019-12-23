import React from 'react'

const Loading = () => {
  return (
    <div class="d-flex justify-content-center" style={{ height: '100vh' }}>
      <h3>LOADING YOUR MUSIC 🎙 </h3>
      <div class="spinner-border text-info" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Loading
