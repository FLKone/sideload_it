import Ember from 'ember';
import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';
export default ToriiFirebaseAdapter.extend({
  firebase: Ember.inject.service(),
  open: function(authorization) {
    // This is what should be done after authentication. As an example, I'm
    // finding current user here.
    let store = this.get("container").lookup("service:store");

    return new Ember.RSVP.Promise((resolve) => {
      return store.find("user", authorization.uid).then(function(user){
		  	user.lastLoginDate = Date.now();
			user.save().then(function(user){
				Ember.run.bind(null, resolve({currentUser: user}));
			});
      }, () => {
        let newUser = store.createRecord("user", {
          id: authorization.uid,
		  displayName: this._displayNameFor(authorization),
		  avatar: this._avatarFor(authorization),
          handle: this._handleFor(authorization)
        });

        newUser.save().then(function(user) {
          Ember.run.bind(null, resolve({currentUser: user}));
        });
      });
    });
},
_handleFor: function(authorization) {
    if(authorization.github) {
      return authorization.github.username;
    } else if(authorization.facebook) {
      return authorization.facebook.displayName;
    } else if(authorization.twitter) {
      return authorization.twitter.username;
    } else if(authorization.google) {
      return authorization.google.displayName;
    } else {
      throw new Error("couldn't find a _handleFor!");
    }
  },
  _displayNameFor: function(authorization) {
      if(authorization.github) {
        return authorization.github.displayName;
      } else if(authorization.facebook) {
        return authorization.facebook.displayName;
      } else if(authorization.twitter) {
        return authorization.twitter.displayName;
      } else if(authorization.google) {
        return authorization.google.displayName;
      } else {
        throw new Error("couldn't find a _displayNameFor!");
      }
    },
	_avatarFor: function(authorization) {
	    if(authorization.github) {
	      return authorization.github.profileImageURL;
	    } else if(authorization.facebook) {
	      return authorization.facebook.displayName;
	    } else if(authorization.twitter) {
	      return authorization.twitter.profileImageURL;
	    } else if(authorization.google) {
	      return authorization.google.displayName;
	    } else {
	      throw new Error("couldn't find a _avatarFor!");
	    }
	  }
});
