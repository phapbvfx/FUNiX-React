import { Outlet } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import { Provider } from "react-redux";
import store from "../../store/toolkitStore.js";

function Lab20() {
  return (
    <Provider store={store}>
      <Layout>
        <Outlet />
      </Layout>
    </Provider>
  );
}

export default Lab20;
