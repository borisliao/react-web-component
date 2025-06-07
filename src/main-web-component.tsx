import App from "./App.tsx";

import r2wc from "@r2wc/react-to-web-component";
import globalStyleSheet from "./index.css?inline"; // this style sheet modifies the host application styles with :root selector. that style is not supported if you are using shadow dom

function styledApp({ ...props }) {
  return (
    <div id="root">
      <style>{globalStyleSheet}</style>
      <link
        href={`${import.meta.env.VITE_npm_package_name}.css`}
        rel="stylesheet"
        type="text/css"
      />
      <App {...props} />
    </div>
  );
}

const WebComponent = r2wc(styledApp, {
  // shadow: "open", // Enable shadow DOM if you get conflicting css styles in the host application
  props: {
    appname: "string",
  },
});

customElements.define(import.meta.env.VITE_npm_package_name, WebComponent);
