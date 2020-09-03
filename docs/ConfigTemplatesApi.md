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
> Object createOrganizationConfigTemplate(bodyorganizationId)

Create a new configuration template

Create a new configuration template

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigTemplatesApi();
let body = new MerakiDashboardApi.Body134(); // Body134 | 
let organizationId = "organizationId_example"; // String | 

apiInstance.createOrganizationConfigTemplate(bodyorganizationId, (error, data, response) => {
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
 **body** | [**Body134**](Body134.md)|  | 
 **organizationId** | **String**|  | 

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
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigTemplatesApi();
let organizationId = "organizationId_example"; // String | 
let configTemplateId = "configTemplateId_example"; // String | 

apiInstance.deleteOrganizationConfigTemplate(organizationId, configTemplateId, (error, data, response) => {
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
 **configTemplateId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getOrganizationConfigTemplate"></a>
# **getOrganizationConfigTemplate**
> Object getOrganizationConfigTemplate(organizationId, configTemplateId)

Return a single configuration template

Return a single configuration template

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigTemplatesApi();
let organizationId = "organizationId_example"; // String | 
let configTemplateId = "configTemplateId_example"; // String | 

apiInstance.getOrganizationConfigTemplate(organizationId, configTemplateId, (error, data, response) => {
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
 **configTemplateId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationConfigTemplateSwitchProfilePort"></a>
# **getOrganizationConfigTemplateSwitchProfilePort**
> Object getOrganizationConfigTemplateSwitchProfilePort(organizationId, configTemplateId, profileId, portId)

Return a switch profile port

Return a switch profile port

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigTemplatesApi();
let organizationId = "organizationId_example"; // String | 
let configTemplateId = "configTemplateId_example"; // String | 
let profileId = "profileId_example"; // String | 
let portId = "portId_example"; // String | 

apiInstance.getOrganizationConfigTemplateSwitchProfilePort(organizationId, configTemplateId, profileId, portId, (error, data, response) => {
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
 **configTemplateId** | **String**|  | 
 **profileId** | **String**|  | 
 **portId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationConfigTemplateSwitchProfilePorts"></a>
# **getOrganizationConfigTemplateSwitchProfilePorts**
> Object getOrganizationConfigTemplateSwitchProfilePorts(organizationId, configTemplateId, profileId)

Return all the ports of a switch profile

Return all the ports of a switch profile

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigTemplatesApi();
let organizationId = "organizationId_example"; // String | 
let configTemplateId = "configTemplateId_example"; // String | 
let profileId = "profileId_example"; // String | 

apiInstance.getOrganizationConfigTemplateSwitchProfilePorts(organizationId, configTemplateId, profileId, (error, data, response) => {
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
 **configTemplateId** | **String**|  | 
 **profileId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationConfigTemplateSwitchProfiles"></a>
# **getOrganizationConfigTemplateSwitchProfiles**
> Object getOrganizationConfigTemplateSwitchProfiles(organizationId, configTemplateId)

List the switch profiles for your switch template configuration

List the switch profiles for your switch template configuration

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigTemplatesApi();
let organizationId = "organizationId_example"; // String | 
let configTemplateId = "configTemplateId_example"; // String | 

apiInstance.getOrganizationConfigTemplateSwitchProfiles(organizationId, configTemplateId, (error, data, response) => {
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
 **configTemplateId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationConfigTemplates"></a>
# **getOrganizationConfigTemplates**
> Object getOrganizationConfigTemplates(organizationId)

List the configuration templates for this organization

List the configuration templates for this organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigTemplatesApi();
let organizationId = "organizationId_example"; // String | 

apiInstance.getOrganizationConfigTemplates(organizationId, (error, data, response) => {
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

<a name="updateOrganizationConfigTemplate"></a>
# **updateOrganizationConfigTemplate**
> Object updateOrganizationConfigTemplate(organizationIdconfigTemplateId, opts)

Update a configuration template

Update a configuration template

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigTemplatesApi();
let organizationId = "organizationId_example"; // String | 
let configTemplateId = "configTemplateId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body135() // Body135 | 
};
apiInstance.updateOrganizationConfigTemplate(organizationIdconfigTemplateId, opts, (error, data, response) => {
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
 **configTemplateId** | **String**|  | 
 **body** | [**Body135**](Body135.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrganizationConfigTemplateSwitchProfilePort"></a>
# **updateOrganizationConfigTemplateSwitchProfilePort**
> Object updateOrganizationConfigTemplateSwitchProfilePort(organizationIdconfigTemplateIdprofileIdportId, opts)

Update a switch profile port

Update a switch profile port

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigTemplatesApi();
let organizationId = "organizationId_example"; // String | 
let configTemplateId = "configTemplateId_example"; // String | 
let profileId = "profileId_example"; // String | 
let portId = "portId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body136() // Body136 | 
};
apiInstance.updateOrganizationConfigTemplateSwitchProfilePort(organizationIdconfigTemplateIdprofileIdportId, opts, (error, data, response) => {
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
 **configTemplateId** | **String**|  | 
 **profileId** | **String**|  | 
 **portId** | **String**|  | 
 **body** | [**Body136**](Body136.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

