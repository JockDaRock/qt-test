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
> Object createOrganizationActionBatch(bodyorganizationId)

Create an action batch

Create an action batch

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ActionBatchesApi();
let body = new MerakiDashboardApi.Body122(); // Body122 | 
let organizationId = "organizationId_example"; // String | 

apiInstance.createOrganizationActionBatch(bodyorganizationId, (error, data, response) => {
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
 **body** | [**Body122**](Body122.md)|  | 
 **organizationId** | **String**|  | 

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
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ActionBatchesApi();
let organizationId = "organizationId_example"; // String | 
let actionBatchId = "actionBatchId_example"; // String | 

apiInstance.deleteOrganizationActionBatch(organizationId, actionBatchId, (error, data, response) => {
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
 **actionBatchId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getOrganizationActionBatch"></a>
# **getOrganizationActionBatch**
> Object getOrganizationActionBatch(organizationId, actionBatchId)

Return an action batch

Return an action batch

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ActionBatchesApi();
let organizationId = "organizationId_example"; // String | 
let actionBatchId = "actionBatchId_example"; // String | 

apiInstance.getOrganizationActionBatch(organizationId, actionBatchId, (error, data, response) => {
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
 **actionBatchId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationActionBatches"></a>
# **getOrganizationActionBatches**
> Object getOrganizationActionBatches(organizationId, opts)

Return the list of action batches in the organization

Return the list of action batches in the organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ActionBatchesApi();
let organizationId = "organizationId_example"; // String | 
let opts = { 
  'status': "status_example" // String | Filter batches by status. Valid types are pending, completed, and failed.
};
apiInstance.getOrganizationActionBatches(organizationId, opts, (error, data, response) => {
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
 **status** | **String**| Filter batches by status. Valid types are pending, completed, and failed. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateOrganizationActionBatch"></a>
# **updateOrganizationActionBatch**
> Object updateOrganizationActionBatch(organizationIdactionBatchId, opts)

Update an action batch

Update an action batch

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ActionBatchesApi();
let organizationId = "organizationId_example"; // String | 
let actionBatchId = "actionBatchId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body123() // Body123 | 
};
apiInstance.updateOrganizationActionBatch(organizationIdactionBatchId, opts, (error, data, response) => {
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
 **actionBatchId** | **String**|  | 
 **body** | [**Body123**](Body123.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

