import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";
import GlobalStyles from "./styles/GlobalStyles";
import Footer from "./components/general/Footer";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navigation/NavigationBar";
import Page404 from "./components/general/Page404";
import MainWrapper from "./components/general/MainWrapper";
import Components from "./components/FileList/Components";
import FileUpload from "./utils/CalculateHash";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 30000,
    },
  },
});
function App() {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <NavBar />
          <MainWrapper>
            <Routes>
              <Route path="/Components" element={<Components />} />
              <Route path="/Components/addComponent" element={<FileUpload />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </MainWrapper>
          <Toaster
            position="bottom-right"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "20px",
                maxWidth: "700px",
                padding: "16px 24px",
                backgroundColor: "var(--color-grey-0)",
                color: "var(--color-grey-700)",
              },
            }}
          />
          <Footer />
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
