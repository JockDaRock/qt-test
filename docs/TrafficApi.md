# MerakiDashboardApi.TrafficApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkTraffic**](TrafficApi.md#getNetworkTraffic) | **GET** /networks/{networkId}/traffic |     The traffic analysis data for this network.     <a href=\"https://documentation.meraki.com/MR/Monitoring_and_Reporting/Hostname_Visibility\">Traffic Analysis with Hostname Visibility</a> must be enabled on the network. 


<a name="getNetworkTraffic"></a>
# **getNetworkTraffic**
> Object getNetworkTraffic(networkId, opts)

    The traffic analysis data for this network.     <a href=\"https://documentation.meraki.com/MR/Monitoring_and_Reporting/Hostname_Visibility\">Traffic Analysis with Hostname Visibility</a> must be enabled on the network. 

    The traffic analysis data for this network.     <a href=\"https://documentation.meraki.com/MR/Monitoring_and_Reporting/Hostname_Visibility\">Traffic Analysis with Hostname Visibility</a> must be enabled on the network. 

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.TrafficApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 30 days from today.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 30 days.
  'deviceType': "deviceType_example" // String |     Filter the data by device type: 'combined', 'wireless', 'switch' or 'appliance'. Defaults to 'combined'.     When using 'combined', for each rule the data will come from the device type with the most usage. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkTraffic(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 30 days from today. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 30 days. | [optional] 
 **deviceType** | **String**|     Filter the data by device type: 'combined', 'wireless', 'switch' or 'appliance'. Defaults to 'combined'.     When using 'combined', for each rule the data will come from the device type with the most usage.  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

