import Ember from 'ember';

export default Ember.Controller.extend({
	init: function() {
      this.set('app',  Ember.Object.create());
    },
	actions: {
		addApp: function() {
			var newApp = this.store.createRecord('app', {
				name: this.get('app.name'),
			    description: this.get('app.description'),
				/*
			    requireServer: DS.attr('boolean'),
			    isPhone: DS.attr('boolean'),
			    isPad: DS.attr('boolean'),
			    isTV: DS.attr('boolean'),
				*/
			    repoURL: this.get('app.repoURL'),
			    appstoreURL: this.get('app.appstoreURL'),
			    websiteURL: this.get('app.websiteURL'),
			});
			newApp.save();
			this.setProperties({
				'app.name': '',
				'app.description': '',
				'app.repoURL': '',
				'app.appstoreURL': '',
				'app.websiteURL': ''
            });
			this.transitionToRoute('apps');
        }
	},
  role: undefined
});
