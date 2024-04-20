import { Providers } from "./providers";
import { AppRouter } from "./routers/appRouter";

function App() {
  console.log("app is loaded");

  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}

export default App;
