import Booking from '../views/pages/Booking';
import Detail from '../views/pages/Detail';
import Favorite from '../views/pages/Favorite';
import Home from '../views/pages/Home';

const Routes = {
  '/': Home,
  '/home': Home,
  '/favorite': Favorite,
  '/booking': Booking,
  '/detail/:id': Detail,
};

export default Routes;
