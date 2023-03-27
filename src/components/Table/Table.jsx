import React from 'react';

import tableData from 'api/api';

export default function Table() {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Protocol</th>
          <th>Port</th>
          <th>Rule</th>
          <th>Attached Groups</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map(item => {
          return (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.protocol}</td>
              <td>{item.port}</td>
              <td>{item.rule}</td>
              <td>{item.attachedGroups}</td>
              <td>{item.status}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
