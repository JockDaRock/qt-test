# MerakiDashboardApi.HttpServersApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNetworkWebhooksHttpServer**](HttpServersApi.md#createNetworkWebhooksHttpServer) | **POST** /networks/{networkId}/webhooks/httpServers | Add an HTTP server to a network
[**deleteNetworkWebhooksHttpServer**](HttpServersApi.md#deleteNetworkWebhooksHttpServer) | **DELETE** /networks/{networkId}/webhooks/httpServers/{httpServerId} | Delete an HTTP server from a network
[**getNetworkWebhooksHttpServer**](HttpServersApi.md#getNetworkWebhooksHttpServer) | **GET** /networks/{networkId}/webhooks/httpServers/{httpServerId} | Return an HTTP server for a network
[**getNetworkWebhooksHttpServers**](HttpServersApi.md#getNetworkWebhooksHttpServers) | **GET** /networks/{networkId}/webhooks/httpServers | List the HTTP servers for a network
[**updateNetworkWebhooksHttpServer**](HttpServersApi.md#updateNetworkWebhooksHttpServer) | **PUT** /networks/{networkId}/webhooks/httpServers/{httpServerId} | Update an HTTP server


<a name="createNetworkWebhooksHttpServer"></a>
# **createNetworkWebhooksHttpServer**
> Object createNetworkWebhooksHttpServer(networkId, createNetworkWebhooksHttpServer)

Add an HTTP server to a network

Add an HTTP server to a network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.HttpServersApi();

var networkId = "networkId_example"; // String | 

var createNetworkWebhooksHttpServer = new MerakiDashboardApi.CreateNetworkWebhooksHttpServer(); // CreateNetworkWebhooksHttpServer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNetworkWebhooksHttpServer(networkId, createNetworkWebhooksHttpServer, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **createNetworkWebhooksHttpServer** | [**CreateNetworkWebhooksHttpServer**](CreateNetworkWebhooksHttpServer.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNetworkWebhooksHttpServer"></a>
# **deleteNetworkWebhooksHttpServer**
> deleteNetworkWebhooksHttpServer(networkId, httpServerId)

Delete an HTTP server from a network

Delete an HTTP server from a network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.HttpServersApi();

var networkId = "networkId_example"; // String | 

var httpServerId = "httpServerId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteNetworkWebhooksHttpServer(networkId, httpServerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **httpServerId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkWebhooksHttpServer"></a>
# **getNetworkWebhooksHttpServer**
> Object getNetworkWebhooksHttpServer(networkId, httpServerId)

Return an HTTP server for a network

Return an HTTP server for a network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.HttpServersApi();

var networkId = "networkId_example"; // String | 

var httpServerId = "httpServerId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkWebhooksHttpServer(networkId, httpServerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **httpServerId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkWebhooksHttpServers"></a>
# **getNetworkWebhooksHttpServers**
> Object getNetworkWebhooksHttpServers(networkId)

List the HTTP servers for a network

List the HTTP servers for a network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.HttpServersApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkWebhooksHttpServers(networkId, callback);
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

<a name="updateNetworkWebhooksHttpServer"></a>
# **updateNetworkWebhooksHttpServer**
> Object updateNetworkWebhooksHttpServer(networkId, httpServerId, opts)

Update an HTTP server

Update an HTTP server

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.HttpServersApi();

var networkId = "networkId_example"; // String | 

var httpServerId = "httpServerId_example"; // String | 

var opts = { 
  'updateNetworkWebhooksHttpServer': new MerakiDashboardApi.UpdateNetworkWebhooksHttpServer() // UpdateNetworkWebhooksHttpServer | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkWebhooksHttpServer(networkId, httpServerId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **httpServerId** | **String**|  | 
 **updateNetworkWebhooksHttpServer** | [**UpdateNetworkWebhooksHttpServer**](UpdateNetworkWebhooksHttpServer.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

