# MerakiDashboardApi.SubnetPoolApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkCellularGatewaySubnetPool**](SubnetPoolApi.md#getNetworkCellularGatewaySubnetPool) | **GET** /networks/{networkId}/cellularGateway/subnetPool | Return the subnet pool and mask configured for MGs in the network.
[**updateNetworkCellularGatewaySubnetPool**](SubnetPoolApi.md#updateNetworkCellularGatewaySubnetPool) | **PUT** /networks/{networkId}/cellularGateway/subnetPool | Update the subnet pool and mask configuration for MGs in the network.


<a name="getNetworkCellularGatewaySubnetPool"></a>
# **getNetworkCellularGatewaySubnetPool**
> Object getNetworkCellularGatewaySubnetPool(networkId)

Return the subnet pool and mask configured for MGs in the network.

Return the subnet pool and mask configured for MGs in the network.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SubnetPoolApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkCellularGatewaySubnetPool(networkId, callback);
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

<a name="updateNetworkCellularGatewaySubnetPool"></a>
# **updateNetworkCellularGatewaySubnetPool**
> Object updateNetworkCellularGatewaySubnetPool(networkId, opts)

Update the subnet pool and mask configuration for MGs in the network.

Update the subnet pool and mask configuration for MGs in the network.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SubnetPoolApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  'updateNetworkCellularGatewaySubnetPool': new MerakiDashboardApi.UpdateNetworkCellularGatewaySubnetPool() // UpdateNetworkCellularGatewaySubnetPool | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkCellularGatewaySubnetPool(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **updateNetworkCellularGatewaySubnetPool** | [**UpdateNetworkCellularGatewaySubnetPool**](UpdateNetworkCellularGatewaySubnetPool.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

