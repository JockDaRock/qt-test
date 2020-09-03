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
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.QualityAndRetentionApi();
let serial = "serial_example"; // String | 

apiInstance.getDeviceCameraQualityAndRetention(serial, (error, data, response) => {
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

<a name="updateDeviceCameraQualityAndRetention"></a>
# **updateDeviceCameraQualityAndRetention**
> Object updateDeviceCameraQualityAndRetention(serial, opts)

Update quality and retention settings for the given camera

Update quality and retention settings for the given camera

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.QualityAndRetentionApi();
let serial = "serial_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body3() // Body3 | 
};
apiInstance.updateDeviceCameraQualityAndRetention(serial, opts, (error, data, response) => {
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
 **body** | [**Body3**](Body3.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

