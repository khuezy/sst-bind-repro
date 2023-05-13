import { StackContext, Config, NextjsSite } from "sst/constructs";

export default function NextStack({ stack, app }: StackContext): void {
  const NEXTAUTH_SECRET = new Config.Secret(stack, 'NEXTAUTH_SECRET')
  
  new NextjsSite(stack, "sst-bind-repro", {
    path: 'next-app/',
    bind: [NEXTAUTH_SECRET]
  })
}
