# MerakiDashboardApi.CellularGatewayApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDeviceCellularGatewayLan**](CellularGatewayApi.md#getDeviceCellularGatewayLan) | **GET** /devices/{serial}/cellularGateway/lan | Show the LAN Settings of a MG
[**getDeviceCellularGatewayPortForwardingRules**](CellularGatewayApi.md#getDeviceCellularGatewayPortForwardingRules) | **GET** /devices/{serial}/cellularGateway/portForwardingRules | Returns the port forwarding rules for a single MG.
[**getNetworkCellularGatewayConnectivityMonitoringDestinations**](CellularGatewayApi.md#getNetworkCellularGatewayConnectivityMonitoringDestinations) | **GET** /networks/{networkId}/cellularGateway/connectivityMonitoringDestinations | Return the connectivity testing destinations for an MG network
[**getNetworkCellularGatewayDhcp**](CellularGatewayApi.md#getNetworkCellularGatewayDhcp) | **GET** /networks/{networkId}/cellularGateway/dhcp | List common DHCP settings of MGs
[**getNetworkCellularGatewaySubnetPool**](CellularGatewayApi.md#getNetworkCellularGatewaySubnetPool) | **GET** /networks/{networkId}/cellularGateway/subnetPool | Return the subnet pool and mask configured for MGs in the network.
[**getNetworkCellularGatewayUplink**](CellularGatewayApi.md#getNetworkCellularGatewayUplink) | **GET** /networks/{networkId}/cellularGateway/uplink | Returns the uplink settings for your MG network.
[**updateDeviceCellularGatewayLan**](CellularGatewayApi.md#updateDeviceCellularGatewayLan) | **PUT** /devices/{serial}/cellularGateway/lan | Update the LAN Settings for a single MG.
[**updateDeviceCellularGatewayPortForwardingRules**](CellularGatewayApi.md#updateDeviceCellularGatewayPortForwardingRules) | **PUT** /devices/{serial}/cellularGateway/portForwardingRules | Updates the port forwarding rules for a single MG.
[**updateNetworkCellularGatewayConnectivityMonitoringDestinations**](CellularGatewayApi.md#updateNetworkCellularGatewayConnectivityMonitoringDestinations) | **PUT** /networks/{networkId}/cellularGateway/connectivityMonitoringDestinations | Update the connectivity testing destinations for an MG network
[**updateNetworkCellularGatewayDhcp**](CellularGatewayApi.md#updateNetworkCellularGatewayDhcp) | **PUT** /networks/{networkId}/cellularGateway/dhcp | Update common DHCP settings of MGs
[**updateNetworkCellularGatewaySubnetPool**](CellularGatewayApi.md#updateNetworkCellularGatewaySubnetPool) | **PUT** /networks/{networkId}/cellularGateway/subnetPool | Update the subnet pool and mask configuration for MGs in the network.
[**updateNetworkCellularGatewayUplink**](CellularGatewayApi.md#updateNetworkCellularGatewayUplink) | **PUT** /networks/{networkId}/cellularGateway/uplink | Updates the uplink settings for your MG network.


<a name="getDeviceCellularGatewayLan"></a>
# **getDeviceCellularGatewayLan**
> Object getDeviceCellularGatewayLan(serial)

Show the LAN Settings of a MG

Show the LAN Settings of a MG

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.CellularGatewayApi();

var serial = "serial_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeviceCellularGatewayLan(serial, callback);
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

<a name="getDeviceCellularGatewayPortForwardingRules"></a>
# **getDeviceCellularGatewayPortForwardingRules**
> Object getDeviceCellularGatewayPortForwardingRules(serial)

Returns the port forwarding rules for a single MG.

Returns the port forwarding rules for a single MG.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.CellularGatewayApi();

var serial = "serial_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeviceCellularGatewayPortForwardingRules(serial, callback);
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

<a name="getNetworkCellularGatewayConnectivityMonitoringDestinations"></a>
# **getNetworkCellularGatewayConnectivityMonitoringDestinations**
> Object getNetworkCellularGatewayConnectivityMonitoringDestinations(networkId)

Return the connectivity testing destinations for an MG network

Return the connectivity testing destinations for an MG network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.CellularGatewayApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkCellularGatewayConnectivityMonitoringDestinations(networkId, callback);
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

<a name="getNetworkCellularGatewayDhcp"></a>
# **getNetworkCellularGatewayDhcp**
> Object getNetworkCellularGatewayDhcp(networkId)

List common DHCP settings of MGs

List common DHCP settings of MGs

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.CellularGatewayApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkCellularGatewayDhcp(networkId, callback);
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

var apiInstance = new MerakiDashboardApi.CellularGatewayApi();

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

<a name="getNetworkCellularGatewayUplink"></a>
# **getNetworkCellularGatewayUplink**
> Object getNetworkCellularGatewayUplink(networkId)

Returns the uplink settings for your MG network.

Returns the uplink settings for your MG network.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.CellularGatewayApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkCellularGatewayUplink(networkId, callback);
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

<a name="updateDeviceCellularGatewayLan"></a>
# **updateDeviceCellularGatewayLan**
> Object updateDeviceCellularGatewayLan(serial, opts)

Update the LAN Settings for a single MG.

Update the LAN Settings for a single MG.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.CellularGatewayApi();

var serial = "serial_example"; // String | 

var opts = { 
  'updateDeviceCellularGatewayLan': new MerakiDashboardApi.UpdateDeviceCellularGatewayLan() // UpdateDeviceCellularGatewayLan | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDeviceCellularGatewayLan(serial, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **updateDeviceCellularGatewayLan** | [**UpdateDeviceCellularGatewayLan**](UpdateDeviceCellularGatewayLan.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDeviceCellularGatewayPortForwardingRules"></a>
# **updateDeviceCellularGatewayPortForwardingRules**
> Object updateDeviceCellularGatewayPortForwardingRules(serial, opts)

Updates the port forwarding rules for a single MG.

Updates the port forwarding rules for a single MG.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.CellularGatewayApi();

var serial = "serial_example"; // String | 

var opts = { 
  'updateDeviceCellularGatewayPortForwardingRules': new MerakiDashboardApi.UpdateDeviceCellularGatewayPortForwardingRules() // UpdateDeviceCellularGatewayPortForwardingRules | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDeviceCellularGatewayPortForwardingRules(serial, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **updateDeviceCellularGatewayPortForwardingRules** | [**UpdateDeviceCellularGatewayPortForwardingRules**](UpdateDeviceCellularGatewayPortForwardingRules.md)|  | [optional] 

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
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.CellularGatewayApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  'updateNetworkCellularGatewayConnectivityMonitoringDestinations': new MerakiDashboardApi.UpdateNetworkCellularGatewayConnectivityMonitoringDestinations() // UpdateNetworkCellularGatewayConnectivityMonitoringDestinations | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkCellularGatewayConnectivityMonitoringDestinations(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **updateNetworkCellularGatewayConnectivityMonitoringDestinations** | [**UpdateNetworkCellularGatewayConnectivityMonitoringDestinations**](UpdateNetworkCellularGatewayConnectivityMonitoringDestinations.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkCellularGatewayDhcp"></a>
# **updateNetworkCellularGatewayDhcp**
> Object updateNetworkCellularGatewayDhcp(networkId, opts)

Update common DHCP settings of MGs

Update common DHCP settings of MGs

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.CellularGatewayApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  'updateNetworkCellularGatewayDhcp': new MerakiDashboardApi.UpdateNetworkCellularGatewayDhcp() // UpdateNetworkCellularGatewayDhcp | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkCellularGatewayDhcp(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **updateNetworkCellularGatewayDhcp** | [**UpdateNetworkCellularGatewayDhcp**](UpdateNetworkCellularGatewayDhcp.md)|  | [optional] 

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

var apiInstance = new MerakiDashboardApi.CellularGatewayApi();

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

<a name="updateNetworkCellularGatewayUplink"></a>
# **updateNetworkCellularGatewayUplink**
> Object updateNetworkCellularGatewayUplink(networkId, opts)

Updates the uplink settings for your MG network.

Updates the uplink settings for your MG network.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.CellularGatewayApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  'updateNetworkCellularGatewayUplink': new MerakiDashboardApi.UpdateNetworkCellularGatewayUplink() // UpdateNetworkCellularGatewayUplink | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkCellularGatewayUplink(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **updateNetworkCellularGatewayUplink** | [**UpdateNetworkCellularGatewayUplink**](UpdateNetworkCellularGatewayUplink.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

