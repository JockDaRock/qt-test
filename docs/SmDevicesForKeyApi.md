# MerakiDashboardApi.SmDevicesForKeyApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkPiiSmDevicesForKey**](SmDevicesForKeyApi.md#getNetworkPiiSmDevicesForKey) | **GET** /networks/{networkId}/pii/smDevicesForKey | Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.


<a name="getNetworkPiiSmDevicesForKey"></a>
# **getNetworkPiiSmDevicesForKey**
> Object getNetworkPiiSmDevicesForKey(networkId, opts)

Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.

Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.  ## ALTERNATE PATH  ``` /organizations/{organizationId}/pii/smDevicesForKey ```

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SmDevicesForKeyApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  'username': "username_example", // String | The username of a Systems Manager user
  'email': "email_example", // String | The email of a network user account or a Systems Manager device
  'mac': "mac_example", // String | The MAC of a network client device or a Systems Manager device
  'serial': "serial_example", // String | The serial of a Systems Manager device
  'imei': "imei_example", // String | The IMEI of a Systems Manager device
  'bluetoothMac': "bluetoothMac_example" // String | The MAC of a Bluetooth client
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkPiiSmDevicesForKey(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **username** | **String**| The username of a Systems Manager user | [optional] 
 **email** | **String**| The email of a network user account or a Systems Manager device | [optional] 
 **mac** | **String**| The MAC of a network client device or a Systems Manager device | [optional] 
 **serial** | **String**| The serial of a Systems Manager device | [optional] 
 **imei** | **String**| The IMEI of a Systems Manager device | [optional] 
 **bluetoothMac** | **String**| The MAC of a Bluetooth client | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

