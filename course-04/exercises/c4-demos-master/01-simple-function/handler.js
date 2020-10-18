'use strict'

exports.handler = async (event, context) => {
  console.log('Event: ', event)
  console.log('Context: ', context)
  console.log('test');
  
  return {
      result: 'Hello Udacity!'
  }
};
