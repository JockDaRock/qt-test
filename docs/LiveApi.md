# MerakiDashboardApi.LiveApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDeviceCameraAnalyticsLive**](LiveApi.md#getDeviceCameraAnalyticsLive) | **GET** /devices/{serial}/camera/analytics/live | Returns live state from camera of analytics zones

<a name="getDeviceCameraAnalyticsLive"></a>
# **getDeviceCameraAnalyticsLive**
> Object getDeviceCameraAnalyticsLive(serial)

Returns live state from camera of analytics zones

Returns live state from camera of analytics zones

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.LiveApi();
let serial = "serial_example"; // String | 

apiInstance.getDeviceCameraAnalyticsLive(serial, (error, data, response) => {
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
