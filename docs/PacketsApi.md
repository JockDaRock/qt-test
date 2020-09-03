# MerakiDashboardApi.PacketsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDeviceSwitchPortsStatusesPackets**](PacketsApi.md#getDeviceSwitchPortsStatusesPackets) | **GET** /devices/{serial}/switch/ports/statuses/packets | Return the packet counters for all the ports of a switch


<a name="getDeviceSwitchPortsStatusesPackets"></a>
# **getDeviceSwitchPortsStatusesPackets**
> Object getDeviceSwitchPortsStatusesPackets(serial, opts)

Return the packet counters for all the ports of a switch

Return the packet counters for all the ports of a switch

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.PacketsApi();

var serial = "serial_example"; // String | 

var opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 1 day from today.
  'timespan': 3.4 // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 1 day. The default is 1 day.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeviceSwitchPortsStatusesPackets(serial, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 1 day from today. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 1 day. The default is 1 day. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

