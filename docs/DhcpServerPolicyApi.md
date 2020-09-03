# MerakiDashboardApi.DhcpServerPolicyApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkSwitchDhcpServerPolicy**](DhcpServerPolicyApi.md#getNetworkSwitchDhcpServerPolicy) | **GET** /networks/{networkId}/switch/dhcpServerPolicy | Return the DHCP server policy
[**updateNetworkSwitchDhcpServerPolicy**](DhcpServerPolicyApi.md#updateNetworkSwitchDhcpServerPolicy) | **PUT** /networks/{networkId}/switch/dhcpServerPolicy | Update the DHCP server policy


<a name="getNetworkSwitchDhcpServerPolicy"></a>
# **getNetworkSwitchDhcpServerPolicy**
> Object getNetworkSwitchDhcpServerPolicy(networkId)

Return the DHCP server policy

Return the DHCP server policy

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.DhcpServerPolicyApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSwitchDhcpServerPolicy(networkId, callback);
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

<a name="updateNetworkSwitchDhcpServerPolicy"></a>
# **updateNetworkSwitchDhcpServerPolicy**
> Object updateNetworkSwitchDhcpServerPolicy(networkId, opts)

Update the DHCP server policy

Update the DHCP server policy

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.DhcpServerPolicyApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  'updateNetworkSwitchDhcpServerPolicy': new MerakiDashboardApi.UpdateNetworkSwitchDhcpServerPolicy() // UpdateNetworkSwitchDhcpServerPolicy | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkSwitchDhcpServerPolicy(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **updateNetworkSwitchDhcpServerPolicy** | [**UpdateNetworkSwitchDhcpServerPolicy**](UpdateNetworkSwitchDhcpServerPolicy.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

