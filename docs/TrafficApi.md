# MerakiDashboardApi.TrafficApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkTraffic**](TrafficApi.md#getNetworkTraffic) | **GET** /networks/{networkId}/traffic |     The traffic analysis data for this network.     &lt;a href&#x3D;\&quot;https://documentation.meraki.com/MR/Monitoring_and_Reporting/Hostname_Visibility\&quot;&gt;Traffic Analysis with Hostname Visibility&lt;/a&gt; must be enabled on the network. 

<a name="getNetworkTraffic"></a>
# **getNetworkTraffic**
> Object getNetworkTraffic(networkId, opts)

    The traffic analysis data for this network.     &lt;a href&#x3D;\&quot;https://documentation.meraki.com/MR/Monitoring_and_Reporting/Hostname_Visibility\&quot;&gt;Traffic Analysis with Hostname Visibility&lt;/a&gt; must be enabled on the network. 

    The traffic analysis data for this network.     &lt;a href&#x3D;\&quot;https://documentation.meraki.com/MR/Monitoring_and_Reporting/Hostname_Visibility\&quot;&gt;Traffic Analysis with Hostname Visibility&lt;/a&gt; must be enabled on the network. 

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.TrafficApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 30 days from today.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 30 days.
  'deviceType': "deviceType_example" // String |     Filter the data by device type: 'combined', 'wireless', 'switch' or 'appliance'. Defaults to 'combined'.     When using 'combined', for each rule the data will come from the device type with the most usage. 
};
apiInstance.getNetworkTraffic(networkId, opts, (error, data, response) => {
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
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 30 days from today. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 30 days. | [optional] 
 **deviceType** | **String**|     Filter the data by device type: &#x27;combined&#x27;, &#x27;wireless&#x27;, &#x27;switch&#x27; or &#x27;appliance&#x27;. Defaults to &#x27;combined&#x27;.     When using &#x27;combined&#x27;, for each rule the data will come from the device type with the most usage.  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

