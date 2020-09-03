# MerakiDashboardApi.UplinkSelectionApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkApplianceTrafficShapingUplinkSelection**](UplinkSelectionApi.md#getNetworkApplianceTrafficShapingUplinkSelection) | **GET** /networks/{networkId}/appliance/trafficShaping/uplinkSelection | Show uplink selection settings for an MX network
[**updateNetworkApplianceTrafficShapingUplinkSelection**](UplinkSelectionApi.md#updateNetworkApplianceTrafficShapingUplinkSelection) | **PUT** /networks/{networkId}/appliance/trafficShaping/uplinkSelection | Update uplink selection settings for an MX network

<a name="getNetworkApplianceTrafficShapingUplinkSelection"></a>
# **getNetworkApplianceTrafficShapingUplinkSelection**
> Object getNetworkApplianceTrafficShapingUplinkSelection(networkId)

Show uplink selection settings for an MX network

Show uplink selection settings for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.UplinkSelectionApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceTrafficShapingUplinkSelection(networkId, (error, data, response) => {
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

<a name="updateNetworkApplianceTrafficShapingUplinkSelection"></a>
# **updateNetworkApplianceTrafficShapingUplinkSelection**
> Object updateNetworkApplianceTrafficShapingUplinkSelection(networkId, opts)

Update uplink selection settings for an MX network

Update uplink selection settings for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.UplinkSelectionApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body41() // Body41 | 
};
apiInstance.updateNetworkApplianceTrafficShapingUplinkSelection(networkId, opts, (error, data, response) => {
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
 **body** | [**Body41**](Body41.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

