import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return fetch('https://api.imgur.com/3/gallery/hot/viral/0.json')
      .then((res) => res.json());
  }
});
