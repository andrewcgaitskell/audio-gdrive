# audio-gdrive

Upload an wav file directly from ESP32 to Google Drive

## How to use

- Create local secrets file based on template
- Create a Google Script using upload.gs
- Configure the permission for everyone (even anonymous) to see the script
- Copy the WebApp URL and replace on myScript variable in secrets.h
- Update WiFi Credentials in Local secrets.h file
- Check that Google Key is correct in secrets.h

### reference links

https://www.youtube.com/watch?v=qmruNKeIN-o&t=844s


https://gitlab.unizar.es/761347/esp-idf/-/blob/v3.1-dev/examples/peripherals/i2s_adc_dac/main/app_main.c
