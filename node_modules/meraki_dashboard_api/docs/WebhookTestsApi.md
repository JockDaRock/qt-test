# MerakiDashboardApi.WebhookTestsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNetworkWebhooksWebhookTest**](WebhookTestsApi.md#createNetworkWebhooksWebhookTest) | **POST** /networks/{networkId}/webhooks/webhookTests | Send a test webhook for a network
[**getNetworkWebhooksWebhookTest**](WebhookTestsApi.md#getNetworkWebhooksWebhookTest) | **GET** /networks/{networkId}/webhooks/webhookTests/{webhookTestId} | Return the status of a webhook test for a network

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

let apiInstance = new MerakiDashboardApi.WebhookTestsApi();
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

let apiInstance = new MerakiDashboardApi.WebhookTestsApi();
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

