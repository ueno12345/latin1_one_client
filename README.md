# latin1_one_client
latin1_one_client is part of an order management system.<br>latin1_one_client is a tool used in combination with [latin1_one_server](https://github.com:ueno12345/latin1_one_server.git).<br>
latin1_one_client is part of the order management system management console.<br>
![](public/latin1_one_client.png)
There are six screens in this management console.
1. Product and store information update screen
   + Add product and store information to DB
![](public/latin1_one_client1.png)
2. Notification transmission screen
   + Add product and store information for notification to DB
![](public/latin1_one_client2.png)
3. General notification transmission screen
   + Add information for notification to DB
![](public/latin1_one_client3.png)
4. Individual notification transmission screen
   + Add information for individual notification to DB
![](public/latin1_one_client4.png)
5. Excel screen
   + Add product and store information to DB using excel
![](public/latin1_one_client5.png)
6. Order status confirmation screen
   + Check the status of your product orders
![](public/latin1_one_client6.png)

# Requirements
+ node v20.10.0

# Setup
## latin1_one_client
1. Download latin1_one_client
   ```bash
   $ git clone https://github.com:ueno12345/latin1_one_client.git
   ```

# Preparation
1. Set up [latin1_one_server](https://github.com:ueno12345/latin1_one_server.git)

# Launch
1. Execute `npm install`
   ```bash
   $ npm install
   ```
2. Launch
   ```bash
   $ npm start
   ```
    After launching, open http://localhost:3000 in your browser to open the latin1_one_client screen
