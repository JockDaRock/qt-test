# MerakiDashboardApi.UplinkBandwidthApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkApplianceTrafficShapingUplinkBandwidth**](UplinkBandwidthApi.md#getNetworkApplianceTrafficShapingUplinkBandwidth) | **GET** /networks/{networkId}/appliance/trafficShaping/uplinkBandwidth | Returns the uplink bandwidth settings for your MX network.
[**updateNetworkApplianceTrafficShapingUplinkBandwidth**](UplinkBandwidthApi.md#updateNetworkApplianceTrafficShapingUplinkBandwidth) | **PUT** /networks/{networkId}/appliance/trafficShaping/uplinkBandwidth | Updates the uplink bandwidth settings for your MX network.

<a name="getNetworkApplianceTrafficShapingUplinkBandwidth"></a>
# **getNetworkApplianceTrafficShapingUplinkBandwidth**
> Object getNetworkApplianceTrafficShapingUplinkBandwidth(networkId)

Returns the uplink bandwidth settings for your MX network.

Returns the uplink bandwidth settings for your MX network.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.UplinkBandwidthApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceTrafficShapingUplinkBandwidth(networkId, (error, data, response) => {
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

<a name="updateNetworkApplianceTrafficShapingUplinkBandwidth"></a>
# **updateNetworkApplianceTrafficShapingUplinkBandwidth**
> Object updateNetworkApplianceTrafficShapingUplinkBandwidth(networkId, opts)

Updates the uplink bandwidth settings for your MX network.

Updates the uplink bandwidth settings for your MX network.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.UplinkBandwidthApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body40() // Body40 | 
};
apiInstance.updateNetworkApplianceTrafficShapingUplinkBandwidth(networkId, opts, (error, data, response) => {
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
 **body** | [**Body40**](Body40.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

