import React, { ComponentType } from 'react';
import { Route, Navigate, RoutesProps, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface PrivateRouteProps extends RoutesProps {
  component: ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const user = useAuth();

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         user?.user ? <Component {...props} /> : <Navigate to="/login" />
//       }
//     />
//   );

  if(!user?.user){
    return <Navigate to="/login" />
  }

  return <Outlet/>
};

export default PrivateRoute;
