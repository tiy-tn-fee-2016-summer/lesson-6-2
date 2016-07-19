import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        img: 'http://placecera.com/gif/200/200',
        title: 'I am an object'
      },
      {
        img: 'http://www.stevensegallery.com/200/200',
        title: 'Segal!'
      },
      {
        img: 'http://www.fillmurray.com/200/200',
        title: 'Bill!'
      },
      {
        img: 'http://www.placekitten.com/200/200',
        title: 'AWW!'
      },
    ];
  }
});
