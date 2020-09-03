# MerakiDashboardApi.LiveToolsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blinkDeviceLeds**](LiveToolsApi.md#blinkDeviceLeds) | **POST** /devices/{serial}/blinkLeds | Blink the LEDs on a device
[**cycleDeviceSwitchPorts**](LiveToolsApi.md#cycleDeviceSwitchPorts) | **POST** /devices/{serial}/switch/ports/cycle | Cycle a set of switch ports
[**rebootDevice**](LiveToolsApi.md#rebootDevice) | **POST** /devices/{serial}/reboot | Reboot a device

<a name="blinkDeviceLeds"></a>
# **blinkDeviceLeds**
> Object blinkDeviceLeds(serial, opts)

Blink the LEDs on a device

Blink the LEDs on a device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.LiveToolsApi();
let serial = "serial_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body1() // Body1 | 
};
apiInstance.blinkDeviceLeds(serial, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **body** | [**Body1**](Body1.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cycleDeviceSwitchPorts"></a>
# **cycleDeviceSwitchPorts**
> Object cycleDeviceSwitchPorts(bodyserial)

Cycle a set of switch ports

Cycle a set of switch ports

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.LiveToolsApi();
let body = new MerakiDashboardApi.Body9(); // Body9 | 
let serial = "serial_example"; // String | 

apiInstance.cycleDeviceSwitchPorts(bodyserial, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body9**](Body9.md)|  | 
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="rebootDevice"></a>
# **rebootDevice**
> Object rebootDevice(serial)

Reboot a device

Reboot a device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.LiveToolsApi();
let serial = "serial_example"; // String | 

apiInstance.rebootDevice(serial, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

