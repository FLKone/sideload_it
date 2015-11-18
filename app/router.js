import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    //user profile
    this.route('user', { path: '/user/:user_id' });

    //apps
    this.route('apps', function() {
      this.route('submit');
      this.route('all');
      this.route('pending');
    });
    this.route('app', { path: '/app/:app_id' });

    //error
    this.route('bad_url', { path: '/*badurl' });
});

export default Router;
