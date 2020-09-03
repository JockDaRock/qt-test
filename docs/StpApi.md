# MerakiDashboardApi.StpApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkSwitchStp**](StpApi.md#getNetworkSwitchStp) | **GET** /networks/{networkId}/switch/stp | Returns STP settings
[**updateNetworkSwitchStp**](StpApi.md#updateNetworkSwitchStp) | **PUT** /networks/{networkId}/switch/stp | Updates STP settings


<a name="getNetworkSwitchStp"></a>
# **getNetworkSwitchStp**
> Object getNetworkSwitchStp(networkId)

Returns STP settings

Returns STP settings

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.StpApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSwitchStp(networkId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSwitchStp"></a>
# **updateNetworkSwitchStp**
> Object updateNetworkSwitchStp(networkId, opts)

Updates STP settings

Updates STP settings

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.StpApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  'updateNetworkSwitchStp': new MerakiDashboardApi.UpdateNetworkSwitchStp() // UpdateNetworkSwitchStp | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkSwitchStp(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **updateNetworkSwitchStp** | [**UpdateNetworkSwitchStp**](UpdateNetworkSwitchStp.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

