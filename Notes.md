# Misc Course Notes

## Components

### Lists

[Basics: Using List Views](https://facebook.github.io/react-native/docs/using-a-listview)

If a list of components (e.g. a feed) is shown in a view, the user will not be able to scroll through it.

ScrollView is an option, but renders the entire list, regardless of whether or not the user can see the items.

FlatList:
>The FlatList component displays a scrolling list of changing, but similarly structured, data. FlatList works well for long lists of data, where the number of items might change over time. Unlike the more generic ScrollView, the FlatList only renders elements that are currently showing on the screen, not all the elements at once.
>The FlatList component requires two props: data and renderItem. data is the source of information for the list. renderItem takes one item from the source and returns a formatted component to render.
>This example creates a simple FlatList of hardcoded data. Each item in the data props is rendered as a Text component. The FlatListBasics component then renders the FlatList and all Text components.

SectionList:
>If you want to render a set of data broken into logical sections, maybe with section headers, similar to UITableViews on iOS, then a SectionList is the way to go.
>One of the most common uses for a list view is displaying data that you fetch from a server.

### Forms

Forms and related components:
>Forms in React Native are just like the forms in React that you already know: the state of input form elements is controlled by the React component that renders that form. That is, form values are held in local component state, making state the "source of truth" for that form.

TextInput:
> TextInput is a basic component that allows the user to enter text. It has an onChangeText prop that takes a function to be called every time the text changed, and an onSubmitEditing prop that takes a function to be called when the text is submitted.
[Basics: Handling Text Input](https://facebook.github.io/react-native/docs/handling-text-input)

KeyboardAvoidingView:
>It is a component to solve the common problem of views that need to move out of the way of the virtual keyboard. It can automatically adjust either its position or bottom padding based on the position of the keyboard.
[Components: KeyboardAvoidingView](https://facebook.github.io/react-native/docs/keyboardavoidingview)

Slider:
>A component used to select a single value from a range of values
[Components: Slider](https://facebook.github.io/react-native/docs/slider)

Switch:
>Renders a boolean input.
>This is a controlled component that requires an onValueChange callback that updates the value prop in order for the component to reflect user actions. If the value prop is not updated, the component will continue to render the supplied value prop instead of the expected result of any user actions.
[Components: Switch](https://facebook.github.io/react-native/docs/switch)

### Images

Image:
>A React component for displaying different types of images, including network images, static resources, temporary local images, and images from local disk, such as the camera roll.
>The example in the link below reviews fetching and displaying an image from local storage as well as one from network and even from data provided in the 'data:' uri scheme.
>Note that for network and data images, you will need to manually specify the dimensions of your image!
[Component: Image](https://facebook.github.io/react-native/docs/image)

More on Images:
[Guides: Images](https://facebook.github.io/react-native/docs/images)

### Other Components the Course Recommends Checking out

ActivityIndicator:
>Displays a circular loading indicator.
[Components: ActivityIndicator](https://facebook.github.io/react-native/docs/activityindicator.html)

Picker:
>Renders the native picker component on iOS and Android.
[Components: Picker](https://facebook.github.io/react-native/docs/picker.html)

WebView:
>WebView renders web content in a native view.
>Warning Please use the react-native-community/react-native-webview fork of this component instead. To reduce the surface area of React Native, WebView is going to be removed from the React Native core. For more information, please read The Slimmening proposal.
[Components: WebView](https://facebook.github.io/react-native/docs/webview.html)

Modal:
>The Modal component is a simple way to present content above an enclosing view.
>Note: If you need more control over how to present modals over the rest of your app, then consider using a top-level Navigator.
[Components: Modal](https://facebook.github.io/react-native/docs/modal.html)

## APIs

### AsyncStorage

AsyncStorage:
Used in the course as a pseudo database...

>AsyncStorage is a simple, unencrypted, asynchronous, persistent, key-value storage system that is global to the app. It should be used instead of LocalStorage.
>It is recommended that you use an abstraction on top of AsyncStorage instead of AsyncStorage directly for anything more than light usage since it operates globally.
>On iOS, AsyncStorage is backed by native code that stores small values in a serialized dictionary and larger values in separate files. On Android, AsyncStorage will use either RocksDB or SQLite based on what is available.
>The AsyncStorage JavaScript code is a simple facade that provides a clear JavaScript API, real Error objects, and simple non-multi functions. Each method in the API returns a Promise object.
[APIs: AsyncStorage](https://facebook.github.io/react-native/docs/asyncstorage)

## StyleSheet

StyleSheet:
>A StyleSheet is an abstraction similar to CSS StyleSheets
>Code quality:
>By moving styles away from the render function, you're making the code easier to understand.
>Naming the styles is a good way to add meaning to the low level components in the render function.
>Performance:
>Making a stylesheet from a style object makes it possible to refer to it by ID instead of creating a new style object every time.
>It also allows to send the style only once through the bridge. All subsequent uses are going to refer an id (not implemented yet).
[APIs: StyleSheet](https://facebook.github.io/react-native/docs/stylesheet)
