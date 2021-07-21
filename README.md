# esp32cam-gdrive

Upload an image directly from ESP32-CAM to Google Drive

## How to use

- Create local secrets file based on template
- Create a Google Script using upload.gs
- Configure the permission for everyone (even anonymous) to see the script
- Copy the WebApp URL and replace on myScript variable in secrets.h
- Update WiFi Credentials in Local secrets.h file
- Check that Google Key is correct in secrets.h

