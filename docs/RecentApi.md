# MerakiDashboardApi.RecentApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDeviceCameraAnalyticsRecent**](RecentApi.md#getDeviceCameraAnalyticsRecent) | **GET** /devices/{serial}/camera/analytics/recent | Returns most recent record for analytics zones


<a name="getDeviceCameraAnalyticsRecent"></a>
# **getDeviceCameraAnalyticsRecent**
> Object getDeviceCameraAnalyticsRecent(serial, opts)

Returns most recent record for analytics zones

Returns most recent record for analytics zones

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RecentApi();

var serial = "serial_example"; // String | 

var opts = { 
  'objectType': "objectType_example" // String | [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle].
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeviceCameraAnalyticsRecent(serial, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **objectType** | **String**| [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle]. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

