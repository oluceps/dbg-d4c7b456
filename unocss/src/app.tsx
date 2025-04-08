import "virtual:uno.css";

import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import DisclosureExample from "./test";

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <div class="w-full h-screen">
            <DisclosureExample />
            <div class="w-4 h-4 bg-black animate-custom"> </div>
          </div>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
