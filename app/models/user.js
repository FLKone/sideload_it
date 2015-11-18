import DS from 'ember-data';

export default DS.Model.extend({
    displayName: DS.attr('string'),
    handle: DS.attr('string'),
    avatar: DS.attr('string'),
    level: DS.attr('number'),
    lastLoginDate: DS.attr('number')
});
