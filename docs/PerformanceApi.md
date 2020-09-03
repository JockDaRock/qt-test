# MerakiDashboardApi.PerformanceApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDeviceAppliancePerformance**](PerformanceApi.md#getDeviceAppliancePerformance) | **GET** /devices/{serial}/appliance/performance | Return the performance score for a single device. Only primary MX devices supported. If no data is available, a 204 error code is returned.


<a name="getDeviceAppliancePerformance"></a>
# **getDeviceAppliancePerformance**
> Object getDeviceAppliancePerformance(serial)

Return the performance score for a single device. Only primary MX devices supported. If no data is available, a 204 error code is returned.

Return the performance score for a single device. Only primary MX devices supported. If no data is available, a 204 error code is returned.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.PerformanceApi();

var serial = "serial_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeviceAppliancePerformance(serial, callback);
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

