// @ts-nocheck
import SectionTitle from "../../SectionTitle/SectionTitle";

const MyParcels = () => {
  return (
    <div>
      <SectionTitle heading={"my parcels"}></SectionTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Parcel Type</th>
                <th>Requested Delivery Date</th>
                <th>Approximate Delivery Date</th>
                <th>Delivery Men ID</th>
                <th>Booking Status</th>
                <th>
                  <button>Update</button>
                </th>
                <th>
                  <button>Cancel</button>
                </th>
                <th>
                  <button>Review</button>
                </th>
                <th>
                  <button>Pay</button>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyParcels;
