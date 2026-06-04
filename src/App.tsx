import { Route, Routes } from "react-router";
import GlobalStyles from "./styles/GlobalStyles";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      {/* <QueryClientProvider client={queryClient}> */}
      {/* <ThemeProvider theme={theme}> */}
        <GlobalStyles />
          {/* <AuthProvider> */}
            {/* <SettingsProvider> */}
              <Routes>
                <Route path="/login" element={<>Login</>}/>
                {/* <Route element={<AppLayout />}> */}
                  <Route path="/dashboard" element={<>Dashboard</>}/>
                  <Route path="/bookings" element={<>Bookings</>}/>
                  <Route path="/bookings/new" element={<>NewBooking</>}/>
                  <Route path="/bookings/:bookingId" element={<>BookingDetail</>}/>
                  <Route path="/check-in/:bookingId" element={<>CheckIn</>}/>
                  <Route path="/check-out/:bookingId" element={<>CheckOut</>}/>
                  <Route path="/cabins" element={<>Cabins</>}/>
                  <Route path="/cabins/new" element={<>CabinForm</>}/>
                  <Route path="/cabins/:cabinId/edit" element={<>CabinForm</>}/>
                  <Route path="/cancelled" element={<>CancelledBookings</>}/>
                  <Route path="/settings" element={<>Settings</>}/>
                  <Route path="/profile" element={<>Profile</>}/>
                  <Route path="/users" element={<>Users</>}/>
                  <Route path="/users/new" element={<>UserForm</>}/>
                  <Route path="*" element={<>NotFound</>}/>
                {/* </Route> */}
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
