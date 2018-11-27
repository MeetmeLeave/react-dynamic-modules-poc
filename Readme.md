# Sample react-redux dynamic modules PoC

This sample App shows how to build dynamic modules loading on demand along with redux and react-router v.4.

### How to run:
To run the sample follow this steps:
1. Clone repo
2. Run `npm i` inside the root folder
3. Run `npm start`

### How it works:
The app has the only single route defined at the beginning that navigates to the Home page at `/`.
All of the navigation routes are requested from a local server running on node.js

By checking the Dashboard module checkbox, App will call the node.js to update the routing and enable the dashboard module.
This will be reflected by additional route added, called 'Dashboard'.

After pressing on the 'Dashboard' link, it will download the Dashboard module and will register reducers from it to redux. This can be seen using developers tools of the browser.

If you will go be to the Home page and uncheck the 'Dashbord' checkbox to the route will disappear from navigation and module will not be available until the checkbox will be set again.

### How to extend:
Let's pretend we want to add another module, called 'Accounts'
1. Add another folder to modules, name it `accounts`.
2. The index.js file should have a similar structure to `dashboard` example module, it is VERY important as this structure is expected by the system.
3. Use the same naming for the module as for the folder `accounts`. It should export an object with reducers and root view of the module along the name field.
4. Then go to the server.js and add another object to routes array like this:
```
{
     url: '/accounts', // the expected navigation url
     name: 'accounts', // the name of the module, it should equal to the folder name we defined in step 1
     value: 'Accounts', // This will be used as a display name for the tab inside the navigation
     isEnabled: false, // this tells the UI whether this link should be displayed inside the navigation menu
 }
 ```
 
 In case if something isn't working it means that you defined module incorrectly or got wrong with some of the naming described above.