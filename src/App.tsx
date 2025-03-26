import { AuthBindings, Authenticated, Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
  ErrorComponent,
  RefineSnackbarProvider,
  ThemedLayoutV2,
} from "@refinedev/mui";

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import nestjsxCrudDataProvider from "@refinedev/nestjsx-crud";
import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router";
import axios from "axios";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "./components/header";
import ThemeClientLayout from "./components/layouts/ThemeClientLayout";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { notificationProvider } from "./hooks/notificationProvider";
import AboutPage from "./pages/Clients/About";
import ContactPage from "./pages/Clients/Contact";
import GalleryPage from "./pages/Clients/Gallery";
import HomePage from "./pages/Clients/Home";
import NewsPage from "./pages/Clients/News";
import ServicesPage from "./pages/Clients/Services";
import { UsersCreate, UsersEdit, UsersList, UsersShow } from "./pages/users";
import { IUserResponse } from "./types/auth";
import { LoginPage } from "./pages/Admin/Login";

const axiosInstance = axios.create({
  baseURL:
    "https://630feb56-a4db-450b-855a-72e24a12336d-00-t2xqh6jdz5p8.pike.replit.dev/api/v1", // Your backend URL
});
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (config.headers) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

function App() {
  const dataProvider = nestjsxCrudDataProvider(
    "https://630feb56-a4db-450b-855a-72e24a12336d-00-t2xqh6jdz5p8.pike.replit.dev/api/v1",
  );

  const authProvider: AuthBindings = {
    login: async (user: IUserResponse) => {
      if (user) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...user,
          }),
        );

        localStorage.setItem("token", `${user.token}`);

        return {
          success: true,
          redirectTo: "/",
        };
      }

      return {
        success: false,
      };
    },
    logout: async () => {
      const token = localStorage.getItem("token");

      if (token && typeof window !== "undefined") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        axios.defaults.headers.common = {};
        window.google?.accounts.id.revoke(token, () => {
          return {};
        });
      }

      return {
        success: true,
        redirectTo: "/login",
      };
    },
    onError: async (error) => {
      console.error(error);
      return { error };
    },
    check: async () => {
      const token = localStorage.getItem("token");

      if (token) {
        return {
          authenticated: true,
        };
      }

      return {
        authenticated: false,
        error: {
          message: "Check failed",
          name: "Token not found",
        },
        logout: true,
        redirectTo: "/login",
      };
    },
    getPermissions: async () => null,
    getIdentity: async () => {
      const user = localStorage.getItem("user");
      if (user) {
        return JSON.parse(user);
      }

      return null;
    },
  };

  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
          <RefineSnackbarProvider>
            <Refine
              dataProvider={dataProvider}
              notificationProvider={notificationProvider}
              routerProvider={routerBindings}
              authProvider={authProvider}
              resources={[
                {
                  name: "users",
                  list: "/users",
                  create: "/users/create",
                  edit: "/users/edit/:id",
                  show: "/users/show/:id",
                },
                {
                  name: "home",
                  list: "/home",
                  // Các thuộc tính meta khác nếu cần
                },
              ]}
              options={{
                // syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                // useNewQueryKeys: true,
              }}
            >
              <Routes>
                <Route element={<ThemeClientLayout />}>
                  <Route path="/home" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/gallery" element={<GalleryPage />} />
                  <Route path="/news" element={<NewsPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                </Route>

                <Route
                  element={
                    <Authenticated
                      key="authenticated-inner"
                      fallback={<CatchAllNavigate to="/login" />}
                    >
                      <ThemedLayoutV2 Header={Header}>
                        <Outlet />
                        <ToastContainer
                          position="top-right"
                          autoClose={5000}
                          hideProgressBar={false}
                          newestOnTop
                          closeOnClick
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover
                        />
                      </ThemedLayoutV2>
                    </Authenticated>
                  }
                >
                  <Route path="/users">
                    <Route index element={<UsersList />} />
                    <Route path="create" element={<UsersCreate />} />
                    <Route path="edit/:id" element={<UsersEdit />} />
                    <Route path="show/:id" element={<UsersShow />} />
                  </Route>
                  <Route path="*" element={<ErrorComponent />} />
                </Route>
                <Route
                  element={
                    <Authenticated
                      key="authenticated-outer"
                      fallback={<Outlet />}
                    >
                      <NavigateToResource />
                    </Authenticated>
                  }
                >
                  <Route path="/login" element={<LoginPage />} />
                </Route>
              </Routes>

              <RefineKbar />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
          </RefineSnackbarProvider>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
