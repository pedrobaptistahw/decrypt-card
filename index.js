// The Evervault Node.js SDK (https://docs.evervault.com/sdk/nodejs) is pre-initialized in 
// all Cages as the globally-scoped `evervault` object.This allows you to encrypt the result, 
// and store it in your database.

// `data` is the data you encrypted and passed into `evervault.run` from your server. The Cage 
// automatically decrypts the data and maintains its structure so you can treat event exactly as 
// you did when you passed it into `evervault.run`.
exports.handler = async (data) => {
  console.debug(data);
  // Check if the data sent into the Cage included the `name` key
  if (data.cardNumber) {
    console.debug(`Card number received` + data.cardNumber);

    // Process the decrypted name value, and re-encrypt the original name using the globally available evervault package.
    // Note all Cages have the evervault SDK automatically injected into their global scope.
    return {
      message: `Message something`,
      name: await evervault.encrypt(data.cardNumber),
    };
  } else {
    console.debug('An empty card has arrived into the Cage.');

    return {
      message: 'Hello from a Cage! Send an encrypted `name` parameter to show Cage decryption in action',
    };
  }
};
