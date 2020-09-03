# MerakiDashboardApi.SecurityCentersApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkSmDeviceSecurityCenters**](SecurityCentersApi.md#getNetworkSmDeviceSecurityCenters) | **GET** /networks/{networkId}/sm/devices/{deviceId}/securityCenters | List the security centers on a device


<a name="getNetworkSmDeviceSecurityCenters"></a>
# **getNetworkSmDeviceSecurityCenters**
> Object getNetworkSmDeviceSecurityCenters(networkId, deviceId)

List the security centers on a device

List the security centers on a device

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SecurityCentersApi();

var networkId = "networkId_example"; // String | 

var deviceId = "deviceId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSmDeviceSecurityCenters(networkId, deviceId, callback);
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

