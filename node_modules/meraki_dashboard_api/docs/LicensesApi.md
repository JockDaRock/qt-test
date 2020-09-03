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
> Object assignOrganizationLicensesSeats(bodyorganizationId)

Assign SM seats to a network. This will increase the managed SM device limit of the network

Assign SM seats to a network. This will increase the managed SM device limit of the network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.LicensesApi();
let body = new MerakiDashboardApi.Body139(); // Body139 | 
let organizationId = "organizationId_example"; // String | 

apiInstance.assignOrganizationLicensesSeats(bodyorganizationId, (error, data, response) => {
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
 **body** | [**Body139**](Body139.md)|  | 
 **organizationId** | **String**|  | 

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
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.LicensesApi();
let organizationId = "organizationId_example"; // String | 
let licenseId = "licenseId_example"; // String | 

apiInstance.getOrganizationLicense(organizationId, licenseId, (error, data, response) => {
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
 **licenseId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationLicenses"></a>
# **getOrganizationLicenses**
> Object getOrganizationLicenses(organizationId, opts)

List the licenses for an organization

List the licenses for an organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.LicensesApi();
let organizationId = "organizationId_example"; // String | 
let opts = { 
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example", // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'deviceSerial': "deviceSerial_example", // String | Filter the licenses to those assigned to a particular device
  'networkId': "networkId_example", // String | Filter the licenses to those assigned in a particular network
  'state': "state_example" // String | Filter the licenses to those in a particular state. Can be one of 'active', 'expired', 'expiring', 'unused', 'unusedActive' or 'recentlyQueued'
};
apiInstance.getOrganizationLicenses(organizationId, opts, (error, data, response) => {
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
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **deviceSerial** | **String**| Filter the licenses to those assigned to a particular device | [optional] 
 **networkId** | **String**| Filter the licenses to those assigned in a particular network | [optional] 
 **state** | **String**| Filter the licenses to those in a particular state. Can be one of &#x27;active&#x27;, &#x27;expired&#x27;, &#x27;expiring&#x27;, &#x27;unused&#x27;, &#x27;unusedActive&#x27; or &#x27;recentlyQueued&#x27; | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationLicensesOverview"></a>
# **getOrganizationLicensesOverview**
> Object getOrganizationLicensesOverview(organizationId)

Return an overview of the license state for an organization

Return an overview of the license state for an organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.LicensesApi();
let organizationId = "organizationId_example"; // String | 

apiInstance.getOrganizationLicensesOverview(organizationId, (error, data, response) => {
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

<a name="moveOrganizationLicenses"></a>
# **moveOrganizationLicenses**
> Object moveOrganizationLicenses(bodyorganizationId)

Move licenses to another organization. This will also move any devices that the licenses are assigned to

Move licenses to another organization. This will also move any devices that the licenses are assigned to

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.LicensesApi();
let body = new MerakiDashboardApi.Body140(); // Body140 | 
let organizationId = "organizationId_example"; // String | 

apiInstance.moveOrganizationLicenses(bodyorganizationId, (error, data, response) => {
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
 **body** | [**Body140**](Body140.md)|  | 
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="moveOrganizationLicensesSeats"></a>
# **moveOrganizationLicensesSeats**
> Object moveOrganizationLicensesSeats(bodyorganizationId)

Move SM seats to another organization

Move SM seats to another organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.LicensesApi();
let body = new MerakiDashboardApi.Body141(); // Body141 | 
let organizationId = "organizationId_example"; // String | 

apiInstance.moveOrganizationLicensesSeats(bodyorganizationId, (error, data, response) => {
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
 **body** | [**Body141**](Body141.md)|  | 
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="renewOrganizationLicensesSeats"></a>
# **renewOrganizationLicensesSeats**
> Object renewOrganizationLicensesSeats(bodyorganizationId)

Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license

Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.LicensesApi();
let body = new MerakiDashboardApi.Body142(); // Body142 | 
let organizationId = "organizationId_example"; // String | 

apiInstance.renewOrganizationLicensesSeats(bodyorganizationId, (error, data, response) => {
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
 **body** | [**Body142**](Body142.md)|  | 
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrganizationLicense"></a>
# **updateOrganizationLicense**
> Object updateOrganizationLicense(organizationIdlicenseId, opts)

Update a license

Update a license

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.LicensesApi();
let organizationId = "organizationId_example"; // String | 
let licenseId = "licenseId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body143() // Body143 | 
};
apiInstance.updateOrganizationLicense(organizationIdlicenseId, opts, (error, data, response) => {
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
 **licenseId** | **String**|  | 
 **body** | [**Body143**](Body143.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

