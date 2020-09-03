# MerakiDashboardApi.FieldsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**updateNetworkSmDevicesFields**](FieldsApi.md#updateNetworkSmDevicesFields) | **PUT** /networks/{networkId}/sm/devices/fields | Modify the fields of a device


<a name="updateNetworkSmDevicesFields"></a>
# **updateNetworkSmDevicesFields**
> Object updateNetworkSmDevicesFields(networkId, updateNetworkSmDevicesFields)

Modify the fields of a device

Modify the fields of a device

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.FieldsApi();

var networkId = "networkId_example"; // String | 

var updateNetworkSmDevicesFields = new MerakiDashboardApi.UpdateNetworkSmDevicesFields(); // UpdateNetworkSmDevicesFields | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkSmDevicesFields(networkId, updateNetworkSmDevicesFields, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **updateNetworkSmDevicesFields** | [**UpdateNetworkSmDevicesFields**](UpdateNetworkSmDevicesFields.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

