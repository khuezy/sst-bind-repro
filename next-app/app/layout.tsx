import { PropsWithChildren } from "react";

const RootLayout = ({children}: PropsWithChildren) => {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}

export default RootLayout;
