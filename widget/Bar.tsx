import { Variable, bind } from "astal"

function MyButton(): JSX.Element {
  return <button onClicked="hyprctl keyword general:layout master">
    <label label="Launch Kitty" />
  </button>
}


export default function Bar(monitor = 0) {
  return <window
    visible
    monitor={monitor}>
    <MyButton />
  </window>
}
