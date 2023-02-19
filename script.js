const crypto = require('crypto');

// 4 digit simple random
function fourIntUUID() {
    const uuid = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return uuid;
  }


// 4 character random 
function fourCharUUID() {
    let uuid = '';
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      uuid += chars[randomIndex];
    }
    return uuid;
  }


// 16 bit random char
function gen16BitUUID() {
  const array = crypto.randomBytes(16); //require crypto
  
  // Set version (4) and variant (10b) bits
  array[6] = (array[6] & 0x0f) | 0x40;
  array[8] = (array[8] & 0x3f) | 0x80;
  
  let uuid = '';
  for (let i = 0; i < array.length; i++) {
    const octet = array[i].toString(16).padStart(2, '0');
    uuid += (i === 4 || i === 6 || i === 8 || i === 10) ? `-${octet}` : octet;
  }
  
  return uuid;
}


module.exports = fourIntUUID, fourCharUUID, gen16BitUUID

