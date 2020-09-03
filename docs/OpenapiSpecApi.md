# MerakiDashboardApi.OpenapiSpecApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrganizationOpenapiSpec**](OpenapiSpecApi.md#getOrganizationOpenapiSpec) | **GET** /organizations/{organizationId}/openapiSpec | Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON


<a name="getOrganizationOpenapiSpec"></a>
# **getOrganizationOpenapiSpec**
> Object getOrganizationOpenapiSpec(organizationId)

Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON

Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OpenapiSpecApi();

var organizationId = "organizationId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationOpenapiSpec(organizationId, callback);
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

