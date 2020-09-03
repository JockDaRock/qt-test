# MerakiDashboardApi.BrandingPoliciesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrganizationBrandingPolicy**](BrandingPoliciesApi.md#createOrganizationBrandingPolicy) | **POST** /organizations/{organizationId}/brandingPolicies | Add a new branding policy to an organization
[**deleteOrganizationBrandingPolicy**](BrandingPoliciesApi.md#deleteOrganizationBrandingPolicy) | **DELETE** /organizations/{organizationId}/brandingPolicies/{brandingPolicyId} | Delete a branding policy
[**getOrganizationBrandingPolicies**](BrandingPoliciesApi.md#getOrganizationBrandingPolicies) | **GET** /organizations/{organizationId}/brandingPolicies | List the branding policies of an organization
[**getOrganizationBrandingPoliciesPriorities**](BrandingPoliciesApi.md#getOrganizationBrandingPoliciesPriorities) | **GET** /organizations/{organizationId}/brandingPolicies/priorities | Return the branding policy IDs of an organization in priority order. IDs are ordered in ascending order of priority (IDs later in the array have higher priority).
[**getOrganizationBrandingPolicy**](BrandingPoliciesApi.md#getOrganizationBrandingPolicy) | **GET** /organizations/{organizationId}/brandingPolicies/{brandingPolicyId} | Return a branding policy
[**updateOrganizationBrandingPoliciesPriorities**](BrandingPoliciesApi.md#updateOrganizationBrandingPoliciesPriorities) | **PUT** /organizations/{organizationId}/brandingPolicies/priorities | Update the priority ordering of an organization's branding policies.
[**updateOrganizationBrandingPolicy**](BrandingPoliciesApi.md#updateOrganizationBrandingPolicy) | **PUT** /organizations/{organizationId}/brandingPolicies/{brandingPolicyId} | Update a branding policy


<a name="createOrganizationBrandingPolicy"></a>
# **createOrganizationBrandingPolicy**
> Object createOrganizationBrandingPolicy(organizationId, createOrganizationBrandingPolicy)

Add a new branding policy to an organization

Add a new branding policy to an organization

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.BrandingPoliciesApi();

var organizationId = "organizationId_example"; // String | 

var createOrganizationBrandingPolicy = new MerakiDashboardApi.CreateOrganizationBrandingPolicy(); // CreateOrganizationBrandingPolicy | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createOrganizationBrandingPolicy(organizationId, createOrganizationBrandingPolicy, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **createOrganizationBrandingPolicy** | [**CreateOrganizationBrandingPolicy**](CreateOrganizationBrandingPolicy.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteOrganizationBrandingPolicy"></a>
# **deleteOrganizationBrandingPolicy**
> deleteOrganizationBrandingPolicy(organizationId, brandingPolicyId)

Delete a branding policy

Delete a branding policy

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.BrandingPoliciesApi();

var organizationId = "organizationId_example"; // String | 

var brandingPolicyId = "brandingPolicyId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOrganizationBrandingPolicy(organizationId, brandingPolicyId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **brandingPolicyId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationBrandingPolicies"></a>
# **getOrganizationBrandingPolicies**
> Object getOrganizationBrandingPolicies(organizationId)

List the branding policies of an organization

List the branding policies of an organization

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.BrandingPoliciesApi();

var organizationId = "organizationId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationBrandingPolicies(organizationId, callback);
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

var apiInstance = new MerakiDashboardApi.BrandingPoliciesApi();

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

<a name="getOrganizationBrandingPolicy"></a>
# **getOrganizationBrandingPolicy**
> Object getOrganizationBrandingPolicy(organizationId, brandingPolicyId)

Return a branding policy

Return a branding policy

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.BrandingPoliciesApi();

var organizationId = "organizationId_example"; // String | 

var brandingPolicyId = "brandingPolicyId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationBrandingPolicy(organizationId, brandingPolicyId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **brandingPolicyId** | **String**|  | 

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

var apiInstance = new MerakiDashboardApi.BrandingPoliciesApi();

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

<a name="updateOrganizationBrandingPolicy"></a>
# **updateOrganizationBrandingPolicy**
> Object updateOrganizationBrandingPolicy(organizationId, brandingPolicyId, opts)

Update a branding policy

Update a branding policy

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.BrandingPoliciesApi();

var organizationId = "organizationId_example"; // String | 

var brandingPolicyId = "brandingPolicyId_example"; // String | 

var opts = { 
  'updateOrganizationBrandingPolicy': new MerakiDashboardApi.UpdateOrganizationBrandingPolicy() // UpdateOrganizationBrandingPolicy | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateOrganizationBrandingPolicy(organizationId, brandingPolicyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **brandingPolicyId** | **String**|  | 
 **updateOrganizationBrandingPolicy** | [**UpdateOrganizationBrandingPolicy**](UpdateOrganizationBrandingPolicy.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

