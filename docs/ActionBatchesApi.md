# MerakiDashboardApi.ActionBatchesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrganizationActionBatch**](ActionBatchesApi.md#createOrganizationActionBatch) | **POST** /organizations/{organizationId}/actionBatches | Create an action batch
[**deleteOrganizationActionBatch**](ActionBatchesApi.md#deleteOrganizationActionBatch) | **DELETE** /organizations/{organizationId}/actionBatches/{actionBatchId} | Delete an action batch
[**getOrganizationActionBatch**](ActionBatchesApi.md#getOrganizationActionBatch) | **GET** /organizations/{organizationId}/actionBatches/{actionBatchId} | Return an action batch
[**getOrganizationActionBatches**](ActionBatchesApi.md#getOrganizationActionBatches) | **GET** /organizations/{organizationId}/actionBatches | Return the list of action batches in the organization
[**updateOrganizationActionBatch**](ActionBatchesApi.md#updateOrganizationActionBatch) | **PUT** /organizations/{organizationId}/actionBatches/{actionBatchId} | Update an action batch


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

var apiInstance = new MerakiDashboardApi.ActionBatchesApi();

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

var apiInstance = new MerakiDashboardApi.ActionBatchesApi();

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

var apiInstance = new MerakiDashboardApi.ActionBatchesApi();

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

var apiInstance = new MerakiDashboardApi.ActionBatchesApi();

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

var apiInstance = new MerakiDashboardApi.ActionBatchesApi();

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

