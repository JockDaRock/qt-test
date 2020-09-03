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
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.PerformanceApi();
let serial = "serial_example"; // String | 

apiInstance.getDeviceAppliancePerformance(serial, (error, data, response) => {
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

