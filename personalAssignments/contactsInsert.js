/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'PersonalAssignment';
const collection = 'NEW_COLLECTION_NAME';

use(database);

db.getCollection('contacts').insertMany([
    {'firstName':'Lindsey','lastName':'Fund', 'email':'fun20001@byui.edu', 'favoriteColor':'Pink', 'birthday':'01-09-1982'},
    {'firstName':'Benjamin','lastName':'Fund', 'email':'bjfund@nope.com', 'favoriteColor':'Yellow', 'birthday':'11-23-1981'},
    {'firstName':'Michael','lastName':'Fund', 'email':'mbfund@nope.com', 'favoriteColor':'Blue', 'birthday':'02-16-2006'},
    {'firstName':'Roxi','lastName':'Fund', 'email':'rlfund@nope.com', 'favoriteColor':'Orange', 'birthday':'10-03-2007'},
    {'firstName':'Riley','lastName':'Fund', 'email':'rjfund@nope.com', 'favoriteColor':'Magenta', 'birthday':'10-07-2014'}
]);
