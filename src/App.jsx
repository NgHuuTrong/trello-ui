import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import AppLayout from './ui/AppLayout';
import Example from './pages/Example';
import Templates from './pages/Templates';
import Authenticate from './pages/Authentication';
import Boards from './pages/Boards';
import Home from './pages/Home';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import WorkspaceHome from './pages/WorkspaceHome';
import WorkspaceMember from './pages/WorkspaceMember';
import Settings from './pages/Settings';
import { DarkModeProvider } from './context/DarkModeContext';
import BoardDetailLayout from './features/Boards/layout/BoardDetailLayout';
import ProtectedRoute from './ui/ProtectedRoute';
import { Toaster } from 'react-hot-toast';
import TemplatesType from './pages/TemplatesType';
import WebsocketProvider from './context/WebsocketContext';
import InviteWorkSpacePage from './pages/Invite/InviteWorkSpacePage';
import InviteBoardPage from './pages/Invite/InviteBoardPage';
import WorkspaceSettings from './pages/WorkspaceSettings';
import AdminAuthenticate from './pages/AdminAuthenticate';
import ManageUser from './features/Admin/ManageUser';
import ManageTemplate from './features/Admin/ManageTemplate';
import Admin from './pages/Admin';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 1000,
    },
  },
});

function App() {
  return (
    <WebsocketProvider>
      <DarkModeProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <BrowserRouter>
            <Routes>
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="boards" />} />
                <Route path="example" element={<Example />} />
                <Route path="templates" element={<Templates />} />
                <Route path="templates/:templateType" element={<TemplatesType />} />
                <Route path="boards" element={<Boards />} />
                <Route path="home" element={<Home />} />
                <Route path="w/:workspaceId/home" element={<WorkspaceHome />} />
                <Route path="w/:workspaceId/members" element={<WorkspaceMember />} />
                <Route path="w/:workspaceId/settings" element={<WorkspaceSettings />} />
              </Route>
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout headerOnly />
                  </ProtectedRoute>
                }
              >
                <Route path="b/:boardId/board-detail" element={<BoardDetailLayout />} />
                <Route path="/b/:boardId/c/:cardId/card-detail" element={<BoardDetailLayout />} />
              </Route>
              <Route path="authenticate" element={<Authenticate />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="reset-password/:token" element={<ResetPassword />} />
              <Route
                path="u/settings"
                element={
                  <ProtectedRoute>
                    <Settings />
                  </ProtectedRoute>
                }
              />
              <Route path="w/invite/:token" element={<ProtectedRoute><InviteWorkSpacePage /></ProtectedRoute>} />
              <Route path="b/invite/:token" element={<ProtectedRoute><InviteBoardPage /></ProtectedRoute>} />
              <Route path="admin/authenticate" element={<AdminAuthenticate />} />
              <Route
                path="admin"
                element={
                  <ProtectedRoute>
                    <Admin />
                  </ProtectedRoute>
                }
              >
                <Route path="users" element={<ManageUser />} />
                <Route path="templates" element={<ManageTemplate />} />
              </Route>
            </Routes>
          </BrowserRouter>
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: '8px' }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 4000,
              },
              style: {
                fontSize: '16px',
                maxWidth: '500px',
                padding: '16px 24px',
                backgroundColor: 'var(--color-grey-0)',
                color: 'var(--color-grey-700)',
              },
            }}
          />
        </QueryClientProvider>
      </DarkModeProvider>
    </WebsocketProvider>
  );
}

export default App;
