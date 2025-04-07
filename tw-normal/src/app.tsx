import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";
import DisclosureExample from "./test";

export default function App() {
  return (
    <Router
      root={props => (
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
