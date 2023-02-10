import PropTypes from 'prop-types';

export const FirstApp = ({ title, msg, name }) =>{

  return(
    <>
    <h1>{title}</h1>
    <p>{msg}</p>
    <p>My name is {name}</p>
    </>
  )
}

FirstApp.PropTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  title: 'No title',
  msg: 'No msg',
  name: 'No name'
}