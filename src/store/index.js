import { observable, action } from 'mobx'

class Store {
  @observable todos = [{
    title: "Today",
  }];

  @action changeTodoTitle(title) {
    this.todos[0].title = title
  }

}

export default Store
