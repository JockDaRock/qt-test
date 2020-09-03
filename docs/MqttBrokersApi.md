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
> Object createNetworkMqttBroker(networkId, createNetworkMqttBroker)

Add an MQTT broker

Add an MQTT broker

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.MqttBrokersApi();

var networkId = "networkId_example"; // String | 

var createNetworkMqttBroker = new MerakiDashboardApi.CreateNetworkMqttBroker(); // CreateNetworkMqttBroker | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNetworkMqttBroker(networkId, createNetworkMqttBroker, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **createNetworkMqttBroker** | [**CreateNetworkMqttBroker**](CreateNetworkMqttBroker.md)|  | 

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
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.MqttBrokersApi();

var networkId = "networkId_example"; // String | 

var mqttBrokerId = "mqttBrokerId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteNetworkMqttBroker(networkId, mqttBrokerId, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkMqttBroker"></a>
# **getNetworkMqttBroker**
> Object getNetworkMqttBroker(networkId, mqttBrokerId)

Return an MQTT broker

Return an MQTT broker

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.MqttBrokersApi();

var networkId = "networkId_example"; // String | 

var mqttBrokerId = "mqttBrokerId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkMqttBroker(networkId, mqttBrokerId, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkMqttBrokers"></a>
# **getNetworkMqttBrokers**
> Object getNetworkMqttBrokers(networkId)

List the MQTT brokers for this network

List the MQTT brokers for this network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.MqttBrokersApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkMqttBrokers(networkId, callback);
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

<a name="updateNetworkMqttBroker"></a>
# **updateNetworkMqttBroker**
> Object updateNetworkMqttBroker(networkId, mqttBrokerId, opts)

Update an MQTT broker

Update an MQTT broker

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.MqttBrokersApi();

var networkId = "networkId_example"; // String | 

var mqttBrokerId = "mqttBrokerId_example"; // String | 

var opts = { 
  'updateNetworkMqttBroker': new MerakiDashboardApi.UpdateNetworkMqttBroker() // UpdateNetworkMqttBroker | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkMqttBroker(networkId, mqttBrokerId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **mqttBrokerId** | **String**|  | 
 **updateNetworkMqttBroker** | [**UpdateNetworkMqttBroker**](UpdateNetworkMqttBroker.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

