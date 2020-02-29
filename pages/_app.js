import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AuthContext } from '../src/context/global-auth-context'

const theme = {
  primary: 'blue',
}

export default class MyApp extends App {
  static getInitialProps = async ({ Component, ctx }) => {
    let loggedInUser

    // Get the logged in users, handling both client and server side renders.
    loggedInUser = {
      id: 123,
      name: 'Test user',
      isAdmin: true,
    }

    let pageProps = { loggedInUser }

    if (Component.getInitialProps) {
      pageProps = {
        ...pageProps,
        ...(await Component.getInitialProps(ctx)),
      }
    }

    return pageProps
  }

  render() {
    const { Component, loggedInUser, ...otherPageProps } = this.props
    return (
      <AuthContext.Provider value={loggedInUser}>
        <ThemeProvider theme={theme}>
          <Component {...otherPageProps} />
        </ThemeProvider>
      </AuthContext.Provider>
    )
  }
}
