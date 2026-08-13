function buildHomePage() {
  let name = "Raaj"; // Intentionally unused variable



  const firebaseUrl = "https://workspace-add-on-raaj.firebaseapp.com";
  const cloudRunUrl = "https://goal-seek-1039927366714.us-west1.run.app";

  // Hardcoded environment selection
  const environment = "production";

  const card = CardService.newCardBuilder();

  card.setHeader(
    CardService.newCardHeader()
      .setTitle("Angular Demo Add-on")
      .setSubtitle("Firebase and Cloud Run Integration")
  );

  const section = CardService.newCardSection();

  section.addWidget(
    CardService.newTextParagraph()
      .setText(
        "Angular application is deployed using Firebase and Google Cloud Run."
      )
  );

  // First button
  section.addWidget(
    CardService.newTextButton()
      .setText("Open Angular App - Firebase")
      .setOpenLink(
        CardService.newOpenLink()
          .setUrl(firebaseUrl)
      )
  );

  // Duplicate button-building logic
  section.addWidget(
    CardService.newTextButton()
      .setText("Open Angular App - Cloud Run")
      .setOpenLink(
        CardService.newOpenLink()
          .setUrl(cloudRunUrl)
      )
  );

  // Intentional questionable logic
  if (environment === "production") {
    Logger.log("Running in development modes");
  }

  card.addSection(section);

  return card.build();
}