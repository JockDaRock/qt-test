# MerakiDashboardApi.InsightApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrganizationInsightMonitoredMediaServer**](InsightApi.md#createOrganizationInsightMonitoredMediaServer) | **POST** /organizations/{organizationId}/insight/monitoredMediaServers | Add a media server to be monitored for this organization. Only valid for organizations with Meraki Insight.
[**deleteOrganizationInsightMonitoredMediaServer**](InsightApi.md#deleteOrganizationInsightMonitoredMediaServer) | **DELETE** /organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId} | Delete a monitored media server from this organization. Only valid for organizations with Meraki Insight.
[**getOrganizationInsightMonitoredMediaServer**](InsightApi.md#getOrganizationInsightMonitoredMediaServer) | **GET** /organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId} | Return a monitored media server for this organization. Only valid for organizations with Meraki Insight.
[**getOrganizationInsightMonitoredMediaServers**](InsightApi.md#getOrganizationInsightMonitoredMediaServers) | **GET** /organizations/{organizationId}/insight/monitoredMediaServers | List the monitored media servers for this organization. Only valid for organizations with Meraki Insight.
[**updateOrganizationInsightMonitoredMediaServer**](InsightApi.md#updateOrganizationInsightMonitoredMediaServer) | **PUT** /organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId} | Update a monitored media server for this organization. Only valid for organizations with Meraki Insight.


<a name="createOrganizationInsightMonitoredMediaServer"></a>
# **createOrganizationInsightMonitoredMediaServer**
> Object createOrganizationInsightMonitoredMediaServer(organizationId, createOrganizationInsightMonitoredMediaServer)

Add a media server to be monitored for this organization. Only valid for organizations with Meraki Insight.

Add a media server to be monitored for this organization. Only valid for organizations with Meraki Insight.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.InsightApi();

var organizationId = "organizationId_example"; // String | 

var createOrganizationInsightMonitoredMediaServer = new MerakiDashboardApi.CreateOrganizationInsightMonitoredMediaServer(); // CreateOrganizationInsightMonitoredMediaServer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createOrganizationInsightMonitoredMediaServer(organizationId, createOrganizationInsightMonitoredMediaServer, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **createOrganizationInsightMonitoredMediaServer** | [**CreateOrganizationInsightMonitoredMediaServer**](CreateOrganizationInsightMonitoredMediaServer.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteOrganizationInsightMonitoredMediaServer"></a>
# **deleteOrganizationInsightMonitoredMediaServer**
> deleteOrganizationInsightMonitoredMediaServer(organizationId, monitoredMediaServerId)

Delete a monitored media server from this organization. Only valid for organizations with Meraki Insight.

Delete a monitored media server from this organization. Only valid for organizations with Meraki Insight.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.InsightApi();

var organizationId = "organizationId_example"; // String | 

var monitoredMediaServerId = "monitoredMediaServerId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOrganizationInsightMonitoredMediaServer(organizationId, monitoredMediaServerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **monitoredMediaServerId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationInsightMonitoredMediaServer"></a>
# **getOrganizationInsightMonitoredMediaServer**
> Object getOrganizationInsightMonitoredMediaServer(organizationId, monitoredMediaServerId)

Return a monitored media server for this organization. Only valid for organizations with Meraki Insight.

Return a monitored media server for this organization. Only valid for organizations with Meraki Insight.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.InsightApi();

var organizationId = "organizationId_example"; // String | 

var monitoredMediaServerId = "monitoredMediaServerId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationInsightMonitoredMediaServer(organizationId, monitoredMediaServerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **monitoredMediaServerId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationInsightMonitoredMediaServers"></a>
# **getOrganizationInsightMonitoredMediaServers**
> Object getOrganizationInsightMonitoredMediaServers(organizationId)

List the monitored media servers for this organization. Only valid for organizations with Meraki Insight.

List the monitored media servers for this organization. Only valid for organizations with Meraki Insight.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.InsightApi();

var organizationId = "organizationId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationInsightMonitoredMediaServers(organizationId, callback);
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

<a name="updateOrganizationInsightMonitoredMediaServer"></a>
# **updateOrganizationInsightMonitoredMediaServer**
> Object updateOrganizationInsightMonitoredMediaServer(organizationId, monitoredMediaServerId, opts)

Update a monitored media server for this organization. Only valid for organizations with Meraki Insight.

Update a monitored media server for this organization. Only valid for organizations with Meraki Insight.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.InsightApi();

var organizationId = "organizationId_example"; // String | 

var monitoredMediaServerId = "monitoredMediaServerId_example"; // String | 

var opts = { 
  'updateOrganizationInsightMonitoredMediaServer': new MerakiDashboardApi.UpdateOrganizationInsightMonitoredMediaServer() // UpdateOrganizationInsightMonitoredMediaServer | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateOrganizationInsightMonitoredMediaServer(organizationId, monitoredMediaServerId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **monitoredMediaServerId** | **String**|  | 
 **updateOrganizationInsightMonitoredMediaServer** | [**UpdateOrganizationInsightMonitoredMediaServer**](UpdateOrganizationInsightMonitoredMediaServer.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

