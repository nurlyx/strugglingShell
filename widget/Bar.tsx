function MyButton(): JSX.Element {
  return <button onClicked="hyprctl dispatch exec asztal">
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
