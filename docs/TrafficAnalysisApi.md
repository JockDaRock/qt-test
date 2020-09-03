# MerakiDashboardApi.TrafficAnalysisApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkTrafficAnalysis**](TrafficAnalysisApi.md#getNetworkTrafficAnalysis) | **GET** /networks/{networkId}/trafficAnalysis | Return the traffic analysis settings for a network
[**updateNetworkTrafficAnalysis**](TrafficAnalysisApi.md#updateNetworkTrafficAnalysis) | **PUT** /networks/{networkId}/trafficAnalysis | Update the traffic analysis settings for a network


<a name="getNetworkTrafficAnalysis"></a>
# **getNetworkTrafficAnalysis**
> Object getNetworkTrafficAnalysis(networkId)

Return the traffic analysis settings for a network

Return the traffic analysis settings for a network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.TrafficAnalysisApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkTrafficAnalysis(networkId, callback);
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

<a name="updateNetworkTrafficAnalysis"></a>
# **updateNetworkTrafficAnalysis**
> Object updateNetworkTrafficAnalysis(networkId, opts)

Update the traffic analysis settings for a network

Update the traffic analysis settings for a network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.TrafficAnalysisApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  'updateNetworkTrafficAnalysis': new MerakiDashboardApi.UpdateNetworkTrafficAnalysis() // UpdateNetworkTrafficAnalysis | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkTrafficAnalysis(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **updateNetworkTrafficAnalysis** | [**UpdateNetworkTrafficAnalysis**](UpdateNetworkTrafficAnalysis.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

