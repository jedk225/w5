import { ThemeProvider, Button } from 'react-native-elements';

const theme = {
  Button: {
    raised: true,
  },
};

// Your App
const HomeTest = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button title="My Button" />
      <Button title="My 2nd Button" />
    </ThemeProvider>
  );
};
