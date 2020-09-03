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
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.LiveToolsApi();

var serial = "serial_example"; // String | 

var opts = { 
  'blinkDeviceLeds': new MerakiDashboardApi.BlinkDeviceLeds() // BlinkDeviceLeds | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.blinkDeviceLeds(serial, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **blinkDeviceLeds** | [**BlinkDeviceLeds**](BlinkDeviceLeds.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cycleDeviceSwitchPorts"></a>
# **cycleDeviceSwitchPorts**
> Object cycleDeviceSwitchPorts(serial, cycleDeviceSwitchPorts)

Cycle a set of switch ports

Cycle a set of switch ports

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.LiveToolsApi();

var serial = "serial_example"; // String | 

var cycleDeviceSwitchPorts = new MerakiDashboardApi.CycleDeviceSwitchPorts(); // CycleDeviceSwitchPorts | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cycleDeviceSwitchPorts(serial, cycleDeviceSwitchPorts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **cycleDeviceSwitchPorts** | [**CycleDeviceSwitchPorts**](CycleDeviceSwitchPorts.md)|  | 

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
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.LiveToolsApi();

var serial = "serial_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.rebootDevice(serial, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

