# MerakiDashboardApi.LicensesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignOrganizationLicensesSeats**](LicensesApi.md#assignOrganizationLicensesSeats) | **POST** /organizations/{organizationId}/licenses/assignSeats | Assign SM seats to a network. This will increase the managed SM device limit of the network
[**getOrganizationLicense**](LicensesApi.md#getOrganizationLicense) | **GET** /organizations/{organizationId}/licenses/{licenseId} | Display a license
[**getOrganizationLicenses**](LicensesApi.md#getOrganizationLicenses) | **GET** /organizations/{organizationId}/licenses | List the licenses for an organization
[**getOrganizationLicensesOverview**](LicensesApi.md#getOrganizationLicensesOverview) | **GET** /organizations/{organizationId}/licenses/overview | Return an overview of the license state for an organization
[**moveOrganizationLicenses**](LicensesApi.md#moveOrganizationLicenses) | **POST** /organizations/{organizationId}/licenses/move | Move licenses to another organization. This will also move any devices that the licenses are assigned to
[**moveOrganizationLicensesSeats**](LicensesApi.md#moveOrganizationLicensesSeats) | **POST** /organizations/{organizationId}/licenses/moveSeats | Move SM seats to another organization
[**renewOrganizationLicensesSeats**](LicensesApi.md#renewOrganizationLicensesSeats) | **POST** /organizations/{organizationId}/licenses/renewSeats | Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license
[**updateOrganizationLicense**](LicensesApi.md#updateOrganizationLicense) | **PUT** /organizations/{organizationId}/licenses/{licenseId} | Update a license


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

var apiInstance = new MerakiDashboardApi.LicensesApi();

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

var apiInstance = new MerakiDashboardApi.LicensesApi();

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

var apiInstance = new MerakiDashboardApi.LicensesApi();

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

var apiInstance = new MerakiDashboardApi.LicensesApi();

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

var apiInstance = new MerakiDashboardApi.LicensesApi();

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

var apiInstance = new MerakiDashboardApi.LicensesApi();

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

var apiInstance = new MerakiDashboardApi.LicensesApi();

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

var apiInstance = new MerakiDashboardApi.LicensesApi();

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

