# MerakiDashboardApi.ThirdPartyVPNPeersApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrganizationApplianceVpnThirdPartyVPNPeers**](ThirdPartyVPNPeersApi.md#getOrganizationApplianceVpnThirdPartyVPNPeers) | **GET** /organizations/{organizationId}/appliance/vpn/thirdPartyVPNPeers | Return the third party VPN peers for an organization
[**updateOrganizationApplianceVpnThirdPartyVPNPeers**](ThirdPartyVPNPeersApi.md#updateOrganizationApplianceVpnThirdPartyVPNPeers) | **PUT** /organizations/{organizationId}/appliance/vpn/thirdPartyVPNPeers | Update the third party VPN peers for an organization


<a name="getOrganizationApplianceVpnThirdPartyVPNPeers"></a>
# **getOrganizationApplianceVpnThirdPartyVPNPeers**
> Object getOrganizationApplianceVpnThirdPartyVPNPeers(organizationId)

Return the third party VPN peers for an organization

Return the third party VPN peers for an organization

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.ThirdPartyVPNPeersApi();

var organizationId = "organizationId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationApplianceVpnThirdPartyVPNPeers(organizationId, callback);
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

<a name="updateOrganizationApplianceVpnThirdPartyVPNPeers"></a>
# **updateOrganizationApplianceVpnThirdPartyVPNPeers**
> Object updateOrganizationApplianceVpnThirdPartyVPNPeers(organizationId, updateOrganizationApplianceVpnThirdPartyVPNPeers)

Update the third party VPN peers for an organization

Update the third party VPN peers for an organization

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.ThirdPartyVPNPeersApi();

var organizationId = "organizationId_example"; // String | 

var updateOrganizationApplianceVpnThirdPartyVPNPeers = new MerakiDashboardApi.UpdateOrganizationApplianceVpnThirdPartyVPNPeers(); // UpdateOrganizationApplianceVpnThirdPartyVPNPeers | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateOrganizationApplianceVpnThirdPartyVPNPeers(organizationId, updateOrganizationApplianceVpnThirdPartyVPNPeers, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **updateOrganizationApplianceVpnThirdPartyVPNPeers** | [**UpdateOrganizationApplianceVpnThirdPartyVPNPeers**](UpdateOrganizationApplianceVpnThirdPartyVPNPeers.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

