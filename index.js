// The Evervault Node.js SDK (https://docs.evervault.com/sdk/nodejs) is pre-initialized in 
// all Cages as the globally-scoped `evervault` object.This allows you to encrypt the result, 
// and store it in your database.

// `data` is the data you encrypted and passed into `evervault.run` from your server. The Cage 
// automatically decrypts the data and maintains its structure so you can treat event exactly as 
// you did when you passed it into `evervault.run`.
exports.handler = async (data) => {
  console.debug(data);
  // Check if the data sent into the Cage included the `name` key
  if (data.cardNumber && data.cvv) {
    console.debug(`Card details received`);

    return {
      message: `Message something`,
      card: data.cardNumber,
      cvv: data.cvv,
    };
  } else {
    console.debug('An empty card has arrived into the Cage.');

    return {
      message: 'Error',
    };
  }
};
