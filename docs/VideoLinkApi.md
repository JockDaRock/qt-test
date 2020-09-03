# MerakiDashboardApi.VideoLinkApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDeviceCameraVideoLink**](VideoLinkApi.md#getDeviceCameraVideoLink) | **GET** /devices/{serial}/camera/videoLink | Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.


<a name="getDeviceCameraVideoLink"></a>
# **getDeviceCameraVideoLink**
> Object getDeviceCameraVideoLink(serial, opts)

Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.

Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.VideoLinkApi();

var serial = "serial_example"; // String | 

var opts = { 
  'timestamp': new Date("2013-10-20T19:20:30+01:00") // Date | [optional] The video link will start at this time. The timestamp should be a string in ISO8601 format. If no timestamp is specified, we will assume current time.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeviceCameraVideoLink(serial, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **timestamp** | **Date**| [optional] The video link will start at this time. The timestamp should be a string in ISO8601 format. If no timestamp is specified, we will assume current time. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

