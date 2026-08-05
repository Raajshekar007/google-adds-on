function onOpen() {
SpreadsheetApp.getUi()
.createMenu("Demo")
.addItem("Run", "hello")
.addToUi();
}

function hello() {
SpreadsheetApp.getUi()
.alert("Addon Working !!");
}