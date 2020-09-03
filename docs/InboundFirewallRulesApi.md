# MerakiDashboardApi.InboundFirewallRulesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkApplianceFirewallInboundFirewallRules**](InboundFirewallRulesApi.md#getNetworkApplianceFirewallInboundFirewallRules) | **GET** /networks/{networkId}/appliance/firewall/inboundFirewallRules | Return the inbound firewall rules for an MX network
[**updateNetworkApplianceFirewallInboundFirewallRules**](InboundFirewallRulesApi.md#updateNetworkApplianceFirewallInboundFirewallRules) | **PUT** /networks/{networkId}/appliance/firewall/inboundFirewallRules | Update the inbound firewall rules of an MX network


<a name="getNetworkApplianceFirewallInboundFirewallRules"></a>
# **getNetworkApplianceFirewallInboundFirewallRules**
> Object getNetworkApplianceFirewallInboundFirewallRules(networkId)

Return the inbound firewall rules for an MX network

Return the inbound firewall rules for an MX network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.InboundFirewallRulesApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkApplianceFirewallInboundFirewallRules(networkId, callback);
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

<a name="updateNetworkApplianceFirewallInboundFirewallRules"></a>
# **updateNetworkApplianceFirewallInboundFirewallRules**
> Object updateNetworkApplianceFirewallInboundFirewallRules(networkId, opts)

Update the inbound firewall rules of an MX network

Update the inbound firewall rules of an MX network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.InboundFirewallRulesApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  'updateNetworkApplianceFirewallInboundFirewallRules': new MerakiDashboardApi.UpdateNetworkApplianceFirewallInboundFirewallRules() // UpdateNetworkApplianceFirewallInboundFirewallRules | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkApplianceFirewallInboundFirewallRules(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **updateNetworkApplianceFirewallInboundFirewallRules** | [**UpdateNetworkApplianceFirewallInboundFirewallRules**](UpdateNetworkApplianceFirewallInboundFirewallRules.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

