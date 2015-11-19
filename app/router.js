import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    //user profile
    this.route('user', { path: '/user/:user_id' });

    //apps
    this.route('apps'); //auto rediret to apps.all
    this.route('apps.submit', { path: '/apps/submit' });
    this.route('apps.new', { path: '/apps/new' });

    this.route('apps.all', { path: '/apps/all' });
    this.route('apps.pending', { path: '/apps/pending' });

    this.route('app', { path: '/app/:app_id' });

    //error
    this.route('bad_url', { path: '/*badurl' });
});

export default Router;
