import React from 'react';

import {CImg} from '@coreui/react';

const UserProgressTable = ({ headers, usersData }) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr className="text-capitalize align-middle text-center">
          {headers.map((item, index) => <th key={index}>{item}</th>)}
        </tr>
      </thead>
      <tbody>
        {usersData.map(({ avatar, name, date, progress }, index) => (
          <tr key={index}>
            <td className="align-middle text-center">               
                <CImg
                    object="true"
                    src={avatar}
                    className="rounded-circle"
                    style={{ width: 40, height: 40 }}
                />
            </td>
            <td className="align-middle text-center">{name}</td>
            <td className="align-middle text-center">{date}</td> 
            <td className="align-middle text-center">{progress}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserProgressTable;