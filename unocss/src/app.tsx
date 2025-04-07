import "virtual:uno.css";
import "./app.css"

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
          </div>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
