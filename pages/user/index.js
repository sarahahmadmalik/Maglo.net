import { useRouter } from 'next/router';
import SellerDashboard from './SellerDashboard';
import BuyerDashboard from './BuyerDashboard';

const UserTypeDashboard = () => {
  const router = useRouter();
  const { role } = router.query;

  if (role === 'seller') {
    return <SellerDashboard />;
  } else if (role === 'buyer') {
    return <BuyerDashboard />;
  } else {
    return <div>User type not found</div>;
  }
};

export default UserTypeDashboard;
