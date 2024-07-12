# rn-assignment7-11115960
### Overview:
In this assignment, the task was to create an application that allows users to navigate through a list of products, add them to their cart, remove items from their cart, and view the items they have selected. This application is built using React Native and also uses AsyncStorage to handle local storage for the various items selected by the user.

##### App Functionalities:
* View Products:
This allows users to view a list of the products available along with their detailed descriptions and prices.
* Add to Cart:
This allows users to add desired products to their cart.
* Remove from Cart:
This allows users to remove products from their cart.
* View Cart:
This allows users to view all the items in their cart along with the total price.
* Fetch Data from API:
The app fetches product data from an external API to display on the HomeScreen.
* Product Preview:
Users can tap on a product to view detailed information on the ProductPreviewScreen.

##### Components:

* App Component
The App component is the main entry point of the application. It sets up the navigation between the HomeScreen and CartScreen using React Navigation. The configuration of the StatusBar is done here.

* HomeScreen Component
The HomeScreen component displays a list of products. Each product can be added to the cart by tapping the add button. The cart data is stored in AsyncStorage.

* ProductPreviewScreen Component
The ProductPreviewScreen component displays a detailed description about a selected product. Users can read the available information about the product here.

* CartScreen Component
The CartScreen component shows the items that have been added to the cart. Users can remove items from the cart with the aid of the remove button. The total price of the items in the cart is also calculated and displayed at the bottom of the screen.

##### Styling of the App:
The app uses StyleSheet for styling the components. The styles are designed to provide a clean and user-friendly interface. 

* Header:
 The header contains the app logo and navigation icons.
* Product Grid:
 This displays products in a grid layout with images, names, descriptions, and prices.
* Cart Items:
 This shows items in the cart with a remove button and total price calculation.
* Product Details:
This shows a detailed view of the product information.
##### Data Storage:
The app makes use of AsyncStorage to store the cart items locally on the device. This ensures that the cart data persists even when the app is closed and reopened. The data is stored in JSON format.

##### Navigation:
The app uses React Navigation to navigate the various screens. The Stack Navigator is used to manage the navigation stack hence providing a great user experience.

##### App Screenshots:
![](/shots/homescreen.jpg)
![](/shots/view.jpg)
![](/shots/checkout.jpg)
![](/shots/details.jpg)
![](/shots/details1.jpg)