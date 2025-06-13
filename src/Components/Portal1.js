import ReactDOM from 'react-dom'

function Portal1() {
  return ReactDOM.createPortal (
    <div>
      Portal1 calling
    </div>,
    document.getElementById('root2')
  )
}

export default Portal1
