# MerakiDashboardApi.MqttBrokersApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNetworkMqttBroker**](MqttBrokersApi.md#createNetworkMqttBroker) | **POST** /networks/{networkId}/mqttBrokers | Add an MQTT broker
[**deleteNetworkMqttBroker**](MqttBrokersApi.md#deleteNetworkMqttBroker) | **DELETE** /networks/{networkId}/mqttBrokers/{mqttBrokerId} | Delete an MQTT broker
[**getNetworkMqttBroker**](MqttBrokersApi.md#getNetworkMqttBroker) | **GET** /networks/{networkId}/mqttBrokers/{mqttBrokerId} | Return an MQTT broker
[**getNetworkMqttBrokers**](MqttBrokersApi.md#getNetworkMqttBrokers) | **GET** /networks/{networkId}/mqttBrokers | List the MQTT brokers for this network
[**updateNetworkMqttBroker**](MqttBrokersApi.md#updateNetworkMqttBroker) | **PUT** /networks/{networkId}/mqttBrokers/{mqttBrokerId} | Update an MQTT broker

<a name="createNetworkMqttBroker"></a>
# **createNetworkMqttBroker**
> Object createNetworkMqttBroker(bodynetworkId)

Add an MQTT broker

Add an MQTT broker

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MqttBrokersApi();
let body = new MerakiDashboardApi.Body66(); // Body66 | 
let networkId = "networkId_example"; // String | 

apiInstance.createNetworkMqttBroker(bodynetworkId, (error, data, response) => {
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
 **body** | [**Body66**](Body66.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNetworkMqttBroker"></a>
# **deleteNetworkMqttBroker**
> deleteNetworkMqttBroker(networkId, mqttBrokerId)

Delete an MQTT broker

Delete an MQTT broker

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MqttBrokersApi();
let networkId = "networkId_example"; // String | 
let mqttBrokerId = "mqttBrokerId_example"; // String | 

apiInstance.deleteNetworkMqttBroker(networkId, mqttBrokerId, (error, data, response) => {
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
 **mqttBrokerId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getNetworkMqttBroker"></a>
# **getNetworkMqttBroker**
> Object getNetworkMqttBroker(networkId, mqttBrokerId)

Return an MQTT broker

Return an MQTT broker

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MqttBrokersApi();
let networkId = "networkId_example"; // String | 
let mqttBrokerId = "mqttBrokerId_example"; // String | 

apiInstance.getNetworkMqttBroker(networkId, mqttBrokerId, (error, data, response) => {
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
 **mqttBrokerId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkMqttBrokers"></a>
# **getNetworkMqttBrokers**
> Object getNetworkMqttBrokers(networkId)

List the MQTT brokers for this network

List the MQTT brokers for this network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MqttBrokersApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkMqttBrokers(networkId, (error, data, response) => {
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

<a name="updateNetworkMqttBroker"></a>
# **updateNetworkMqttBroker**
> Object updateNetworkMqttBroker(networkIdmqttBrokerId, opts)

Update an MQTT broker

Update an MQTT broker

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MqttBrokersApi();
let networkId = "networkId_example"; // String | 
let mqttBrokerId = "mqttBrokerId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body67() // Body67 | 
};
apiInstance.updateNetworkMqttBroker(networkIdmqttBrokerId, opts, (error, data, response) => {
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
 **mqttBrokerId** | **String**|  | 
 **body** | [**Body67**](Body67.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

