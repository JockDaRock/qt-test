# MerakiDashboardApi.RadioApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDeviceWirelessRadioSettings**](RadioApi.md#getDeviceWirelessRadioSettings) | **GET** /devices/{serial}/wireless/radio/settings | Return the radio settings of a device
[**updateDeviceWirelessRadioSettings**](RadioApi.md#updateDeviceWirelessRadioSettings) | **PUT** /devices/{serial}/wireless/radio/settings | Update the radio settings of a device


<a name="getDeviceWirelessRadioSettings"></a>
# **getDeviceWirelessRadioSettings**
> Object getDeviceWirelessRadioSettings(serial)

Return the radio settings of a device

Return the radio settings of a device

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RadioApi();

var serial = "serial_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeviceWirelessRadioSettings(serial, callback);
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

<a name="updateDeviceWirelessRadioSettings"></a>
# **updateDeviceWirelessRadioSettings**
> Object updateDeviceWirelessRadioSettings(serial, opts)

Update the radio settings of a device

Update the radio settings of a device

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RadioApi();

var serial = "serial_example"; // String | 

var opts = { 
  'updateDeviceWirelessRadioSettings': new MerakiDashboardApi.UpdateDeviceWirelessRadioSettings() // UpdateDeviceWirelessRadioSettings | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDeviceWirelessRadioSettings(serial, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **updateDeviceWirelessRadioSettings** | [**UpdateDeviceWirelessRadioSettings**](UpdateDeviceWirelessRadioSettings.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

