import Route from '@ember/routing/route';
export default class IndexRoute extends Route {
  model() {
    return {
      colors: {
        red: 0,
        green: 0,
        blue: 0,
      },
      history: [],
    };
  }
}
