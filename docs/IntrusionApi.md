# MerakiDashboardApi.IntrusionApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkApplianceSecurityIntrusion**](IntrusionApi.md#getNetworkApplianceSecurityIntrusion) | **GET** /networks/{networkId}/appliance/security/intrusion | Returns all supported intrusion settings for an MX network
[**getOrganizationApplianceSecurityIntrusion**](IntrusionApi.md#getOrganizationApplianceSecurityIntrusion) | **GET** /organizations/{organizationId}/appliance/security/intrusion | Returns all supported intrusion settings for an organization
[**updateNetworkApplianceSecurityIntrusion**](IntrusionApi.md#updateNetworkApplianceSecurityIntrusion) | **PUT** /networks/{networkId}/appliance/security/intrusion | Set the supported intrusion settings for an MX network
[**updateOrganizationApplianceSecurityIntrusion**](IntrusionApi.md#updateOrganizationApplianceSecurityIntrusion) | **PUT** /organizations/{organizationId}/appliance/security/intrusion | Sets supported intrusion settings for an organization

<a name="getNetworkApplianceSecurityIntrusion"></a>
# **getNetworkApplianceSecurityIntrusion**
> Object getNetworkApplianceSecurityIntrusion(networkId)

Returns all supported intrusion settings for an MX network

Returns all supported intrusion settings for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.IntrusionApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceSecurityIntrusion(networkId, (error, data, response) => {
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

<a name="getOrganizationApplianceSecurityIntrusion"></a>
# **getOrganizationApplianceSecurityIntrusion**
> Object getOrganizationApplianceSecurityIntrusion(organizationId)

Returns all supported intrusion settings for an organization

Returns all supported intrusion settings for an organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.IntrusionApi();
let organizationId = "organizationId_example"; // String | 

apiInstance.getOrganizationApplianceSecurityIntrusion(organizationId, (error, data, response) => {
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
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateNetworkApplianceSecurityIntrusion"></a>
# **updateNetworkApplianceSecurityIntrusion**
> Object updateNetworkApplianceSecurityIntrusion(networkId, opts)

Set the supported intrusion settings for an MX network

Set the supported intrusion settings for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.IntrusionApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body32() // Body32 | 
};
apiInstance.updateNetworkApplianceSecurityIntrusion(networkId, opts, (error, data, response) => {
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
 **body** | [**Body32**](Body32.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrganizationApplianceSecurityIntrusion"></a>
# **updateOrganizationApplianceSecurityIntrusion**
> Object updateOrganizationApplianceSecurityIntrusion(bodyorganizationId)

Sets supported intrusion settings for an organization

Sets supported intrusion settings for an organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.IntrusionApi();
let body = new MerakiDashboardApi.Body126(); // Body126 | 
let organizationId = "organizationId_example"; // String | 

apiInstance.updateOrganizationApplianceSecurityIntrusion(bodyorganizationId, (error, data, response) => {
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
 **body** | [**Body126**](Body126.md)|  | 
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

