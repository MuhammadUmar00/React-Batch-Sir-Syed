import React from 'react'
import { connect } from 'react-redux'

function Home () {
  return (
    <section>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <p>Home Component </p>
      </div>
    </section>
  )
}

export default connect(
  state => {
    console.log('State recieved to Home Component', state)
    return {}
  }, // map state to props
  props => {
    console.log('Props recieved to Home Component', props)
    return {}
  } // map dispatch to props
)(Home)
