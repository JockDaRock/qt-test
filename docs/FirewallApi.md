# MerakiDashboardApi.FirewallApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkApplianceFirewallCellularFirewallRules**](FirewallApi.md#getNetworkApplianceFirewallCellularFirewallRules) | **GET** /networks/{networkId}/appliance/firewall/cellularFirewallRules | Return the cellular firewall rules for an MX network
[**getNetworkApplianceFirewallFirewalledService**](FirewallApi.md#getNetworkApplianceFirewallFirewalledService) | **GET** /networks/{networkId}/appliance/firewall/firewalledServices/{service} | Return the accessibility settings of the given service (&#x27;ICMP&#x27;, &#x27;web&#x27;, or &#x27;SNMP&#x27;)
[**getNetworkApplianceFirewallFirewalledServices**](FirewallApi.md#getNetworkApplianceFirewallFirewalledServices) | **GET** /networks/{networkId}/appliance/firewall/firewalledServices | List the appliance services and their accessibility rules
[**getNetworkApplianceFirewallInboundFirewallRules**](FirewallApi.md#getNetworkApplianceFirewallInboundFirewallRules) | **GET** /networks/{networkId}/appliance/firewall/inboundFirewallRules | Return the inbound firewall rules for an MX network
[**getNetworkApplianceFirewallL3FirewallRules**](FirewallApi.md#getNetworkApplianceFirewallL3FirewallRules) | **GET** /networks/{networkId}/appliance/firewall/l3FirewallRules | Return the L3 firewall rules for an MX network
[**getNetworkApplianceFirewallL7FirewallRules**](FirewallApi.md#getNetworkApplianceFirewallL7FirewallRules) | **GET** /networks/{networkId}/appliance/firewall/l7FirewallRules | List the MX L7 firewall rules for an MX network
[**getNetworkApplianceFirewallL7FirewallRulesApplicationCategories**](FirewallApi.md#getNetworkApplianceFirewallL7FirewallRulesApplicationCategories) | **GET** /networks/{networkId}/appliance/firewall/l7FirewallRules/applicationCategories | Return the L7 firewall application categories and their associated applications for an MX network
[**getNetworkApplianceFirewallOneToManyNatRules**](FirewallApi.md#getNetworkApplianceFirewallOneToManyNatRules) | **GET** /networks/{networkId}/appliance/firewall/oneToManyNatRules | Return the 1:Many NAT mapping rules for an MX network
[**getNetworkApplianceFirewallOneToOneNatRules**](FirewallApi.md#getNetworkApplianceFirewallOneToOneNatRules) | **GET** /networks/{networkId}/appliance/firewall/oneToOneNatRules | Return the 1:1 NAT mapping rules for an MX network
[**getNetworkApplianceFirewallPortForwardingRules**](FirewallApi.md#getNetworkApplianceFirewallPortForwardingRules) | **GET** /networks/{networkId}/appliance/firewall/portForwardingRules | Return the port forwarding rules for an MX network
[**getNetworkWirelessSsidFirewallL3FirewallRules**](FirewallApi.md#getNetworkWirelessSsidFirewallL3FirewallRules) | **GET** /networks/{networkId}/wireless/ssids/{number}/firewall/l3FirewallRules | Return the L3 firewall rules for an SSID on an MR network
[**getNetworkWirelessSsidFirewallL7FirewallRules**](FirewallApi.md#getNetworkWirelessSsidFirewallL7FirewallRules) | **GET** /networks/{networkId}/wireless/ssids/{number}/firewall/l7FirewallRules | Return the L7 firewall rules for an SSID on an MR network
[**updateNetworkApplianceFirewallCellularFirewallRules**](FirewallApi.md#updateNetworkApplianceFirewallCellularFirewallRules) | **PUT** /networks/{networkId}/appliance/firewall/cellularFirewallRules | Update the cellular firewall rules of an MX network
[**updateNetworkApplianceFirewallFirewalledService**](FirewallApi.md#updateNetworkApplianceFirewallFirewalledService) | **PUT** /networks/{networkId}/appliance/firewall/firewalledServices/{service} | Updates the accessibility settings for the given service (&#x27;ICMP&#x27;, &#x27;web&#x27;, or &#x27;SNMP&#x27;)
[**updateNetworkApplianceFirewallInboundFirewallRules**](FirewallApi.md#updateNetworkApplianceFirewallInboundFirewallRules) | **PUT** /networks/{networkId}/appliance/firewall/inboundFirewallRules | Update the inbound firewall rules of an MX network
[**updateNetworkApplianceFirewallL3FirewallRules**](FirewallApi.md#updateNetworkApplianceFirewallL3FirewallRules) | **PUT** /networks/{networkId}/appliance/firewall/l3FirewallRules | Update the L3 firewall rules of an MX network
[**updateNetworkApplianceFirewallL7FirewallRules**](FirewallApi.md#updateNetworkApplianceFirewallL7FirewallRules) | **PUT** /networks/{networkId}/appliance/firewall/l7FirewallRules | Update the MX L7 firewall rules for an MX network
[**updateNetworkApplianceFirewallOneToManyNatRules**](FirewallApi.md#updateNetworkApplianceFirewallOneToManyNatRules) | **PUT** /networks/{networkId}/appliance/firewall/oneToManyNatRules | Set the 1:Many NAT mapping rules for an MX network
[**updateNetworkApplianceFirewallOneToOneNatRules**](FirewallApi.md#updateNetworkApplianceFirewallOneToOneNatRules) | **PUT** /networks/{networkId}/appliance/firewall/oneToOneNatRules | Set the 1:1 NAT mapping rules for an MX network
[**updateNetworkApplianceFirewallPortForwardingRules**](FirewallApi.md#updateNetworkApplianceFirewallPortForwardingRules) | **PUT** /networks/{networkId}/appliance/firewall/portForwardingRules | Update the port forwarding rules for an MX network
[**updateNetworkWirelessSsidFirewallL3FirewallRules**](FirewallApi.md#updateNetworkWirelessSsidFirewallL3FirewallRules) | **PUT** /networks/{networkId}/wireless/ssids/{number}/firewall/l3FirewallRules | Update the L3 firewall rules of an SSID on an MR network
[**updateNetworkWirelessSsidFirewallL7FirewallRules**](FirewallApi.md#updateNetworkWirelessSsidFirewallL7FirewallRules) | **PUT** /networks/{networkId}/wireless/ssids/{number}/firewall/l7FirewallRules | Update the L7 firewall rules of an SSID on an MR network

<a name="getNetworkApplianceFirewallCellularFirewallRules"></a>
# **getNetworkApplianceFirewallCellularFirewallRules**
> Object getNetworkApplianceFirewallCellularFirewallRules(networkId)

Return the cellular firewall rules for an MX network

Return the cellular firewall rules for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.FirewallApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceFirewallCellularFirewallRules(networkId, (error, data, response) => {
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

let apiInstance = new MerakiDashboardApi.FirewallApi();
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

let apiInstance = new MerakiDashboardApi.FirewallApi();
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

<a name="getNetworkApplianceFirewallInboundFirewallRules"></a>
# **getNetworkApplianceFirewallInboundFirewallRules**
> Object getNetworkApplianceFirewallInboundFirewallRules(networkId)

Return the inbound firewall rules for an MX network

Return the inbound firewall rules for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.FirewallApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceFirewallInboundFirewallRules(networkId, (error, data, response) => {
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

let apiInstance = new MerakiDashboardApi.FirewallApi();
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

<a name="getNetworkApplianceFirewallL7FirewallRules"></a>
# **getNetworkApplianceFirewallL7FirewallRules**
> Object getNetworkApplianceFirewallL7FirewallRules(networkId)

List the MX L7 firewall rules for an MX network

List the MX L7 firewall rules for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.FirewallApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceFirewallL7FirewallRules(networkId, (error, data, response) => {
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

<a name="getNetworkApplianceFirewallL7FirewallRulesApplicationCategories"></a>
# **getNetworkApplianceFirewallL7FirewallRulesApplicationCategories**
> Object getNetworkApplianceFirewallL7FirewallRulesApplicationCategories(networkId)

Return the L7 firewall application categories and their associated applications for an MX network

Return the L7 firewall application categories and their associated applications for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.FirewallApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceFirewallL7FirewallRulesApplicationCategories(networkId, (error, data, response) => {
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

<a name="getNetworkApplianceFirewallOneToManyNatRules"></a>
# **getNetworkApplianceFirewallOneToManyNatRules**
> Object getNetworkApplianceFirewallOneToManyNatRules(networkId)

Return the 1:Many NAT mapping rules for an MX network

Return the 1:Many NAT mapping rules for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.FirewallApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceFirewallOneToManyNatRules(networkId, (error, data, response) => {
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

<a name="getNetworkApplianceFirewallOneToOneNatRules"></a>
# **getNetworkApplianceFirewallOneToOneNatRules**
> Object getNetworkApplianceFirewallOneToOneNatRules(networkId)

Return the 1:1 NAT mapping rules for an MX network

Return the 1:1 NAT mapping rules for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.FirewallApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceFirewallOneToOneNatRules(networkId, (error, data, response) => {
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

<a name="getNetworkApplianceFirewallPortForwardingRules"></a>
# **getNetworkApplianceFirewallPortForwardingRules**
> Object getNetworkApplianceFirewallPortForwardingRules(networkId)

Return the port forwarding rules for an MX network

Return the port forwarding rules for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.FirewallApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceFirewallPortForwardingRules(networkId, (error, data, response) => {
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

let apiInstance = new MerakiDashboardApi.FirewallApi();
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

<a name="getNetworkWirelessSsidFirewallL7FirewallRules"></a>
# **getNetworkWirelessSsidFirewallL7FirewallRules**
> Object getNetworkWirelessSsidFirewallL7FirewallRules(networkId, _number)

Return the L7 firewall rules for an SSID on an MR network

Return the L7 firewall rules for an SSID on an MR network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.FirewallApi();
let networkId = "networkId_example"; // String | 
let _number = "_number_example"; // String | 

apiInstance.getNetworkWirelessSsidFirewallL7FirewallRules(networkId, _number, (error, data, response) => {
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

<a name="updateNetworkApplianceFirewallCellularFirewallRules"></a>
# **updateNetworkApplianceFirewallCellularFirewallRules**
> Object updateNetworkApplianceFirewallCellularFirewallRules(networkId, opts)

Update the cellular firewall rules of an MX network

Update the cellular firewall rules of an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.FirewallApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body23() // Body23 | 
};
apiInstance.updateNetworkApplianceFirewallCellularFirewallRules(networkId, opts, (error, data, response) => {
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
 **body** | [**Body23**](Body23.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
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

let apiInstance = new MerakiDashboardApi.FirewallApi();
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

<a name="updateNetworkApplianceFirewallInboundFirewallRules"></a>
# **updateNetworkApplianceFirewallInboundFirewallRules**
> Object updateNetworkApplianceFirewallInboundFirewallRules(networkId, opts)

Update the inbound firewall rules of an MX network

Update the inbound firewall rules of an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.FirewallApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body25() // Body25 | 
};
apiInstance.updateNetworkApplianceFirewallInboundFirewallRules(networkId, opts, (error, data, response) => {
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
 **body** | [**Body25**](Body25.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
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

let apiInstance = new MerakiDashboardApi.FirewallApi();
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

<a name="updateNetworkApplianceFirewallL7FirewallRules"></a>
# **updateNetworkApplianceFirewallL7FirewallRules**
> Object updateNetworkApplianceFirewallL7FirewallRules(networkId, opts)

Update the MX L7 firewall rules for an MX network

Update the MX L7 firewall rules for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.FirewallApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body27() // Body27 | 
};
apiInstance.updateNetworkApplianceFirewallL7FirewallRules(networkId, opts, (error, data, response) => {
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
 **body** | [**Body27**](Body27.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkApplianceFirewallOneToManyNatRules"></a>
# **updateNetworkApplianceFirewallOneToManyNatRules**
> Object updateNetworkApplianceFirewallOneToManyNatRules(bodynetworkId)

Set the 1:Many NAT mapping rules for an MX network

Set the 1:Many NAT mapping rules for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.FirewallApi();
let body = new MerakiDashboardApi.Body28(); // Body28 | 
let networkId = "networkId_example"; // String | 

apiInstance.updateNetworkApplianceFirewallOneToManyNatRules(bodynetworkId, (error, data, response) => {
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
 **body** | [**Body28**](Body28.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkApplianceFirewallOneToOneNatRules"></a>
# **updateNetworkApplianceFirewallOneToOneNatRules**
> Object updateNetworkApplianceFirewallOneToOneNatRules(bodynetworkId)

Set the 1:1 NAT mapping rules for an MX network

Set the 1:1 NAT mapping rules for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.FirewallApi();
let body = new MerakiDashboardApi.Body29(); // Body29 | 
let networkId = "networkId_example"; // String | 

apiInstance.updateNetworkApplianceFirewallOneToOneNatRules(bodynetworkId, (error, data, response) => {
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
 **body** | [**Body29**](Body29.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkApplianceFirewallPortForwardingRules"></a>
# **updateNetworkApplianceFirewallPortForwardingRules**
> Object updateNetworkApplianceFirewallPortForwardingRules(bodynetworkId)

Update the port forwarding rules for an MX network

Update the port forwarding rules for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.FirewallApi();
let body = new MerakiDashboardApi.Body30(); // Body30 | 
let networkId = "networkId_example"; // String | 

apiInstance.updateNetworkApplianceFirewallPortForwardingRules(bodynetworkId, (error, data, response) => {
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
 **body** | [**Body30**](Body30.md)|  | 
 **networkId** | **String**|  | 

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

let apiInstance = new MerakiDashboardApi.FirewallApi();
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

<a name="updateNetworkWirelessSsidFirewallL7FirewallRules"></a>
# **updateNetworkWirelessSsidFirewallL7FirewallRules**
> Object updateNetworkWirelessSsidFirewallL7FirewallRules(networkId_number, opts)

Update the L7 firewall rules of an SSID on an MR network

Update the L7 firewall rules of an SSID on an MR network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.FirewallApi();
let networkId = "networkId_example"; // String | 
let _number = "_number_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body115() // Body115 | 
};
apiInstance.updateNetworkWirelessSsidFirewallL7FirewallRules(networkId_number, opts, (error, data, response) => {
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
 **body** | [**Body115**](Body115.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

