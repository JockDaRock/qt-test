# MerakiDashboardApi.MtuApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkSwitchMtu**](MtuApi.md#getNetworkSwitchMtu) | **GET** /networks/{networkId}/switch/mtu | Return the MTU configuration
[**updateNetworkSwitchMtu**](MtuApi.md#updateNetworkSwitchMtu) | **PUT** /networks/{networkId}/switch/mtu | Update the MTU configuration


<a name="getNetworkSwitchMtu"></a>
# **getNetworkSwitchMtu**
> Object getNetworkSwitchMtu(networkId)

Return the MTU configuration

Return the MTU configuration

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.MtuApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSwitchMtu(networkId, callback);
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

<a name="updateNetworkSwitchMtu"></a>
# **updateNetworkSwitchMtu**
> Object updateNetworkSwitchMtu(networkId, opts)

Update the MTU configuration

Update the MTU configuration

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.MtuApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  'updateNetworkSwitchMtu': new MerakiDashboardApi.UpdateNetworkSwitchMtu() // UpdateNetworkSwitchMtu | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkSwitchMtu(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **updateNetworkSwitchMtu** | [**UpdateNetworkSwitchMtu**](UpdateNetworkSwitchMtu.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

