import React, { Component } from 'react';

class Overview extends Component {
  constructor() {
    super()

    this.state = {
        data: ''
    }

    this.editField = this.editField.bind(this);
  }

  editField = (e) => {
    this.setState({
        data: e.target.value,
    });
  };

  render() {
    if (this.props.isEditBtnShow) {
      return (
        <div>
          {this.props.tasks.map((task) => {
                 return (
                  <p key={task.id}>
                    {task.count}.
                    <input 
                    onChange={this.editField}
                    defaultValue={task.text}
                    type="text"
                    />
                    <span>
                      {' '}
                      <i
                        onClick={() => this.props.onClick(task.id)} 
                        className="fa-solid fa-trash"></i>
                    </span> 
                      <span className='block ml-12 bg-indigo-500'>
                      <i
                        onClick={e => this.props.submitEdits(task.id, this.state.data)}
                        className="fa fa-paper-plane" aria-hidden="true"></i>
                    </span>
                  </p>
                );
          })}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.tasks.map((task) => {
                 return (
                  <p key={task.id}>
                    {task.count}.{task.text}
                    <span>
                      {' '}
                      <i
                        onClick={() => this.props.onClick(task.id)} 
                        className="fa-solid fa-trash"></i>
                    </span> 
                      <span className='block ml-12 bg-indigo-500'>
                       <i
                         onClick={this.props.showEditBtn} 
                         className="fas fa-edit"></i>
                    </span>
                  </p>
                );
          })}
        </div>
      );
    }
  }
}

export default Overview;
