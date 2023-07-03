import Dashboard from '../components/pages/home/Dashboard';
import withAuth from '../hoc/withAuth';
import {
  AcademicCapIcon,
  BookmarkIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

export type DashboardDataT = {
  title: string;
  Icon: any;
  value: string;
  bgColor: string;
  color: string;
  textColor?: string;
};

const Home = () => {
  const dashboardData: DashboardDataT[] = [
    {
      title: 'Students',
      Icon: AcademicCapIcon,
      value: '243',
      bgColor: 'bg-blue-200/30',
      color: 'blue-500',
    },
    {
      title: 'Course',
      Icon: BookmarkIcon,
      value: '13',
      bgColor: 'bg-pink-200/30',
      color: 'yellow-500',
    },
    {
      title: 'Payments',
      Icon: CurrencyDollarIcon,
      value: '556,000₺',
      bgColor: 'bg-yellow-200/30',
      color: 'yellow-500',
    },
    {
      title: 'Users',
      Icon: UserCircleIcon,
      value: '3',
      bgColor: 'bg-gradient-to-r from-yellow-500 to-yellow-300',
      color: 'white',
      textColor: 'white',
    },
  ];
  return (
    <div className="text-yellow-500 text-4xl font-bold">
      <Dashboard data={dashboardData} />
    </div>
  );
};

export default withAuth(Home);
