# MerakiDashboardApi.SamlRolesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrganizationSamlRole**](SamlRolesApi.md#createOrganizationSamlRole) | **POST** /organizations/{organizationId}/samlRoles | Create a SAML role
[**deleteOrganizationSamlRole**](SamlRolesApi.md#deleteOrganizationSamlRole) | **DELETE** /organizations/{organizationId}/samlRoles/{samlRoleId} | Remove a SAML role
[**getOrganizationSamlRole**](SamlRolesApi.md#getOrganizationSamlRole) | **GET** /organizations/{organizationId}/samlRoles/{samlRoleId} | Return a SAML role
[**getOrganizationSamlRoles**](SamlRolesApi.md#getOrganizationSamlRoles) | **GET** /organizations/{organizationId}/samlRoles | List the SAML roles for this organization
[**updateOrganizationSamlRole**](SamlRolesApi.md#updateOrganizationSamlRole) | **PUT** /organizations/{organizationId}/samlRoles/{samlRoleId} | Update a SAML role


<a name="createOrganizationSamlRole"></a>
# **createOrganizationSamlRole**
> Object createOrganizationSamlRole(organizationId, createOrganizationSamlRole)

Create a SAML role

Create a SAML role

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SamlRolesApi();

var organizationId = "organizationId_example"; // String | 

var createOrganizationSamlRole = new MerakiDashboardApi.CreateOrganizationSamlRole(); // CreateOrganizationSamlRole | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createOrganizationSamlRole(organizationId, createOrganizationSamlRole, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **createOrganizationSamlRole** | [**CreateOrganizationSamlRole**](CreateOrganizationSamlRole.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteOrganizationSamlRole"></a>
# **deleteOrganizationSamlRole**
> deleteOrganizationSamlRole(organizationId, samlRoleId)

Remove a SAML role

Remove a SAML role

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SamlRolesApi();

var organizationId = "organizationId_example"; // String | 

var samlRoleId = "samlRoleId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOrganizationSamlRole(organizationId, samlRoleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **samlRoleId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationSamlRole"></a>
# **getOrganizationSamlRole**
> Object getOrganizationSamlRole(organizationId, samlRoleId)

Return a SAML role

Return a SAML role

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SamlRolesApi();

var organizationId = "organizationId_example"; // String | 

var samlRoleId = "samlRoleId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationSamlRole(organizationId, samlRoleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **samlRoleId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationSamlRoles"></a>
# **getOrganizationSamlRoles**
> Object getOrganizationSamlRoles(organizationId)

List the SAML roles for this organization

List the SAML roles for this organization

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SamlRolesApi();

var organizationId = "organizationId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationSamlRoles(organizationId, callback);
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

<a name="updateOrganizationSamlRole"></a>
# **updateOrganizationSamlRole**
> Object updateOrganizationSamlRole(organizationId, samlRoleId, opts)

Update a SAML role

Update a SAML role

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SamlRolesApi();

var organizationId = "organizationId_example"; // String | 

var samlRoleId = "samlRoleId_example"; // String | 

var opts = { 
  'updateOrganizationSamlRole': new MerakiDashboardApi.UpdateOrganizationSamlRole() // UpdateOrganizationSamlRole | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateOrganizationSamlRole(organizationId, samlRoleId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **samlRoleId** | **String**|  | 
 **updateOrganizationSamlRole** | [**UpdateOrganizationSamlRole**](UpdateOrganizationSamlRole.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

