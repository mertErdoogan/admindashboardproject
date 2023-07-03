import Link from 'next/link';
import {
  HomeIcon,
  BookmarkIcon,
  AcademicCapIcon,
  CurrencyDollarIcon,
  ReceiptPercentIcon,
  AdjustmentsVerticalIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { routes } from '../utils/routes';

type NavItemT = {
  Icon: React.ElementType;
  title: string;
  link: string;
};

const Nav = () => {
  const { asPath } = useRouter();
  const data: NavItemT[] = [
    {
      title: 'Home',
      Icon: HomeIcon,
      link: routes.home,
    },
    {
      title: 'Course',
      Icon: BookmarkIcon,
      link: routes.course,
    },
    {
      title: 'Students',
      Icon: AcademicCapIcon,
      link: routes.students,
    },
    {
      title: 'Payment',
      Icon: CurrencyDollarIcon,
      link: routes.payment,
    },
    {
      title: 'Report',
      Icon: ReceiptPercentIcon,
      link: routes.report,
    },
    {
      title: 'Settings',
      Icon: AdjustmentsVerticalIcon,
      link: routes.settings,
    },
  ];
  return (
    <div className="block">
      {data.map(({ title, Icon, link }, index) => (
        <Link
          href={link}
          className={`flex items-center mb-2 w-full px-10 py-3 rounded ${
            asPath === link ? 'bg-yellow-500' : ''
          }`}
          key={index}
        >
          <>
            <Icon className="w-5 h-5" />
            <span className="text-sm ml-5 text-black font-medium">{title}</span>
          </>
        </Link>
      ))}
    </div>
  );
};

export default Nav;
