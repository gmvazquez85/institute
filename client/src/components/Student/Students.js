import React, { Component } from 'react';

class Students extends Component {
  render() {
    let { students } = this.props;

    students = students ? students : [];

    return (
      <div>
        <ul>
          {students.length <= 0
            ? 'NO DB ENTRIES YET'
            : students.map(dat => (
                <li style={{ padding: '10px' }} key={dat.id}>
                  <span style={{ color: 'gray' }}> id: </span> {dat.id} <br />
                  <span style={{ color: 'gray' }}> Name: </span> {dat.name} <br />
                  {/*< button onClick={() => this.edit(dat.id)}>EDIT</button> <br />*/}
                  {/*< button onClick={() => this.deleteFromDB(dat.id)}>DELETE</button> <br />*/}
                </li>
              ))}
        </ul>
      </div>
    );
  }
}

export default Students;
