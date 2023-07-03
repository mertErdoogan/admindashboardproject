import Header from '../Header';

type LayoutPropsT = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutPropsT) => {
  return (
    <div className="h-screen flex overflow-hidden">
      <div className="w-1/5 h-full">
        <Header />
      </div>
      <div className="w-4/5 h-full p-7">{children}</div>
    </div>
  );
};

export default Layout;
