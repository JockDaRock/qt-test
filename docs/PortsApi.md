# MerakiDashboardApi.PortsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cycleDeviceSwitchPorts**](PortsApi.md#cycleDeviceSwitchPorts) | **POST** /devices/{serial}/switch/ports/cycle | Cycle a set of switch ports
[**getDeviceSwitchPort**](PortsApi.md#getDeviceSwitchPort) | **GET** /devices/{serial}/switch/ports/{portId} | Return a switch port
[**getDeviceSwitchPorts**](PortsApi.md#getDeviceSwitchPorts) | **GET** /devices/{serial}/switch/ports | List the switch ports for a switch
[**getDeviceSwitchPortsStatuses**](PortsApi.md#getDeviceSwitchPortsStatuses) | **GET** /devices/{serial}/switch/ports/statuses | Return the status for all the ports of a switch
[**getDeviceSwitchPortsStatusesPackets**](PortsApi.md#getDeviceSwitchPortsStatusesPackets) | **GET** /devices/{serial}/switch/ports/statuses/packets | Return the packet counters for all the ports of a switch
[**getNetworkAppliancePort**](PortsApi.md#getNetworkAppliancePort) | **GET** /networks/{networkId}/appliance/ports/{portId} | Return per-port VLAN settings for a single MX port.
[**getNetworkAppliancePorts**](PortsApi.md#getNetworkAppliancePorts) | **GET** /networks/{networkId}/appliance/ports | List per-port VLAN settings for all ports of a MX.
[**getOrganizationConfigTemplateSwitchProfilePort**](PortsApi.md#getOrganizationConfigTemplateSwitchProfilePort) | **GET** /organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId} | Return a switch profile port
[**getOrganizationConfigTemplateSwitchProfilePorts**](PortsApi.md#getOrganizationConfigTemplateSwitchProfilePorts) | **GET** /organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports | Return all the ports of a switch profile
[**updateDeviceSwitchPort**](PortsApi.md#updateDeviceSwitchPort) | **PUT** /devices/{serial}/switch/ports/{portId} | Update a switch port
[**updateNetworkAppliancePort**](PortsApi.md#updateNetworkAppliancePort) | **PUT** /networks/{networkId}/appliance/ports/{portId} | Update the per-port VLAN settings for a single MX port.
[**updateOrganizationConfigTemplateSwitchProfilePort**](PortsApi.md#updateOrganizationConfigTemplateSwitchProfilePort) | **PUT** /organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId} | Update a switch profile port


<a name="cycleDeviceSwitchPorts"></a>
# **cycleDeviceSwitchPorts**
> Object cycleDeviceSwitchPorts(serial, cycleDeviceSwitchPorts)

Cycle a set of switch ports

Cycle a set of switch ports

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.PortsApi();

var serial = "serial_example"; // String | 

var cycleDeviceSwitchPorts = new MerakiDashboardApi.CycleDeviceSwitchPorts(); // CycleDeviceSwitchPorts | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cycleDeviceSwitchPorts(serial, cycleDeviceSwitchPorts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **cycleDeviceSwitchPorts** | [**CycleDeviceSwitchPorts**](CycleDeviceSwitchPorts.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDeviceSwitchPort"></a>
# **getDeviceSwitchPort**
> Object getDeviceSwitchPort(serial, portId)

Return a switch port

Return a switch port

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.PortsApi();

var serial = "serial_example"; // String | 

var portId = "portId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeviceSwitchPort(serial, portId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **portId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDeviceSwitchPorts"></a>
# **getDeviceSwitchPorts**
> Object getDeviceSwitchPorts(serial)

List the switch ports for a switch

List the switch ports for a switch

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.PortsApi();

var serial = "serial_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeviceSwitchPorts(serial, callback);
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

<a name="getDeviceSwitchPortsStatuses"></a>
# **getDeviceSwitchPortsStatuses**
> Object getDeviceSwitchPortsStatuses(serial, opts)

Return the status for all the ports of a switch

Return the status for all the ports of a switch

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.PortsApi();

var serial = "serial_example"; // String | 

var opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  'timespan': 3.4 // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeviceSwitchPortsStatuses(serial, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDeviceSwitchPortsStatusesPackets"></a>
# **getDeviceSwitchPortsStatusesPackets**
> Object getDeviceSwitchPortsStatusesPackets(serial, opts)

Return the packet counters for all the ports of a switch

Return the packet counters for all the ports of a switch

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.PortsApi();

var serial = "serial_example"; // String | 

var opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 1 day from today.
  'timespan': 3.4 // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 1 day. The default is 1 day.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeviceSwitchPortsStatusesPackets(serial, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 1 day from today. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 1 day. The default is 1 day. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkAppliancePort"></a>
# **getNetworkAppliancePort**
> Object getNetworkAppliancePort(networkId, portId)

Return per-port VLAN settings for a single MX port.

Return per-port VLAN settings for a single MX port.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.PortsApi();

var networkId = "networkId_example"; // String | 

var portId = "portId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkAppliancePort(networkId, portId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **portId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkAppliancePorts"></a>
# **getNetworkAppliancePorts**
> Object getNetworkAppliancePorts(networkId)

List per-port VLAN settings for all ports of a MX.

List per-port VLAN settings for all ports of a MX.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.PortsApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkAppliancePorts(networkId, callback);
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

<a name="getOrganizationConfigTemplateSwitchProfilePort"></a>
# **getOrganizationConfigTemplateSwitchProfilePort**
> Object getOrganizationConfigTemplateSwitchProfilePort(organizationId, configTemplateId, profileId, portId)

Return a switch profile port

Return a switch profile port

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.PortsApi();

var organizationId = "organizationId_example"; // String | 

var configTemplateId = "configTemplateId_example"; // String | 

var profileId = "profileId_example"; // String | 

var portId = "portId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationConfigTemplateSwitchProfilePort(organizationId, configTemplateId, profileId, portId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **configTemplateId** | **String**|  | 
 **profileId** | **String**|  | 
 **portId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationConfigTemplateSwitchProfilePorts"></a>
# **getOrganizationConfigTemplateSwitchProfilePorts**
> Object getOrganizationConfigTemplateSwitchProfilePorts(organizationId, configTemplateId, profileId)

Return all the ports of a switch profile

Return all the ports of a switch profile

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.PortsApi();

var organizationId = "organizationId_example"; // String | 

var configTemplateId = "configTemplateId_example"; // String | 

var profileId = "profileId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationConfigTemplateSwitchProfilePorts(organizationId, configTemplateId, profileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **configTemplateId** | **String**|  | 
 **profileId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDeviceSwitchPort"></a>
# **updateDeviceSwitchPort**
> Object updateDeviceSwitchPort(serial, portId, opts)

Update a switch port

Update a switch port

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.PortsApi();

var serial = "serial_example"; // String | 

var portId = "portId_example"; // String | 

var opts = { 
  'updateDeviceSwitchPort': new MerakiDashboardApi.UpdateDeviceSwitchPort() // UpdateDeviceSwitchPort | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDeviceSwitchPort(serial, portId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **portId** | **String**|  | 
 **updateDeviceSwitchPort** | [**UpdateDeviceSwitchPort**](UpdateDeviceSwitchPort.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkAppliancePort"></a>
# **updateNetworkAppliancePort**
> Object updateNetworkAppliancePort(networkId, portId, opts)

Update the per-port VLAN settings for a single MX port.

Update the per-port VLAN settings for a single MX port.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.PortsApi();

var networkId = "networkId_example"; // String | 

var portId = "portId_example"; // String | 

var opts = { 
  'updateNetworkAppliancePort': new MerakiDashboardApi.UpdateNetworkAppliancePort() // UpdateNetworkAppliancePort | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkAppliancePort(networkId, portId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **portId** | **String**|  | 
 **updateNetworkAppliancePort** | [**UpdateNetworkAppliancePort**](UpdateNetworkAppliancePort.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrganizationConfigTemplateSwitchProfilePort"></a>
# **updateOrganizationConfigTemplateSwitchProfilePort**
> Object updateOrganizationConfigTemplateSwitchProfilePort(organizationId, configTemplateId, profileId, portId, opts)

Update a switch profile port

Update a switch profile port

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.PortsApi();

var organizationId = "organizationId_example"; // String | 

var configTemplateId = "configTemplateId_example"; // String | 

var profileId = "profileId_example"; // String | 

var portId = "portId_example"; // String | 

var opts = { 
  'updateOrganizationConfigTemplateSwitchProfilePort': new MerakiDashboardApi.UpdateOrganizationConfigTemplateSwitchProfilePort() // UpdateOrganizationConfigTemplateSwitchProfilePort | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateOrganizationConfigTemplateSwitchProfilePort(organizationId, configTemplateId, profileId, portId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **configTemplateId** | **String**|  | 
 **profileId** | **String**|  | 
 **portId** | **String**|  | 
 **updateOrganizationConfigTemplateSwitchProfilePort** | [**UpdateOrganizationConfigTemplateSwitchProfilePort**](UpdateOrganizationConfigTemplateSwitchProfilePort.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

