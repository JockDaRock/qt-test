# MerakiDashboardApi.L3FirewallRulesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkApplianceFirewallL3FirewallRules**](L3FirewallRulesApi.md#getNetworkApplianceFirewallL3FirewallRules) | **GET** /networks/{networkId}/appliance/firewall/l3FirewallRules | Return the L3 firewall rules for an MX network
[**getNetworkWirelessSsidFirewallL3FirewallRules**](L3FirewallRulesApi.md#getNetworkWirelessSsidFirewallL3FirewallRules) | **GET** /networks/{networkId}/wireless/ssids/{number}/firewall/l3FirewallRules | Return the L3 firewall rules for an SSID on an MR network
[**updateNetworkApplianceFirewallL3FirewallRules**](L3FirewallRulesApi.md#updateNetworkApplianceFirewallL3FirewallRules) | **PUT** /networks/{networkId}/appliance/firewall/l3FirewallRules | Update the L3 firewall rules of an MX network
[**updateNetworkWirelessSsidFirewallL3FirewallRules**](L3FirewallRulesApi.md#updateNetworkWirelessSsidFirewallL3FirewallRules) | **PUT** /networks/{networkId}/wireless/ssids/{number}/firewall/l3FirewallRules | Update the L3 firewall rules of an SSID on an MR network

<a name="getNetworkApplianceFirewallL3FirewallRules"></a>
# **getNetworkApplianceFirewallL3FirewallRules**
> Object getNetworkApplianceFirewallL3FirewallRules(networkId)

Return the L3 firewall rules for an MX network

Return the L3 firewall rules for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.L3FirewallRulesApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceFirewallL3FirewallRules(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWirelessSsidFirewallL3FirewallRules"></a>
# **getNetworkWirelessSsidFirewallL3FirewallRules**
> Object getNetworkWirelessSsidFirewallL3FirewallRules(networkId, _number)

Return the L3 firewall rules for an SSID on an MR network

Return the L3 firewall rules for an SSID on an MR network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.L3FirewallRulesApi();
let networkId = "networkId_example"; // String | 
let _number = "_number_example"; // String | 

apiInstance.getNetworkWirelessSsidFirewallL3FirewallRules(networkId, _number, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateNetworkApplianceFirewallL3FirewallRules"></a>
# **updateNetworkApplianceFirewallL3FirewallRules**
> Object updateNetworkApplianceFirewallL3FirewallRules(networkId, opts)

Update the L3 firewall rules of an MX network

Update the L3 firewall rules of an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.L3FirewallRulesApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body26() // Body26 | 
};
apiInstance.updateNetworkApplianceFirewallL3FirewallRules(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body26**](Body26.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkWirelessSsidFirewallL3FirewallRules"></a>
# **updateNetworkWirelessSsidFirewallL3FirewallRules**
> Object updateNetworkWirelessSsidFirewallL3FirewallRules(networkId_number, opts)

Update the L3 firewall rules of an SSID on an MR network

Update the L3 firewall rules of an SSID on an MR network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.L3FirewallRulesApi();
let networkId = "networkId_example"; // String | 
let _number = "_number_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body114() // Body114 | 
};
apiInstance.updateNetworkWirelessSsidFirewallL3FirewallRules(networkId_number, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **_number** | **String**|  | 
 **body** | [**Body114**](Body114.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

