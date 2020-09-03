# MerakiDashboardApi.PrioritiesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrganizationBrandingPoliciesPriorities**](PrioritiesApi.md#getOrganizationBrandingPoliciesPriorities) | **GET** /organizations/{organizationId}/brandingPolicies/priorities | Return the branding policy IDs of an organization in priority order. IDs are ordered in ascending order of priority (IDs later in the array have higher priority).
[**updateOrganizationBrandingPoliciesPriorities**](PrioritiesApi.md#updateOrganizationBrandingPoliciesPriorities) | **PUT** /organizations/{organizationId}/brandingPolicies/priorities | Update the priority ordering of an organization's branding policies.


<a name="getOrganizationBrandingPoliciesPriorities"></a>
# **getOrganizationBrandingPoliciesPriorities**
> Object getOrganizationBrandingPoliciesPriorities(organizationId)

Return the branding policy IDs of an organization in priority order. IDs are ordered in ascending order of priority (IDs later in the array have higher priority).

Return the branding policy IDs of an organization in priority order. IDs are ordered in ascending order of priority (IDs later in the array have higher priority).

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.PrioritiesApi();

var organizationId = "organizationId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationBrandingPoliciesPriorities(organizationId, callback);
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

<a name="updateOrganizationBrandingPoliciesPriorities"></a>
# **updateOrganizationBrandingPoliciesPriorities**
> Object updateOrganizationBrandingPoliciesPriorities(organizationId, updateOrganizationBrandingPoliciesPriorities)

Update the priority ordering of an organization's branding policies.

Update the priority ordering of an organization's branding policies.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.PrioritiesApi();

var organizationId = "organizationId_example"; // String | 

var updateOrganizationBrandingPoliciesPriorities = new MerakiDashboardApi.UpdateOrganizationBrandingPoliciesPriorities(); // UpdateOrganizationBrandingPoliciesPriorities | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateOrganizationBrandingPoliciesPriorities(organizationId, updateOrganizationBrandingPoliciesPriorities, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **updateOrganizationBrandingPoliciesPriorities** | [**UpdateOrganizationBrandingPoliciesPriorities**](UpdateOrganizationBrandingPoliciesPriorities.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

