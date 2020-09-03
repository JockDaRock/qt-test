# MerakiDashboardApi.NetflowApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkNetflow**](NetflowApi.md#getNetworkNetflow) | **GET** /networks/{networkId}/netflow | Return the NetFlow traffic reporting settings for a network
[**updateNetworkNetflow**](NetflowApi.md#updateNetworkNetflow) | **PUT** /networks/{networkId}/netflow | Update the NetFlow traffic reporting settings for a network


<a name="getNetworkNetflow"></a>
# **getNetworkNetflow**
> Object getNetworkNetflow(networkId)

Return the NetFlow traffic reporting settings for a network

Return the NetFlow traffic reporting settings for a network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.NetflowApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkNetflow(networkId, callback);
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

<a name="updateNetworkNetflow"></a>
# **updateNetworkNetflow**
> Object updateNetworkNetflow(networkId, opts)

Update the NetFlow traffic reporting settings for a network

Update the NetFlow traffic reporting settings for a network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.NetflowApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  'updateNetworkNetflow': new MerakiDashboardApi.UpdateNetworkNetflow() // UpdateNetworkNetflow | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkNetflow(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **updateNetworkNetflow** | [**UpdateNetworkNetflow**](UpdateNetworkNetflow.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

