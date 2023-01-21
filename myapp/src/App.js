import { ColorModeContext, useMode } from './theme';
import { CssBaseLine, ThemeProvider} from "@mui/material";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseLine />
        <div className="App">
          <main className="conent"></main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
