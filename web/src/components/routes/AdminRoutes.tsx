import { Navigate, Outlet } from 'react-router-dom';
import { useHookstate } from '@hookstate/core';
import globalState from '../../state';

const AdminRoutes = () => {
  const state = useHookstate(globalState);
  const { user } = state.get();

  if (!user?.id) {
    window.open(import.meta.env.VITE_DISCORD_AUTH, '_self');
    return <></>;
  }

  return user?.admin ? <Outlet /> : <Navigate to="/" />;
};

export default AdminRoutes;
