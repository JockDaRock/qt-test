# MerakiDashboardApi.QualityAndRetentionApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDeviceCameraQualityAndRetention**](QualityAndRetentionApi.md#getDeviceCameraQualityAndRetention) | **GET** /devices/{serial}/camera/qualityAndRetention | Returns quality and retention settings for the given camera
[**updateDeviceCameraQualityAndRetention**](QualityAndRetentionApi.md#updateDeviceCameraQualityAndRetention) | **PUT** /devices/{serial}/camera/qualityAndRetention | Update quality and retention settings for the given camera


<a name="getDeviceCameraQualityAndRetention"></a>
# **getDeviceCameraQualityAndRetention**
> Object getDeviceCameraQualityAndRetention(serial)

Returns quality and retention settings for the given camera

Returns quality and retention settings for the given camera

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.QualityAndRetentionApi();

var serial = "serial_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeviceCameraQualityAndRetention(serial, callback);
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

<a name="updateDeviceCameraQualityAndRetention"></a>
# **updateDeviceCameraQualityAndRetention**
> Object updateDeviceCameraQualityAndRetention(serial, opts)

Update quality and retention settings for the given camera

Update quality and retention settings for the given camera

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.QualityAndRetentionApi();

var serial = "serial_example"; // String | 

var opts = { 
  'updateDeviceCameraQualityAndRetention': new MerakiDashboardApi.UpdateDeviceCameraQualityAndRetention() // UpdateDeviceCameraQualityAndRetention | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDeviceCameraQualityAndRetention(serial, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **updateDeviceCameraQualityAndRetention** | [**UpdateDeviceCameraQualityAndRetention**](UpdateDeviceCameraQualityAndRetention.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

