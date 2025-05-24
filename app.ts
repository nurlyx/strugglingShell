import { App } from "astal/gtk3"
import Bar from "./widget/Bar"

App.start({
  main() {
    Bar(0)
  },
})
