# MerakiDashboardApi.VpnFirewallRulesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrganizationApplianceVpnVpnFirewallRules**](VpnFirewallRulesApi.md#getOrganizationApplianceVpnVpnFirewallRules) | **GET** /organizations/{organizationId}/appliance/vpn/vpnFirewallRules | Return the firewall rules for an organization's site-to-site VPN
[**updateOrganizationApplianceVpnVpnFirewallRules**](VpnFirewallRulesApi.md#updateOrganizationApplianceVpnVpnFirewallRules) | **PUT** /organizations/{organizationId}/appliance/vpn/vpnFirewallRules | Update the firewall rules of an organization's site-to-site VPN


<a name="getOrganizationApplianceVpnVpnFirewallRules"></a>
# **getOrganizationApplianceVpnVpnFirewallRules**
> Object getOrganizationApplianceVpnVpnFirewallRules(organizationId)

Return the firewall rules for an organization's site-to-site VPN

Return the firewall rules for an organization's site-to-site VPN

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.VpnFirewallRulesApi();

var organizationId = "organizationId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationApplianceVpnVpnFirewallRules(organizationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrganizationApplianceVpnVpnFirewallRules"></a>
# **updateOrganizationApplianceVpnVpnFirewallRules**
> Object updateOrganizationApplianceVpnVpnFirewallRules(organizationId, opts)

Update the firewall rules of an organization's site-to-site VPN

Update the firewall rules of an organization's site-to-site VPN

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.VpnFirewallRulesApi();

var organizationId = "organizationId_example"; // String | 

var opts = { 
  'updateOrganizationApplianceVpnVpnFirewallRules': new MerakiDashboardApi.UpdateOrganizationApplianceVpnVpnFirewallRules() // UpdateOrganizationApplianceVpnVpnFirewallRules | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateOrganizationApplianceVpnVpnFirewallRules(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **updateOrganizationApplianceVpnVpnFirewallRules** | [**UpdateOrganizationApplianceVpnVpnFirewallRules**](UpdateOrganizationApplianceVpnVpnFirewallRules.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

