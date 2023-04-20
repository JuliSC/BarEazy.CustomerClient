import Navigation from "./navigation/Navigation";
import {QueryClientProvider, QueryClient} from "react-query";
import "animate.css";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <div
        id="app"
        className="relative min-h-screen flex flex-col justify-center items-center"
      >
        <Navigation></Navigation>
      </div>
    </QueryClientProvider>
  );
}

export default App;
