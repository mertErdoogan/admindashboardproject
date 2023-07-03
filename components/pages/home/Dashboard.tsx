import { DashboardDataT } from '../../../pages';

const Dashboard = ({ data }: { data: DashboardDataT[] }) => {
  return (
    <div className="grid grid-cols-4 gap-8">
      {data.map(({ title, Icon, value, bgColor, textColor, color }, index) => (
        <div
          key={`${title} + ${index}`}
          className={`p-5 rounded flex-1 ${bgColor}`}
        >
          <div className={`w-12 h-12  flex text-${color}`}>
            <Icon className={'flex'} />
          </div>
          <span
            className={`text-sm font-medium ${
              textColor ? `text-${textColor}` : 'text-gray-400'
            }`}
          >
            {title}
          </span>
          <div className="block text-right">
            <span className="text-black text-3xl font-bold">{value}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
