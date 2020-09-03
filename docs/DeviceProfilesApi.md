# MerakiDashboardApi.DeviceProfilesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkSmDeviceDeviceProfiles**](DeviceProfilesApi.md#getNetworkSmDeviceDeviceProfiles) | **GET** /networks/{networkId}/sm/devices/{deviceId}/deviceProfiles | Get the profiles associated with a device
[**getNetworkSmUserDeviceProfiles**](DeviceProfilesApi.md#getNetworkSmUserDeviceProfiles) | **GET** /networks/{networkId}/sm/users/{userId}/deviceProfiles | Get the profiles associated with a user


<a name="getNetworkSmDeviceDeviceProfiles"></a>
# **getNetworkSmDeviceDeviceProfiles**
> Object getNetworkSmDeviceDeviceProfiles(networkId, deviceId)

Get the profiles associated with a device

Get the profiles associated with a device

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.DeviceProfilesApi();

var networkId = "networkId_example"; // String | 

var deviceId = "deviceId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSmDeviceDeviceProfiles(networkId, deviceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **deviceId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkSmUserDeviceProfiles"></a>
# **getNetworkSmUserDeviceProfiles**
> Object getNetworkSmUserDeviceProfiles(networkId, userId)

Get the profiles associated with a user

Get the profiles associated with a user

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.DeviceProfilesApi();

var networkId = "networkId_example"; // String | 

var userId = "userId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSmUserDeviceProfiles(networkId, userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **userId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

