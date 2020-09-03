# MerakiDashboardApi.LldpCdpApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDeviceLldpCdp**](LldpCdpApi.md#getDeviceLldpCdp) | **GET** /devices/{serial}/lldpCdp | List LLDP and CDP information for a device


<a name="getDeviceLldpCdp"></a>
# **getDeviceLldpCdp**
> Object getDeviceLldpCdp(serial)

List LLDP and CDP information for a device

List LLDP and CDP information for a device

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.LldpCdpApi();

var serial = "serial_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeviceLldpCdp(serial, callback);
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

