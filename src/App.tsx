import { useQuery } from "@tanstack/react-query";
import { SiteHeader } from "./components/header";
import Timer from "./components/timer";
import "./index.css";
import type { ApiResponse } from "./types/api";
import StockCard from "./components/stock-card";
import LoadingSpinner from "./components/loader";
import Footer from "./components/footer";
function App() {
  const { isPending, error, data, refetch } = useQuery<ApiResponse>({
    queryKey: ["stocks"],
    queryFn: () =>
      fetch("https://api.joshlei.com/v2/growagarden/stock").then((res) =>
        res.json()
      ),
  });
  if (isPending) return <LoadingSpinner />;
  if (error) return "An error occurred: " + error.message;
  return (
    <div className="w-full">
      <SiteHeader />
      <Timer refetch={refetch} />
      <StockCard data={data} />
      <Footer />
    </div>
  );
}

export default App;
