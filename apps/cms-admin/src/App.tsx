import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ContentList } from "./content/ContentList";
import { ContentCreate } from "./content/ContentCreate";
import { ContentEdit } from "./content/ContentEdit";
import { ContentShow } from "./content/ContentShow";
import { PageList } from "./page/PageList";
import { PageCreate } from "./page/PageCreate";
import { PageEdit } from "./page/PageEdit";
import { PageShow } from "./page/PageShow";
import { ImageList } from "./image/ImageList";
import { ImageCreate } from "./image/ImageCreate";
import { ImageEdit } from "./image/ImageEdit";
import { ImageShow } from "./image/ImageShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CMS"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Content"
          list={ContentList}
          edit={ContentEdit}
          create={ContentCreate}
          show={ContentShow}
        />
        <Resource
          name="Page"
          list={PageList}
          edit={PageEdit}
          create={PageCreate}
          show={PageShow}
        />
        <Resource
          name="Image"
          list={ImageList}
          edit={ImageEdit}
          create={ImageCreate}
          show={ImageShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
