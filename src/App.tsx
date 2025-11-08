import { ThemeProvider } from "@/components/providers/theme-provider";
import { RouterProvider } from "react-router/dom";
import { router } from "./routes";

export default function App() {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}
