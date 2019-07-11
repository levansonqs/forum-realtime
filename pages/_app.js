import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import { red, blue, grey } from "@material-ui/core/colors";


const light = {
  palette: {
    primary: blue,
    secondary: grey,
    error: {
      main: red.A400
    },
    background: {
      default: "#fff"
    }
  }
};

const dark = {
  palette: {
    primary: grey,
    secondary: blue,
    error: {
      main: red.A400
    },
    background: {
      default: "#000"
    }
  }
};
class MyApp extends App {
  constructor(props) {
    super(props);

    this.state = {
      theme: light
    };
  }

  changeTheme = () => {
    const isLight = this.state.theme.palette.background.default === "#fff";
    this.setState({ theme: isLight ? dark : light });
  };

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const theme = createMuiTheme(this.state.theme);
    const { Component, pageProps } = this.props;
    const themeName =
      this.state.theme.palette.background.default === "#fff" ? "dark" : "light";
    return (
      <Container>
        <Head>
          <title>Tech express</title>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component
            {...pageProps}
            changeTheme={this.changeTheme}
            themeName={themeName}
          />
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
