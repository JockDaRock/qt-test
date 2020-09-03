# MerakiDashboardApi.DhcpApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDeviceApplianceDhcpSubnets**](DhcpApi.md#getDeviceApplianceDhcpSubnets) | **GET** /devices/{serial}/appliance/dhcp/subnets | Return the DHCP subnet information for an appliance
[**getDeviceSwitchRoutingInterfaceDhcp**](DhcpApi.md#getDeviceSwitchRoutingInterfaceDhcp) | **GET** /devices/{serial}/switch/routing/interfaces/{interfaceId}/dhcp | Return a layer 3 interface DHCP configuration for a switch
[**getNetworkCellularGatewayDhcp**](DhcpApi.md#getNetworkCellularGatewayDhcp) | **GET** /networks/{networkId}/cellularGateway/dhcp | List common DHCP settings of MGs
[**getNetworkSwitchStackRoutingInterfaceDhcp**](DhcpApi.md#getNetworkSwitchStackRoutingInterfaceDhcp) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp | Return a layer 3 interface DHCP configuration for a switch stack
[**updateDeviceSwitchRoutingInterfaceDhcp**](DhcpApi.md#updateDeviceSwitchRoutingInterfaceDhcp) | **PUT** /devices/{serial}/switch/routing/interfaces/{interfaceId}/dhcp | Update a layer 3 interface DHCP configuration for a switch
[**updateNetworkCellularGatewayDhcp**](DhcpApi.md#updateNetworkCellularGatewayDhcp) | **PUT** /networks/{networkId}/cellularGateway/dhcp | Update common DHCP settings of MGs
[**updateNetworkSwitchStackRoutingInterfaceDhcp**](DhcpApi.md#updateNetworkSwitchStackRoutingInterfaceDhcp) | **PUT** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp | Update a layer 3 interface DHCP configuration for a switch stack


<a name="getDeviceApplianceDhcpSubnets"></a>
# **getDeviceApplianceDhcpSubnets**
> Object getDeviceApplianceDhcpSubnets(serial)

Return the DHCP subnet information for an appliance

Return the DHCP subnet information for an appliance

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.DhcpApi();

var serial = "serial_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeviceApplianceDhcpSubnets(serial, callback);
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

var apiInstance = new MerakiDashboardApi.DhcpApi();

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

var apiInstance = new MerakiDashboardApi.DhcpApi();

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

var apiInstance = new MerakiDashboardApi.DhcpApi();

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

var apiInstance = new MerakiDashboardApi.DhcpApi();

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

var apiInstance = new MerakiDashboardApi.DhcpApi();

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

var apiInstance = new MerakiDashboardApi.DhcpApi();

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

