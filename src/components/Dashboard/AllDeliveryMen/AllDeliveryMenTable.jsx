/* eslint-disable react/prop-types */
// @ts-nocheck
const AllDeliveryMenTable = ({ deliveryMen, i }) => {
  return (
    <tr>
      <th>{i + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold">{deliveryMen.name}</div>
          </div>
        </div>
      </td>
      <td>{deliveryMen.phoneNumber}</td>
      <td>0</td>
      <td>0</td>
    </tr>
  );
};

export default AllDeliveryMenTable;
