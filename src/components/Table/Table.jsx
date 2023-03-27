// Styles
import s from './Table.module.scss';

// API
import tableData from 'api/api';

export default function Table() {
  return (
    <>
      <table className={s.table}>
        <thead className={s.table_head}>
          <tr>
            <th className={s.title}>Name</th>
            <th className={s.title}>Protocol</th>
            <th className={s.title}>Port</th>
            <th className={s.title}>Rule</th>
            <th className={s.title}>Attached Groups</th>
            <th className={s.title}>Status</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(item => {
            return (
              <tr key={item.id}>
                <td className={s.item}>{item.name}</td>
                <td className={s.item}>{item.protocol}</td>
                <td className={s.item}>{item.port}</td>
                <td className={s.item}>{item.rule}</td>
                <td className={s.item}>{item.attachedGroups}</td>
                <td className={s.item}>{item.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
