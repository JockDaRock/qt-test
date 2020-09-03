# MerakiDashboardApi.ConnectivityMonitoringDestinationsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkApplianceConnectivityMonitoringDestinations**](ConnectivityMonitoringDestinationsApi.md#getNetworkApplianceConnectivityMonitoringDestinations) | **GET** /networks/{networkId}/appliance/connectivityMonitoringDestinations | Return the connectivity testing destinations for an MX network
[**getNetworkCellularGatewayConnectivityMonitoringDestinations**](ConnectivityMonitoringDestinationsApi.md#getNetworkCellularGatewayConnectivityMonitoringDestinations) | **GET** /networks/{networkId}/cellularGateway/connectivityMonitoringDestinations | Return the connectivity testing destinations for an MG network
[**updateNetworkApplianceConnectivityMonitoringDestinations**](ConnectivityMonitoringDestinationsApi.md#updateNetworkApplianceConnectivityMonitoringDestinations) | **PUT** /networks/{networkId}/appliance/connectivityMonitoringDestinations | Update the connectivity testing destinations for an MX network
[**updateNetworkCellularGatewayConnectivityMonitoringDestinations**](ConnectivityMonitoringDestinationsApi.md#updateNetworkCellularGatewayConnectivityMonitoringDestinations) | **PUT** /networks/{networkId}/cellularGateway/connectivityMonitoringDestinations | Update the connectivity testing destinations for an MG network

<a name="getNetworkApplianceConnectivityMonitoringDestinations"></a>
# **getNetworkApplianceConnectivityMonitoringDestinations**
> Object getNetworkApplianceConnectivityMonitoringDestinations(networkId)

Return the connectivity testing destinations for an MX network

Return the connectivity testing destinations for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConnectivityMonitoringDestinationsApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceConnectivityMonitoringDestinations(networkId, (error, data, response) => {
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

<a name="getNetworkCellularGatewayConnectivityMonitoringDestinations"></a>
# **getNetworkCellularGatewayConnectivityMonitoringDestinations**
> Object getNetworkCellularGatewayConnectivityMonitoringDestinations(networkId)

Return the connectivity testing destinations for an MG network

Return the connectivity testing destinations for an MG network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConnectivityMonitoringDestinationsApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkCellularGatewayConnectivityMonitoringDestinations(networkId, (error, data, response) => {
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

<a name="updateNetworkApplianceConnectivityMonitoringDestinations"></a>
# **updateNetworkApplianceConnectivityMonitoringDestinations**
> Object updateNetworkApplianceConnectivityMonitoringDestinations(networkId, opts)

Update the connectivity testing destinations for an MX network

Update the connectivity testing destinations for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConnectivityMonitoringDestinationsApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body21() // Body21 | 
};
apiInstance.updateNetworkApplianceConnectivityMonitoringDestinations(networkId, opts, (error, data, response) => {
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
 **body** | [**Body21**](Body21.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkCellularGatewayConnectivityMonitoringDestinations"></a>
# **updateNetworkCellularGatewayConnectivityMonitoringDestinations**
> Object updateNetworkCellularGatewayConnectivityMonitoringDestinations(networkId, opts)

Update the connectivity testing destinations for an MG network

Update the connectivity testing destinations for an MG network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConnectivityMonitoringDestinationsApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body50() // Body50 | 
};
apiInstance.updateNetworkCellularGatewayConnectivityMonitoringDestinations(networkId, opts, (error, data, response) => {
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
 **body** | [**Body50**](Body50.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

