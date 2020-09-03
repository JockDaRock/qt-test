# MerakiDashboardApi.RendezvousPointsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNetworkSwitchRoutingMulticastRendezvousPoint**](RendezvousPointsApi.md#createNetworkSwitchRoutingMulticastRendezvousPoint) | **POST** /networks/{networkId}/switch/routing/multicast/rendezvousPoints | Create a multicast rendezvous point
[**deleteNetworkSwitchRoutingMulticastRendezvousPoint**](RendezvousPointsApi.md#deleteNetworkSwitchRoutingMulticastRendezvousPoint) | **DELETE** /networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId} | Delete a multicast rendezvous point
[**getNetworkSwitchRoutingMulticastRendezvousPoint**](RendezvousPointsApi.md#getNetworkSwitchRoutingMulticastRendezvousPoint) | **GET** /networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId} | Return a multicast rendezvous point
[**getNetworkSwitchRoutingMulticastRendezvousPoints**](RendezvousPointsApi.md#getNetworkSwitchRoutingMulticastRendezvousPoints) | **GET** /networks/{networkId}/switch/routing/multicast/rendezvousPoints | List multicast rendezvous points
[**updateNetworkSwitchRoutingMulticastRendezvousPoint**](RendezvousPointsApi.md#updateNetworkSwitchRoutingMulticastRendezvousPoint) | **PUT** /networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId} | Update a multicast rendezvous point

<a name="createNetworkSwitchRoutingMulticastRendezvousPoint"></a>
# **createNetworkSwitchRoutingMulticastRendezvousPoint**
> Object createNetworkSwitchRoutingMulticastRendezvousPoint(bodynetworkId)

Create a multicast rendezvous point

Create a multicast rendezvous point

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.RendezvousPointsApi();
let body = new MerakiDashboardApi.Body89(); // Body89 | 
let networkId = "networkId_example"; // String | 

apiInstance.createNetworkSwitchRoutingMulticastRendezvousPoint(bodynetworkId, (error, data, response) => {
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
 **body** | [**Body89**](Body89.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNetworkSwitchRoutingMulticastRendezvousPoint"></a>
# **deleteNetworkSwitchRoutingMulticastRendezvousPoint**
> deleteNetworkSwitchRoutingMulticastRendezvousPoint(networkId, rendezvousPointId)

Delete a multicast rendezvous point

Delete a multicast rendezvous point

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.RendezvousPointsApi();
let networkId = "networkId_example"; // String | 
let rendezvousPointId = "rendezvousPointId_example"; // String | 

apiInstance.deleteNetworkSwitchRoutingMulticastRendezvousPoint(networkId, rendezvousPointId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **rendezvousPointId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getNetworkSwitchRoutingMulticastRendezvousPoint"></a>
# **getNetworkSwitchRoutingMulticastRendezvousPoint**
> Object getNetworkSwitchRoutingMulticastRendezvousPoint(networkId, rendezvousPointId)

Return a multicast rendezvous point

Return a multicast rendezvous point

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.RendezvousPointsApi();
let networkId = "networkId_example"; // String | 
let rendezvousPointId = "rendezvousPointId_example"; // String | 

apiInstance.getNetworkSwitchRoutingMulticastRendezvousPoint(networkId, rendezvousPointId, (error, data, response) => {
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
 **rendezvousPointId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSwitchRoutingMulticastRendezvousPoints"></a>
# **getNetworkSwitchRoutingMulticastRendezvousPoints**
> Object getNetworkSwitchRoutingMulticastRendezvousPoints(networkId)

List multicast rendezvous points

List multicast rendezvous points

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.RendezvousPointsApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkSwitchRoutingMulticastRendezvousPoints(networkId, (error, data, response) => {
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

<a name="updateNetworkSwitchRoutingMulticastRendezvousPoint"></a>
# **updateNetworkSwitchRoutingMulticastRendezvousPoint**
> Object updateNetworkSwitchRoutingMulticastRendezvousPoint(bodynetworkIdrendezvousPointId)

Update a multicast rendezvous point

Update a multicast rendezvous point

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.RendezvousPointsApi();
let body = new MerakiDashboardApi.Body90(); // Body90 | 
let networkId = "networkId_example"; // String | 
let rendezvousPointId = "rendezvousPointId_example"; // String | 

apiInstance.updateNetworkSwitchRoutingMulticastRendezvousPoint(bodynetworkIdrendezvousPointId, (error, data, response) => {
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
 **body** | [**Body90**](Body90.md)|  | 
 **networkId** | **String**|  | 
 **rendezvousPointId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

