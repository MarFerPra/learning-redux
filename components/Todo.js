import React, { PropTypes } from 'react'

const Todo = ({ onCLick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'libe-through' : none
    }}
  >
  {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completes: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
