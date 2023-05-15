import { SSTConfig } from "sst";
import NextStack from "./stacks/NextStack";

export default {
  config({stage}) {
    switch(stage) {
      default:
        return {
          name: "sst-issue-repro",
          region: "us-east-1",
          profile: "default"
        }
    }
  },
  stacks(app) {
    if(app.stage === 'dev')
      app.setDefaultRemovalPolicy('destroy')

    app.stack(NextStack)
  }
} satisfies SSTConfig
