# MerakiDashboardApi.SiteToSiteVpnApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkApplianceVpnSiteToSiteVpn**](SiteToSiteVpnApi.md#getNetworkApplianceVpnSiteToSiteVpn) | **GET** /networks/{networkId}/appliance/vpn/siteToSiteVpn | Return the site-to-site VPN settings of a network. Only valid for MX networks.
[**updateNetworkApplianceVpnSiteToSiteVpn**](SiteToSiteVpnApi.md#updateNetworkApplianceVpnSiteToSiteVpn) | **PUT** /networks/{networkId}/appliance/vpn/siteToSiteVpn | Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.


<a name="getNetworkApplianceVpnSiteToSiteVpn"></a>
# **getNetworkApplianceVpnSiteToSiteVpn**
> Object getNetworkApplianceVpnSiteToSiteVpn(networkId)

Return the site-to-site VPN settings of a network. Only valid for MX networks.

Return the site-to-site VPN settings of a network. Only valid for MX networks.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SiteToSiteVpnApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkApplianceVpnSiteToSiteVpn(networkId, callback);
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

<a name="updateNetworkApplianceVpnSiteToSiteVpn"></a>
# **updateNetworkApplianceVpnSiteToSiteVpn**
> Object updateNetworkApplianceVpnSiteToSiteVpn(networkId, updateNetworkApplianceVpnSiteToSiteVpn)

Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.

Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SiteToSiteVpnApi();

var networkId = "networkId_example"; // String | 

var updateNetworkApplianceVpnSiteToSiteVpn = new MerakiDashboardApi.UpdateNetworkApplianceVpnSiteToSiteVpn(); // UpdateNetworkApplianceVpnSiteToSiteVpn | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkApplianceVpnSiteToSiteVpn(networkId, updateNetworkApplianceVpnSiteToSiteVpn, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **updateNetworkApplianceVpnSiteToSiteVpn** | [**UpdateNetworkApplianceVpnSiteToSiteVpn**](UpdateNetworkApplianceVpnSiteToSiteVpn.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

