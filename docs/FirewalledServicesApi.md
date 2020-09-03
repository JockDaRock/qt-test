# MerakiDashboardApi.FirewalledServicesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkApplianceFirewallFirewalledService**](FirewalledServicesApi.md#getNetworkApplianceFirewallFirewalledService) | **GET** /networks/{networkId}/appliance/firewall/firewalledServices/{service} | Return the accessibility settings of the given service (&#x27;ICMP&#x27;, &#x27;web&#x27;, or &#x27;SNMP&#x27;)
[**getNetworkApplianceFirewallFirewalledServices**](FirewalledServicesApi.md#getNetworkApplianceFirewallFirewalledServices) | **GET** /networks/{networkId}/appliance/firewall/firewalledServices | List the appliance services and their accessibility rules
[**updateNetworkApplianceFirewallFirewalledService**](FirewalledServicesApi.md#updateNetworkApplianceFirewallFirewalledService) | **PUT** /networks/{networkId}/appliance/firewall/firewalledServices/{service} | Updates the accessibility settings for the given service (&#x27;ICMP&#x27;, &#x27;web&#x27;, or &#x27;SNMP&#x27;)

<a name="getNetworkApplianceFirewallFirewalledService"></a>
# **getNetworkApplianceFirewallFirewalledService**
> Object getNetworkApplianceFirewallFirewalledService(networkId, service)

Return the accessibility settings of the given service (&#x27;ICMP&#x27;, &#x27;web&#x27;, or &#x27;SNMP&#x27;)

Return the accessibility settings of the given service (&#x27;ICMP&#x27;, &#x27;web&#x27;, or &#x27;SNMP&#x27;)

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.FirewalledServicesApi();
let networkId = "networkId_example"; // String | 
let service = "service_example"; // String | 

apiInstance.getNetworkApplianceFirewallFirewalledService(networkId, service, (error, data, response) => {
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
 **service** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkApplianceFirewallFirewalledServices"></a>
# **getNetworkApplianceFirewallFirewalledServices**
> Object getNetworkApplianceFirewallFirewalledServices(networkId)

List the appliance services and their accessibility rules

List the appliance services and their accessibility rules

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.FirewalledServicesApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceFirewallFirewalledServices(networkId, (error, data, response) => {
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

<a name="updateNetworkApplianceFirewallFirewalledService"></a>
# **updateNetworkApplianceFirewallFirewalledService**
> Object updateNetworkApplianceFirewallFirewalledService(bodynetworkIdservice)

Updates the accessibility settings for the given service (&#x27;ICMP&#x27;, &#x27;web&#x27;, or &#x27;SNMP&#x27;)

Updates the accessibility settings for the given service (&#x27;ICMP&#x27;, &#x27;web&#x27;, or &#x27;SNMP&#x27;)

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.FirewalledServicesApi();
let body = new MerakiDashboardApi.Body24(); // Body24 | 
let networkId = "networkId_example"; // String | 
let service = "service_example"; // String | 

apiInstance.updateNetworkApplianceFirewallFirewalledService(bodynetworkIdservice, (error, data, response) => {
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
 **body** | [**Body24**](Body24.md)|  | 
 **networkId** | **String**|  | 
 **service** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

