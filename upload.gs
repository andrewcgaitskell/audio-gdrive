function doPost(e) {
  var data = Utilities.base64Decode(e.parameters.data);
  var fileName = Utilities.formatDate(new Date(), "GMT-3", "yyyyMMdd_HHmmss")+".jpg";
  var blob = Utilities.newBlob(data, e.parameters.mimetype, fileName );
  
  
   // Save the photo to Google Drive
  var folder, folders = DriveApp.getFoldersByName("ESP32-Audio");
  if (folders.hasNext()) {
    folder = folders.next();
  } else {
    folder = DriveApp.createFolder("ESP32-Audio");
  }
  var file = folder.createFile(blob); 
  return ContentService.createTextOutput('Finit-o')
}
