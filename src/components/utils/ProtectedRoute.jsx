import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute = ({ redirectPath }) => {
  // cargamos el estado global. 
  /* const { userFirebase } = useAuthContext(); */
  /* const isActive = !!userFirebase; */
  const isActive = true
  if (!isActive) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
