import { useEffect } from 'react';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  const HOC = (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const loggedIn = localStorage.getItem('loggedIn');
      if (!loggedIn || loggedIn !== 'true') {
        router.push('/login');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default withAuth;
