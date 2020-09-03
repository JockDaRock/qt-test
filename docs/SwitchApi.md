# MerakiDashboardApi.SwitchApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNetworkSwitchStack**](SwitchApi.md#addNetworkSwitchStack) | **POST** /networks/{networkId}/switch/stacks/{switchStackId}/add | Add a switch to a stack
[**createDeviceSwitchRoutingInterface**](SwitchApi.md#createDeviceSwitchRoutingInterface) | **POST** /devices/{serial}/switch/routing/interfaces | Create a layer 3 interface for a switch
[**createDeviceSwitchRoutingStaticRoute**](SwitchApi.md#createDeviceSwitchRoutingStaticRoute) | **POST** /devices/{serial}/switch/routing/staticRoutes | Create a layer 3 static route for a switch
[**createNetworkSwitchLinkAggregation**](SwitchApi.md#createNetworkSwitchLinkAggregation) | **POST** /networks/{networkId}/switch/linkAggregations | Create a link aggregation group
[**createNetworkSwitchPortSchedule**](SwitchApi.md#createNetworkSwitchPortSchedule) | **POST** /networks/{networkId}/switch/portSchedules | Add a switch port schedule
[**createNetworkSwitchQosRule**](SwitchApi.md#createNetworkSwitchQosRule) | **POST** /networks/{networkId}/switch/qosRules | Add a quality of service rule
[**createNetworkSwitchRoutingMulticastRendezvousPoint**](SwitchApi.md#createNetworkSwitchRoutingMulticastRendezvousPoint) | **POST** /networks/{networkId}/switch/routing/multicast/rendezvousPoints | Create a multicast rendezvous point
[**createNetworkSwitchStack**](SwitchApi.md#createNetworkSwitchStack) | **POST** /networks/{networkId}/switch/stacks | Create a stack
[**createNetworkSwitchStackRoutingInterface**](SwitchApi.md#createNetworkSwitchStackRoutingInterface) | **POST** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces | Create a layer 3 interface for a switch stack
[**createNetworkSwitchStackRoutingStaticRoute**](SwitchApi.md#createNetworkSwitchStackRoutingStaticRoute) | **POST** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes | Create a layer 3 static route for a switch stack
[**cycleDeviceSwitchPorts**](SwitchApi.md#cycleDeviceSwitchPorts) | **POST** /devices/{serial}/switch/ports/cycle | Cycle a set of switch ports
[**deleteDeviceSwitchRoutingInterface**](SwitchApi.md#deleteDeviceSwitchRoutingInterface) | **DELETE** /devices/{serial}/switch/routing/interfaces/{interfaceId} | Delete a layer 3 interface from the switch
[**deleteDeviceSwitchRoutingStaticRoute**](SwitchApi.md#deleteDeviceSwitchRoutingStaticRoute) | **DELETE** /devices/{serial}/switch/routing/staticRoutes/{staticRouteId} | Delete a layer 3 static route for a switch
[**deleteNetworkSwitchLinkAggregation**](SwitchApi.md#deleteNetworkSwitchLinkAggregation) | **DELETE** /networks/{networkId}/switch/linkAggregations/{linkAggregationId} | Split a link aggregation group into separate ports
[**deleteNetworkSwitchPortSchedule**](SwitchApi.md#deleteNetworkSwitchPortSchedule) | **DELETE** /networks/{networkId}/switch/portSchedules/{portScheduleId} | Delete a switch port schedule
[**deleteNetworkSwitchQosRule**](SwitchApi.md#deleteNetworkSwitchQosRule) | **DELETE** /networks/{networkId}/switch/qosRules/{qosRuleId} | Delete a quality of service rule
[**deleteNetworkSwitchRoutingMulticastRendezvousPoint**](SwitchApi.md#deleteNetworkSwitchRoutingMulticastRendezvousPoint) | **DELETE** /networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId} | Delete a multicast rendezvous point
[**deleteNetworkSwitchStack**](SwitchApi.md#deleteNetworkSwitchStack) | **DELETE** /networks/{networkId}/switch/stacks/{switchStackId} | Delete a stack
[**deleteNetworkSwitchStackRoutingInterface**](SwitchApi.md#deleteNetworkSwitchStackRoutingInterface) | **DELETE** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId} | Delete a layer 3 interface from a switch stack
[**deleteNetworkSwitchStackRoutingStaticRoute**](SwitchApi.md#deleteNetworkSwitchStackRoutingStaticRoute) | **DELETE** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId} | Delete a layer 3 static route for a switch stack
[**getDeviceSwitchPort**](SwitchApi.md#getDeviceSwitchPort) | **GET** /devices/{serial}/switch/ports/{portId} | Return a switch port
[**getDeviceSwitchPorts**](SwitchApi.md#getDeviceSwitchPorts) | **GET** /devices/{serial}/switch/ports | List the switch ports for a switch
[**getDeviceSwitchPortsStatuses**](SwitchApi.md#getDeviceSwitchPortsStatuses) | **GET** /devices/{serial}/switch/ports/statuses | Return the status for all the ports of a switch
[**getDeviceSwitchPortsStatusesPackets**](SwitchApi.md#getDeviceSwitchPortsStatusesPackets) | **GET** /devices/{serial}/switch/ports/statuses/packets | Return the packet counters for all the ports of a switch
[**getDeviceSwitchRoutingInterface**](SwitchApi.md#getDeviceSwitchRoutingInterface) | **GET** /devices/{serial}/switch/routing/interfaces/{interfaceId} | Return a layer 3 interface for a switch
[**getDeviceSwitchRoutingInterfaceDhcp**](SwitchApi.md#getDeviceSwitchRoutingInterfaceDhcp) | **GET** /devices/{serial}/switch/routing/interfaces/{interfaceId}/dhcp | Return a layer 3 interface DHCP configuration for a switch
[**getDeviceSwitchRoutingInterfaces**](SwitchApi.md#getDeviceSwitchRoutingInterfaces) | **GET** /devices/{serial}/switch/routing/interfaces | List layer 3 interfaces for a switch
[**getDeviceSwitchRoutingStaticRoute**](SwitchApi.md#getDeviceSwitchRoutingStaticRoute) | **GET** /devices/{serial}/switch/routing/staticRoutes/{staticRouteId} | Return a layer 3 static route for a switch
[**getDeviceSwitchRoutingStaticRoutes**](SwitchApi.md#getDeviceSwitchRoutingStaticRoutes) | **GET** /devices/{serial}/switch/routing/staticRoutes | List layer 3 static routes for a switch
[**getDeviceSwitchWarmSpare**](SwitchApi.md#getDeviceSwitchWarmSpare) | **GET** /devices/{serial}/switch/warmSpare | Return warm spare configuration for a switch
[**getNetworkSwitchAccessControlLists**](SwitchApi.md#getNetworkSwitchAccessControlLists) | **GET** /networks/{networkId}/switch/accessControlLists | Return the access control lists for a MS network
[**getNetworkSwitchDhcpServerPolicy**](SwitchApi.md#getNetworkSwitchDhcpServerPolicy) | **GET** /networks/{networkId}/switch/dhcpServerPolicy | Return the DHCP server policy
[**getNetworkSwitchDscpToCosMappings**](SwitchApi.md#getNetworkSwitchDscpToCosMappings) | **GET** /networks/{networkId}/switch/dscpToCosMappings | Return the DSCP to CoS mappings
[**getNetworkSwitchLinkAggregations**](SwitchApi.md#getNetworkSwitchLinkAggregations) | **GET** /networks/{networkId}/switch/linkAggregations | List link aggregation groups
[**getNetworkSwitchMtu**](SwitchApi.md#getNetworkSwitchMtu) | **GET** /networks/{networkId}/switch/mtu | Return the MTU configuration
[**getNetworkSwitchPortSchedules**](SwitchApi.md#getNetworkSwitchPortSchedules) | **GET** /networks/{networkId}/switch/portSchedules | List switch port schedules
[**getNetworkSwitchQosRule**](SwitchApi.md#getNetworkSwitchQosRule) | **GET** /networks/{networkId}/switch/qosRules/{qosRuleId} | Return a quality of service rule
[**getNetworkSwitchQosRules**](SwitchApi.md#getNetworkSwitchQosRules) | **GET** /networks/{networkId}/switch/qosRules | List quality of service rules
[**getNetworkSwitchQosRulesOrder**](SwitchApi.md#getNetworkSwitchQosRulesOrder) | **GET** /networks/{networkId}/switch/qosRules/order | Return the quality of service rule IDs by order in which they will be processed by the switch
[**getNetworkSwitchRoutingMulticast**](SwitchApi.md#getNetworkSwitchRoutingMulticast) | **GET** /networks/{networkId}/switch/routing/multicast | Return multicast settings for a network
[**getNetworkSwitchRoutingMulticastRendezvousPoint**](SwitchApi.md#getNetworkSwitchRoutingMulticastRendezvousPoint) | **GET** /networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId} | Return a multicast rendezvous point
[**getNetworkSwitchRoutingMulticastRendezvousPoints**](SwitchApi.md#getNetworkSwitchRoutingMulticastRendezvousPoints) | **GET** /networks/{networkId}/switch/routing/multicast/rendezvousPoints | List multicast rendezvous points
[**getNetworkSwitchRoutingOspf**](SwitchApi.md#getNetworkSwitchRoutingOspf) | **GET** /networks/{networkId}/switch/routing/ospf | Return layer 3 OSPF routing configuration
[**getNetworkSwitchSettings**](SwitchApi.md#getNetworkSwitchSettings) | **GET** /networks/{networkId}/switch/settings | Returns the switch network settings
[**getNetworkSwitchStack**](SwitchApi.md#getNetworkSwitchStack) | **GET** /networks/{networkId}/switch/stacks/{switchStackId} | Show a switch stack
[**getNetworkSwitchStackRoutingInterface**](SwitchApi.md#getNetworkSwitchStackRoutingInterface) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId} | Return a layer 3 interface from a switch stack
[**getNetworkSwitchStackRoutingInterfaceDhcp**](SwitchApi.md#getNetworkSwitchStackRoutingInterfaceDhcp) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp | Return a layer 3 interface DHCP configuration for a switch stack
[**getNetworkSwitchStackRoutingInterfaces**](SwitchApi.md#getNetworkSwitchStackRoutingInterfaces) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces | List layer 3 interfaces for a switch stack
[**getNetworkSwitchStackRoutingStaticRoute**](SwitchApi.md#getNetworkSwitchStackRoutingStaticRoute) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId} | Return a layer 3 static route for a switch stack
[**getNetworkSwitchStackRoutingStaticRoutes**](SwitchApi.md#getNetworkSwitchStackRoutingStaticRoutes) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes | List layer 3 static routes for a switch stack
[**getNetworkSwitchStacks**](SwitchApi.md#getNetworkSwitchStacks) | **GET** /networks/{networkId}/switch/stacks | List the switch stacks in a network
[**getNetworkSwitchStormControl**](SwitchApi.md#getNetworkSwitchStormControl) | **GET** /networks/{networkId}/switch/stormControl | Return the storm control configuration for a switch network
[**getNetworkSwitchStp**](SwitchApi.md#getNetworkSwitchStp) | **GET** /networks/{networkId}/switch/stp | Returns STP settings
[**getOrganizationConfigTemplateSwitchProfilePort**](SwitchApi.md#getOrganizationConfigTemplateSwitchProfilePort) | **GET** /organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId} | Return a switch profile port
[**getOrganizationConfigTemplateSwitchProfilePorts**](SwitchApi.md#getOrganizationConfigTemplateSwitchProfilePorts) | **GET** /organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports | Return all the ports of a switch profile
[**getOrganizationConfigTemplateSwitchProfiles**](SwitchApi.md#getOrganizationConfigTemplateSwitchProfiles) | **GET** /organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles | List the switch profiles for your switch template configuration
[**removeNetworkSwitchStack**](SwitchApi.md#removeNetworkSwitchStack) | **POST** /networks/{networkId}/switch/stacks/{switchStackId}/remove | Remove a switch from a stack
[**updateDeviceSwitchPort**](SwitchApi.md#updateDeviceSwitchPort) | **PUT** /devices/{serial}/switch/ports/{portId} | Update a switch port
[**updateDeviceSwitchRoutingInterface**](SwitchApi.md#updateDeviceSwitchRoutingInterface) | **PUT** /devices/{serial}/switch/routing/interfaces/{interfaceId} | Update a layer 3 interface for a switch
[**updateDeviceSwitchRoutingInterfaceDhcp**](SwitchApi.md#updateDeviceSwitchRoutingInterfaceDhcp) | **PUT** /devices/{serial}/switch/routing/interfaces/{interfaceId}/dhcp | Update a layer 3 interface DHCP configuration for a switch
[**updateDeviceSwitchRoutingStaticRoute**](SwitchApi.md#updateDeviceSwitchRoutingStaticRoute) | **PUT** /devices/{serial}/switch/routing/staticRoutes/{staticRouteId} | Update a layer 3 static route for a switch
[**updateDeviceSwitchWarmSpare**](SwitchApi.md#updateDeviceSwitchWarmSpare) | **PUT** /devices/{serial}/switch/warmSpare | Update warm spare configuration for a switch. The spare will use the same L3 configuration as the primary. Note that this will irreversibly destroy any existing L3 configuration on the spare.
[**updateNetworkSwitchAccessControlLists**](SwitchApi.md#updateNetworkSwitchAccessControlLists) | **PUT** /networks/{networkId}/switch/accessControlLists | Update the access control lists for a MS network
[**updateNetworkSwitchDhcpServerPolicy**](SwitchApi.md#updateNetworkSwitchDhcpServerPolicy) | **PUT** /networks/{networkId}/switch/dhcpServerPolicy | Update the DHCP server policy
[**updateNetworkSwitchDscpToCosMappings**](SwitchApi.md#updateNetworkSwitchDscpToCosMappings) | **PUT** /networks/{networkId}/switch/dscpToCosMappings | Update the DSCP to CoS mappings
[**updateNetworkSwitchLinkAggregation**](SwitchApi.md#updateNetworkSwitchLinkAggregation) | **PUT** /networks/{networkId}/switch/linkAggregations/{linkAggregationId} | Update a link aggregation group
[**updateNetworkSwitchMtu**](SwitchApi.md#updateNetworkSwitchMtu) | **PUT** /networks/{networkId}/switch/mtu | Update the MTU configuration
[**updateNetworkSwitchPortSchedule**](SwitchApi.md#updateNetworkSwitchPortSchedule) | **PUT** /networks/{networkId}/switch/portSchedules/{portScheduleId} | Update a switch port schedule
[**updateNetworkSwitchQosRule**](SwitchApi.md#updateNetworkSwitchQosRule) | **PUT** /networks/{networkId}/switch/qosRules/{qosRuleId} | Update a quality of service rule
[**updateNetworkSwitchQosRulesOrder**](SwitchApi.md#updateNetworkSwitchQosRulesOrder) | **PUT** /networks/{networkId}/switch/qosRules/order | Update the order in which the rules should be processed by the switch
[**updateNetworkSwitchRoutingMulticast**](SwitchApi.md#updateNetworkSwitchRoutingMulticast) | **PUT** /networks/{networkId}/switch/routing/multicast | Update multicast settings for a network
[**updateNetworkSwitchRoutingMulticastRendezvousPoint**](SwitchApi.md#updateNetworkSwitchRoutingMulticastRendezvousPoint) | **PUT** /networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId} | Update a multicast rendezvous point
[**updateNetworkSwitchRoutingOspf**](SwitchApi.md#updateNetworkSwitchRoutingOspf) | **PUT** /networks/{networkId}/switch/routing/ospf | Update layer 3 OSPF routing configuration
[**updateNetworkSwitchSettings**](SwitchApi.md#updateNetworkSwitchSettings) | **PUT** /networks/{networkId}/switch/settings | Update switch network settings
[**updateNetworkSwitchStackRoutingInterface**](SwitchApi.md#updateNetworkSwitchStackRoutingInterface) | **PUT** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId} | Update a layer 3 interface for a switch stack
[**updateNetworkSwitchStackRoutingInterfaceDhcp**](SwitchApi.md#updateNetworkSwitchStackRoutingInterfaceDhcp) | **PUT** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp | Update a layer 3 interface DHCP configuration for a switch stack
[**updateNetworkSwitchStackRoutingStaticRoute**](SwitchApi.md#updateNetworkSwitchStackRoutingStaticRoute) | **PUT** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId} | Update a layer 3 static route for a switch stack
[**updateNetworkSwitchStormControl**](SwitchApi.md#updateNetworkSwitchStormControl) | **PUT** /networks/{networkId}/switch/stormControl | Update the storm control configuration for a switch network
[**updateNetworkSwitchStp**](SwitchApi.md#updateNetworkSwitchStp) | **PUT** /networks/{networkId}/switch/stp | Updates STP settings
[**updateOrganizationConfigTemplateSwitchProfilePort**](SwitchApi.md#updateOrganizationConfigTemplateSwitchProfilePort) | **PUT** /organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId} | Update a switch profile port


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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

<a name="createNetworkSwitchLinkAggregation"></a>
# **createNetworkSwitchLinkAggregation**
> Object createNetworkSwitchLinkAggregation(networkId, opts)

Create a link aggregation group

Create a link aggregation group

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SwitchApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  'createNetworkSwitchLinkAggregation': new MerakiDashboardApi.CreateNetworkSwitchLinkAggregation() // CreateNetworkSwitchLinkAggregation | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNetworkSwitchLinkAggregation(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **createNetworkSwitchLinkAggregation** | [**CreateNetworkSwitchLinkAggregation**](CreateNetworkSwitchLinkAggregation.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkSwitchPortSchedule"></a>
# **createNetworkSwitchPortSchedule**
> Object createNetworkSwitchPortSchedule(networkId, createNetworkSwitchPortSchedule)

Add a switch port schedule

Add a switch port schedule

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SwitchApi();

var networkId = "networkId_example"; // String | 

var createNetworkSwitchPortSchedule = new MerakiDashboardApi.CreateNetworkSwitchPortSchedule(); // CreateNetworkSwitchPortSchedule | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNetworkSwitchPortSchedule(networkId, createNetworkSwitchPortSchedule, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **createNetworkSwitchPortSchedule** | [**CreateNetworkSwitchPortSchedule**](CreateNetworkSwitchPortSchedule.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkSwitchQosRule"></a>
# **createNetworkSwitchQosRule**
> Object createNetworkSwitchQosRule(networkId, createNetworkSwitchQosRule)

Add a quality of service rule

Add a quality of service rule

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SwitchApi();

var networkId = "networkId_example"; // String | 

var createNetworkSwitchQosRule = new MerakiDashboardApi.CreateNetworkSwitchQosRule(); // CreateNetworkSwitchQosRule | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNetworkSwitchQosRule(networkId, createNetworkSwitchQosRule, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **createNetworkSwitchQosRule** | [**CreateNetworkSwitchQosRule**](CreateNetworkSwitchQosRule.md)|  | 

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

<a name="deleteNetworkSwitchLinkAggregation"></a>
# **deleteNetworkSwitchLinkAggregation**
> deleteNetworkSwitchLinkAggregation(networkId, linkAggregationId)

Split a link aggregation group into separate ports

Split a link aggregation group into separate ports

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SwitchApi();

var networkId = "networkId_example"; // String | 

var linkAggregationId = "linkAggregationId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteNetworkSwitchLinkAggregation(networkId, linkAggregationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **linkAggregationId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNetworkSwitchPortSchedule"></a>
# **deleteNetworkSwitchPortSchedule**
> deleteNetworkSwitchPortSchedule(networkId, portScheduleId)

Delete a switch port schedule

Delete a switch port schedule

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SwitchApi();

var networkId = "networkId_example"; // String | 

var portScheduleId = "portScheduleId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteNetworkSwitchPortSchedule(networkId, portScheduleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **portScheduleId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNetworkSwitchQosRule"></a>
# **deleteNetworkSwitchQosRule**
> deleteNetworkSwitchQosRule(networkId, qosRuleId)

Delete a quality of service rule

Delete a quality of service rule

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SwitchApi();

var networkId = "networkId_example"; // String | 

var qosRuleId = "qosRuleId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteNetworkSwitchQosRule(networkId, qosRuleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **qosRuleId** | **String**|  | 

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

<a name="getDeviceSwitchWarmSpare"></a>
# **getDeviceSwitchWarmSpare**
> Object getDeviceSwitchWarmSpare(serial)

Return warm spare configuration for a switch

Return warm spare configuration for a switch

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SwitchApi();

var serial = "serial_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeviceSwitchWarmSpare(serial, callback);
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

<a name="getNetworkSwitchAccessControlLists"></a>
# **getNetworkSwitchAccessControlLists**
> Object getNetworkSwitchAccessControlLists(networkId)

Return the access control lists for a MS network

Return the access control lists for a MS network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SwitchApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSwitchAccessControlLists(networkId, callback);
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

<a name="getNetworkSwitchDhcpServerPolicy"></a>
# **getNetworkSwitchDhcpServerPolicy**
> Object getNetworkSwitchDhcpServerPolicy(networkId)

Return the DHCP server policy

Return the DHCP server policy

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SwitchApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSwitchDhcpServerPolicy(networkId, callback);
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

<a name="getNetworkSwitchDscpToCosMappings"></a>
# **getNetworkSwitchDscpToCosMappings**
> Object getNetworkSwitchDscpToCosMappings(networkId)

Return the DSCP to CoS mappings

Return the DSCP to CoS mappings

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SwitchApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSwitchDscpToCosMappings(networkId, callback);
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

<a name="getNetworkSwitchLinkAggregations"></a>
# **getNetworkSwitchLinkAggregations**
> Object getNetworkSwitchLinkAggregations(networkId)

List link aggregation groups

List link aggregation groups

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SwitchApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSwitchLinkAggregations(networkId, callback);
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

<a name="getNetworkSwitchMtu"></a>
# **getNetworkSwitchMtu**
> Object getNetworkSwitchMtu(networkId)

Return the MTU configuration

Return the MTU configuration

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SwitchApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSwitchMtu(networkId, callback);
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

<a name="getNetworkSwitchPortSchedules"></a>
# **getNetworkSwitchPortSchedules**
> Object getNetworkSwitchPortSchedules(networkId)

List switch port schedules

List switch port schedules

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SwitchApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSwitchPortSchedules(networkId, callback);
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

<a name="getNetworkSwitchQosRule"></a>
# **getNetworkSwitchQosRule**
> Object getNetworkSwitchQosRule(networkId, qosRuleId)

Return a quality of service rule

Return a quality of service rule

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SwitchApi();

var networkId = "networkId_example"; // String | 

var qosRuleId = "qosRuleId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSwitchQosRule(networkId, qosRuleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **qosRuleId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkSwitchQosRules"></a>
# **getNetworkSwitchQosRules**
> Object getNetworkSwitchQosRules(networkId)

List quality of service rules

List quality of service rules

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SwitchApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSwitchQosRules(networkId, callback);
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

<a name="getNetworkSwitchQosRulesOrder"></a>
# **getNetworkSwitchQosRulesOrder**
> Object getNetworkSwitchQosRulesOrder(networkId)

Return the quality of service rule IDs by order in which they will be processed by the switch

Return the quality of service rule IDs by order in which they will be processed by the switch

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SwitchApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSwitchQosRulesOrder(networkId, callback);
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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

<a name="getNetworkSwitchSettings"></a>
# **getNetworkSwitchSettings**
> Object getNetworkSwitchSettings(networkId)

Returns the switch network settings

Returns the switch network settings

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SwitchApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSwitchSettings(networkId, callback);
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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

<a name="getNetworkSwitchStormControl"></a>
# **getNetworkSwitchStormControl**
> Object getNetworkSwitchStormControl(networkId)

Return the storm control configuration for a switch network

Return the storm control configuration for a switch network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SwitchApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSwitchStormControl(networkId, callback);
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

<a name="getNetworkSwitchStp"></a>
# **getNetworkSwitchStp**
> Object getNetworkSwitchStp(networkId)

Returns STP settings

Returns STP settings

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SwitchApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSwitchStp(networkId, callback);
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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

<a name="getOrganizationConfigTemplateSwitchProfiles"></a>
# **getOrganizationConfigTemplateSwitchProfiles**
> Object getOrganizationConfigTemplateSwitchProfiles(organizationId, configTemplateId)

List the switch profiles for your switch template configuration

List the switch profiles for your switch template configuration

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SwitchApi();

var organizationId = "organizationId_example"; // String | 

var configTemplateId = "configTemplateId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationConfigTemplateSwitchProfiles(organizationId, configTemplateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **configTemplateId** | **String**|  | 

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

<a name="updateDeviceSwitchWarmSpare"></a>
# **updateDeviceSwitchWarmSpare**
> Object updateDeviceSwitchWarmSpare(serial, updateDeviceSwitchWarmSpare)

Update warm spare configuration for a switch. The spare will use the same L3 configuration as the primary. Note that this will irreversibly destroy any existing L3 configuration on the spare.

Update warm spare configuration for a switch. The spare will use the same L3 configuration as the primary. Note that this will irreversibly destroy any existing L3 configuration on the spare.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SwitchApi();

var serial = "serial_example"; // String | 

var updateDeviceSwitchWarmSpare = new MerakiDashboardApi.UpdateDeviceSwitchWarmSpare(); // UpdateDeviceSwitchWarmSpare | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDeviceSwitchWarmSpare(serial, updateDeviceSwitchWarmSpare, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **updateDeviceSwitchWarmSpare** | [**UpdateDeviceSwitchWarmSpare**](UpdateDeviceSwitchWarmSpare.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSwitchAccessControlLists"></a>
# **updateNetworkSwitchAccessControlLists**
> Object updateNetworkSwitchAccessControlLists(networkId, updateNetworkSwitchAccessControlLists)

Update the access control lists for a MS network

Update the access control lists for a MS network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SwitchApi();

var networkId = "networkId_example"; // String | 

var updateNetworkSwitchAccessControlLists = new MerakiDashboardApi.UpdateNetworkSwitchAccessControlLists(); // UpdateNetworkSwitchAccessControlLists | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkSwitchAccessControlLists(networkId, updateNetworkSwitchAccessControlLists, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **updateNetworkSwitchAccessControlLists** | [**UpdateNetworkSwitchAccessControlLists**](UpdateNetworkSwitchAccessControlLists.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSwitchDhcpServerPolicy"></a>
# **updateNetworkSwitchDhcpServerPolicy**
> Object updateNetworkSwitchDhcpServerPolicy(networkId, opts)

Update the DHCP server policy

Update the DHCP server policy

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SwitchApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  'updateNetworkSwitchDhcpServerPolicy': new MerakiDashboardApi.UpdateNetworkSwitchDhcpServerPolicy() // UpdateNetworkSwitchDhcpServerPolicy | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkSwitchDhcpServerPolicy(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **updateNetworkSwitchDhcpServerPolicy** | [**UpdateNetworkSwitchDhcpServerPolicy**](UpdateNetworkSwitchDhcpServerPolicy.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSwitchDscpToCosMappings"></a>
# **updateNetworkSwitchDscpToCosMappings**
> Object updateNetworkSwitchDscpToCosMappings(networkId, updateNetworkSwitchDscpToCosMappings)

Update the DSCP to CoS mappings

Update the DSCP to CoS mappings

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SwitchApi();

var networkId = "networkId_example"; // String | 

var updateNetworkSwitchDscpToCosMappings = new MerakiDashboardApi.UpdateNetworkSwitchDscpToCosMappings(); // UpdateNetworkSwitchDscpToCosMappings | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkSwitchDscpToCosMappings(networkId, updateNetworkSwitchDscpToCosMappings, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **updateNetworkSwitchDscpToCosMappings** | [**UpdateNetworkSwitchDscpToCosMappings**](UpdateNetworkSwitchDscpToCosMappings.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSwitchLinkAggregation"></a>
# **updateNetworkSwitchLinkAggregation**
> Object updateNetworkSwitchLinkAggregation(networkId, linkAggregationId, opts)

Update a link aggregation group

Update a link aggregation group

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SwitchApi();

var networkId = "networkId_example"; // String | 

var linkAggregationId = "linkAggregationId_example"; // String | 

var opts = { 
  'updateNetworkSwitchLinkAggregation': new MerakiDashboardApi.UpdateNetworkSwitchLinkAggregation() // UpdateNetworkSwitchLinkAggregation | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkSwitchLinkAggregation(networkId, linkAggregationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **linkAggregationId** | **String**|  | 
 **updateNetworkSwitchLinkAggregation** | [**UpdateNetworkSwitchLinkAggregation**](UpdateNetworkSwitchLinkAggregation.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSwitchMtu"></a>
# **updateNetworkSwitchMtu**
> Object updateNetworkSwitchMtu(networkId, opts)

Update the MTU configuration

Update the MTU configuration

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SwitchApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  'updateNetworkSwitchMtu': new MerakiDashboardApi.UpdateNetworkSwitchMtu() // UpdateNetworkSwitchMtu | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkSwitchMtu(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **updateNetworkSwitchMtu** | [**UpdateNetworkSwitchMtu**](UpdateNetworkSwitchMtu.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSwitchPortSchedule"></a>
# **updateNetworkSwitchPortSchedule**
> Object updateNetworkSwitchPortSchedule(networkId, portScheduleId, opts)

Update a switch port schedule

Update a switch port schedule

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SwitchApi();

var networkId = "networkId_example"; // String | 

var portScheduleId = "portScheduleId_example"; // String | 

var opts = { 
  'updateNetworkSwitchPortSchedule': new MerakiDashboardApi.UpdateNetworkSwitchPortSchedule() // UpdateNetworkSwitchPortSchedule | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkSwitchPortSchedule(networkId, portScheduleId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **portScheduleId** | **String**|  | 
 **updateNetworkSwitchPortSchedule** | [**UpdateNetworkSwitchPortSchedule**](UpdateNetworkSwitchPortSchedule.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSwitchQosRule"></a>
# **updateNetworkSwitchQosRule**
> Object updateNetworkSwitchQosRule(networkId, qosRuleId, opts)

Update a quality of service rule

Update a quality of service rule

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SwitchApi();

var networkId = "networkId_example"; // String | 

var qosRuleId = "qosRuleId_example"; // String | 

var opts = { 
  'updateNetworkSwitchQosRule': new MerakiDashboardApi.UpdateNetworkSwitchQosRule() // UpdateNetworkSwitchQosRule | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkSwitchQosRule(networkId, qosRuleId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **qosRuleId** | **String**|  | 
 **updateNetworkSwitchQosRule** | [**UpdateNetworkSwitchQosRule**](UpdateNetworkSwitchQosRule.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSwitchQosRulesOrder"></a>
# **updateNetworkSwitchQosRulesOrder**
> Object updateNetworkSwitchQosRulesOrder(networkId, updateNetworkSwitchQosRulesOrder)

Update the order in which the rules should be processed by the switch

Update the order in which the rules should be processed by the switch

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SwitchApi();

var networkId = "networkId_example"; // String | 

var updateNetworkSwitchQosRulesOrder = new MerakiDashboardApi.UpdateNetworkSwitchQosRulesOrder(); // UpdateNetworkSwitchQosRulesOrder | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkSwitchQosRulesOrder(networkId, updateNetworkSwitchQosRulesOrder, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **updateNetworkSwitchQosRulesOrder** | [**UpdateNetworkSwitchQosRulesOrder**](UpdateNetworkSwitchQosRulesOrder.md)|  | 

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

<a name="updateNetworkSwitchSettings"></a>
# **updateNetworkSwitchSettings**
> Object updateNetworkSwitchSettings(networkId, opts)

Update switch network settings

Update switch network settings

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SwitchApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  'updateNetworkSwitchSettings': new MerakiDashboardApi.UpdateNetworkSwitchSettings() // UpdateNetworkSwitchSettings | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkSwitchSettings(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **updateNetworkSwitchSettings** | [**UpdateNetworkSwitchSettings**](UpdateNetworkSwitchSettings.md)|  | [optional] 

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

<a name="updateNetworkSwitchStormControl"></a>
# **updateNetworkSwitchStormControl**
> Object updateNetworkSwitchStormControl(networkId, opts)

Update the storm control configuration for a switch network

Update the storm control configuration for a switch network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SwitchApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  'updateNetworkSwitchStormControl': new MerakiDashboardApi.UpdateNetworkSwitchStormControl() // UpdateNetworkSwitchStormControl | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkSwitchStormControl(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **updateNetworkSwitchStormControl** | [**UpdateNetworkSwitchStormControl**](UpdateNetworkSwitchStormControl.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSwitchStp"></a>
# **updateNetworkSwitchStp**
> Object updateNetworkSwitchStp(networkId, opts)

Updates STP settings

Updates STP settings

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SwitchApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  'updateNetworkSwitchStp': new MerakiDashboardApi.UpdateNetworkSwitchStp() // UpdateNetworkSwitchStp | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkSwitchStp(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **updateNetworkSwitchStp** | [**UpdateNetworkSwitchStp**](UpdateNetworkSwitchStp.md)|  | [optional] 

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

var apiInstance = new MerakiDashboardApi.SwitchApi();

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

