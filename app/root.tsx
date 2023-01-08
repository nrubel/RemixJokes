/** @format */

import type { LinksFunction } from "@remix-run/node";
import { Links, LiveReload, Outlet } from "@remix-run/react";
import type { FC, PropsWithChildren } from "react";
import globalLargeStylesUrl from "./styles/global-large.css";
import globalMediumStylesUrl from "./styles/global-medium.css";
import globalStylesUrl from "./styles/global.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: globalStylesUrl,
    },
    {
      rel: "stylesheet",
      href: globalMediumStylesUrl,
      media: "print, (min-width: 640px)",
    },
    {
      rel: "stylesheet",
      href: globalLargeStylesUrl,
      media: "screen and (min-width: 1024px)",
    },
  ];
};

const Document: FC<PropsWithChildren<{ title?: string }>> = ({ children, title = `Remix: So great, it's funny!` }) => {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <title>{title}</title>
        <Links />
      </head>
      <body>
        {children}
        <LiveReload />
      </body>
    </html>
  );
};

const App: FC = () => {
  return (
    <Document>
      <Outlet />
    </Document>
  );
};

export const ErrorBoundary: FC<{ error: Error }> = ({ error }) => {
  return (
    <Document title='Uh-oh!'>
      <div className='error-container'>
        <h1>App Error</h1>
        <pre>{error.message}</pre>
      </div>
    </Document>
  );
};

export default App;
