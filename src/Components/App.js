import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import logo from '../logo.svg';
import '../App.css';
import RealmJson from "../realm.json";
import { RealmAppProvider, useRealmApp } from "./RealmApp";
import WelcomePage from './WelcomePage';
import { AppName } from "./AppName";
import { ThemeProvider } from "./Theme";

export default function AppWithRealm() {
  return (
    <ThemeProvider>
      <RealmAppProvider appId={ RealmJson.appId }>
        <App />
      </RealmAppProvider>
    </ThemeProvider>
  );
}

function App() {
  const { currentUser, logOut } = useRealmApp();

  return (
    <div className="App">
      <AppBar position="sticky">
        <Toolbar>
          <AppName />
          {currentUser ? (
            <Button
              variant="contained"
              color="secondary"
              onClick={async () => {
                await logOut();
              }}
            >
              <Typography variant="button">Log Out</Typography>
            </Button>
          ) : null}
        </Toolbar>
      </AppBar>
      {currentUser ? <></> : <WelcomePage />}
    </div>
  );
}
