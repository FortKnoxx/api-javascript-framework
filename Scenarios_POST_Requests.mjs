import { assert } from 'chai';
import fetch from 'node-fetch'
globalThis.fetch = fetch

import * as endpoints from './Factory.js'
import * as requests from './Helper_Requests.js'

// let reqPacket = {
//   "userId": 123,
//   "title": "loren impsum doloris",
//   "completed": false
// };

describe('Test Scenarios - POST', function() {
it('1. A POST request 1', async function() {
  await fetch(endpoints.nodejsPostEndpoint, { 
    method: 'POST',
    body: JSON.stringify(requests.requestPacketPOST),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json())
  .then(data => {
    if (data.id === 201) {
      console.log("First POST test case run successfully");
      console.log(data.id);
      //const message = `Test Message: ${data.id}`;
      //throw new Error(message);
    }else{ assert(false, "This scenario is expectred to fail");}
   }).catch(error => console.error(error))
 });

//  it('XXXXX. WiLdCaRd FaIlUrE', async function() {
//   await fetch(endpoints.nodejsPostEndpoint, { 
//     method: 'POST',
//     body: JSON.stringify(reqPacket),
//     headers: { 'Content-Type': 'application/json' }
//   })
//   .then(response => response.json())
//   .then(data => {
//     if (data.title !== "loren impsum doloris") {
//       console.log("Second POST test case run successfully");
//       //const message = `Test Message: ${data.title}`;
//       //throw new Error(message);
//       //this.assert.Error;
//     }else{ assert(false, "This scenario is expectred to fail");}
//   })//.catch(error => console.error(error))
// });

// it('XXXXX. SeCoNd WiLdCaRd FaIlUrE', async function() {
//   await fetch(endpoints.nodejsPostEndpoint, { 
//     method: 'POST',
//     body: JSON.stringify(reqPacket),
//     headers: { 'Content-Type': 'application/json' }
//   })
//   .then(response => response.json())
//   .then(data => {
//     if (data.title !== "loren impsum doloris") {
//       console.log("Second POST test case run successfully");
//       //const message = `Test Message: ${data.title}`;
//       //throw new Error(message);
//       //this.assert.Error;
//     }else{ assert(false, "This scenario is expectred to fail");}
//   })//.catch(error => console.error(error))
// });

it('2. A POST request 2', async function() {
  await fetch(endpoints.nodejsPostEndpoint, { 
    method: 'POST',
    body: JSON.stringify(requests.requestPacketPOST),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json())
  .then(data => {
    if (data.title === "loren impsum doloris") {
      assert(true);
      //console.log("Second POST test case run successfully");
      //const message = `Test Message: ${data.title}`;
      //throw new Error(message);
      //this.assert.Error;
    }else{ assert(false, "This scenario is expectred to fail");}
  })//.catch(error => console.error(error))
});
});