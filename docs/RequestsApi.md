# MerakiDashboardApi.RequestsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNetworkPiiRequest**](RequestsApi.md#createNetworkPiiRequest) | **POST** /networks/{networkId}/pii/requests | Submit a new delete or restrict processing PII request
[**deleteNetworkPiiRequest**](RequestsApi.md#deleteNetworkPiiRequest) | **DELETE** /networks/{networkId}/pii/requests/{requestId} | Delete a restrict processing PII request
[**getNetworkPiiRequest**](RequestsApi.md#getNetworkPiiRequest) | **GET** /networks/{networkId}/pii/requests/{requestId} | Return a PII request
[**getNetworkPiiRequests**](RequestsApi.md#getNetworkPiiRequests) | **GET** /networks/{networkId}/pii/requests | List the PII requests for this network or organization


<a name="createNetworkPiiRequest"></a>
# **createNetworkPiiRequest**
> Object createNetworkPiiRequest(networkId, opts)

Submit a new delete or restrict processing PII request

Submit a new delete or restrict processing PII request  ## ALTERNATE PATH  ``` /organizations/{organizationId}/pii/requests ```

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RequestsApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  'createNetworkPiiRequest': new MerakiDashboardApi.CreateNetworkPiiRequest() // CreateNetworkPiiRequest | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNetworkPiiRequest(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **createNetworkPiiRequest** | [**CreateNetworkPiiRequest**](CreateNetworkPiiRequest.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNetworkPiiRequest"></a>
# **deleteNetworkPiiRequest**
> deleteNetworkPiiRequest(networkId, requestId)

Delete a restrict processing PII request

Delete a restrict processing PII request  ## ALTERNATE PATH  ``` /organizations/{organizationId}/pii/requests/{requestId} ```

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RequestsApi();

var networkId = "networkId_example"; // String | 

var requestId = "requestId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteNetworkPiiRequest(networkId, requestId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **requestId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkPiiRequest"></a>
# **getNetworkPiiRequest**
> Object getNetworkPiiRequest(networkId, requestId)

Return a PII request

Return a PII request  ## ALTERNATE PATH  ``` /organizations/{organizationId}/pii/requests/{requestId} ```

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RequestsApi();

var networkId = "networkId_example"; // String | 

var requestId = "requestId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkPiiRequest(networkId, requestId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **requestId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkPiiRequests"></a>
# **getNetworkPiiRequests**
> Object getNetworkPiiRequests(networkId)

List the PII requests for this network or organization

List the PII requests for this network or organization  ## ALTERNATE PATH  ``` /organizations/{organizationId}/pii/requests ```

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RequestsApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkPiiRequests(networkId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

