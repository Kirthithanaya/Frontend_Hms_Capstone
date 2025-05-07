import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDasboard from "./pages/AdminDasboard";
import ResidentDasboard from "./pages/ResidentDasboard";
import RoomAllocation from "./pages/RoomMangement/RoomAllocation";
import CheckInOutRoom from "./pages/RoomMangement/ChechInOutRoom";
import GetInvoiceResident from "./pages/Billing/GetInvoiceResident";
import BillingsAdmin from "./pages/Billing/BillingsAdmin";
import ResidentInfo from "./pages/ResidentManagement/ResidentInfo";
import FinancialAdmin from "./pages/Financial/FinancialAdmin";
import ManageRequestResident from "./pages/Maintenance Requests/ManageRequestResident";
import ManageRequestAdmin from "./pages/Maintenance Requests/ManageRequestAdmin";
import UserAdminManage from "./pages/UserMangement/UserAdminManage";
import SendEmailAdmin from "./pages/Integration and DataManage/SendEmailAdmin";
import SendNotificationAdmin from "./pages/Notification/SendNotificationAdmin";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ToastContainer position="top-center" />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        {/* Protected Routes */}
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminDasboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/resident-dashboard"
          element={
            <ProtectedRoute allowedRoles={["resident", "staff"]}>
              <ResidentDasboard />
            </ProtectedRoute>
          }
        />
        {/* Default route */}
        <Route path="*" element={<Navigate to="/login" />} />
        <Route
          path="/room-allocation"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <RoomAllocation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/CheckINOut-Room"
          element={
            <ProtectedRoute allowedRoles={["resident"]}>
              <CheckInOutRoom />
            </ProtectedRoute>
          }
        />
        <Route
          path="/getmy-request"
          element={
            <ProtectedRoute allowedRoles={["resident"]}>
              <ManageRequestResident />
            </ProtectedRoute>
          }
        />
        <Route
          path="/maintenance-requests"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <ManageRequestAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/getmy-payment"
          element={
            <ProtectedRoute allowedRoles={["resident"]}>
              <GetInvoiceResident />
            </ProtectedRoute>
          }
        />
        <Route
          path="/billing"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <BillingsAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/resident-info"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <ResidentInfo />
            </ProtectedRoute>
          }
        />
        <Route
          path="/financial-reporting"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <FinancialAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/User-roles"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <UserAdminManage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/integration"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <SendEmailAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <SendNotificationAdmin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
