import { SSTConfig } from "sst";
import NextStack from "./stacks/NextStack";

export default {
  config({stage}) {
    switch(stage) {
      default:
        return {
          name: "sst-issue-repro",
          region: "eu-north-1",
          profile: "some-profile"
        }
    }
  },
  stacks(app) {
    if(app.stage === 'dev')
      app.setDefaultRemovalPolicy('destroy')

    app.stack(NextStack)
  }
} satisfies SSTConfig
