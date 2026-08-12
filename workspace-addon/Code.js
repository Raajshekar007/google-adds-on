function buildHomePage() {
let name="Raaj"
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
// .setUrl("https://workspace-add-on-raaj.firebaseapp.com") // firebase hosting url non google managed services
.setUrl("https://goal-seek-1039927366714.us-west1.run.app") // Autobuild google managed services (Clopud build,cloud run,Artifact registry)
)
)
);
return card.build();
}