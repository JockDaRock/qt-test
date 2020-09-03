# MerakiDashboardApi.StacksApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNetworkSwitchStack**](StacksApi.md#addNetworkSwitchStack) | **POST** /networks/{networkId}/switch/stacks/{switchStackId}/add | Add a switch to a stack
[**createNetworkSwitchStack**](StacksApi.md#createNetworkSwitchStack) | **POST** /networks/{networkId}/switch/stacks | Create a stack
[**createNetworkSwitchStackRoutingInterface**](StacksApi.md#createNetworkSwitchStackRoutingInterface) | **POST** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces | Create a layer 3 interface for a switch stack
[**createNetworkSwitchStackRoutingStaticRoute**](StacksApi.md#createNetworkSwitchStackRoutingStaticRoute) | **POST** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes | Create a layer 3 static route for a switch stack
[**deleteNetworkSwitchStack**](StacksApi.md#deleteNetworkSwitchStack) | **DELETE** /networks/{networkId}/switch/stacks/{switchStackId} | Delete a stack
[**deleteNetworkSwitchStackRoutingInterface**](StacksApi.md#deleteNetworkSwitchStackRoutingInterface) | **DELETE** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId} | Delete a layer 3 interface from a switch stack
[**deleteNetworkSwitchStackRoutingStaticRoute**](StacksApi.md#deleteNetworkSwitchStackRoutingStaticRoute) | **DELETE** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId} | Delete a layer 3 static route for a switch stack
[**getNetworkSwitchStack**](StacksApi.md#getNetworkSwitchStack) | **GET** /networks/{networkId}/switch/stacks/{switchStackId} | Show a switch stack
[**getNetworkSwitchStackRoutingInterface**](StacksApi.md#getNetworkSwitchStackRoutingInterface) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId} | Return a layer 3 interface from a switch stack
[**getNetworkSwitchStackRoutingInterfaceDhcp**](StacksApi.md#getNetworkSwitchStackRoutingInterfaceDhcp) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp | Return a layer 3 interface DHCP configuration for a switch stack
[**getNetworkSwitchStackRoutingInterfaces**](StacksApi.md#getNetworkSwitchStackRoutingInterfaces) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces | List layer 3 interfaces for a switch stack
[**getNetworkSwitchStackRoutingStaticRoute**](StacksApi.md#getNetworkSwitchStackRoutingStaticRoute) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId} | Return a layer 3 static route for a switch stack
[**getNetworkSwitchStackRoutingStaticRoutes**](StacksApi.md#getNetworkSwitchStackRoutingStaticRoutes) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes | List layer 3 static routes for a switch stack
[**getNetworkSwitchStacks**](StacksApi.md#getNetworkSwitchStacks) | **GET** /networks/{networkId}/switch/stacks | List the switch stacks in a network
[**removeNetworkSwitchStack**](StacksApi.md#removeNetworkSwitchStack) | **POST** /networks/{networkId}/switch/stacks/{switchStackId}/remove | Remove a switch from a stack
[**updateNetworkSwitchStackRoutingInterface**](StacksApi.md#updateNetworkSwitchStackRoutingInterface) | **PUT** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId} | Update a layer 3 interface for a switch stack
[**updateNetworkSwitchStackRoutingInterfaceDhcp**](StacksApi.md#updateNetworkSwitchStackRoutingInterfaceDhcp) | **PUT** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp | Update a layer 3 interface DHCP configuration for a switch stack
[**updateNetworkSwitchStackRoutingStaticRoute**](StacksApi.md#updateNetworkSwitchStackRoutingStaticRoute) | **PUT** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId} | Update a layer 3 static route for a switch stack


<a name="addNetworkSwitchStack"></a>
# **addNetworkSwitchStack**
> Object addNetworkSwitchStack(networkId, switchStackId, addNetworkSwitchStack)

Add a switch to a stack

Add a switch to a stack

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.StacksApi();

var networkId = "networkId_example"; // String | 

var switchStackId = "switchStackId_example"; // String | 

var addNetworkSwitchStack = new MerakiDashboardApi.AddNetworkSwitchStack(); // AddNetworkSwitchStack | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addNetworkSwitchStack(networkId, switchStackId, addNetworkSwitchStack, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **switchStackId** | **String**|  | 
 **addNetworkSwitchStack** | [**AddNetworkSwitchStack**](AddNetworkSwitchStack.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkSwitchStack"></a>
# **createNetworkSwitchStack**
> Object createNetworkSwitchStack(networkId, createNetworkSwitchStack)

Create a stack

Create a stack

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.StacksApi();

var networkId = "networkId_example"; // String | 

var createNetworkSwitchStack = new MerakiDashboardApi.CreateNetworkSwitchStack(); // CreateNetworkSwitchStack | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNetworkSwitchStack(networkId, createNetworkSwitchStack, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **createNetworkSwitchStack** | [**CreateNetworkSwitchStack**](CreateNetworkSwitchStack.md)|  | 

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

var apiInstance = new MerakiDashboardApi.StacksApi();

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

var apiInstance = new MerakiDashboardApi.StacksApi();

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

<a name="deleteNetworkSwitchStack"></a>
# **deleteNetworkSwitchStack**
> deleteNetworkSwitchStack(networkId, switchStackId)

Delete a stack

Delete a stack

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.StacksApi();

var networkId = "networkId_example"; // String | 

var switchStackId = "switchStackId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteNetworkSwitchStack(networkId, switchStackId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **switchStackId** | **String**|  | 

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

var apiInstance = new MerakiDashboardApi.StacksApi();

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

var apiInstance = new MerakiDashboardApi.StacksApi();

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

<a name="getNetworkSwitchStack"></a>
# **getNetworkSwitchStack**
> Object getNetworkSwitchStack(networkId, switchStackId)

Show a switch stack

Show a switch stack

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.StacksApi();

var networkId = "networkId_example"; // String | 

var switchStackId = "switchStackId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSwitchStack(networkId, switchStackId, callback);
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

var apiInstance = new MerakiDashboardApi.StacksApi();

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

var apiInstance = new MerakiDashboardApi.StacksApi();

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

var apiInstance = new MerakiDashboardApi.StacksApi();

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

var apiInstance = new MerakiDashboardApi.StacksApi();

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

var apiInstance = new MerakiDashboardApi.StacksApi();

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

<a name="getNetworkSwitchStacks"></a>
# **getNetworkSwitchStacks**
> Object getNetworkSwitchStacks(networkId)

List the switch stacks in a network

List the switch stacks in a network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.StacksApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSwitchStacks(networkId, callback);
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

<a name="removeNetworkSwitchStack"></a>
# **removeNetworkSwitchStack**
> Object removeNetworkSwitchStack(networkId, switchStackId, removeNetworkSwitchStack)

Remove a switch from a stack

Remove a switch from a stack

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.StacksApi();

var networkId = "networkId_example"; // String | 

var switchStackId = "switchStackId_example"; // String | 

var removeNetworkSwitchStack = new MerakiDashboardApi.RemoveNetworkSwitchStack(); // RemoveNetworkSwitchStack | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removeNetworkSwitchStack(networkId, switchStackId, removeNetworkSwitchStack, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **switchStackId** | **String**|  | 
 **removeNetworkSwitchStack** | [**RemoveNetworkSwitchStack**](RemoveNetworkSwitchStack.md)|  | 

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

var apiInstance = new MerakiDashboardApi.StacksApi();

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

var apiInstance = new MerakiDashboardApi.StacksApi();

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

var apiInstance = new MerakiDashboardApi.StacksApi();

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

