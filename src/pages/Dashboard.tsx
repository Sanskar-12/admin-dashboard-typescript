import { FaRegBell } from "react-icons/fa";
import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import userimg from "../assets/userpic.png";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import data from "../assets/data.json";
import { BarChart, DoughnutData } from "../components/Charts";
import {BiMaleFemale} from "react-icons/bi"
import DashboardTable from "../components/DashboardTable";

const Dashboard = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img src={userimg} alt="User" />
        </div>
        <section className="widgetcontainer">
          <WidgetItem
            heading="Revenue"
            value={340000}
            percent={40}
            color="rgb(0,115,255)"
            amount={true}
          />
          <WidgetItem
            heading="Users"
            value={400}
            percent={-14}
            color="rgb(0,198,202)"
            amount={false}
          />
          <WidgetItem
            heading="Transaction"
            value={2300}
            percent={80}
            color="rgb(255,196,0)"
            amount={false}
          />
          <WidgetItem
            heading="Products"
            value={1000}
            percent={30}
            color="rgb(76,0,255)"
            amount={false}
          />
        </section>

        <section className="graphContainer">
          <div className="revenueChart">
            <h2>Revenue & Transaction</h2>
            <BarChart
              data_2={[300, 144, 433, 655, 237, 755, 190]}
              data_1={[200, 444, 343, 556, 778, 455, 990]}
              title_1="Revenue"
              title_2="Transaction"
              bgColor_1="rgb(0,115,255)"
              bgColor_2="rgba(53,162,235,0.8)"
            />
          </div>
          <div className="dashboardCategories">
            <h2>Inventory</h2>
            <div>
              {data.categories.map((i) => (
                <CategoryItem
                  key={i.heading}
                  heading={i.heading}
                  value={i.value}
                  color={`hsl(${i.value * 4},${i.value}%,50%)`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="transactionContianer">
          <div className="genderChart">
            <h2>Gender Ratio</h2>
            <DoughnutData 
             labels={["Female", "Male"]}
             data={[12, 19]}
             backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}
             cutout={90}
            />
            <p><BiMaleFemale/></p>
          </div>
          <DashboardTable data={data.transaction}/>
        </section>
      </main>
    </div>
  );
};

interface widgetProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount,
}: widgetProps) => {
  return (
    <article className="widget">
      <div className="widgetInfo">
        <p>{heading}</p>
        <h4>{amount ? `$${value}` : value}</h4>
        {percent > 0 ? (
          <span className="green">
            <HiTrendingUp /> +{percent}%
          </span>
        ) : (
          <span className="red">
            <HiTrendingDown /> {percent}%
          </span>
        )}
      </div>

      <div
        className="widgetCircle"
        style={{
          background: `conic-gradient( 
        ${color} ${(Math.abs(percent) / 100) * 360}deg,
        rgb(255,255,255) 0
        `,
        }}
      >
        <span style={{ color: color }}>{percent}%</span>
      </div>
    </article>
  );
};

interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({ color, value, heading }: CategoryItemProps) => {
  return (
    <div className="categoryItem">
      <h5>{heading}</h5>
      <div>
        <div
          style={{
            backgroundColor: color,
            width: `${value}%`,
          }}
        ></div>
      </div>
      <span>{value}%</span>
    </div>
  );
};

export default Dashboard;
