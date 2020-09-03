# MerakiDashboardApi.SyslogServersApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkSyslogServers**](SyslogServersApi.md#getNetworkSyslogServers) | **GET** /networks/{networkId}/syslogServers | List the syslog servers for a network
[**updateNetworkSyslogServers**](SyslogServersApi.md#updateNetworkSyslogServers) | **PUT** /networks/{networkId}/syslogServers | Update the syslog servers for a network


<a name="getNetworkSyslogServers"></a>
# **getNetworkSyslogServers**
> Object getNetworkSyslogServers(networkId)

List the syslog servers for a network

List the syslog servers for a network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SyslogServersApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSyslogServers(networkId, callback);
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

<a name="updateNetworkSyslogServers"></a>
# **updateNetworkSyslogServers**
> Object updateNetworkSyslogServers(networkId, updateNetworkSyslogServers)

Update the syslog servers for a network

Update the syslog servers for a network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SyslogServersApi();

var networkId = "networkId_example"; // String | 

var updateNetworkSyslogServers = new MerakiDashboardApi.UpdateNetworkSyslogServers(); // UpdateNetworkSyslogServers | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkSyslogServers(networkId, updateNetworkSyslogServers, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **updateNetworkSyslogServers** | [**UpdateNetworkSyslogServers**](UpdateNetworkSyslogServers.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

