## Elite Entries API Client (Official)

This package provides a typescript client library for interacting with the Elite Entries API. It allows you to programmatically place and cancel orders.


### <center style="color:red">Support for more functions coming soon!</center>

### Installation

The recommended way to install the library is through npm:

```bash
npm install elite-entries-api
```

### Usage

The library exports two main functions:

1. `placeOrder`: This function is used to place an order on the Elite Entries platform.
2. `cancelOrder`: This function is used to cancel an existing order.

Before using these functions, you'll need to acquire your API credentials from the Elite Entries platform. These credentials will be used to authenticate your requests.

**Here's an example of how to place an order:**

```typescript
import { placeOrder } from 'elite-entries-api';

const orderData: OrderReqData = {
  account: 'your_account_id',
  exchange: 'your_exchange',
  userID: 'your_user_id',
  key: 'your_api_key',
  paper: true, // Set to 'false' for live trading
  order: {
    symbol: 'AAPL',
    qty: 10,
    side: 'buy',
    type: 'market',
    time_in_force: 'day',
  }
};

try {
  const response = await placeOrder(orderData);
  console.log('Order placed successfully:', response);
} catch (error) {
  console.error('Error placing order:', error);
}

//OR

placeOrder(orderData)
  .then(response => {
    console.log('Order placed successfully:', response);
  })
  .catch(error => {
    console.error('Error placing order:', error);
  });
```

**Here's an example of how to cancel an order:**

```typescript
import { cancelOrder } from 'elite-entries-api';

const cancelData: DeleteReqData = {
  account: 'your_account_id',
  exchange: 'your_exchange',
  userID: 'your_user_id',
  key: 'your_api_key',
  paper: true, // Set to 'false' for live trading
  order: 'your_order_id',
};

try {
  const response = await cancelOrder(cancelData);
  console.log('Order cancelled successfully:', response);
} catch (error) {
  console.error('Error cancelling order:', error);
}

//OR

cancelOrder(cancelData)
  .then(response => {
    console.log('Order cancelled successfully:', response);
  })
  .catch(error => {
    console.error('Error cancelling order:', error);
  });
```

**Please refer to the `index.d.ts` file for the complete definition of the `OrderReqData` interface.** This interface details all the supported order parameters.

### Contributing

We encourage contributions to this library. Please refer to the contribution guidelines if you wish to contribute ([https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project)).

### License

This library is licensed under the GPL-3.0-only license. You can find a copy of the license in the LICENSE file.
