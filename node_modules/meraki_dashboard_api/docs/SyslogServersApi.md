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
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.SyslogServersApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkSyslogServers(networkId, (error, data, response) => {
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

<a name="updateNetworkSyslogServers"></a>
# **updateNetworkSyslogServers**
> Object updateNetworkSyslogServers(bodynetworkId)

Update the syslog servers for a network

Update the syslog servers for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.SyslogServersApi();
let body = new MerakiDashboardApi.Body103(); // Body103 | 
let networkId = "networkId_example"; // String | 

apiInstance.updateNetworkSyslogServers(bodynetworkId, (error, data, response) => {
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
 **body** | [**Body103**](Body103.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

