function MyButton(): JSX.Element {
  return <button onClicked="notify-send 'what the fuck'">
    <label label="send notification" />
  </button>
}


export default function Bar(monitor = 0) {
  return <window
    visible
    monitor={monitor}>
    <MyButton />
  </window>
}
