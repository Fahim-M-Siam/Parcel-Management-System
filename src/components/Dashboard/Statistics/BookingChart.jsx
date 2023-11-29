// @ts-nocheck
/* eslint-disable react/prop-types */
import ReactApexChart from "react-apexcharts";

const BookingChart = ({ bookings }) => {
  const countByDate = bookings?.reduce((countMap, booking) => {
    const { bookingDate } = booking;
    countMap[bookingDate] = (countMap[bookingDate] || 0) + 1;
    return countMap;
  }, {});

  const chartData = {
    options: {
      xaxis: {
        categories: Object.keys(countByDate),
      },
    },
    series: [
      {
        name: "Bookings",
        data: Object.values(countByDate),
      },
    ],
  };
  return (
    <div>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default BookingChart;
