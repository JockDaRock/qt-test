# MerakiDashboardApi.ConfigTemplatesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrganizationConfigTemplate**](ConfigTemplatesApi.md#createOrganizationConfigTemplate) | **POST** /organizations/{organizationId}/configTemplates | Create a new configuration template
[**deleteOrganizationConfigTemplate**](ConfigTemplatesApi.md#deleteOrganizationConfigTemplate) | **DELETE** /organizations/{organizationId}/configTemplates/{configTemplateId} | Remove a configuration template
[**getOrganizationConfigTemplate**](ConfigTemplatesApi.md#getOrganizationConfigTemplate) | **GET** /organizations/{organizationId}/configTemplates/{configTemplateId} | Return a single configuration template
[**getOrganizationConfigTemplateSwitchProfilePort**](ConfigTemplatesApi.md#getOrganizationConfigTemplateSwitchProfilePort) | **GET** /organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId} | Return a switch profile port
[**getOrganizationConfigTemplateSwitchProfilePorts**](ConfigTemplatesApi.md#getOrganizationConfigTemplateSwitchProfilePorts) | **GET** /organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports | Return all the ports of a switch profile
[**getOrganizationConfigTemplateSwitchProfiles**](ConfigTemplatesApi.md#getOrganizationConfigTemplateSwitchProfiles) | **GET** /organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles | List the switch profiles for your switch template configuration
[**getOrganizationConfigTemplates**](ConfigTemplatesApi.md#getOrganizationConfigTemplates) | **GET** /organizations/{organizationId}/configTemplates | List the configuration templates for this organization
[**updateOrganizationConfigTemplate**](ConfigTemplatesApi.md#updateOrganizationConfigTemplate) | **PUT** /organizations/{organizationId}/configTemplates/{configTemplateId} | Update a configuration template
[**updateOrganizationConfigTemplateSwitchProfilePort**](ConfigTemplatesApi.md#updateOrganizationConfigTemplateSwitchProfilePort) | **PUT** /organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId} | Update a switch profile port


<a name="createOrganizationConfigTemplate"></a>
# **createOrganizationConfigTemplate**
> Object createOrganizationConfigTemplate(organizationId, createOrganizationConfigTemplate)

Create a new configuration template

Create a new configuration template

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.ConfigTemplatesApi();

var organizationId = "organizationId_example"; // String | 

var createOrganizationConfigTemplate = new MerakiDashboardApi.CreateOrganizationConfigTemplate(); // CreateOrganizationConfigTemplate | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createOrganizationConfigTemplate(organizationId, createOrganizationConfigTemplate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **createOrganizationConfigTemplate** | [**CreateOrganizationConfigTemplate**](CreateOrganizationConfigTemplate.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteOrganizationConfigTemplate"></a>
# **deleteOrganizationConfigTemplate**
> deleteOrganizationConfigTemplate(organizationId, configTemplateId)

Remove a configuration template

Remove a configuration template

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.ConfigTemplatesApi();

var organizationId = "organizationId_example"; // String | 

var configTemplateId = "configTemplateId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOrganizationConfigTemplate(organizationId, configTemplateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **configTemplateId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationConfigTemplate"></a>
# **getOrganizationConfigTemplate**
> Object getOrganizationConfigTemplate(organizationId, configTemplateId)

Return a single configuration template

Return a single configuration template

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.ConfigTemplatesApi();

var organizationId = "organizationId_example"; // String | 

var configTemplateId = "configTemplateId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationConfigTemplate(organizationId, configTemplateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **configTemplateId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationConfigTemplateSwitchProfilePort"></a>
# **getOrganizationConfigTemplateSwitchProfilePort**
> Object getOrganizationConfigTemplateSwitchProfilePort(organizationId, configTemplateId, profileId, portId)

Return a switch profile port

Return a switch profile port

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.ConfigTemplatesApi();

var organizationId = "organizationId_example"; // String | 

var configTemplateId = "configTemplateId_example"; // String | 

var profileId = "profileId_example"; // String | 

var portId = "portId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationConfigTemplateSwitchProfilePort(organizationId, configTemplateId, profileId, portId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **configTemplateId** | **String**|  | 
 **profileId** | **String**|  | 
 **portId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationConfigTemplateSwitchProfilePorts"></a>
# **getOrganizationConfigTemplateSwitchProfilePorts**
> Object getOrganizationConfigTemplateSwitchProfilePorts(organizationId, configTemplateId, profileId)

Return all the ports of a switch profile

Return all the ports of a switch profile

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.ConfigTemplatesApi();

var organizationId = "organizationId_example"; // String | 

var configTemplateId = "configTemplateId_example"; // String | 

var profileId = "profileId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationConfigTemplateSwitchProfilePorts(organizationId, configTemplateId, profileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **configTemplateId** | **String**|  | 
 **profileId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationConfigTemplateSwitchProfiles"></a>
# **getOrganizationConfigTemplateSwitchProfiles**
> Object getOrganizationConfigTemplateSwitchProfiles(organizationId, configTemplateId)

List the switch profiles for your switch template configuration

List the switch profiles for your switch template configuration

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.ConfigTemplatesApi();

var organizationId = "organizationId_example"; // String | 

var configTemplateId = "configTemplateId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationConfigTemplateSwitchProfiles(organizationId, configTemplateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **configTemplateId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationConfigTemplates"></a>
# **getOrganizationConfigTemplates**
> Object getOrganizationConfigTemplates(organizationId)

List the configuration templates for this organization

List the configuration templates for this organization

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.ConfigTemplatesApi();

var organizationId = "organizationId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationConfigTemplates(organizationId, callback);
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

<a name="updateOrganizationConfigTemplate"></a>
# **updateOrganizationConfigTemplate**
> Object updateOrganizationConfigTemplate(organizationId, configTemplateId, opts)

Update a configuration template

Update a configuration template

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.ConfigTemplatesApi();

var organizationId = "organizationId_example"; // String | 

var configTemplateId = "configTemplateId_example"; // String | 

var opts = { 
  'updateOrganizationConfigTemplate': new MerakiDashboardApi.UpdateOrganizationConfigTemplate() // UpdateOrganizationConfigTemplate | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateOrganizationConfigTemplate(organizationId, configTemplateId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **configTemplateId** | **String**|  | 
 **updateOrganizationConfigTemplate** | [**UpdateOrganizationConfigTemplate**](UpdateOrganizationConfigTemplate.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrganizationConfigTemplateSwitchProfilePort"></a>
# **updateOrganizationConfigTemplateSwitchProfilePort**
> Object updateOrganizationConfigTemplateSwitchProfilePort(organizationId, configTemplateId, profileId, portId, opts)

Update a switch profile port

Update a switch profile port

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.ConfigTemplatesApi();

var organizationId = "organizationId_example"; // String | 

var configTemplateId = "configTemplateId_example"; // String | 

var profileId = "profileId_example"; // String | 

var portId = "portId_example"; // String | 

var opts = { 
  'updateOrganizationConfigTemplateSwitchProfilePort': new MerakiDashboardApi.UpdateOrganizationConfigTemplateSwitchProfilePort() // UpdateOrganizationConfigTemplateSwitchProfilePort | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateOrganizationConfigTemplateSwitchProfilePort(organizationId, configTemplateId, profileId, portId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **configTemplateId** | **String**|  | 
 **profileId** | **String**|  | 
 **portId** | **String**|  | 
 **updateOrganizationConfigTemplateSwitchProfilePort** | [**UpdateOrganizationConfigTemplateSwitchProfilePort**](UpdateOrganizationConfigTemplateSwitchProfilePort.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

