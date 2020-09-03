# MerakiDashboardApi.OrganizationsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignOrganizationLicensesSeats**](OrganizationsApi.md#assignOrganizationLicensesSeats) | **POST** /organizations/{organizationId}/licenses/assignSeats | Assign SM seats to a network. This will increase the managed SM device limit of the network
[**claimIntoOrganization**](OrganizationsApi.md#claimIntoOrganization) | **POST** /organizations/{organizationId}/claim | Claim a list of devices, licenses, and/or orders into an organization. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory.
[**cloneOrganization**](OrganizationsApi.md#cloneOrganization) | **POST** /organizations/{organizationId}/clone | Create a new organization by cloning the addressed organization
[**combineOrganizationNetworks**](OrganizationsApi.md#combineOrganizationNetworks) | **POST** /organizations/{organizationId}/networks/combine | Combine multiple networks into a single network
[**createOrganization**](OrganizationsApi.md#createOrganization) | **POST** /organizations | Create a new organization
[**createOrganizationActionBatch**](OrganizationsApi.md#createOrganizationActionBatch) | **POST** /organizations/{organizationId}/actionBatches | Create an action batch
[**createOrganizationAdmin**](OrganizationsApi.md#createOrganizationAdmin) | **POST** /organizations/{organizationId}/admins | Create a new dashboard administrator
[**createOrganizationBrandingPolicy**](OrganizationsApi.md#createOrganizationBrandingPolicy) | **POST** /organizations/{organizationId}/brandingPolicies | Add a new branding policy to an organization
[**createOrganizationConfigTemplate**](OrganizationsApi.md#createOrganizationConfigTemplate) | **POST** /organizations/{organizationId}/configTemplates | Create a new configuration template
[**createOrganizationNetwork**](OrganizationsApi.md#createOrganizationNetwork) | **POST** /organizations/{organizationId}/networks | Create a network
[**createOrganizationSamlIdp**](OrganizationsApi.md#createOrganizationSamlIdp) | **POST** /organizations/{organizationId}/saml/idps | Create a SAML IdP for your organization.
[**createOrganizationSamlRole**](OrganizationsApi.md#createOrganizationSamlRole) | **POST** /organizations/{organizationId}/samlRoles | Create a SAML role
[**deleteOrganization**](OrganizationsApi.md#deleteOrganization) | **DELETE** /organizations/{organizationId} | Delete an organization
[**deleteOrganizationActionBatch**](OrganizationsApi.md#deleteOrganizationActionBatch) | **DELETE** /organizations/{organizationId}/actionBatches/{actionBatchId} | Delete an action batch
[**deleteOrganizationAdmin**](OrganizationsApi.md#deleteOrganizationAdmin) | **DELETE** /organizations/{organizationId}/admins/{adminId} | Revoke all access for a dashboard administrator within this organization
[**deleteOrganizationBrandingPolicy**](OrganizationsApi.md#deleteOrganizationBrandingPolicy) | **DELETE** /organizations/{organizationId}/brandingPolicies/{brandingPolicyId} | Delete a branding policy
[**deleteOrganizationConfigTemplate**](OrganizationsApi.md#deleteOrganizationConfigTemplate) | **DELETE** /organizations/{organizationId}/configTemplates/{configTemplateId} | Remove a configuration template
[**deleteOrganizationSamlIdp**](OrganizationsApi.md#deleteOrganizationSamlIdp) | **DELETE** /organizations/{organizationId}/saml/idps/{idpId} | Remove a SAML IdP in your organization.
[**deleteOrganizationSamlRole**](OrganizationsApi.md#deleteOrganizationSamlRole) | **DELETE** /organizations/{organizationId}/samlRoles/{samlRoleId} | Remove a SAML role
[**getOrganization**](OrganizationsApi.md#getOrganization) | **GET** /organizations/{organizationId} | Return an organization
[**getOrganizationActionBatch**](OrganizationsApi.md#getOrganizationActionBatch) | **GET** /organizations/{organizationId}/actionBatches/{actionBatchId} | Return an action batch
[**getOrganizationActionBatches**](OrganizationsApi.md#getOrganizationActionBatches) | **GET** /organizations/{organizationId}/actionBatches | Return the list of action batches in the organization
[**getOrganizationAdmins**](OrganizationsApi.md#getOrganizationAdmins) | **GET** /organizations/{organizationId}/admins | List the dashboard administrators in this organization
[**getOrganizationApiRequests**](OrganizationsApi.md#getOrganizationApiRequests) | **GET** /organizations/{organizationId}/apiRequests | List the API requests made by an organization
[**getOrganizationApiRequestsOverview**](OrganizationsApi.md#getOrganizationApiRequestsOverview) | **GET** /organizations/{organizationId}/apiRequests/overview | Return an aggregated overview of API requests data
[**getOrganizationBrandingPolicies**](OrganizationsApi.md#getOrganizationBrandingPolicies) | **GET** /organizations/{organizationId}/brandingPolicies | List the branding policies of an organization
[**getOrganizationBrandingPoliciesPriorities**](OrganizationsApi.md#getOrganizationBrandingPoliciesPriorities) | **GET** /organizations/{organizationId}/brandingPolicies/priorities | Return the branding policy IDs of an organization in priority order. IDs are ordered in ascending order of priority (IDs later in the array have higher priority).
[**getOrganizationBrandingPolicy**](OrganizationsApi.md#getOrganizationBrandingPolicy) | **GET** /organizations/{organizationId}/brandingPolicies/{brandingPolicyId} | Return a branding policy
[**getOrganizationConfigTemplate**](OrganizationsApi.md#getOrganizationConfigTemplate) | **GET** /organizations/{organizationId}/configTemplates/{configTemplateId} | Return a single configuration template
[**getOrganizationConfigTemplates**](OrganizationsApi.md#getOrganizationConfigTemplates) | **GET** /organizations/{organizationId}/configTemplates | List the configuration templates for this organization
[**getOrganizationConfigurationChanges**](OrganizationsApi.md#getOrganizationConfigurationChanges) | **GET** /organizations/{organizationId}/configurationChanges | View the Change Log for your organization
[**getOrganizationDevices**](OrganizationsApi.md#getOrganizationDevices) | **GET** /organizations/{organizationId}/devices | List the devices in an organization
[**getOrganizationDevicesStatuses**](OrganizationsApi.md#getOrganizationDevicesStatuses) | **GET** /organizations/{organizationId}/devices/statuses | List the status of every Meraki device in the organization
[**getOrganizationDevicesUplinksLossAndLatency**](OrganizationsApi.md#getOrganizationDevicesUplinksLossAndLatency) | **GET** /organizations/{organizationId}/devices/uplinksLossAndLatency | Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
[**getOrganizationInventoryDevice**](OrganizationsApi.md#getOrganizationInventoryDevice) | **GET** /organizations/{organizationId}/inventoryDevices/{serial} | Return a single device from the inventory of an organization
[**getOrganizationInventoryDevices**](OrganizationsApi.md#getOrganizationInventoryDevices) | **GET** /organizations/{organizationId}/inventoryDevices | Return the device inventory for an organization
[**getOrganizationLicense**](OrganizationsApi.md#getOrganizationLicense) | **GET** /organizations/{organizationId}/licenses/{licenseId} | Display a license
[**getOrganizationLicenses**](OrganizationsApi.md#getOrganizationLicenses) | **GET** /organizations/{organizationId}/licenses | List the licenses for an organization
[**getOrganizationLicensesOverview**](OrganizationsApi.md#getOrganizationLicensesOverview) | **GET** /organizations/{organizationId}/licenses/overview | Return an overview of the license state for an organization
[**getOrganizationNetworks**](OrganizationsApi.md#getOrganizationNetworks) | **GET** /organizations/{organizationId}/networks | List the networks that the user has privileges on in an organization
[**getOrganizationOpenapiSpec**](OrganizationsApi.md#getOrganizationOpenapiSpec) | **GET** /organizations/{organizationId}/openapiSpec | Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
[**getOrganizationSaml**](OrganizationsApi.md#getOrganizationSaml) | **GET** /organizations/{organizationId}/saml | Returns the SAML SSO enabled settings for an organization.
[**getOrganizationSamlIdp**](OrganizationsApi.md#getOrganizationSamlIdp) | **GET** /organizations/{organizationId}/saml/idps/{idpId} | Get a SAML IdP from your organization.
[**getOrganizationSamlIdps**](OrganizationsApi.md#getOrganizationSamlIdps) | **GET** /organizations/{organizationId}/saml/idps | List the SAML IdPs in your organization.
[**getOrganizationSamlRole**](OrganizationsApi.md#getOrganizationSamlRole) | **GET** /organizations/{organizationId}/samlRoles/{samlRoleId} | Return a SAML role
[**getOrganizationSamlRoles**](OrganizationsApi.md#getOrganizationSamlRoles) | **GET** /organizations/{organizationId}/samlRoles | List the SAML roles for this organization
[**getOrganizationSnmp**](OrganizationsApi.md#getOrganizationSnmp) | **GET** /organizations/{organizationId}/snmp | Return the SNMP settings for an organization
[**getOrganizationWebhooksLogs**](OrganizationsApi.md#getOrganizationWebhooksLogs) | **GET** /organizations/{organizationId}/webhooks/logs | Return the log of webhook POSTs sent
[**getOrganizations**](OrganizationsApi.md#getOrganizations) | **GET** /organizations | List the organizations that the user has privileges on
[**moveOrganizationLicenses**](OrganizationsApi.md#moveOrganizationLicenses) | **POST** /organizations/{organizationId}/licenses/move | Move licenses to another organization. This will also move any devices that the licenses are assigned to
[**moveOrganizationLicensesSeats**](OrganizationsApi.md#moveOrganizationLicensesSeats) | **POST** /organizations/{organizationId}/licenses/moveSeats | Move SM seats to another organization
[**renewOrganizationLicensesSeats**](OrganizationsApi.md#renewOrganizationLicensesSeats) | **POST** /organizations/{organizationId}/licenses/renewSeats | Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license
[**updateOrganization**](OrganizationsApi.md#updateOrganization) | **PUT** /organizations/{organizationId} | Update an organization
[**updateOrganizationActionBatch**](OrganizationsApi.md#updateOrganizationActionBatch) | **PUT** /organizations/{organizationId}/actionBatches/{actionBatchId} | Update an action batch
[**updateOrganizationAdmin**](OrganizationsApi.md#updateOrganizationAdmin) | **PUT** /organizations/{organizationId}/admins/{adminId} | Update an administrator
[**updateOrganizationBrandingPoliciesPriorities**](OrganizationsApi.md#updateOrganizationBrandingPoliciesPriorities) | **PUT** /organizations/{organizationId}/brandingPolicies/priorities | Update the priority ordering of an organization's branding policies.
[**updateOrganizationBrandingPolicy**](OrganizationsApi.md#updateOrganizationBrandingPolicy) | **PUT** /organizations/{organizationId}/brandingPolicies/{brandingPolicyId} | Update a branding policy
[**updateOrganizationConfigTemplate**](OrganizationsApi.md#updateOrganizationConfigTemplate) | **PUT** /organizations/{organizationId}/configTemplates/{configTemplateId} | Update a configuration template
[**updateOrganizationLicense**](OrganizationsApi.md#updateOrganizationLicense) | **PUT** /organizations/{organizationId}/licenses/{licenseId} | Update a license
[**updateOrganizationSaml**](OrganizationsApi.md#updateOrganizationSaml) | **PUT** /organizations/{organizationId}/saml | Updates the SAML SSO enabled settings for an organization.
[**updateOrganizationSamlIdp**](OrganizationsApi.md#updateOrganizationSamlIdp) | **PUT** /organizations/{organizationId}/saml/idps/{idpId} | Update a SAML IdP in your organization
[**updateOrganizationSamlRole**](OrganizationsApi.md#updateOrganizationSamlRole) | **PUT** /organizations/{organizationId}/samlRoles/{samlRoleId} | Update a SAML role
[**updateOrganizationSnmp**](OrganizationsApi.md#updateOrganizationSnmp) | **PUT** /organizations/{organizationId}/snmp | Update the SNMP settings for an organization


<a name="assignOrganizationLicensesSeats"></a>
# **assignOrganizationLicensesSeats**
> Object assignOrganizationLicensesSeats(organizationId, assignOrganizationLicensesSeats)

Assign SM seats to a network. This will increase the managed SM device limit of the network

Assign SM seats to a network. This will increase the managed SM device limit of the network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var organizationId = "organizationId_example"; // String | 

var assignOrganizationLicensesSeats = new MerakiDashboardApi.AssignOrganizationLicensesSeats(); // AssignOrganizationLicensesSeats | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.assignOrganizationLicensesSeats(organizationId, assignOrganizationLicensesSeats, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **assignOrganizationLicensesSeats** | [**AssignOrganizationLicensesSeats**](AssignOrganizationLicensesSeats.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="claimIntoOrganization"></a>
# **claimIntoOrganization**
> Object claimIntoOrganization(organizationId, opts)

Claim a list of devices, licenses, and/or orders into an organization. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory.

Claim a list of devices, licenses, and/or orders into an organization. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var organizationId = "organizationId_example"; // String | 

var opts = { 
  'claimIntoOrganization': new MerakiDashboardApi.ClaimIntoOrganization() // ClaimIntoOrganization | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.claimIntoOrganization(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **claimIntoOrganization** | [**ClaimIntoOrganization**](ClaimIntoOrganization.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cloneOrganization"></a>
# **cloneOrganization**
> Object cloneOrganization(organizationId, cloneOrganization)

Create a new organization by cloning the addressed organization

Create a new organization by cloning the addressed organization

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var organizationId = "organizationId_example"; // String | 

var cloneOrganization = new MerakiDashboardApi.CloneOrganization(); // CloneOrganization | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cloneOrganization(organizationId, cloneOrganization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **cloneOrganization** | [**CloneOrganization**](CloneOrganization.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="combineOrganizationNetworks"></a>
# **combineOrganizationNetworks**
> Object combineOrganizationNetworks(organizationId, combineOrganizationNetworks)

Combine multiple networks into a single network

Combine multiple networks into a single network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var organizationId = "organizationId_example"; // String | 

var combineOrganizationNetworks = new MerakiDashboardApi.CombineOrganizationNetworks(); // CombineOrganizationNetworks | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.combineOrganizationNetworks(organizationId, combineOrganizationNetworks, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **combineOrganizationNetworks** | [**CombineOrganizationNetworks**](CombineOrganizationNetworks.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createOrganization"></a>
# **createOrganization**
> Object createOrganization(createOrganization)

Create a new organization

Create a new organization

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var createOrganization = new MerakiDashboardApi.CreateOrganization(); // CreateOrganization | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createOrganization(createOrganization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrganization** | [**CreateOrganization**](CreateOrganization.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createOrganizationActionBatch"></a>
# **createOrganizationActionBatch**
> Object createOrganizationActionBatch(organizationId, createOrganizationActionBatch)

Create an action batch

Create an action batch

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var organizationId = "organizationId_example"; // String | 

var createOrganizationActionBatch = new MerakiDashboardApi.CreateOrganizationActionBatch(); // CreateOrganizationActionBatch | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createOrganizationActionBatch(organizationId, createOrganizationActionBatch, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **createOrganizationActionBatch** | [**CreateOrganizationActionBatch**](CreateOrganizationActionBatch.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

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

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

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

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

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

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

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

<a name="createOrganizationNetwork"></a>
# **createOrganizationNetwork**
> Object createOrganizationNetwork(organizationId, createOrganizationNetwork)

Create a network

Create a network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var organizationId = "organizationId_example"; // String | 

var createOrganizationNetwork = new MerakiDashboardApi.CreateOrganizationNetwork(); // CreateOrganizationNetwork | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createOrganizationNetwork(organizationId, createOrganizationNetwork, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **createOrganizationNetwork** | [**CreateOrganizationNetwork**](CreateOrganizationNetwork.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

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

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

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

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

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

<a name="deleteOrganization"></a>
# **deleteOrganization**
> deleteOrganization(organizationId)

Delete an organization

Delete an organization

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var organizationId = "organizationId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOrganization(organizationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteOrganizationActionBatch"></a>
# **deleteOrganizationActionBatch**
> deleteOrganizationActionBatch(organizationId, actionBatchId)

Delete an action batch

Delete an action batch

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var organizationId = "organizationId_example"; // String | 

var actionBatchId = "actionBatchId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOrganizationActionBatch(organizationId, actionBatchId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **actionBatchId** | **String**|  | 

### Return type

null (empty response body)

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

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

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

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

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

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

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

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

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

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

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

<a name="getOrganization"></a>
# **getOrganization**
> Object getOrganization(organizationId)

Return an organization

Return an organization

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var organizationId = "organizationId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganization(organizationId, callback);
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

<a name="getOrganizationActionBatch"></a>
# **getOrganizationActionBatch**
> Object getOrganizationActionBatch(organizationId, actionBatchId)

Return an action batch

Return an action batch

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var organizationId = "organizationId_example"; // String | 

var actionBatchId = "actionBatchId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationActionBatch(organizationId, actionBatchId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **actionBatchId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationActionBatches"></a>
# **getOrganizationActionBatches**
> Object getOrganizationActionBatches(organizationId, opts)

Return the list of action batches in the organization

Return the list of action batches in the organization

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var organizationId = "organizationId_example"; // String | 

var opts = { 
  'status': "status_example" // String | Filter batches by status. Valid types are pending, completed, and failed.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationActionBatches(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **status** | **String**| Filter batches by status. Valid types are pending, completed, and failed. | [optional] 

### Return type

**Object**

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

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

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

<a name="getOrganizationApiRequests"></a>
# **getOrganizationApiRequests**
> Object getOrganizationApiRequests(organizationId, opts)

List the API requests made by an organization

List the API requests made by an organization

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var organizationId = "organizationId_example"; // String | 

var opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days.
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example", // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'adminId': "adminId_example", // String | Filter the results by the ID of the admin who made the API requests
  'path': "path_example", // String | Filter the results by the path of the API requests
  'method': "method_example", // String | Filter the results by the method of the API requests (must be 'GET', 'PUT', 'POST' or 'DELETE')
  'responseCode': 56, // Number | Filter the results by the response code of the API requests
  'sourceIp': "sourceIp_example" // String | Filter the results by the IP address of the originating API request
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationApiRequests(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days. | [optional] 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **adminId** | **String**| Filter the results by the ID of the admin who made the API requests | [optional] 
 **path** | **String**| Filter the results by the path of the API requests | [optional] 
 **method** | **String**| Filter the results by the method of the API requests (must be 'GET', 'PUT', 'POST' or 'DELETE') | [optional] 
 **responseCode** | **Number**| Filter the results by the response code of the API requests | [optional] 
 **sourceIp** | **String**| Filter the results by the IP address of the originating API request | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationApiRequestsOverview"></a>
# **getOrganizationApiRequestsOverview**
> Object getOrganizationApiRequestsOverview(organizationId, opts)

Return an aggregated overview of API requests data

Return an aggregated overview of API requests data

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var organizationId = "organizationId_example"; // String | 

var opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
  'timespan': 3.4 // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationApiRequestsOverview(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days. | [optional] 

### Return type

**Object**

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

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

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

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

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

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

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

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

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

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

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

<a name="getOrganizationConfigurationChanges"></a>
# **getOrganizationConfigurationChanges**
> Object getOrganizationConfigurationChanges(organizationId, opts)

View the Change Log for your organization

View the Change Log for your organization

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var organizationId = "organizationId_example"; // String | 

var opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 365 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 365 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 365 days.
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 5000. Default is 5000.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example", // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'networkId': "networkId_example", // String | Filters on the given network
  'adminId': "adminId_example" // String | Filters on the given Admin
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationConfigurationChanges(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 365 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 365 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 365 days. | [optional] 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 5000. Default is 5000. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **networkId** | **String**| Filters on the given network | [optional] 
 **adminId** | **String**| Filters on the given Admin | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationDevices"></a>
# **getOrganizationDevices**
> Object getOrganizationDevices(organizationId, opts)

List the devices in an organization

List the devices in an organization

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var organizationId = "organizationId_example"; // String | 

var opts = { 
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example", // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'configurationUpdatedAfter': "configurationUpdatedAfter_example" // String | Filter results by whether or not the device's configuration has been updated after the given timestamp
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationDevices(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **configurationUpdatedAfter** | **String**| Filter results by whether or not the device's configuration has been updated after the given timestamp | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationDevicesStatuses"></a>
# **getOrganizationDevicesStatuses**
> Object getOrganizationDevicesStatuses(organizationId, opts)

List the status of every Meraki device in the organization

List the status of every Meraki device in the organization

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var organizationId = "organizationId_example"; // String | 

var opts = { 
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example" // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationDevicesStatuses(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationDevicesUplinksLossAndLatency"></a>
# **getOrganizationDevicesUplinksLossAndLatency**
> Object getOrganizationDevicesUplinksLossAndLatency(organizationId, opts)

Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var organizationId = "organizationId_example"; // String | 

var opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 365 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 5 minutes after t0. The latest possible time that t1 can be is 2 minutes into the past.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 5 minutes. The default is 5 minutes.
  'uplink': "uplink_example", // String | Optional filter for a specific WAN uplink. Valid uplinks are wan1, wan2, cellular. Default will return all uplinks.
  'ip': "ip_example" // String | Optional filter for a specific destination IP. Default will return all destination IPs.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationDevicesUplinksLossAndLatency(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 365 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 5 minutes after t0. The latest possible time that t1 can be is 2 minutes into the past. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 5 minutes. The default is 5 minutes. | [optional] 
 **uplink** | **String**| Optional filter for a specific WAN uplink. Valid uplinks are wan1, wan2, cellular. Default will return all uplinks. | [optional] 
 **ip** | **String**| Optional filter for a specific destination IP. Default will return all destination IPs. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationInventoryDevice"></a>
# **getOrganizationInventoryDevice**
> Object getOrganizationInventoryDevice(organizationId, serial)

Return a single device from the inventory of an organization

Return a single device from the inventory of an organization

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var organizationId = "organizationId_example"; // String | 

var serial = "serial_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationInventoryDevice(organizationId, serial, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationInventoryDevices"></a>
# **getOrganizationInventoryDevices**
> Object getOrganizationInventoryDevices(organizationId, opts)

Return the device inventory for an organization

Return the device inventory for an organization

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var organizationId = "organizationId_example"; // String | 

var opts = { 
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example", // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'usedState': "usedState_example", // String | Filter results by used or unused inventory. Accepted values are \"used\" or \"unused\".
  'search': "search_example" // String | Search for devices in inventory based on serial number, mac address, or model.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationInventoryDevices(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **usedState** | **String**| Filter results by used or unused inventory. Accepted values are \"used\" or \"unused\". | [optional] 
 **search** | **String**| Search for devices in inventory based on serial number, mac address, or model. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationLicense"></a>
# **getOrganizationLicense**
> Object getOrganizationLicense(organizationId, licenseId)

Display a license

Display a license

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var organizationId = "organizationId_example"; // String | 

var licenseId = "licenseId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationLicense(organizationId, licenseId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **licenseId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationLicenses"></a>
# **getOrganizationLicenses**
> Object getOrganizationLicenses(organizationId, opts)

List the licenses for an organization

List the licenses for an organization

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var organizationId = "organizationId_example"; // String | 

var opts = { 
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example", // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'deviceSerial': "deviceSerial_example", // String | Filter the licenses to those assigned to a particular device
  'networkId': "networkId_example", // String | Filter the licenses to those assigned in a particular network
  'state': "state_example" // String | Filter the licenses to those in a particular state. Can be one of 'active', 'expired', 'expiring', 'unused', 'unusedActive' or 'recentlyQueued'
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationLicenses(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **deviceSerial** | **String**| Filter the licenses to those assigned to a particular device | [optional] 
 **networkId** | **String**| Filter the licenses to those assigned in a particular network | [optional] 
 **state** | **String**| Filter the licenses to those in a particular state. Can be one of 'active', 'expired', 'expiring', 'unused', 'unusedActive' or 'recentlyQueued' | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationLicensesOverview"></a>
# **getOrganizationLicensesOverview**
> Object getOrganizationLicensesOverview(organizationId)

Return an overview of the license state for an organization

Return an overview of the license state for an organization

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var organizationId = "organizationId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationLicensesOverview(organizationId, callback);
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

<a name="getOrganizationNetworks"></a>
# **getOrganizationNetworks**
> Object getOrganizationNetworks(organizationId, opts)

List the networks that the user has privileges on in an organization

List the networks that the user has privileges on in an organization

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var organizationId = "organizationId_example"; // String | 

var opts = { 
  'configTemplateId': "configTemplateId_example", // String | An optional parameter that is the ID of a config template. Will return all networks bound to that template.
  'tags': ["tags_example"], // [String] | An optional parameter to filter networks by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be included (see below).
  'tagsFilterType': "tagsFilterType_example", // String | An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return networks which contain ANY or ALL of the included tags. If no type is included, 'withAnyTags' will be selected.
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 100000. Default is 1000.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example" // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationNetworks(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **configTemplateId** | **String**| An optional parameter that is the ID of a config template. Will return all networks bound to that template. | [optional] 
 **tags** | [**[String]**](String.md)| An optional parameter to filter networks by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be included (see below). | [optional] 
 **tagsFilterType** | **String**| An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return networks which contain ANY or ALL of the included tags. If no type is included, 'withAnyTags' will be selected. | [optional] 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 100000. Default is 1000. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

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

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

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

<a name="getOrganizationSaml"></a>
# **getOrganizationSaml**
> Object getOrganizationSaml(organizationId)

Returns the SAML SSO enabled settings for an organization.

Returns the SAML SSO enabled settings for an organization.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var organizationId = "organizationId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationSaml(organizationId, callback);
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

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

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

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

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

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

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

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

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

<a name="getOrganizationSnmp"></a>
# **getOrganizationSnmp**
> Object getOrganizationSnmp(organizationId)

Return the SNMP settings for an organization

Return the SNMP settings for an organization

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var organizationId = "organizationId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationSnmp(organizationId, callback);
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

<a name="getOrganizationWebhooksLogs"></a>
# **getOrganizationWebhooksLogs**
> Object getOrganizationWebhooksLogs(organizationId, opts)

Return the log of webhook POSTs sent

Return the log of webhook POSTs sent

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var organizationId = "organizationId_example"; // String | 

var opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 90 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example", // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'url': "url_example" // String | The URL the webhook was sent to
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationWebhooksLogs(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 90 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **url** | **String**| The URL the webhook was sent to | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizations"></a>
# **getOrganizations**
> Object getOrganizations()

List the organizations that the user has privileges on

List the organizations that the user has privileges on

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizations(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="moveOrganizationLicenses"></a>
# **moveOrganizationLicenses**
> Object moveOrganizationLicenses(organizationId, moveOrganizationLicenses)

Move licenses to another organization. This will also move any devices that the licenses are assigned to

Move licenses to another organization. This will also move any devices that the licenses are assigned to

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var organizationId = "organizationId_example"; // String | 

var moveOrganizationLicenses = new MerakiDashboardApi.MoveOrganizationLicenses(); // MoveOrganizationLicenses | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.moveOrganizationLicenses(organizationId, moveOrganizationLicenses, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **moveOrganizationLicenses** | [**MoveOrganizationLicenses**](MoveOrganizationLicenses.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="moveOrganizationLicensesSeats"></a>
# **moveOrganizationLicensesSeats**
> Object moveOrganizationLicensesSeats(organizationId, moveOrganizationLicensesSeats)

Move SM seats to another organization

Move SM seats to another organization

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var organizationId = "organizationId_example"; // String | 

var moveOrganizationLicensesSeats = new MerakiDashboardApi.MoveOrganizationLicensesSeats(); // MoveOrganizationLicensesSeats | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.moveOrganizationLicensesSeats(organizationId, moveOrganizationLicensesSeats, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **moveOrganizationLicensesSeats** | [**MoveOrganizationLicensesSeats**](MoveOrganizationLicensesSeats.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="renewOrganizationLicensesSeats"></a>
# **renewOrganizationLicensesSeats**
> Object renewOrganizationLicensesSeats(organizationId, renewOrganizationLicensesSeats)

Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license

Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var organizationId = "organizationId_example"; // String | 

var renewOrganizationLicensesSeats = new MerakiDashboardApi.RenewOrganizationLicensesSeats(); // RenewOrganizationLicensesSeats | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.renewOrganizationLicensesSeats(organizationId, renewOrganizationLicensesSeats, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **renewOrganizationLicensesSeats** | [**RenewOrganizationLicensesSeats**](RenewOrganizationLicensesSeats.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrganization"></a>
# **updateOrganization**
> Object updateOrganization(organizationId, opts)

Update an organization

Update an organization

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var organizationId = "organizationId_example"; // String | 

var opts = { 
  'updateOrganization': new MerakiDashboardApi.UpdateOrganization() // UpdateOrganization | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateOrganization(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **updateOrganization** | [**UpdateOrganization**](UpdateOrganization.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrganizationActionBatch"></a>
# **updateOrganizationActionBatch**
> Object updateOrganizationActionBatch(organizationId, actionBatchId, opts)

Update an action batch

Update an action batch

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var organizationId = "organizationId_example"; // String | 

var actionBatchId = "actionBatchId_example"; // String | 

var opts = { 
  'updateOrganizationActionBatch': new MerakiDashboardApi.UpdateOrganizationActionBatch() // UpdateOrganizationActionBatch | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateOrganizationActionBatch(organizationId, actionBatchId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **actionBatchId** | **String**|  | 
 **updateOrganizationActionBatch** | [**UpdateOrganizationActionBatch**](UpdateOrganizationActionBatch.md)|  | [optional] 

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

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

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

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

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

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

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

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

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

<a name="updateOrganizationLicense"></a>
# **updateOrganizationLicense**
> Object updateOrganizationLicense(organizationId, licenseId, opts)

Update a license

Update a license

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var organizationId = "organizationId_example"; // String | 

var licenseId = "licenseId_example"; // String | 

var opts = { 
  'updateOrganizationLicense': new MerakiDashboardApi.UpdateOrganizationLicense() // UpdateOrganizationLicense | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateOrganizationLicense(organizationId, licenseId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **licenseId** | **String**|  | 
 **updateOrganizationLicense** | [**UpdateOrganizationLicense**](UpdateOrganizationLicense.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrganizationSaml"></a>
# **updateOrganizationSaml**
> Object updateOrganizationSaml(organizationId, opts)

Updates the SAML SSO enabled settings for an organization.

Updates the SAML SSO enabled settings for an organization.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var organizationId = "organizationId_example"; // String | 

var opts = { 
  'updateOrganizationSaml': new MerakiDashboardApi.UpdateOrganizationSaml() // UpdateOrganizationSaml | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateOrganizationSaml(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **updateOrganizationSaml** | [**UpdateOrganizationSaml**](UpdateOrganizationSaml.md)|  | [optional] 

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

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

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

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

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

<a name="updateOrganizationSnmp"></a>
# **updateOrganizationSnmp**
> Object updateOrganizationSnmp(organizationId, opts)

Update the SNMP settings for an organization

Update the SNMP settings for an organization

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.OrganizationsApi();

var organizationId = "organizationId_example"; // String | 

var opts = { 
  'updateOrganizationSnmp': new MerakiDashboardApi.UpdateOrganizationSnmp() // UpdateOrganizationSnmp | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateOrganizationSnmp(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **updateOrganizationSnmp** | [**UpdateOrganizationSnmp**](UpdateOrganizationSnmp.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

