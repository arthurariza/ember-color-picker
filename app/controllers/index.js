import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  @action
  updateColor(event) {
    this.model.colors[event.target.name] = event.target.value;
    console.log(this.model.colors);
  }

  get currentColors() {
    let { red, green, blue } = this.model.colors;
    return `${red}, ${green}, ${blue}`;
  }
}
