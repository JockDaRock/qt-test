# MerakiDashboardApi.WebhooksApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNetworkWebhooksHttpServer**](WebhooksApi.md#createNetworkWebhooksHttpServer) | **POST** /networks/{networkId}/webhooks/httpServers | Add an HTTP server to a network
[**createNetworkWebhooksWebhookTest**](WebhooksApi.md#createNetworkWebhooksWebhookTest) | **POST** /networks/{networkId}/webhooks/webhookTests | Send a test webhook for a network
[**deleteNetworkWebhooksHttpServer**](WebhooksApi.md#deleteNetworkWebhooksHttpServer) | **DELETE** /networks/{networkId}/webhooks/httpServers/{httpServerId} | Delete an HTTP server from a network
[**getNetworkWebhooksHttpServer**](WebhooksApi.md#getNetworkWebhooksHttpServer) | **GET** /networks/{networkId}/webhooks/httpServers/{httpServerId} | Return an HTTP server for a network
[**getNetworkWebhooksHttpServers**](WebhooksApi.md#getNetworkWebhooksHttpServers) | **GET** /networks/{networkId}/webhooks/httpServers | List the HTTP servers for a network
[**getNetworkWebhooksWebhookTest**](WebhooksApi.md#getNetworkWebhooksWebhookTest) | **GET** /networks/{networkId}/webhooks/webhookTests/{webhookTestId} | Return the status of a webhook test for a network
[**getOrganizationWebhooksLogs**](WebhooksApi.md#getOrganizationWebhooksLogs) | **GET** /organizations/{organizationId}/webhooks/logs | Return the log of webhook POSTs sent
[**updateNetworkWebhooksHttpServer**](WebhooksApi.md#updateNetworkWebhooksHttpServer) | **PUT** /networks/{networkId}/webhooks/httpServers/{httpServerId} | Update an HTTP server

<a name="createNetworkWebhooksHttpServer"></a>
# **createNetworkWebhooksHttpServer**
> Object createNetworkWebhooksHttpServer(bodynetworkId)

Add an HTTP server to a network

Add an HTTP server to a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.WebhooksApi();
let body = new MerakiDashboardApi.Body105(); // Body105 | 
let networkId = "networkId_example"; // String | 

apiInstance.createNetworkWebhooksHttpServer(bodynetworkId, (error, data, response) => {
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
 **body** | [**Body105**](Body105.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkWebhooksWebhookTest"></a>
# **createNetworkWebhooksWebhookTest**
> Object createNetworkWebhooksWebhookTest(bodynetworkId)

Send a test webhook for a network

Send a test webhook for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.WebhooksApi();
let body = new MerakiDashboardApi.Body107(); // Body107 | 
let networkId = "networkId_example"; // String | 

apiInstance.createNetworkWebhooksWebhookTest(bodynetworkId, (error, data, response) => {
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
 **body** | [**Body107**](Body107.md)|  | 
 **networkId** | **String**|  | 

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
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.WebhooksApi();
let networkId = "networkId_example"; // String | 
let httpServerId = "httpServerId_example"; // String | 

apiInstance.deleteNetworkWebhooksHttpServer(networkId, httpServerId, (error, data, response) => {
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
 **networkId** | **String**|  | 
 **httpServerId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getNetworkWebhooksHttpServer"></a>
# **getNetworkWebhooksHttpServer**
> Object getNetworkWebhooksHttpServer(networkId, httpServerId)

Return an HTTP server for a network

Return an HTTP server for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.WebhooksApi();
let networkId = "networkId_example"; // String | 
let httpServerId = "httpServerId_example"; // String | 

apiInstance.getNetworkWebhooksHttpServer(networkId, httpServerId, (error, data, response) => {
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
 **networkId** | **String**|  | 
 **httpServerId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWebhooksHttpServers"></a>
# **getNetworkWebhooksHttpServers**
> Object getNetworkWebhooksHttpServers(networkId)

List the HTTP servers for a network

List the HTTP servers for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.WebhooksApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkWebhooksHttpServers(networkId, (error, data, response) => {
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
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWebhooksWebhookTest"></a>
# **getNetworkWebhooksWebhookTest**
> Object getNetworkWebhooksWebhookTest(networkId, webhookTestId)

Return the status of a webhook test for a network

Return the status of a webhook test for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.WebhooksApi();
let networkId = "networkId_example"; // String | 
let webhookTestId = "webhookTestId_example"; // String | 

apiInstance.getNetworkWebhooksWebhookTest(networkId, webhookTestId, (error, data, response) => {
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
 **networkId** | **String**|  | 
 **webhookTestId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationWebhooksLogs"></a>
# **getOrganizationWebhooksLogs**
> Object getOrganizationWebhooksLogs(organizationId, opts)

Return the log of webhook POSTs sent

Return the log of webhook POSTs sent

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.WebhooksApi();
let organizationId = "organizationId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 90 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example", // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'url': "url_example" // String | The URL the webhook was sent to
};
apiInstance.getOrganizationWebhooksLogs(organizationId, opts, (error, data, response) => {
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

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateNetworkWebhooksHttpServer"></a>
# **updateNetworkWebhooksHttpServer**
> Object updateNetworkWebhooksHttpServer(networkIdhttpServerId, opts)

Update an HTTP server

Update an HTTP server

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.WebhooksApi();
let networkId = "networkId_example"; // String | 
let httpServerId = "httpServerId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body106() // Body106 | 
};
apiInstance.updateNetworkWebhooksHttpServer(networkIdhttpServerId, opts, (error, data, response) => {
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
 **networkId** | **String**|  | 
 **httpServerId** | **String**|  | 
 **body** | [**Body106**](Body106.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

