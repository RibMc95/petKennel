import React from 'react';

class ChildComponent extends React.Component {
  render() {
    const { id, name, image, status, onAction } = this.props;

    return (
      <div className="child-card">
        <h2>{name}</h2>
        <img src={image} alt={name} style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
        <p>{status}</p>
        <button onClick={() => onAction(id)}> 
          {status === 'Happy' ? 'Make Me Sad' : 'Make Me Happy'} 
        </button>
      </div>
    );
  }
}

export default ChildComponent;
