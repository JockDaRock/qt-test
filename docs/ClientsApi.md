# MerakiDashboardApi.ClientsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDeviceClients**](ClientsApi.md#getDeviceClients) | **GET** /devices/{serial}/clients | List the clients of a device, up to a maximum of a month ago. The usage of each client is returned in kilobytes. If the device is a switch, the switchport is returned; otherwise the switchport field is null.
[**getNetworkApplianceClientSecurityEvents**](ClientsApi.md#getNetworkApplianceClientSecurityEvents) | **GET** /networks/{networkId}/appliance/clients/{clientId}/security/events | List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
[**getNetworkClient**](ClientsApi.md#getNetworkClient) | **GET** /networks/{networkId}/clients/{clientId} | Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
[**getNetworkClientPolicy**](ClientsApi.md#getNetworkClientPolicy) | **GET** /networks/{networkId}/clients/{clientId}/policy | Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
[**getNetworkClientSplashAuthorizationStatus**](ClientsApi.md#getNetworkClientSplashAuthorizationStatus) | **GET** /networks/{networkId}/clients/{clientId}/splashAuthorizationStatus | Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
[**getNetworkClientTrafficHistory**](ClientsApi.md#getNetworkClientTrafficHistory) | **GET** /networks/{networkId}/clients/{clientId}/trafficHistory | Return the client's network traffic data over time. Usage data is in kilobytes. This endpoint requires detailed traffic analysis to be enabled on the Network-wide > General page. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
[**getNetworkClientUsageHistory**](ClientsApi.md#getNetworkClientUsageHistory) | **GET** /networks/{networkId}/clients/{clientId}/usageHistory | Return the client's daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
[**getNetworkClients**](ClientsApi.md#getNetworkClients) | **GET** /networks/{networkId}/clients | List the clients that have used this network in the timespan
[**getNetworkWirelessClientConnectionStats**](ClientsApi.md#getNetworkWirelessClientConnectionStats) | **GET** /networks/{networkId}/wireless/clients/{clientId}/connectionStats | Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.
[**getNetworkWirelessClientConnectivityEvents**](ClientsApi.md#getNetworkWirelessClientConnectivityEvents) | **GET** /networks/{networkId}/wireless/clients/{clientId}/connectivityEvents | List the wireless connectivity events for a client within a network in the timespan.
[**getNetworkWirelessClientLatencyHistory**](ClientsApi.md#getNetworkWirelessClientLatencyHistory) | **GET** /networks/{networkId}/wireless/clients/{clientId}/latencyHistory | Return the latency history for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.
[**getNetworkWirelessClientLatencyStats**](ClientsApi.md#getNetworkWirelessClientLatencyStats) | **GET** /networks/{networkId}/wireless/clients/{clientId}/latencyStats | Aggregated latency info for a given client on this network. Clients are identified by their MAC.
[**getNetworkWirelessClientsConnectionStats**](ClientsApi.md#getNetworkWirelessClientsConnectionStats) | **GET** /networks/{networkId}/wireless/clients/connectionStats | Aggregated connectivity info for this network, grouped by clients
[**getNetworkWirelessClientsLatencyStats**](ClientsApi.md#getNetworkWirelessClientsLatencyStats) | **GET** /networks/{networkId}/wireless/clients/latencyStats | Aggregated latency info for this network, grouped by clients
[**provisionNetworkClients**](ClientsApi.md#provisionNetworkClients) | **POST** /networks/{networkId}/clients/provision | Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.
[**updateNetworkClientPolicy**](ClientsApi.md#updateNetworkClientPolicy) | **PUT** /networks/{networkId}/clients/{clientId}/policy | Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
[**updateNetworkClientSplashAuthorizationStatus**](ClientsApi.md#updateNetworkClientSplashAuthorizationStatus) | **PUT** /networks/{networkId}/clients/{clientId}/splashAuthorizationStatus | Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.


<a name="getDeviceClients"></a>
# **getDeviceClients**
> Object getDeviceClients(serial, opts)

List the clients of a device, up to a maximum of a month ago. The usage of each client is returned in kilobytes. If the device is a switch, the switchport is returned; otherwise the switchport field is null.

List the clients of a device, up to a maximum of a month ago. The usage of each client is returned in kilobytes. If the device is a switch, the switchport is returned; otherwise the switchport field is null.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.ClientsApi();

var serial = "serial_example"; // String | 

var opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  'timespan': 3.4 // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeviceClients(serial, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkApplianceClientSecurityEvents"></a>
# **getNetworkApplianceClientSecurityEvents**
> Object getNetworkApplianceClientSecurityEvents(networkId, clientId, opts)

List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.ClientsApi();

var networkId = "networkId_example"; // String | 

var clientId = "clientId_example"; // String | 

var opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 791 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 791 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 791 days. The default is 31 days.
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example", // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'sortOrder': "sortOrder_example" // String | Sorted order of security events based on event detection time. Order options are 'ascending' or 'descending'. Default is ascending order.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkApplianceClientSecurityEvents(networkId, clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **clientId** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 791 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 791 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 791 days. The default is 31 days. | [optional] 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **sortOrder** | **String**| Sorted order of security events based on event detection time. Order options are 'ascending' or 'descending'. Default is ascending order. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkClient"></a>
# **getNetworkClient**
> Object getNetworkClient(networkId, clientId)

Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.ClientsApi();

var networkId = "networkId_example"; // String | 

var clientId = "clientId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkClient(networkId, clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **clientId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkClientPolicy"></a>
# **getNetworkClientPolicy**
> Object getNetworkClientPolicy(networkId, clientId)

Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.ClientsApi();

var networkId = "networkId_example"; // String | 

var clientId = "clientId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkClientPolicy(networkId, clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **clientId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkClientSplashAuthorizationStatus"></a>
# **getNetworkClientSplashAuthorizationStatus**
> Object getNetworkClientSplashAuthorizationStatus(networkId, clientId)

Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.ClientsApi();

var networkId = "networkId_example"; // String | 

var clientId = "clientId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkClientSplashAuthorizationStatus(networkId, clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **clientId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkClientTrafficHistory"></a>
# **getNetworkClientTrafficHistory**
> Object getNetworkClientTrafficHistory(networkId, clientId, opts)

Return the client's network traffic data over time. Usage data is in kilobytes. This endpoint requires detailed traffic analysis to be enabled on the Network-wide > General page. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

Return the client's network traffic data over time. Usage data is in kilobytes. This endpoint requires detailed traffic analysis to be enabled on the Network-wide > General page. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.ClientsApi();

var networkId = "networkId_example"; // String | 

var clientId = "clientId_example"; // String | 

var opts = { 
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example" // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkClientTrafficHistory(networkId, clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **clientId** | **String**|  | 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 1000. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkClientUsageHistory"></a>
# **getNetworkClientUsageHistory**
> Object getNetworkClientUsageHistory(networkId, clientId)

Return the client's daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

Return the client's daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.ClientsApi();

var networkId = "networkId_example"; // String | 

var clientId = "clientId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkClientUsageHistory(networkId, clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **clientId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkClients"></a>
# **getNetworkClients**
> Object getNetworkClients(networkId, opts)

List the clients that have used this network in the timespan

List the clients that have used this network in the timespan

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.ClientsApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example" // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkClients(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkWirelessClientConnectionStats"></a>
# **getNetworkWirelessClientConnectionStats**
> Object getNetworkWirelessClientConnectionStats(networkId, clientId, opts)

Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.

Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.ClientsApi();

var networkId = "networkId_example"; // String | 

var clientId = "clientId_example"; // String | 

var opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
  'band': "band_example", // String | Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
  'ssid': 56, // Number | Filter results by SSID
  'vlan': 56, // Number | Filter results by VLAN
  'apTag': "apTag_example" // String | Filter results by AP Tag
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkWirelessClientConnectionStats(networkId, clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **clientId** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 180 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 7 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. | [optional] 
 **band** | **String**| Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information. | [optional] 
 **ssid** | **Number**| Filter results by SSID | [optional] 
 **vlan** | **Number**| Filter results by VLAN | [optional] 
 **apTag** | **String**| Filter results by AP Tag | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkWirelessClientConnectivityEvents"></a>
# **getNetworkWirelessClientConnectivityEvents**
> Object getNetworkWirelessClientConnectivityEvents(networkId, clientId, opts)

List the wireless connectivity events for a client within a network in the timespan.

List the wireless connectivity events for a client within a network in the timespan.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.ClientsApi();

var networkId = "networkId_example"; // String | 

var clientId = "clientId_example"; // String | 

var opts = { 
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example", // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.
  'types': ["types_example"], // [String] | A list of event types to include. If not specified, events of all types will be returned. Valid types are 'assoc', 'disassoc', 'auth', 'deauth', 'dns', 'dhcp', 'roam' and/or 'connection'.
  'includedSeverities': ["includedSeverities_example"], // [String] | A list of severities to include. If not specified, events of all severities will be returned. Valid severities are 'good', 'info', 'warn' and/or 'bad'.
  'band': "band_example", // String | Filter results by band (either '2.4' or '5').
  'ssidNumber': 56, // Number | An SSID number to include. If not specified, events for all SSIDs will be returned.
  'deviceSerial': "deviceSerial_example" // String | Filter results by an AP's serial number.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkWirelessClientConnectivityEvents(networkId, clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **clientId** | **String**|  | 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 1000. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 
 **types** | [**[String]**](String.md)| A list of event types to include. If not specified, events of all types will be returned. Valid types are 'assoc', 'disassoc', 'auth', 'deauth', 'dns', 'dhcp', 'roam' and/or 'connection'. | [optional] 
 **includedSeverities** | [**[String]**](String.md)| A list of severities to include. If not specified, events of all severities will be returned. Valid severities are 'good', 'info', 'warn' and/or 'bad'. | [optional] 
 **band** | **String**| Filter results by band (either '2.4' or '5'). | [optional] 
 **ssidNumber** | **Number**| An SSID number to include. If not specified, events for all SSIDs will be returned. | [optional] 
 **deviceSerial** | **String**| Filter results by an AP's serial number. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkWirelessClientLatencyHistory"></a>
# **getNetworkWirelessClientLatencyHistory**
> Object getNetworkWirelessClientLatencyHistory(networkId, clientId, opts)

Return the latency history for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.

Return the latency history for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.ClientsApi();

var networkId = "networkId_example"; // String | 

var clientId = "clientId_example"; // String | 

var opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 791 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 791 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 791 days. The default is 1 day.
  'resolution': 56 // Number | The time resolution in seconds for returned data. The valid resolutions are: 86400. The default is 86400.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkWirelessClientLatencyHistory(networkId, clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **clientId** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 791 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 791 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 791 days. The default is 1 day. | [optional] 
 **resolution** | **Number**| The time resolution in seconds for returned data. The valid resolutions are: 86400. The default is 86400. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkWirelessClientLatencyStats"></a>
# **getNetworkWirelessClientLatencyStats**
> Object getNetworkWirelessClientLatencyStats(networkId, clientId, opts)

Aggregated latency info for a given client on this network. Clients are identified by their MAC.

Aggregated latency info for a given client on this network. Clients are identified by their MAC.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.ClientsApi();

var networkId = "networkId_example"; // String | 

var clientId = "clientId_example"; // String | 

var opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
  'band': "band_example", // String | Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
  'ssid': 56, // Number | Filter results by SSID
  'vlan': 56, // Number | Filter results by VLAN
  'apTag': "apTag_example", // String | Filter results by AP Tag
  'fields': "fields_example" // String | Partial selection: If present, this call will return only the selected fields of [\"rawDistribution\", \"avg\"]. All fields will be returned by default. Selected fields must be entered as a comma separated string.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkWirelessClientLatencyStats(networkId, clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **clientId** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 180 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 7 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. | [optional] 
 **band** | **String**| Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information. | [optional] 
 **ssid** | **Number**| Filter results by SSID | [optional] 
 **vlan** | **Number**| Filter results by VLAN | [optional] 
 **apTag** | **String**| Filter results by AP Tag | [optional] 
 **fields** | **String**| Partial selection: If present, this call will return only the selected fields of [\"rawDistribution\", \"avg\"]. All fields will be returned by default. Selected fields must be entered as a comma separated string. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkWirelessClientsConnectionStats"></a>
# **getNetworkWirelessClientsConnectionStats**
> Object getNetworkWirelessClientsConnectionStats(networkId, opts)

Aggregated connectivity info for this network, grouped by clients

Aggregated connectivity info for this network, grouped by clients

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.ClientsApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
  'band': "band_example", // String | Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
  'ssid': 56, // Number | Filter results by SSID
  'vlan': 56, // Number | Filter results by VLAN
  'apTag': "apTag_example" // String | Filter results by AP Tag
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkWirelessClientsConnectionStats(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 180 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 7 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. | [optional] 
 **band** | **String**| Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information. | [optional] 
 **ssid** | **Number**| Filter results by SSID | [optional] 
 **vlan** | **Number**| Filter results by VLAN | [optional] 
 **apTag** | **String**| Filter results by AP Tag | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkWirelessClientsLatencyStats"></a>
# **getNetworkWirelessClientsLatencyStats**
> Object getNetworkWirelessClientsLatencyStats(networkId, opts)

Aggregated latency info for this network, grouped by clients

Aggregated latency info for this network, grouped by clients

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.ClientsApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
  'band': "band_example", // String | Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
  'ssid': 56, // Number | Filter results by SSID
  'vlan': 56, // Number | Filter results by VLAN
  'apTag': "apTag_example", // String | Filter results by AP Tag
  'fields': "fields_example" // String | Partial selection: If present, this call will return only the selected fields of [\"rawDistribution\", \"avg\"]. All fields will be returned by default. Selected fields must be entered as a comma separated string.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkWirelessClientsLatencyStats(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 180 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 7 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. | [optional] 
 **band** | **String**| Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information. | [optional] 
 **ssid** | **Number**| Filter results by SSID | [optional] 
 **vlan** | **Number**| Filter results by VLAN | [optional] 
 **apTag** | **String**| Filter results by AP Tag | [optional] 
 **fields** | **String**| Partial selection: If present, this call will return only the selected fields of [\"rawDistribution\", \"avg\"]. All fields will be returned by default. Selected fields must be entered as a comma separated string. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="provisionNetworkClients"></a>
# **provisionNetworkClients**
> Object provisionNetworkClients(networkId, provisionNetworkClients)

Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.

Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.ClientsApi();

var networkId = "networkId_example"; // String | 

var provisionNetworkClients = new MerakiDashboardApi.ProvisionNetworkClients(); // ProvisionNetworkClients | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.provisionNetworkClients(networkId, provisionNetworkClients, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **provisionNetworkClients** | [**ProvisionNetworkClients**](ProvisionNetworkClients.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkClientPolicy"></a>
# **updateNetworkClientPolicy**
> Object updateNetworkClientPolicy(networkId, clientId, updateNetworkClientPolicy)

Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.ClientsApi();

var networkId = "networkId_example"; // String | 

var clientId = "clientId_example"; // String | 

var updateNetworkClientPolicy = new MerakiDashboardApi.UpdateNetworkClientPolicy(); // UpdateNetworkClientPolicy | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkClientPolicy(networkId, clientId, updateNetworkClientPolicy, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **clientId** | **String**|  | 
 **updateNetworkClientPolicy** | [**UpdateNetworkClientPolicy**](UpdateNetworkClientPolicy.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkClientSplashAuthorizationStatus"></a>
# **updateNetworkClientSplashAuthorizationStatus**
> Object updateNetworkClientSplashAuthorizationStatus(networkId, clientId, updateNetworkClientSplashAuthorizationStatus)

Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.ClientsApi();

var networkId = "networkId_example"; // String | 

var clientId = "clientId_example"; // String | 

var updateNetworkClientSplashAuthorizationStatus = new MerakiDashboardApi.UpdateNetworkClientSplashAuthorizationStatus(); // UpdateNetworkClientSplashAuthorizationStatus | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkClientSplashAuthorizationStatus(networkId, clientId, updateNetworkClientSplashAuthorizationStatus, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **clientId** | **String**|  | 
 **updateNetworkClientSplashAuthorizationStatus** | [**UpdateNetworkClientSplashAuthorizationStatus**](UpdateNetworkClientSplashAuthorizationStatus.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

