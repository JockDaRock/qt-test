# MerakiDashboardApi.AccessControlListsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkSwitchAccessControlLists**](AccessControlListsApi.md#getNetworkSwitchAccessControlLists) | **GET** /networks/{networkId}/switch/accessControlLists | Return the access control lists for a MS network
[**updateNetworkSwitchAccessControlLists**](AccessControlListsApi.md#updateNetworkSwitchAccessControlLists) | **PUT** /networks/{networkId}/switch/accessControlLists | Update the access control lists for a MS network


<a name="getNetworkSwitchAccessControlLists"></a>
# **getNetworkSwitchAccessControlLists**
> Object getNetworkSwitchAccessControlLists(networkId)

Return the access control lists for a MS network

Return the access control lists for a MS network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.AccessControlListsApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSwitchAccessControlLists(networkId, callback);
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

<a name="updateNetworkSwitchAccessControlLists"></a>
# **updateNetworkSwitchAccessControlLists**
> Object updateNetworkSwitchAccessControlLists(networkId, updateNetworkSwitchAccessControlLists)

Update the access control lists for a MS network

Update the access control lists for a MS network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.AccessControlListsApi();

var networkId = "networkId_example"; // String | 

var updateNetworkSwitchAccessControlLists = new MerakiDashboardApi.UpdateNetworkSwitchAccessControlLists(); // UpdateNetworkSwitchAccessControlLists | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkSwitchAccessControlLists(networkId, updateNetworkSwitchAccessControlLists, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **updateNetworkSwitchAccessControlLists** | [**UpdateNetworkSwitchAccessControlLists**](UpdateNetworkSwitchAccessControlLists.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

