# MerakiDashboardApi.UsageHistoryApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkClientUsageHistory**](UsageHistoryApi.md#getNetworkClientUsageHistory) | **GET** /networks/{networkId}/clients/{clientId}/usageHistory | Return the client's daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
[**getNetworkWirelessUsageHistory**](UsageHistoryApi.md#getNetworkWirelessUsageHistory) | **GET** /networks/{networkId}/wireless/usageHistory | Return AP usage over time for a device or network client


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

var apiInstance = new MerakiDashboardApi.UsageHistoryApi();

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

<a name="getNetworkWirelessUsageHistory"></a>
# **getNetworkWirelessUsageHistory**
> Object getNetworkWirelessUsageHistory(networkId, opts)

Return AP usage over time for a device or network client

Return AP usage over time for a device or network client

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.UsageHistoryApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days.
  'resolution': 56, // Number | The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400.
  'autoResolution': true, // Boolean | Automatically select a data resolution based on the given timespan; this overrides the value specified by the 'resolution' parameter. The default setting is false.
  'clientId': "clientId_example", // String | Filter results by network client to return per-device AP usage over time inner joined by the queried client's connection history.
  'deviceSerial': "deviceSerial_example", // String | Filter results by device. Requires :band.
  'apTag': "apTag_example", // String | Filter results by AP tag; either :clientId or :deviceSerial must be jointly specified.
  'band': "band_example", // String | Filter results by band (either '2.4' or '5').
  'ssid': 56 // Number | Filter results by SSID number.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkWirelessUsageHistory(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. | [optional] 
 **resolution** | **Number**| The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400. | [optional] 
 **autoResolution** | **Boolean**| Automatically select a data resolution based on the given timespan; this overrides the value specified by the 'resolution' parameter. The default setting is false. | [optional] 
 **clientId** | **String**| Filter results by network client to return per-device AP usage over time inner joined by the queried client's connection history. | [optional] 
 **deviceSerial** | **String**| Filter results by device. Requires :band. | [optional] 
 **apTag** | **String**| Filter results by AP tag; either :clientId or :deviceSerial must be jointly specified. | [optional] 
 **band** | **String**| Filter results by band (either '2.4' or '5'). | [optional] 
 **ssid** | **Number**| Filter results by SSID number. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

