# MerakiDashboardApi.RoutingApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDeviceSwitchRoutingInterface**](RoutingApi.md#createDeviceSwitchRoutingInterface) | **POST** /devices/{serial}/switch/routing/interfaces | Create a layer 3 interface for a switch
[**createDeviceSwitchRoutingStaticRoute**](RoutingApi.md#createDeviceSwitchRoutingStaticRoute) | **POST** /devices/{serial}/switch/routing/staticRoutes | Create a layer 3 static route for a switch
[**createNetworkSwitchRoutingMulticastRendezvousPoint**](RoutingApi.md#createNetworkSwitchRoutingMulticastRendezvousPoint) | **POST** /networks/{networkId}/switch/routing/multicast/rendezvousPoints | Create a multicast rendezvous point
[**createNetworkSwitchStackRoutingInterface**](RoutingApi.md#createNetworkSwitchStackRoutingInterface) | **POST** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces | Create a layer 3 interface for a switch stack
[**createNetworkSwitchStackRoutingStaticRoute**](RoutingApi.md#createNetworkSwitchStackRoutingStaticRoute) | **POST** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes | Create a layer 3 static route for a switch stack
[**deleteDeviceSwitchRoutingInterface**](RoutingApi.md#deleteDeviceSwitchRoutingInterface) | **DELETE** /devices/{serial}/switch/routing/interfaces/{interfaceId} | Delete a layer 3 interface from the switch
[**deleteDeviceSwitchRoutingStaticRoute**](RoutingApi.md#deleteDeviceSwitchRoutingStaticRoute) | **DELETE** /devices/{serial}/switch/routing/staticRoutes/{staticRouteId} | Delete a layer 3 static route for a switch
[**deleteNetworkSwitchRoutingMulticastRendezvousPoint**](RoutingApi.md#deleteNetworkSwitchRoutingMulticastRendezvousPoint) | **DELETE** /networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId} | Delete a multicast rendezvous point
[**deleteNetworkSwitchStackRoutingInterface**](RoutingApi.md#deleteNetworkSwitchStackRoutingInterface) | **DELETE** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId} | Delete a layer 3 interface from a switch stack
[**deleteNetworkSwitchStackRoutingStaticRoute**](RoutingApi.md#deleteNetworkSwitchStackRoutingStaticRoute) | **DELETE** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId} | Delete a layer 3 static route for a switch stack
[**getDeviceSwitchRoutingInterface**](RoutingApi.md#getDeviceSwitchRoutingInterface) | **GET** /devices/{serial}/switch/routing/interfaces/{interfaceId} | Return a layer 3 interface for a switch
[**getDeviceSwitchRoutingInterfaceDhcp**](RoutingApi.md#getDeviceSwitchRoutingInterfaceDhcp) | **GET** /devices/{serial}/switch/routing/interfaces/{interfaceId}/dhcp | Return a layer 3 interface DHCP configuration for a switch
[**getDeviceSwitchRoutingInterfaces**](RoutingApi.md#getDeviceSwitchRoutingInterfaces) | **GET** /devices/{serial}/switch/routing/interfaces | List layer 3 interfaces for a switch
[**getDeviceSwitchRoutingStaticRoute**](RoutingApi.md#getDeviceSwitchRoutingStaticRoute) | **GET** /devices/{serial}/switch/routing/staticRoutes/{staticRouteId} | Return a layer 3 static route for a switch
[**getDeviceSwitchRoutingStaticRoutes**](RoutingApi.md#getDeviceSwitchRoutingStaticRoutes) | **GET** /devices/{serial}/switch/routing/staticRoutes | List layer 3 static routes for a switch
[**getNetworkSwitchRoutingMulticast**](RoutingApi.md#getNetworkSwitchRoutingMulticast) | **GET** /networks/{networkId}/switch/routing/multicast | Return multicast settings for a network
[**getNetworkSwitchRoutingMulticastRendezvousPoint**](RoutingApi.md#getNetworkSwitchRoutingMulticastRendezvousPoint) | **GET** /networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId} | Return a multicast rendezvous point
[**getNetworkSwitchRoutingMulticastRendezvousPoints**](RoutingApi.md#getNetworkSwitchRoutingMulticastRendezvousPoints) | **GET** /networks/{networkId}/switch/routing/multicast/rendezvousPoints | List multicast rendezvous points
[**getNetworkSwitchRoutingOspf**](RoutingApi.md#getNetworkSwitchRoutingOspf) | **GET** /networks/{networkId}/switch/routing/ospf | Return layer 3 OSPF routing configuration
[**getNetworkSwitchStackRoutingInterface**](RoutingApi.md#getNetworkSwitchStackRoutingInterface) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId} | Return a layer 3 interface from a switch stack
[**getNetworkSwitchStackRoutingInterfaceDhcp**](RoutingApi.md#getNetworkSwitchStackRoutingInterfaceDhcp) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp | Return a layer 3 interface DHCP configuration for a switch stack
[**getNetworkSwitchStackRoutingInterfaces**](RoutingApi.md#getNetworkSwitchStackRoutingInterfaces) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces | List layer 3 interfaces for a switch stack
[**getNetworkSwitchStackRoutingStaticRoute**](RoutingApi.md#getNetworkSwitchStackRoutingStaticRoute) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId} | Return a layer 3 static route for a switch stack
[**getNetworkSwitchStackRoutingStaticRoutes**](RoutingApi.md#getNetworkSwitchStackRoutingStaticRoutes) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes | List layer 3 static routes for a switch stack
[**updateDeviceSwitchRoutingInterface**](RoutingApi.md#updateDeviceSwitchRoutingInterface) | **PUT** /devices/{serial}/switch/routing/interfaces/{interfaceId} | Update a layer 3 interface for a switch
[**updateDeviceSwitchRoutingInterfaceDhcp**](RoutingApi.md#updateDeviceSwitchRoutingInterfaceDhcp) | **PUT** /devices/{serial}/switch/routing/interfaces/{interfaceId}/dhcp | Update a layer 3 interface DHCP configuration for a switch
[**updateDeviceSwitchRoutingStaticRoute**](RoutingApi.md#updateDeviceSwitchRoutingStaticRoute) | **PUT** /devices/{serial}/switch/routing/staticRoutes/{staticRouteId} | Update a layer 3 static route for a switch
[**updateNetworkSwitchRoutingMulticast**](RoutingApi.md#updateNetworkSwitchRoutingMulticast) | **PUT** /networks/{networkId}/switch/routing/multicast | Update multicast settings for a network
[**updateNetworkSwitchRoutingMulticastRendezvousPoint**](RoutingApi.md#updateNetworkSwitchRoutingMulticastRendezvousPoint) | **PUT** /networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId} | Update a multicast rendezvous point
[**updateNetworkSwitchRoutingOspf**](RoutingApi.md#updateNetworkSwitchRoutingOspf) | **PUT** /networks/{networkId}/switch/routing/ospf | Update layer 3 OSPF routing configuration
[**updateNetworkSwitchStackRoutingInterface**](RoutingApi.md#updateNetworkSwitchStackRoutingInterface) | **PUT** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId} | Update a layer 3 interface for a switch stack
[**updateNetworkSwitchStackRoutingInterfaceDhcp**](RoutingApi.md#updateNetworkSwitchStackRoutingInterfaceDhcp) | **PUT** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp | Update a layer 3 interface DHCP configuration for a switch stack
[**updateNetworkSwitchStackRoutingStaticRoute**](RoutingApi.md#updateNetworkSwitchStackRoutingStaticRoute) | **PUT** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId} | Update a layer 3 static route for a switch stack


<a name="createDeviceSwitchRoutingInterface"></a>
# **createDeviceSwitchRoutingInterface**
> Object createDeviceSwitchRoutingInterface(serial, createDeviceSwitchRoutingInterface)

Create a layer 3 interface for a switch

Create a layer 3 interface for a switch

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RoutingApi();

var serial = "serial_example"; // String | 

var createDeviceSwitchRoutingInterface = new MerakiDashboardApi.CreateDeviceSwitchRoutingInterface(); // CreateDeviceSwitchRoutingInterface | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createDeviceSwitchRoutingInterface(serial, createDeviceSwitchRoutingInterface, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **createDeviceSwitchRoutingInterface** | [**CreateDeviceSwitchRoutingInterface**](CreateDeviceSwitchRoutingInterface.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createDeviceSwitchRoutingStaticRoute"></a>
# **createDeviceSwitchRoutingStaticRoute**
> Object createDeviceSwitchRoutingStaticRoute(serial, createDeviceSwitchRoutingStaticRoute)

Create a layer 3 static route for a switch

Create a layer 3 static route for a switch

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RoutingApi();

var serial = "serial_example"; // String | 

var createDeviceSwitchRoutingStaticRoute = new MerakiDashboardApi.CreateDeviceSwitchRoutingStaticRoute(); // CreateDeviceSwitchRoutingStaticRoute | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createDeviceSwitchRoutingStaticRoute(serial, createDeviceSwitchRoutingStaticRoute, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **createDeviceSwitchRoutingStaticRoute** | [**CreateDeviceSwitchRoutingStaticRoute**](CreateDeviceSwitchRoutingStaticRoute.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkSwitchRoutingMulticastRendezvousPoint"></a>
# **createNetworkSwitchRoutingMulticastRendezvousPoint**
> Object createNetworkSwitchRoutingMulticastRendezvousPoint(networkId, createNetworkSwitchRoutingMulticastRendezvousPoint)

Create a multicast rendezvous point

Create a multicast rendezvous point

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RoutingApi();

var networkId = "networkId_example"; // String | 

var createNetworkSwitchRoutingMulticastRendezvousPoint = new MerakiDashboardApi.CreateNetworkSwitchRoutingMulticastRendezvousPoint(); // CreateNetworkSwitchRoutingMulticastRendezvousPoint | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNetworkSwitchRoutingMulticastRendezvousPoint(networkId, createNetworkSwitchRoutingMulticastRendezvousPoint, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **createNetworkSwitchRoutingMulticastRendezvousPoint** | [**CreateNetworkSwitchRoutingMulticastRendezvousPoint**](CreateNetworkSwitchRoutingMulticastRendezvousPoint.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkSwitchStackRoutingInterface"></a>
# **createNetworkSwitchStackRoutingInterface**
> Object createNetworkSwitchStackRoutingInterface(networkId, switchStackId, createNetworkSwitchStackRoutingInterface)

Create a layer 3 interface for a switch stack

Create a layer 3 interface for a switch stack

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RoutingApi();

var networkId = "networkId_example"; // String | 

var switchStackId = "switchStackId_example"; // String | 

var createNetworkSwitchStackRoutingInterface = new MerakiDashboardApi.CreateNetworkSwitchStackRoutingInterface(); // CreateNetworkSwitchStackRoutingInterface | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNetworkSwitchStackRoutingInterface(networkId, switchStackId, createNetworkSwitchStackRoutingInterface, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **switchStackId** | **String**|  | 
 **createNetworkSwitchStackRoutingInterface** | [**CreateNetworkSwitchStackRoutingInterface**](CreateNetworkSwitchStackRoutingInterface.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkSwitchStackRoutingStaticRoute"></a>
# **createNetworkSwitchStackRoutingStaticRoute**
> Object createNetworkSwitchStackRoutingStaticRoute(networkId, switchStackId, createNetworkSwitchStackRoutingStaticRoute)

Create a layer 3 static route for a switch stack

Create a layer 3 static route for a switch stack

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RoutingApi();

var networkId = "networkId_example"; // String | 

var switchStackId = "switchStackId_example"; // String | 

var createNetworkSwitchStackRoutingStaticRoute = new MerakiDashboardApi.CreateNetworkSwitchStackRoutingStaticRoute(); // CreateNetworkSwitchStackRoutingStaticRoute | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNetworkSwitchStackRoutingStaticRoute(networkId, switchStackId, createNetworkSwitchStackRoutingStaticRoute, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **switchStackId** | **String**|  | 
 **createNetworkSwitchStackRoutingStaticRoute** | [**CreateNetworkSwitchStackRoutingStaticRoute**](CreateNetworkSwitchStackRoutingStaticRoute.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDeviceSwitchRoutingInterface"></a>
# **deleteDeviceSwitchRoutingInterface**
> deleteDeviceSwitchRoutingInterface(serial, interfaceId)

Delete a layer 3 interface from the switch

Delete a layer 3 interface from the switch

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RoutingApi();

var serial = "serial_example"; // String | 

var interfaceId = "interfaceId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteDeviceSwitchRoutingInterface(serial, interfaceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **interfaceId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDeviceSwitchRoutingStaticRoute"></a>
# **deleteDeviceSwitchRoutingStaticRoute**
> deleteDeviceSwitchRoutingStaticRoute(serial, staticRouteId)

Delete a layer 3 static route for a switch

Delete a layer 3 static route for a switch

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RoutingApi();

var serial = "serial_example"; // String | 

var staticRouteId = "staticRouteId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteDeviceSwitchRoutingStaticRoute(serial, staticRouteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **staticRouteId** | **String**|  | 

### Return type

null (empty response body)

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
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RoutingApi();

var networkId = "networkId_example"; // String | 

var rendezvousPointId = "rendezvousPointId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteNetworkSwitchRoutingMulticastRendezvousPoint(networkId, rendezvousPointId, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNetworkSwitchStackRoutingInterface"></a>
# **deleteNetworkSwitchStackRoutingInterface**
> deleteNetworkSwitchStackRoutingInterface(networkId, switchStackId, interfaceId)

Delete a layer 3 interface from a switch stack

Delete a layer 3 interface from a switch stack

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RoutingApi();

var networkId = "networkId_example"; // String | 

var switchStackId = "switchStackId_example"; // String | 

var interfaceId = "interfaceId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteNetworkSwitchStackRoutingInterface(networkId, switchStackId, interfaceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **switchStackId** | **String**|  | 
 **interfaceId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNetworkSwitchStackRoutingStaticRoute"></a>
# **deleteNetworkSwitchStackRoutingStaticRoute**
> deleteNetworkSwitchStackRoutingStaticRoute(networkId, switchStackId, staticRouteId)

Delete a layer 3 static route for a switch stack

Delete a layer 3 static route for a switch stack

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RoutingApi();

var networkId = "networkId_example"; // String | 

var switchStackId = "switchStackId_example"; // String | 

var staticRouteId = "staticRouteId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteNetworkSwitchStackRoutingStaticRoute(networkId, switchStackId, staticRouteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **switchStackId** | **String**|  | 
 **staticRouteId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDeviceSwitchRoutingInterface"></a>
# **getDeviceSwitchRoutingInterface**
> Object getDeviceSwitchRoutingInterface(serial, interfaceId)

Return a layer 3 interface for a switch

Return a layer 3 interface for a switch

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RoutingApi();

var serial = "serial_example"; // String | 

var interfaceId = "interfaceId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeviceSwitchRoutingInterface(serial, interfaceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **interfaceId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDeviceSwitchRoutingInterfaceDhcp"></a>
# **getDeviceSwitchRoutingInterfaceDhcp**
> Object getDeviceSwitchRoutingInterfaceDhcp(serial, interfaceId)

Return a layer 3 interface DHCP configuration for a switch

Return a layer 3 interface DHCP configuration for a switch

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RoutingApi();

var serial = "serial_example"; // String | 

var interfaceId = "interfaceId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeviceSwitchRoutingInterfaceDhcp(serial, interfaceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **interfaceId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDeviceSwitchRoutingInterfaces"></a>
# **getDeviceSwitchRoutingInterfaces**
> Object getDeviceSwitchRoutingInterfaces(serial)

List layer 3 interfaces for a switch

List layer 3 interfaces for a switch

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RoutingApi();

var serial = "serial_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeviceSwitchRoutingInterfaces(serial, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDeviceSwitchRoutingStaticRoute"></a>
# **getDeviceSwitchRoutingStaticRoute**
> Object getDeviceSwitchRoutingStaticRoute(serial, staticRouteId)

Return a layer 3 static route for a switch

Return a layer 3 static route for a switch

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RoutingApi();

var serial = "serial_example"; // String | 

var staticRouteId = "staticRouteId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeviceSwitchRoutingStaticRoute(serial, staticRouteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **staticRouteId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDeviceSwitchRoutingStaticRoutes"></a>
# **getDeviceSwitchRoutingStaticRoutes**
> Object getDeviceSwitchRoutingStaticRoutes(serial)

List layer 3 static routes for a switch

List layer 3 static routes for a switch

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RoutingApi();

var serial = "serial_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeviceSwitchRoutingStaticRoutes(serial, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkSwitchRoutingMulticast"></a>
# **getNetworkSwitchRoutingMulticast**
> Object getNetworkSwitchRoutingMulticast(networkId)

Return multicast settings for a network

Return multicast settings for a network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RoutingApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSwitchRoutingMulticast(networkId, callback);
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

<a name="getNetworkSwitchRoutingMulticastRendezvousPoint"></a>
# **getNetworkSwitchRoutingMulticastRendezvousPoint**
> Object getNetworkSwitchRoutingMulticastRendezvousPoint(networkId, rendezvousPointId)

Return a multicast rendezvous point

Return a multicast rendezvous point

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RoutingApi();

var networkId = "networkId_example"; // String | 

var rendezvousPointId = "rendezvousPointId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSwitchRoutingMulticastRendezvousPoint(networkId, rendezvousPointId, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkSwitchRoutingMulticastRendezvousPoints"></a>
# **getNetworkSwitchRoutingMulticastRendezvousPoints**
> Object getNetworkSwitchRoutingMulticastRendezvousPoints(networkId)

List multicast rendezvous points

List multicast rendezvous points

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RoutingApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSwitchRoutingMulticastRendezvousPoints(networkId, callback);
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

<a name="getNetworkSwitchRoutingOspf"></a>
# **getNetworkSwitchRoutingOspf**
> Object getNetworkSwitchRoutingOspf(networkId)

Return layer 3 OSPF routing configuration

Return layer 3 OSPF routing configuration

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RoutingApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSwitchRoutingOspf(networkId, callback);
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

<a name="getNetworkSwitchStackRoutingInterface"></a>
# **getNetworkSwitchStackRoutingInterface**
> Object getNetworkSwitchStackRoutingInterface(networkId, switchStackId, interfaceId)

Return a layer 3 interface from a switch stack

Return a layer 3 interface from a switch stack

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RoutingApi();

var networkId = "networkId_example"; // String | 

var switchStackId = "switchStackId_example"; // String | 

var interfaceId = "interfaceId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSwitchStackRoutingInterface(networkId, switchStackId, interfaceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **switchStackId** | **String**|  | 
 **interfaceId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkSwitchStackRoutingInterfaceDhcp"></a>
# **getNetworkSwitchStackRoutingInterfaceDhcp**
> Object getNetworkSwitchStackRoutingInterfaceDhcp(networkId, switchStackId, interfaceId)

Return a layer 3 interface DHCP configuration for a switch stack

Return a layer 3 interface DHCP configuration for a switch stack

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RoutingApi();

var networkId = "networkId_example"; // String | 

var switchStackId = "switchStackId_example"; // String | 

var interfaceId = "interfaceId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSwitchStackRoutingInterfaceDhcp(networkId, switchStackId, interfaceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **switchStackId** | **String**|  | 
 **interfaceId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkSwitchStackRoutingInterfaces"></a>
# **getNetworkSwitchStackRoutingInterfaces**
> Object getNetworkSwitchStackRoutingInterfaces(networkId, switchStackId)

List layer 3 interfaces for a switch stack

List layer 3 interfaces for a switch stack

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RoutingApi();

var networkId = "networkId_example"; // String | 

var switchStackId = "switchStackId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSwitchStackRoutingInterfaces(networkId, switchStackId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **switchStackId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkSwitchStackRoutingStaticRoute"></a>
# **getNetworkSwitchStackRoutingStaticRoute**
> Object getNetworkSwitchStackRoutingStaticRoute(networkId, switchStackId, staticRouteId)

Return a layer 3 static route for a switch stack

Return a layer 3 static route for a switch stack

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RoutingApi();

var networkId = "networkId_example"; // String | 

var switchStackId = "switchStackId_example"; // String | 

var staticRouteId = "staticRouteId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSwitchStackRoutingStaticRoute(networkId, switchStackId, staticRouteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **switchStackId** | **String**|  | 
 **staticRouteId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkSwitchStackRoutingStaticRoutes"></a>
# **getNetworkSwitchStackRoutingStaticRoutes**
> Object getNetworkSwitchStackRoutingStaticRoutes(networkId, switchStackId)

List layer 3 static routes for a switch stack

List layer 3 static routes for a switch stack

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RoutingApi();

var networkId = "networkId_example"; // String | 

var switchStackId = "switchStackId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSwitchStackRoutingStaticRoutes(networkId, switchStackId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **switchStackId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDeviceSwitchRoutingInterface"></a>
# **updateDeviceSwitchRoutingInterface**
> Object updateDeviceSwitchRoutingInterface(serial, interfaceId, opts)

Update a layer 3 interface for a switch

Update a layer 3 interface for a switch

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RoutingApi();

var serial = "serial_example"; // String | 

var interfaceId = "interfaceId_example"; // String | 

var opts = { 
  'updateDeviceSwitchRoutingInterface': new MerakiDashboardApi.UpdateDeviceSwitchRoutingInterface() // UpdateDeviceSwitchRoutingInterface | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDeviceSwitchRoutingInterface(serial, interfaceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **interfaceId** | **String**|  | 
 **updateDeviceSwitchRoutingInterface** | [**UpdateDeviceSwitchRoutingInterface**](UpdateDeviceSwitchRoutingInterface.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDeviceSwitchRoutingInterfaceDhcp"></a>
# **updateDeviceSwitchRoutingInterfaceDhcp**
> Object updateDeviceSwitchRoutingInterfaceDhcp(serial, interfaceId, opts)

Update a layer 3 interface DHCP configuration for a switch

Update a layer 3 interface DHCP configuration for a switch

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RoutingApi();

var serial = "serial_example"; // String | 

var interfaceId = "interfaceId_example"; // String | 

var opts = { 
  'updateDeviceSwitchRoutingInterfaceDhcp': new MerakiDashboardApi.UpdateDeviceSwitchRoutingInterfaceDhcp() // UpdateDeviceSwitchRoutingInterfaceDhcp | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDeviceSwitchRoutingInterfaceDhcp(serial, interfaceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **interfaceId** | **String**|  | 
 **updateDeviceSwitchRoutingInterfaceDhcp** | [**UpdateDeviceSwitchRoutingInterfaceDhcp**](UpdateDeviceSwitchRoutingInterfaceDhcp.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDeviceSwitchRoutingStaticRoute"></a>
# **updateDeviceSwitchRoutingStaticRoute**
> Object updateDeviceSwitchRoutingStaticRoute(serial, staticRouteId, opts)

Update a layer 3 static route for a switch

Update a layer 3 static route for a switch

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RoutingApi();

var serial = "serial_example"; // String | 

var staticRouteId = "staticRouteId_example"; // String | 

var opts = { 
  'updateDeviceSwitchRoutingStaticRoute': new MerakiDashboardApi.UpdateDeviceSwitchRoutingStaticRoute() // UpdateDeviceSwitchRoutingStaticRoute | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDeviceSwitchRoutingStaticRoute(serial, staticRouteId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **staticRouteId** | **String**|  | 
 **updateDeviceSwitchRoutingStaticRoute** | [**UpdateDeviceSwitchRoutingStaticRoute**](UpdateDeviceSwitchRoutingStaticRoute.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSwitchRoutingMulticast"></a>
# **updateNetworkSwitchRoutingMulticast**
> Object updateNetworkSwitchRoutingMulticast(networkId, opts)

Update multicast settings for a network

Update multicast settings for a network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RoutingApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  'updateNetworkSwitchRoutingMulticast': new MerakiDashboardApi.UpdateNetworkSwitchRoutingMulticast() // UpdateNetworkSwitchRoutingMulticast | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkSwitchRoutingMulticast(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **updateNetworkSwitchRoutingMulticast** | [**UpdateNetworkSwitchRoutingMulticast**](UpdateNetworkSwitchRoutingMulticast.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSwitchRoutingMulticastRendezvousPoint"></a>
# **updateNetworkSwitchRoutingMulticastRendezvousPoint**
> Object updateNetworkSwitchRoutingMulticastRendezvousPoint(networkId, rendezvousPointId, updateNetworkSwitchRoutingMulticastRendezvousPoint)

Update a multicast rendezvous point

Update a multicast rendezvous point

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RoutingApi();

var networkId = "networkId_example"; // String | 

var rendezvousPointId = "rendezvousPointId_example"; // String | 

var updateNetworkSwitchRoutingMulticastRendezvousPoint = new MerakiDashboardApi.UpdateNetworkSwitchRoutingMulticastRendezvousPoint(); // UpdateNetworkSwitchRoutingMulticastRendezvousPoint | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkSwitchRoutingMulticastRendezvousPoint(networkId, rendezvousPointId, updateNetworkSwitchRoutingMulticastRendezvousPoint, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **rendezvousPointId** | **String**|  | 
 **updateNetworkSwitchRoutingMulticastRendezvousPoint** | [**UpdateNetworkSwitchRoutingMulticastRendezvousPoint**](UpdateNetworkSwitchRoutingMulticastRendezvousPoint.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSwitchRoutingOspf"></a>
# **updateNetworkSwitchRoutingOspf**
> Object updateNetworkSwitchRoutingOspf(networkId, opts)

Update layer 3 OSPF routing configuration

Update layer 3 OSPF routing configuration

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RoutingApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  'updateNetworkSwitchRoutingOspf': new MerakiDashboardApi.UpdateNetworkSwitchRoutingOspf() // UpdateNetworkSwitchRoutingOspf | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkSwitchRoutingOspf(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **updateNetworkSwitchRoutingOspf** | [**UpdateNetworkSwitchRoutingOspf**](UpdateNetworkSwitchRoutingOspf.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSwitchStackRoutingInterface"></a>
# **updateNetworkSwitchStackRoutingInterface**
> Object updateNetworkSwitchStackRoutingInterface(networkId, switchStackId, interfaceId, opts)

Update a layer 3 interface for a switch stack

Update a layer 3 interface for a switch stack

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RoutingApi();

var networkId = "networkId_example"; // String | 

var switchStackId = "switchStackId_example"; // String | 

var interfaceId = "interfaceId_example"; // String | 

var opts = { 
  'updateNetworkSwitchStackRoutingInterface': new MerakiDashboardApi.UpdateNetworkSwitchStackRoutingInterface() // UpdateNetworkSwitchStackRoutingInterface | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkSwitchStackRoutingInterface(networkId, switchStackId, interfaceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **switchStackId** | **String**|  | 
 **interfaceId** | **String**|  | 
 **updateNetworkSwitchStackRoutingInterface** | [**UpdateNetworkSwitchStackRoutingInterface**](UpdateNetworkSwitchStackRoutingInterface.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSwitchStackRoutingInterfaceDhcp"></a>
# **updateNetworkSwitchStackRoutingInterfaceDhcp**
> Object updateNetworkSwitchStackRoutingInterfaceDhcp(networkId, switchStackId, interfaceId, opts)

Update a layer 3 interface DHCP configuration for a switch stack

Update a layer 3 interface DHCP configuration for a switch stack

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RoutingApi();

var networkId = "networkId_example"; // String | 

var switchStackId = "switchStackId_example"; // String | 

var interfaceId = "interfaceId_example"; // String | 

var opts = { 
  'updateNetworkSwitchStackRoutingInterfaceDhcp': new MerakiDashboardApi.UpdateNetworkSwitchStackRoutingInterfaceDhcp() // UpdateNetworkSwitchStackRoutingInterfaceDhcp | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkSwitchStackRoutingInterfaceDhcp(networkId, switchStackId, interfaceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **switchStackId** | **String**|  | 
 **interfaceId** | **String**|  | 
 **updateNetworkSwitchStackRoutingInterfaceDhcp** | [**UpdateNetworkSwitchStackRoutingInterfaceDhcp**](UpdateNetworkSwitchStackRoutingInterfaceDhcp.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSwitchStackRoutingStaticRoute"></a>
# **updateNetworkSwitchStackRoutingStaticRoute**
> Object updateNetworkSwitchStackRoutingStaticRoute(networkId, switchStackId, staticRouteId, opts)

Update a layer 3 static route for a switch stack

Update a layer 3 static route for a switch stack

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.RoutingApi();

var networkId = "networkId_example"; // String | 

var switchStackId = "switchStackId_example"; // String | 

var staticRouteId = "staticRouteId_example"; // String | 

var opts = { 
  'updateNetworkSwitchStackRoutingStaticRoute': new MerakiDashboardApi.UpdateNetworkSwitchStackRoutingStaticRoute() // UpdateNetworkSwitchStackRoutingStaticRoute | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkSwitchStackRoutingStaticRoute(networkId, switchStackId, staticRouteId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **switchStackId** | **String**|  | 
 **staticRouteId** | **String**|  | 
 **updateNetworkSwitchStackRoutingStaticRoute** | [**UpdateNetworkSwitchStackRoutingStaticRoute**](UpdateNetworkSwitchStackRoutingStaticRoute.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

