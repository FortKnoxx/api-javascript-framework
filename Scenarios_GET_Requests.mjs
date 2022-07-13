import { assert } from 'chai';
import fetch from 'node-fetch'
globalThis.fetch = fetch

import * as endpoints from './Factory.js'

describe('Test Scenarios 1 - GET', function() {
it('1. A GET request for an endpoint', async function() {
  await fetch(endpoints.nodejsEnpoint)
  .then(response => response.json())
  .then(data => {
    //console.log(data),
    //console.log(data.name), // Prints result from `response.json()` in getRequest
    assert(data.name == 'Node.js',"Assert failed, expected: Noe.js , actual: " + data.name)
  })
  //.catch(error => console.error(error))
//done();
});

it('2. A GET request to get Hooks', async function() {
  await fetch(endpoints.nodejsHooksEndpoint)
  .then(response => response.json())
  // .then(data => {
  //   //console.assert(data.name == 'Node.js')
  // })
  .catch(error => console.error(error))
});

it('3. A GET request to get Repos', async function() {
  await fetch(endpoints.nodejsReposEndpoint)
  .then(response => response.json())
  // .then(data => {
  //   //console.assert(data.name == 'Node.js')
  // })
  .catch(error => console.error(error))
});

});