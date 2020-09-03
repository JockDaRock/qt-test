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
> Object createOrganizationInsightMonitoredMediaServer(bodyorganizationId)

Add a media server to be monitored for this organization. Only valid for organizations with Meraki Insight.

Add a media server to be monitored for this organization. Only valid for organizations with Meraki Insight.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.InsightApi();
let body = new MerakiDashboardApi.Body137(); // Body137 | 
let organizationId = "organizationId_example"; // String | 

apiInstance.createOrganizationInsightMonitoredMediaServer(bodyorganizationId, (error, data, response) => {
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
 **body** | [**Body137**](Body137.md)|  | 
 **organizationId** | **String**|  | 

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
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.InsightApi();
let organizationId = "organizationId_example"; // String | 
let monitoredMediaServerId = "monitoredMediaServerId_example"; // String | 

apiInstance.deleteOrganizationInsightMonitoredMediaServer(organizationId, monitoredMediaServerId, (error, data, response) => {
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
 **monitoredMediaServerId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getOrganizationInsightMonitoredMediaServer"></a>
# **getOrganizationInsightMonitoredMediaServer**
> Object getOrganizationInsightMonitoredMediaServer(organizationId, monitoredMediaServerId)

Return a monitored media server for this organization. Only valid for organizations with Meraki Insight.

Return a monitored media server for this organization. Only valid for organizations with Meraki Insight.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.InsightApi();
let organizationId = "organizationId_example"; // String | 
let monitoredMediaServerId = "monitoredMediaServerId_example"; // String | 

apiInstance.getOrganizationInsightMonitoredMediaServer(organizationId, monitoredMediaServerId, (error, data, response) => {
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
 **monitoredMediaServerId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationInsightMonitoredMediaServers"></a>
# **getOrganizationInsightMonitoredMediaServers**
> Object getOrganizationInsightMonitoredMediaServers(organizationId)

List the monitored media servers for this organization. Only valid for organizations with Meraki Insight.

List the monitored media servers for this organization. Only valid for organizations with Meraki Insight.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.InsightApi();
let organizationId = "organizationId_example"; // String | 

apiInstance.getOrganizationInsightMonitoredMediaServers(organizationId, (error, data, response) => {
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

<a name="updateOrganizationInsightMonitoredMediaServer"></a>
# **updateOrganizationInsightMonitoredMediaServer**
> Object updateOrganizationInsightMonitoredMediaServer(organizationIdmonitoredMediaServerId, opts)

Update a monitored media server for this organization. Only valid for organizations with Meraki Insight.

Update a monitored media server for this organization. Only valid for organizations with Meraki Insight.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.InsightApi();
let organizationId = "organizationId_example"; // String | 
let monitoredMediaServerId = "monitoredMediaServerId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body138() // Body138 | 
};
apiInstance.updateOrganizationInsightMonitoredMediaServer(organizationIdmonitoredMediaServerId, opts, (error, data, response) => {
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
 **monitoredMediaServerId** | **String**|  | 
 **body** | [**Body138**](Body138.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

