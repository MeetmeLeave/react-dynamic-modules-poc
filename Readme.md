# Sample react-redux dynamic modules PoC

This sample App show how to build dynamic modules loading on demand along with redux and react-router v.4.

To run the sample follow this steps:
1. Clone repo
2. Run `npm i` inside the root folter
3. Run `npm start`

The app has only single route defined at the beginning that navigates to the Home page at `/`.
All of the navigation routes are requested from local server running on node.js

By checking the Dashboard module checkbox, App will call the node.js to update the routing and enable the dashboard module.
This will be reflected by additional route added, called 'Dashboard'.

After pressing on the 'Dashboard' link, it will download Dashboard module and will register reducers from it to redux. This can be seen using developers tools of the browser.

If you will go be to the Home page and uncheck the 'Dashbord' checkbox to the route will disappear from navigation and module will not be available until the checkbox will be set again.