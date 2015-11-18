import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    description: DS.attr('string'),

    requireServer: DS.attr('boolean'),
    isPhone: DS.attr('boolean'),
    isPad: DS.attr('boolean'),
    isTV: DS.attr('boolean'),

    repoURL: DS.attr('string'),
    appstoreURL: DS.attr('string'),
    websiteURL: DS.attr('string'),

    createdAt: DS.attr('number'),
    updatedAt: DS.attr('number')
});
