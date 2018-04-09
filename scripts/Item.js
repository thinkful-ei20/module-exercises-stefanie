'use strict';

/* global cuid, $ */

// eslint-disable-next-line no-unused-vars
const Item = (function () {
  function validateName(name) {
    if (name.length === 0) {
      throw new TypeError('Name does not exist.');
    }
          
  }
      
  //In Item.js, declare a create function 
  //which will be a Factory function.
  // It should take a name parameter.
  const create = function(name) {
    return {
      id: cuid(),
      name: $(name).val(),
      checked: false,
    };
  };
      
  return {
    validateName: validateName,
    create: create,
  };
} () );

//We'll run this validator any time we create an item 
//or update its name to prevent items having blank 
//names.
