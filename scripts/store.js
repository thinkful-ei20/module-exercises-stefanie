'use strict';

/* global cuid */

/*In the object returned from the store IIFE, include the items, 
hideCheckedItems, searchTerm keys pointing to their local variables 
of the same name. (You can use Object Property Shorthand here if 
    you want.)*/

// eslint-disable-next-line no-unused-vars
const store = (function () {
  const foo = 'bar';
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';
  return {
    items: items,
    hideCheckedItems: hideCheckedItems,
    searchTerm: searchTerm,
  };
} () );



