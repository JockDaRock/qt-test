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
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.SiteToSiteVpnApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceVpnSiteToSiteVpn(networkId, (error, data, response) => {
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

<a name="updateNetworkApplianceVpnSiteToSiteVpn"></a>
# **updateNetworkApplianceVpnSiteToSiteVpn**
> Object updateNetworkApplianceVpnSiteToSiteVpn(bodynetworkId)

Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.

Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.SiteToSiteVpnApi();
let body = new MerakiDashboardApi.Body45(); // Body45 | 
let networkId = "networkId_example"; // String | 

apiInstance.updateNetworkApplianceVpnSiteToSiteVpn(bodynetworkId, (error, data, response) => {
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
 **body** | [**Body45**](Body45.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

