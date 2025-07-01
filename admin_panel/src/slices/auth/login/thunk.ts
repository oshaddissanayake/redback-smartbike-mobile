import { createAsyncThunk } from "@reduxjs/toolkit";

// Logout user
export const logoutUser = createAsyncThunk(
  "auth/logout",
  async () => {
    try {
      sessionStorage.removeItem("authUser");
      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  }
);

