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
> Object createOrganizationSamlRole(bodyorganizationId)

Create a SAML role

Create a SAML role

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.SamlRolesApi();
let body = new MerakiDashboardApi.Body149(); // Body149 | 
let organizationId = "organizationId_example"; // String | 

apiInstance.createOrganizationSamlRole(bodyorganizationId, (error, data, response) => {
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
 **body** | [**Body149**](Body149.md)|  | 
 **organizationId** | **String**|  | 

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
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.SamlRolesApi();
let organizationId = "organizationId_example"; // String | 
let samlRoleId = "samlRoleId_example"; // String | 

apiInstance.deleteOrganizationSamlRole(organizationId, samlRoleId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
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

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getOrganizationSamlRole"></a>
# **getOrganizationSamlRole**
> Object getOrganizationSamlRole(organizationId, samlRoleId)

Return a SAML role

Return a SAML role

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.SamlRolesApi();
let organizationId = "organizationId_example"; // String | 
let samlRoleId = "samlRoleId_example"; // String | 

apiInstance.getOrganizationSamlRole(organizationId, samlRoleId, (error, data, response) => {
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
 **samlRoleId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationSamlRoles"></a>
# **getOrganizationSamlRoles**
> Object getOrganizationSamlRoles(organizationId)

List the SAML roles for this organization

List the SAML roles for this organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.SamlRolesApi();
let organizationId = "organizationId_example"; // String | 

apiInstance.getOrganizationSamlRoles(organizationId, (error, data, response) => {
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

<a name="updateOrganizationSamlRole"></a>
# **updateOrganizationSamlRole**
> Object updateOrganizationSamlRole(organizationIdsamlRoleId, opts)

Update a SAML role

Update a SAML role

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.SamlRolesApi();
let organizationId = "organizationId_example"; // String | 
let samlRoleId = "samlRoleId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body150() // Body150 | 
};
apiInstance.updateOrganizationSamlRole(organizationIdsamlRoleId, opts, (error, data, response) => {
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
 **samlRoleId** | **String**|  | 
 **body** | [**Body150**](Body150.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

