import { Navigate, Route, Routes } from "react-router";
import GlobalStyles from "./design/GlobalStyles";
import { Toaster } from "react-hot-toast";
import AppLayout from "./layouts/AppLayout";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import NewBooking from "./pages/NewBooking";
import BookingDetail from "./pages/BookingDetail";
import CheckIn from "./pages/CheckIn";
import CheckOut from "./pages/CheckOut";
import Cabins from "./pages/Cabins";
import CabinForm from "./pages/CabinForm";
import CancelledBookings from "./pages/CancelledBookings";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Users from "./pages/Users";
import UserForm from "./pages/UserForm";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      {/* <QueryClientProvider client={queryClient}> */}
      {/* <ThemeProvider theme={theme}> */}
      <GlobalStyles />
      {/* <AuthProvider> */}
      {/* <SettingsProvider> */}
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/bookings/new" element={<NewBooking />} />
          <Route path="/bookings/:bookingId" element={<BookingDetail />} />
          <Route path="/check-in/:bookingId" element={<CheckIn />} />
          <Route path="/check-out/:bookingId" element={<CheckOut />} />
          <Route path="/cabins" element={<Cabins />} />
          <Route path="/cabins/new" element={<CabinForm />} />
          <Route path="/cabins/:cabinId/edit" element={<CabinForm />} />
          <Route path="/cancelled" element={<CancelledBookings />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/new" element={<UserForm />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* </SettingsProvider> */}
      {/* </AuthProvider> */}
      <Toaster position="top-right" />
      {/* </ThemeProvider> */}
      {/* </QueryClientProvider> */}
    </>
  );
}

export default App;
