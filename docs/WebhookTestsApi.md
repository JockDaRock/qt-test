# MerakiDashboardApi.WebhookTestsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNetworkWebhooksWebhookTest**](WebhookTestsApi.md#createNetworkWebhooksWebhookTest) | **POST** /networks/{networkId}/webhooks/webhookTests | Send a test webhook for a network
[**getNetworkWebhooksWebhookTest**](WebhookTestsApi.md#getNetworkWebhooksWebhookTest) | **GET** /networks/{networkId}/webhooks/webhookTests/{webhookTestId} | Return the status of a webhook test for a network


<a name="createNetworkWebhooksWebhookTest"></a>
# **createNetworkWebhooksWebhookTest**
> Object createNetworkWebhooksWebhookTest(networkId, createNetworkWebhooksWebhookTest)

Send a test webhook for a network

Send a test webhook for a network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.WebhookTestsApi();

var networkId = "networkId_example"; // String | 

var createNetworkWebhooksWebhookTest = new MerakiDashboardApi.CreateNetworkWebhooksWebhookTest(); // CreateNetworkWebhooksWebhookTest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNetworkWebhooksWebhookTest(networkId, createNetworkWebhooksWebhookTest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **createNetworkWebhooksWebhookTest** | [**CreateNetworkWebhooksWebhookTest**](CreateNetworkWebhooksWebhookTest.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkWebhooksWebhookTest"></a>
# **getNetworkWebhooksWebhookTest**
> Object getNetworkWebhooksWebhookTest(networkId, webhookTestId)

Return the status of a webhook test for a network

Return the status of a webhook test for a network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.WebhookTestsApi();

var networkId = "networkId_example"; // String | 

var webhookTestId = "webhookTestId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkWebhooksWebhookTest(networkId, webhookTestId, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

