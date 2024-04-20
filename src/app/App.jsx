import { Providers } from "./providers";
import { AppRouter } from "./routers/appRouter";

function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}

export default App;
