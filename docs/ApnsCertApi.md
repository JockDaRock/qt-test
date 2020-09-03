# MerakiDashboardApi.ApnsCertApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrganizationSmApnsCert**](ApnsCertApi.md#getOrganizationSmApnsCert) | **GET** /organizations/{organizationId}/sm/apnsCert | Get the organization's APNS certificate


<a name="getOrganizationSmApnsCert"></a>
# **getOrganizationSmApnsCert**
> Object getOrganizationSmApnsCert(organizationId)

Get the organization's APNS certificate

Get the organization's APNS certificate

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.ApnsCertApi();

var organizationId = "organizationId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationSmApnsCert(organizationId, callback);
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

