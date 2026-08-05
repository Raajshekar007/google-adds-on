function buildHomePage() {

const card = CardService.newCardBuilder();

card.setHeader(
CardService.newCardHeader()
.setTitle("Angular Demo Add-on")
.setSubtitle("Firebase Integration")
);

card.addSection(
CardService.newCardSection()

.addWidget(
CardService.newTextParagraph()
.setText("Angular application is deployed in Firebase.")
)

.addWidget(
CardService.newTextButton()
.setText("Open Angular App")
.setOpenLink(
CardService.newOpenLink()
.setUrl("https://workspace-add-on-raaj.firebaseapp.com")
)
)
);

return card.build();
}