import React from "react";
import { PagesManager } from "./components/organisms/PagesManager";
import { PageProvider } from "./context/PageContext";

const App: React.FC = () => {
  return (
    <div>
      <PageProvider>
        <PagesManager />;
      </PageProvider>
    </div>
  );
};
export default App;
