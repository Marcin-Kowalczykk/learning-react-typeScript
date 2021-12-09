class ToDoNote {
  id: string;
  text: string;

  constructor(itemText: string) {
    this.text = itemText;
    this.id = Math.random().toString();
  }
}

export default ToDoNote;
