import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css"; // Import the custom CSS file

const theme = createTheme({
  palette: {
    primary: {
      main: "#d1a866", // Set your primary color
    },
    secondary: {
      main: "#365380", // Set your secondary color
    },
  },
});

function App() {
  const [question1Value, setQuestion1Value] = useState(5);
  const [question2Value, setQuestion2Value] = useState(5);
  const [question3Value, setQuestion3Value] = useState(5);
  const [question4Value, setQuestion4Value] = useState(null); // Track selected button
  const [question5Value, setQuestion5Value] = useState(null); // Track selected button
  const [checkedItems, setCheckedItems] = useState({
    Zdrowie_fizyczne: false,
    Rodzina: false,
    Praca: false,
    Finanse: false,
    Życie_towarzyskie: false,
    Hobby_pasje: false,
    Życie_religijne: false,
    Czas_na_odpoczynek: false,
  });

  const handleQuestion1Change = (event, newValue) => {
    setQuestion1Value(newValue);
  };

  const handleQuestion2Change = (event, newValue) => {
    setQuestion2Value(newValue);
  };

  const handleQuestion3Change = (event, newValue) => {
    setQuestion3Value(newValue);
  };

  const handleQuestion4Change = (value) => {
    setQuestion4Value(value);
  };

  const handleQuestion5Change = (value) => {
    setQuestion5Value(value);
  };

  const handleCheckboxChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Box sx={{ width: 300, margin: "0 auto", padding: "20px" }}>
          <Typography variant="h5" gutterBottom>
            Test 5 pytań
          </Typography>
          <Box sx={{ marginBottom: "20px" }}>
            <Typography gutterBottom>
              1. Jak oceniam mój nastrój w ciągu ostatniego tygodnia?
            </Typography>
            <Slider
              value={question1Value}
              min={0}
              max={10}
              step={1}
              onChange={handleQuestion1Change}
              valueLabelDisplay="auto"
            />
          </Box>
          <Box sx={{ marginBottom: "20px" }}>
            <Typography gutterBottom>
              2. Jak oceniam moje funkcjonowanie we wszystkich obszarach życia w
              ciągu ostatniego tygodnia?
            </Typography>
            <Slider
              value={question2Value}
              min={0}
              max={10}
              step={1}
              onChange={handleQuestion2Change}
              valueLabelDisplay="auto"
            />
          </Box>
          <Box sx={{ marginBottom: "20px" }}>
            <Typography gutterBottom>
              3. Które sprawy w moim życiu są obecnie najtrudniejsze?
            </Typography>
            <FormGroup className="two-column-form-group">
              {Object.keys(checkedItems).map((key) => (
                <FormControlLabel
                  key={key}
                  control={
                    <Checkbox
                      checked={checkedItems[key]}
                      onChange={handleCheckboxChange}
                      name={key}
                    />
                  }
                  label={key}
                />
              ))}
            </FormGroup>
          </Box>
          <Box sx={{ marginBottom: "20px" }}>
            <Typography gutterBottom>
              4. Czy radzisz sobie sam z problemami czy potrzebujesz pomocy w
              którymś z nich?
            </Typography>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
              <Button
                onClick={() => handleQuestion4Change(1)}
                sx={{
                  backgroundColor:
                    question4Value === 1
                      ? theme.palette.primary.main
                      : "inherit",
                  color:
                    question4Value === 1 ? "#fff" : theme.palette.primary.main,
                }}
              >
                Tak
              </Button>
              <Button
                onClick={() => handleQuestion4Change(0)}
                sx={{
                  backgroundColor:
                    question4Value === 0
                      ? theme.palette.primary.main
                      : "inherit",
                  color:
                    question4Value === 0 ? "#fff" : theme.palette.primary.main,
                }}
              >
                Nie
              </Button>
            </ButtonGroup>
          </Box>
          <Box sx={{ marginBottom: "20px" }}>
            <Typography gutterBottom>
              5. Czy wiesz, do kogo się zwrócić po radę w celu rozwiązania
              problemu, jeśli jego rozwiązanie przekracza Twoje obecne
              możliwości?
            </Typography>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
              <Button
                onClick={() => handleQuestion5Change(1)}
                sx={{
                  backgroundColor:
                    question5Value === 1
                      ? theme.palette.primary.main
                      : "inherit",
                  color:
                    question5Value === 1 ? "#fff" : theme.palette.primary.main,
                }}
              >
                Tak
              </Button>
              <Button
                onClick={() => handleQuestion5Change(0)}
                sx={{
                  backgroundColor:
                    question5Value === 0
                      ? theme.palette.primary.main
                      : "inherit",
                  color:
                    question5Value === 0 ? "#fff" : theme.palette.primary.main,
                }}
              >
                Nie
              </Button>
            </ButtonGroup>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="outlined">
              <Typography>Wyślij</Typography>
            </Button>
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
