# MerakiDashboardApi.L7FirewallRulesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkApplianceFirewallL7FirewallRules**](L7FirewallRulesApi.md#getNetworkApplianceFirewallL7FirewallRules) | **GET** /networks/{networkId}/appliance/firewall/l7FirewallRules | List the MX L7 firewall rules for an MX network
[**getNetworkApplianceFirewallL7FirewallRulesApplicationCategories**](L7FirewallRulesApi.md#getNetworkApplianceFirewallL7FirewallRulesApplicationCategories) | **GET** /networks/{networkId}/appliance/firewall/l7FirewallRules/applicationCategories | Return the L7 firewall application categories and their associated applications for an MX network
[**getNetworkWirelessSsidFirewallL7FirewallRules**](L7FirewallRulesApi.md#getNetworkWirelessSsidFirewallL7FirewallRules) | **GET** /networks/{networkId}/wireless/ssids/{number}/firewall/l7FirewallRules | Return the L7 firewall rules for an SSID on an MR network
[**updateNetworkApplianceFirewallL7FirewallRules**](L7FirewallRulesApi.md#updateNetworkApplianceFirewallL7FirewallRules) | **PUT** /networks/{networkId}/appliance/firewall/l7FirewallRules | Update the MX L7 firewall rules for an MX network
[**updateNetworkWirelessSsidFirewallL7FirewallRules**](L7FirewallRulesApi.md#updateNetworkWirelessSsidFirewallL7FirewallRules) | **PUT** /networks/{networkId}/wireless/ssids/{number}/firewall/l7FirewallRules | Update the L7 firewall rules of an SSID on an MR network


<a name="getNetworkApplianceFirewallL7FirewallRules"></a>
# **getNetworkApplianceFirewallL7FirewallRules**
> Object getNetworkApplianceFirewallL7FirewallRules(networkId)

List the MX L7 firewall rules for an MX network

List the MX L7 firewall rules for an MX network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.L7FirewallRulesApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkApplianceFirewallL7FirewallRules(networkId, callback);
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

<a name="getNetworkApplianceFirewallL7FirewallRulesApplicationCategories"></a>
# **getNetworkApplianceFirewallL7FirewallRulesApplicationCategories**
> Object getNetworkApplianceFirewallL7FirewallRulesApplicationCategories(networkId)

Return the L7 firewall application categories and their associated applications for an MX network

Return the L7 firewall application categories and their associated applications for an MX network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.L7FirewallRulesApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkApplianceFirewallL7FirewallRulesApplicationCategories(networkId, callback);
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

<a name="getNetworkWirelessSsidFirewallL7FirewallRules"></a>
# **getNetworkWirelessSsidFirewallL7FirewallRules**
> Object getNetworkWirelessSsidFirewallL7FirewallRules(networkId, _number)

Return the L7 firewall rules for an SSID on an MR network

Return the L7 firewall rules for an SSID on an MR network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.L7FirewallRulesApi();

var networkId = "networkId_example"; // String | 

var _number = "_number_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkWirelessSsidFirewallL7FirewallRules(networkId, _number, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **_number** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkApplianceFirewallL7FirewallRules"></a>
# **updateNetworkApplianceFirewallL7FirewallRules**
> Object updateNetworkApplianceFirewallL7FirewallRules(networkId, opts)

Update the MX L7 firewall rules for an MX network

Update the MX L7 firewall rules for an MX network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.L7FirewallRulesApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  'updateNetworkApplianceFirewallL7FirewallRules': new MerakiDashboardApi.UpdateNetworkApplianceFirewallL7FirewallRules() // UpdateNetworkApplianceFirewallL7FirewallRules | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkApplianceFirewallL7FirewallRules(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **updateNetworkApplianceFirewallL7FirewallRules** | [**UpdateNetworkApplianceFirewallL7FirewallRules**](UpdateNetworkApplianceFirewallL7FirewallRules.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkWirelessSsidFirewallL7FirewallRules"></a>
# **updateNetworkWirelessSsidFirewallL7FirewallRules**
> Object updateNetworkWirelessSsidFirewallL7FirewallRules(networkId, _number, opts)

Update the L7 firewall rules of an SSID on an MR network

Update the L7 firewall rules of an SSID on an MR network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.L7FirewallRulesApi();

var networkId = "networkId_example"; // String | 

var _number = "_number_example"; // String | 

var opts = { 
  'updateNetworkWirelessSsidFirewallL7FirewallRules': new MerakiDashboardApi.UpdateNetworkWirelessSsidFirewallL7FirewallRules() // UpdateNetworkWirelessSsidFirewallL7FirewallRules | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkWirelessSsidFirewallL7FirewallRules(networkId, _number, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **_number** | **String**|  | 
 **updateNetworkWirelessSsidFirewallL7FirewallRules** | [**UpdateNetworkWirelessSsidFirewallL7FirewallRules**](UpdateNetworkWirelessSsidFirewallL7FirewallRules.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

