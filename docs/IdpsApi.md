# MerakiDashboardApi.IdpsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrganizationSamlIdp**](IdpsApi.md#createOrganizationSamlIdp) | **POST** /organizations/{organizationId}/saml/idps | Create a SAML IdP for your organization.
[**deleteOrganizationSamlIdp**](IdpsApi.md#deleteOrganizationSamlIdp) | **DELETE** /organizations/{organizationId}/saml/idps/{idpId} | Remove a SAML IdP in your organization.
[**getOrganizationSamlIdp**](IdpsApi.md#getOrganizationSamlIdp) | **GET** /organizations/{organizationId}/saml/idps/{idpId} | Get a SAML IdP from your organization.
[**getOrganizationSamlIdps**](IdpsApi.md#getOrganizationSamlIdps) | **GET** /organizations/{organizationId}/saml/idps | List the SAML IdPs in your organization.
[**updateOrganizationSamlIdp**](IdpsApi.md#updateOrganizationSamlIdp) | **PUT** /organizations/{organizationId}/saml/idps/{idpId} | Update a SAML IdP in your organization


<a name="createOrganizationSamlIdp"></a>
# **createOrganizationSamlIdp**
> Object createOrganizationSamlIdp(organizationId, createOrganizationSamlIdp)

Create a SAML IdP for your organization.

Create a SAML IdP for your organization.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.IdpsApi();

var organizationId = "organizationId_example"; // String | 

var createOrganizationSamlIdp = new MerakiDashboardApi.CreateOrganizationSamlIdp(); // CreateOrganizationSamlIdp | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createOrganizationSamlIdp(organizationId, createOrganizationSamlIdp, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **createOrganizationSamlIdp** | [**CreateOrganizationSamlIdp**](CreateOrganizationSamlIdp.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteOrganizationSamlIdp"></a>
# **deleteOrganizationSamlIdp**
> deleteOrganizationSamlIdp(organizationId, idpId)

Remove a SAML IdP in your organization.

Remove a SAML IdP in your organization.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.IdpsApi();

var organizationId = "organizationId_example"; // String | 

var idpId = "idpId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOrganizationSamlIdp(organizationId, idpId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **idpId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationSamlIdp"></a>
# **getOrganizationSamlIdp**
> Object getOrganizationSamlIdp(organizationId, idpId)

Get a SAML IdP from your organization.

Get a SAML IdP from your organization.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.IdpsApi();

var organizationId = "organizationId_example"; // String | 

var idpId = "idpId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationSamlIdp(organizationId, idpId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **idpId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationSamlIdps"></a>
# **getOrganizationSamlIdps**
> Object getOrganizationSamlIdps(organizationId)

List the SAML IdPs in your organization.

List the SAML IdPs in your organization.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.IdpsApi();

var organizationId = "organizationId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationSamlIdps(organizationId, callback);
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

<a name="updateOrganizationSamlIdp"></a>
# **updateOrganizationSamlIdp**
> Object updateOrganizationSamlIdp(organizationId, idpId, opts)

Update a SAML IdP in your organization

Update a SAML IdP in your organization

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.IdpsApi();

var organizationId = "organizationId_example"; // String | 

var idpId = "idpId_example"; // String | 

var opts = { 
  'updateOrganizationSamlIdp': new MerakiDashboardApi.UpdateOrganizationSamlIdp() // UpdateOrganizationSamlIdp | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateOrganizationSamlIdp(organizationId, idpId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **idpId** | **String**|  | 
 **updateOrganizationSamlIdp** | [**UpdateOrganizationSamlIdp**](UpdateOrganizationSamlIdp.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

