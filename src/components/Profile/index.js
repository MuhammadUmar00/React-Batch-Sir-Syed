import React from 'react'

export default class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    console.log(this.props.user, 'user form App component')
  }

  render () {
    let { user } = this.props
    return (
      <section>
        <p>Profile Component</p>
      </section>
    )
  }
}
