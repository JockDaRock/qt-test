# MerakiDashboardApi.AdminsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrganizationAdmin**](AdminsApi.md#createOrganizationAdmin) | **POST** /organizations/{organizationId}/admins | Create a new dashboard administrator
[**deleteOrganizationAdmin**](AdminsApi.md#deleteOrganizationAdmin) | **DELETE** /organizations/{organizationId}/admins/{adminId} | Revoke all access for a dashboard administrator within this organization
[**getOrganizationAdmins**](AdminsApi.md#getOrganizationAdmins) | **GET** /organizations/{organizationId}/admins | List the dashboard administrators in this organization
[**updateOrganizationAdmin**](AdminsApi.md#updateOrganizationAdmin) | **PUT** /organizations/{organizationId}/admins/{adminId} | Update an administrator


<a name="createOrganizationAdmin"></a>
# **createOrganizationAdmin**
> Object createOrganizationAdmin(organizationId, createOrganizationAdmin)

Create a new dashboard administrator

Create a new dashboard administrator

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.AdminsApi();

var organizationId = "organizationId_example"; // String | 

var createOrganizationAdmin = new MerakiDashboardApi.CreateOrganizationAdmin(); // CreateOrganizationAdmin | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createOrganizationAdmin(organizationId, createOrganizationAdmin, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **createOrganizationAdmin** | [**CreateOrganizationAdmin**](CreateOrganizationAdmin.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteOrganizationAdmin"></a>
# **deleteOrganizationAdmin**
> deleteOrganizationAdmin(organizationId, adminId)

Revoke all access for a dashboard administrator within this organization

Revoke all access for a dashboard administrator within this organization

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.AdminsApi();

var organizationId = "organizationId_example"; // String | 

var adminId = "adminId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOrganizationAdmin(organizationId, adminId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **adminId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationAdmins"></a>
# **getOrganizationAdmins**
> Object getOrganizationAdmins(organizationId)

List the dashboard administrators in this organization

List the dashboard administrators in this organization

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.AdminsApi();

var organizationId = "organizationId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationAdmins(organizationId, callback);
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

<a name="updateOrganizationAdmin"></a>
# **updateOrganizationAdmin**
> Object updateOrganizationAdmin(organizationId, adminId, opts)

Update an administrator

Update an administrator

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.AdminsApi();

var organizationId = "organizationId_example"; // String | 

var adminId = "adminId_example"; // String | 

var opts = { 
  'updateOrganizationAdmin': new MerakiDashboardApi.UpdateOrganizationAdmin() // UpdateOrganizationAdmin | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateOrganizationAdmin(organizationId, adminId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **adminId** | **String**|  | 
 **updateOrganizationAdmin** | [**UpdateOrganizationAdmin**](UpdateOrganizationAdmin.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

