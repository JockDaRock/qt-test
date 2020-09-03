# MerakiDashboardApi.MonitorApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateDeviceCameraSnapshot**](MonitorApi.md#generateDeviceCameraSnapshot) | **POST** /devices/{serial}/camera/generateSnapshot | Generate a snapshot of what the camera sees at the specified time and return a link to that image.
[**getDeviceApplianceDhcpSubnets**](MonitorApi.md#getDeviceApplianceDhcpSubnets) | **GET** /devices/{serial}/appliance/dhcp/subnets | Return the DHCP subnet information for an appliance
[**getDeviceAppliancePerformance**](MonitorApi.md#getDeviceAppliancePerformance) | **GET** /devices/{serial}/appliance/performance | Return the performance score for a single device. Only primary MX devices supported. If no data is available, a 204 error code is returned.
[**getDeviceCameraAnalyticsLive**](MonitorApi.md#getDeviceCameraAnalyticsLive) | **GET** /devices/{serial}/camera/analytics/live | Returns live state from camera of analytics zones
[**getDeviceCameraAnalyticsOverview**](MonitorApi.md#getDeviceCameraAnalyticsOverview) | **GET** /devices/{serial}/camera/analytics/overview | Returns an overview of aggregate analytics data for a timespan
[**getDeviceCameraAnalyticsRecent**](MonitorApi.md#getDeviceCameraAnalyticsRecent) | **GET** /devices/{serial}/camera/analytics/recent | Returns most recent record for analytics zones
[**getDeviceCameraAnalyticsZoneHistory**](MonitorApi.md#getDeviceCameraAnalyticsZoneHistory) | **GET** /devices/{serial}/camera/analytics/zones/{zoneId}/history | Return historical records for analytic zones
[**getDeviceCameraAnalyticsZones**](MonitorApi.md#getDeviceCameraAnalyticsZones) | **GET** /devices/{serial}/camera/analytics/zones | Returns all configured analytic zones for this camera
[**getDeviceClients**](MonitorApi.md#getDeviceClients) | **GET** /devices/{serial}/clients | List the clients of a device, up to a maximum of a month ago. The usage of each client is returned in kilobytes. If the device is a switch, the switchport is returned; otherwise the switchport field is null.
[**getDeviceLldpCdp**](MonitorApi.md#getDeviceLldpCdp) | **GET** /devices/{serial}/lldpCdp | List LLDP and CDP information for a device
[**getDeviceLossAndLatencyHistory**](MonitorApi.md#getDeviceLossAndLatencyHistory) | **GET** /devices/{serial}/lossAndLatencyHistory | Get the uplink loss percentage and latency in milliseconds for a wired network device.
[**getDeviceSwitchPortsStatuses**](MonitorApi.md#getDeviceSwitchPortsStatuses) | **GET** /devices/{serial}/switch/ports/statuses | Return the status for all the ports of a switch
[**getDeviceSwitchPortsStatusesPackets**](MonitorApi.md#getDeviceSwitchPortsStatusesPackets) | **GET** /devices/{serial}/switch/ports/statuses/packets | Return the packet counters for all the ports of a switch
[**getDeviceWirelessConnectionStats**](MonitorApi.md#getDeviceWirelessConnectionStats) | **GET** /devices/{serial}/wireless/connectionStats | Aggregated connectivity info for a given AP on this network
[**getDeviceWirelessLatencyStats**](MonitorApi.md#getDeviceWirelessLatencyStats) | **GET** /devices/{serial}/wireless/latencyStats | Aggregated latency info for a given AP on this network
[**getDeviceWirelessStatus**](MonitorApi.md#getDeviceWirelessStatus) | **GET** /devices/{serial}/wireless/status | Return the SSID statuses of an access point
[**getNetworkApplianceClientSecurityEvents**](MonitorApi.md#getNetworkApplianceClientSecurityEvents) | **GET** /networks/{networkId}/appliance/clients/{clientId}/security/events | List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
[**getNetworkApplianceSecurityEvents**](MonitorApi.md#getNetworkApplianceSecurityEvents) | **GET** /networks/{networkId}/appliance/security/events | List the security events for a network
[**getNetworkBluetoothClient**](MonitorApi.md#getNetworkBluetoothClient) | **GET** /networks/{networkId}/bluetoothClients/{bluetoothClientId} | Return a Bluetooth client. Bluetooth clients can be identified by their ID or their MAC.
[**getNetworkBluetoothClients**](MonitorApi.md#getNetworkBluetoothClients) | **GET** /networks/{networkId}/bluetoothClients | List the Bluetooth clients seen by APs in this network
[**getNetworkClient**](MonitorApi.md#getNetworkClient) | **GET** /networks/{networkId}/clients/{clientId} | Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
[**getNetworkClientTrafficHistory**](MonitorApi.md#getNetworkClientTrafficHistory) | **GET** /networks/{networkId}/clients/{clientId}/trafficHistory | Return the client&#x27;s network traffic data over time. Usage data is in kilobytes. This endpoint requires detailed traffic analysis to be enabled on the Network-wide &gt; General page. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
[**getNetworkClientUsageHistory**](MonitorApi.md#getNetworkClientUsageHistory) | **GET** /networks/{networkId}/clients/{clientId}/usageHistory | Return the client&#x27;s daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
[**getNetworkClients**](MonitorApi.md#getNetworkClients) | **GET** /networks/{networkId}/clients | List the clients that have used this network in the timespan
[**getNetworkEvents**](MonitorApi.md#getNetworkEvents) | **GET** /networks/{networkId}/events | List the events for the network
[**getNetworkEventsEventTypes**](MonitorApi.md#getNetworkEventsEventTypes) | **GET** /networks/{networkId}/events/eventTypes | List the event type to human-readable description
[**getNetworkSmDeviceCellularUsageHistory**](MonitorApi.md#getNetworkSmDeviceCellularUsageHistory) | **GET** /networks/{networkId}/sm/devices/{deviceId}/cellularUsageHistory | Return the client&#x27;s daily cellular data usage history. Usage data is in kilobytes.
[**getNetworkSmDeviceConnectivity**](MonitorApi.md#getNetworkSmDeviceConnectivity) | **GET** /networks/{networkId}/sm/devices/{deviceId}/connectivity | Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
[**getNetworkSmDeviceDesktopLogs**](MonitorApi.md#getNetworkSmDeviceDesktopLogs) | **GET** /networks/{networkId}/sm/devices/{deviceId}/desktopLogs | Return historical records of various Systems Manager network connection details for desktop devices.
[**getNetworkSmDeviceDeviceCommandLogs**](MonitorApi.md#getNetworkSmDeviceDeviceCommandLogs) | **GET** /networks/{networkId}/sm/devices/{deviceId}/deviceCommandLogs |     Return historical records of commands sent to Systems Manager devices.     &lt;p&gt;Note that this will include the name of the Dashboard user who initiated the command if it was generated     by a Dashboard admin rather than the automatic behavior of the system; you may wish to filter this out     of any reports.&lt;/p&gt; 
[**getNetworkSmDevicePerformanceHistory**](MonitorApi.md#getNetworkSmDevicePerformanceHistory) | **GET** /networks/{networkId}/sm/devices/{deviceId}/performanceHistory | Return historical records of various Systems Manager client metrics for desktop devices.
[**getNetworkSplashLoginAttempts**](MonitorApi.md#getNetworkSplashLoginAttempts) | **GET** /networks/{networkId}/splashLoginAttempts | List the splash login attempts for a network
[**getNetworkTraffic**](MonitorApi.md#getNetworkTraffic) | **GET** /networks/{networkId}/traffic |     The traffic analysis data for this network.     &lt;a href&#x3D;\&quot;https://documentation.meraki.com/MR/Monitoring_and_Reporting/Hostname_Visibility\&quot;&gt;Traffic Analysis with Hostname Visibility&lt;/a&gt; must be enabled on the network. 
[**getNetworkWirelessAirMarshal**](MonitorApi.md#getNetworkWirelessAirMarshal) | **GET** /networks/{networkId}/wireless/airMarshal | List Air Marshal scan results from a network
[**getNetworkWirelessChannelUtilizationHistory**](MonitorApi.md#getNetworkWirelessChannelUtilizationHistory) | **GET** /networks/{networkId}/wireless/channelUtilizationHistory | Return AP channel utilization over time for a device or network client
[**getNetworkWirelessClientConnectionStats**](MonitorApi.md#getNetworkWirelessClientConnectionStats) | **GET** /networks/{networkId}/wireless/clients/{clientId}/connectionStats | Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.
[**getNetworkWirelessClientConnectivityEvents**](MonitorApi.md#getNetworkWirelessClientConnectivityEvents) | **GET** /networks/{networkId}/wireless/clients/{clientId}/connectivityEvents | List the wireless connectivity events for a client within a network in the timespan.
[**getNetworkWirelessClientCountHistory**](MonitorApi.md#getNetworkWirelessClientCountHistory) | **GET** /networks/{networkId}/wireless/clientCountHistory | Return wireless client counts over time for a network, device, or network client
[**getNetworkWirelessClientLatencyHistory**](MonitorApi.md#getNetworkWirelessClientLatencyHistory) | **GET** /networks/{networkId}/wireless/clients/{clientId}/latencyHistory | Return the latency history for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.
[**getNetworkWirelessClientLatencyStats**](MonitorApi.md#getNetworkWirelessClientLatencyStats) | **GET** /networks/{networkId}/wireless/clients/{clientId}/latencyStats | Aggregated latency info for a given client on this network. Clients are identified by their MAC.
[**getNetworkWirelessClientsConnectionStats**](MonitorApi.md#getNetworkWirelessClientsConnectionStats) | **GET** /networks/{networkId}/wireless/clients/connectionStats | Aggregated connectivity info for this network, grouped by clients
[**getNetworkWirelessClientsLatencyStats**](MonitorApi.md#getNetworkWirelessClientsLatencyStats) | **GET** /networks/{networkId}/wireless/clients/latencyStats | Aggregated latency info for this network, grouped by clients
[**getNetworkWirelessConnectionStats**](MonitorApi.md#getNetworkWirelessConnectionStats) | **GET** /networks/{networkId}/wireless/connectionStats | Aggregated connectivity info for this network
[**getNetworkWirelessDataRateHistory**](MonitorApi.md#getNetworkWirelessDataRateHistory) | **GET** /networks/{networkId}/wireless/dataRateHistory | Return PHY data rates over time for a network, device, or network client
[**getNetworkWirelessDevicesConnectionStats**](MonitorApi.md#getNetworkWirelessDevicesConnectionStats) | **GET** /networks/{networkId}/wireless/devices/connectionStats | Aggregated connectivity info for this network, grouped by node
[**getNetworkWirelessDevicesLatencyStats**](MonitorApi.md#getNetworkWirelessDevicesLatencyStats) | **GET** /networks/{networkId}/wireless/devices/latencyStats | Aggregated latency info for this network, grouped by node
[**getNetworkWirelessFailedConnections**](MonitorApi.md#getNetworkWirelessFailedConnections) | **GET** /networks/{networkId}/wireless/failedConnections | List of all failed client connection events on this network in a given time range
[**getNetworkWirelessLatencyHistory**](MonitorApi.md#getNetworkWirelessLatencyHistory) | **GET** /networks/{networkId}/wireless/latencyHistory | Return average wireless latency over time for a network, device, or network client
[**getNetworkWirelessLatencyStats**](MonitorApi.md#getNetworkWirelessLatencyStats) | **GET** /networks/{networkId}/wireless/latencyStats | Aggregated latency info for this network
[**getNetworkWirelessMeshStatuses**](MonitorApi.md#getNetworkWirelessMeshStatuses) | **GET** /networks/{networkId}/wireless/meshStatuses | List wireless mesh statuses for repeaters
[**getNetworkWirelessSignalQualityHistory**](MonitorApi.md#getNetworkWirelessSignalQualityHistory) | **GET** /networks/{networkId}/wireless/signalQualityHistory | Return signal quality (SNR/RSSI) over time for a device or network client
[**getNetworkWirelessUsageHistory**](MonitorApi.md#getNetworkWirelessUsageHistory) | **GET** /networks/{networkId}/wireless/usageHistory | Return AP usage over time for a device or network client
[**getOrganizationApiRequests**](MonitorApi.md#getOrganizationApiRequests) | **GET** /organizations/{organizationId}/apiRequests | List the API requests made by an organization
[**getOrganizationApiRequestsOverview**](MonitorApi.md#getOrganizationApiRequestsOverview) | **GET** /organizations/{organizationId}/apiRequests/overview | Return an aggregated overview of API requests data
[**getOrganizationApplianceSecurityEvents**](MonitorApi.md#getOrganizationApplianceSecurityEvents) | **GET** /organizations/{organizationId}/appliance/security/events | List the security events for an organization
[**getOrganizationApplianceUplinkStatuses**](MonitorApi.md#getOrganizationApplianceUplinkStatuses) | **GET** /organizations/{organizationId}/appliance/uplink/statuses | List the uplink status of every Meraki MX and Z series appliances in the organization
[**getOrganizationApplianceVpnStats**](MonitorApi.md#getOrganizationApplianceVpnStats) | **GET** /organizations/{organizationId}/appliance/vpn/stats | Show VPN history stat for networks in an organization
[**getOrganizationApplianceVpnStatuses**](MonitorApi.md#getOrganizationApplianceVpnStatuses) | **GET** /organizations/{organizationId}/appliance/vpn/statuses | Show VPN status for networks in an organization
[**getOrganizationConfigurationChanges**](MonitorApi.md#getOrganizationConfigurationChanges) | **GET** /organizations/{organizationId}/configurationChanges | View the Change Log for your organization
[**getOrganizationDevicesStatuses**](MonitorApi.md#getOrganizationDevicesStatuses) | **GET** /organizations/{organizationId}/devices/statuses | List the status of every Meraki device in the organization
[**getOrganizationDevicesUplinksLossAndLatency**](MonitorApi.md#getOrganizationDevicesUplinksLossAndLatency) | **GET** /organizations/{organizationId}/devices/uplinksLossAndLatency | Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
[**getOrganizationLicensesOverview**](MonitorApi.md#getOrganizationLicensesOverview) | **GET** /organizations/{organizationId}/licenses/overview | Return an overview of the license state for an organization
[**getOrganizationOpenapiSpec**](MonitorApi.md#getOrganizationOpenapiSpec) | **GET** /organizations/{organizationId}/openapiSpec | Return the OpenAPI 2.0 Specification of the organization&#x27;s API documentation in JSON
[**getOrganizationWebhooksLogs**](MonitorApi.md#getOrganizationWebhooksLogs) | **GET** /organizations/{organizationId}/webhooks/logs | Return the log of webhook POSTs sent

<a name="generateDeviceCameraSnapshot"></a>
# **generateDeviceCameraSnapshot**
> Object generateDeviceCameraSnapshot(serial, opts)

Generate a snapshot of what the camera sees at the specified time and return a link to that image.

Generate a snapshot of what the camera sees at the specified time and return a link to that image.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let serial = "serial_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body2() // Body2 | 
};
apiInstance.generateDeviceCameraSnapshot(serial, opts, (error, data, response) => {
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
 **serial** | **String**|  | 
 **body** | [**Body2**](Body2.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDeviceApplianceDhcpSubnets"></a>
# **getDeviceApplianceDhcpSubnets**
> Object getDeviceApplianceDhcpSubnets(serial)

Return the DHCP subnet information for an appliance

Return the DHCP subnet information for an appliance

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let serial = "serial_example"; // String | 

apiInstance.getDeviceApplianceDhcpSubnets(serial, (error, data, response) => {
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
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceAppliancePerformance"></a>
# **getDeviceAppliancePerformance**
> Object getDeviceAppliancePerformance(serial)

Return the performance score for a single device. Only primary MX devices supported. If no data is available, a 204 error code is returned.

Return the performance score for a single device. Only primary MX devices supported. If no data is available, a 204 error code is returned.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let serial = "serial_example"; // String | 

apiInstance.getDeviceAppliancePerformance(serial, (error, data, response) => {
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
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceCameraAnalyticsLive"></a>
# **getDeviceCameraAnalyticsLive**
> Object getDeviceCameraAnalyticsLive(serial)

Returns live state from camera of analytics zones

Returns live state from camera of analytics zones

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let serial = "serial_example"; // String | 

apiInstance.getDeviceCameraAnalyticsLive(serial, (error, data, response) => {
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
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceCameraAnalyticsOverview"></a>
# **getDeviceCameraAnalyticsOverview**
> Object getDeviceCameraAnalyticsOverview(serial, opts)

Returns an overview of aggregate analytics data for a timespan

Returns an overview of aggregate analytics data for a timespan

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let serial = "serial_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 365 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. The default is 1 hour.
  'objectType': "objectType_example" // String | [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle].
};
apiInstance.getDeviceCameraAnalyticsOverview(serial, opts, (error, data, response) => {
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
 **serial** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 365 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 7 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. The default is 1 hour. | [optional] 
 **objectType** | **String**| [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle]. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceCameraAnalyticsRecent"></a>
# **getDeviceCameraAnalyticsRecent**
> Object getDeviceCameraAnalyticsRecent(serial, opts)

Returns most recent record for analytics zones

Returns most recent record for analytics zones

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let serial = "serial_example"; // String | 
let opts = { 
  'objectType': "objectType_example" // String | [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle].
};
apiInstance.getDeviceCameraAnalyticsRecent(serial, opts, (error, data, response) => {
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
 **serial** | **String**|  | 
 **objectType** | **String**| [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle]. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceCameraAnalyticsZoneHistory"></a>
# **getDeviceCameraAnalyticsZoneHistory**
> Object getDeviceCameraAnalyticsZoneHistory(serial, zoneId, opts)

Return historical records for analytic zones

Return historical records for analytic zones

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let serial = "serial_example"; // String | 
let zoneId = "zoneId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 365 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 14 hours after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 14 hours. The default is 1 hour.
  'resolution': 56, // Number | The time resolution in seconds for returned data. The valid resolutions are: 60. The default is 60.
  'objectType': "objectType_example" // String | [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle].
};
apiInstance.getDeviceCameraAnalyticsZoneHistory(serial, zoneId, opts, (error, data, response) => {
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
 **serial** | **String**|  | 
 **zoneId** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 365 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 14 hours after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 14 hours. The default is 1 hour. | [optional] 
 **resolution** | **Number**| The time resolution in seconds for returned data. The valid resolutions are: 60. The default is 60. | [optional] 
 **objectType** | **String**| [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle]. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceCameraAnalyticsZones"></a>
# **getDeviceCameraAnalyticsZones**
> Object getDeviceCameraAnalyticsZones(serial)

Returns all configured analytic zones for this camera

Returns all configured analytic zones for this camera

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let serial = "serial_example"; // String | 

apiInstance.getDeviceCameraAnalyticsZones(serial, (error, data, response) => {
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
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceClients"></a>
# **getDeviceClients**
> Object getDeviceClients(serial, opts)

List the clients of a device, up to a maximum of a month ago. The usage of each client is returned in kilobytes. If the device is a switch, the switchport is returned; otherwise the switchport field is null.

List the clients of a device, up to a maximum of a month ago. The usage of each client is returned in kilobytes. If the device is a switch, the switchport is returned; otherwise the switchport field is null.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let serial = "serial_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  'timespan': 3.4 // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.
};
apiInstance.getDeviceClients(serial, opts, (error, data, response) => {
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
 **serial** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceLldpCdp"></a>
# **getDeviceLldpCdp**
> Object getDeviceLldpCdp(serial)

List LLDP and CDP information for a device

List LLDP and CDP information for a device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let serial = "serial_example"; // String | 

apiInstance.getDeviceLldpCdp(serial, (error, data, response) => {
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
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceLossAndLatencyHistory"></a>
# **getDeviceLossAndLatencyHistory**
> Object getDeviceLossAndLatencyHistory(serial, ip, opts)

Get the uplink loss percentage and latency in milliseconds for a wired network device.

Get the uplink loss percentage and latency in milliseconds for a wired network device.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let serial = "serial_example"; // String | 
let ip = "ip_example"; // String | The destination IP used to obtain the requested stats. This is required.
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 365 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.
  'resolution': 56, // Number | The time resolution in seconds for returned data. The valid resolutions are: 60, 600, 3600, 86400. The default is 60.
  'uplink': "uplink_example" // String | The WAN uplink used to obtain the requested stats. Valid uplinks are wan1, wan2, cellular. The default is wan1.
};
apiInstance.getDeviceLossAndLatencyHistory(serial, ip, opts, (error, data, response) => {
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
 **serial** | **String**|  | 
 **ip** | **String**| The destination IP used to obtain the requested stats. This is required. | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 365 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 
 **resolution** | **Number**| The time resolution in seconds for returned data. The valid resolutions are: 60, 600, 3600, 86400. The default is 60. | [optional] 
 **uplink** | **String**| The WAN uplink used to obtain the requested stats. Valid uplinks are wan1, wan2, cellular. The default is wan1. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceSwitchPortsStatuses"></a>
# **getDeviceSwitchPortsStatuses**
> Object getDeviceSwitchPortsStatuses(serial, opts)

Return the status for all the ports of a switch

Return the status for all the ports of a switch

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let serial = "serial_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  'timespan': 3.4 // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.
};
apiInstance.getDeviceSwitchPortsStatuses(serial, opts, (error, data, response) => {
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
 **serial** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceSwitchPortsStatusesPackets"></a>
# **getDeviceSwitchPortsStatusesPackets**
> Object getDeviceSwitchPortsStatusesPackets(serial, opts)

Return the packet counters for all the ports of a switch

Return the packet counters for all the ports of a switch

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let serial = "serial_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 1 day from today.
  'timespan': 3.4 // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 1 day. The default is 1 day.
};
apiInstance.getDeviceSwitchPortsStatusesPackets(serial, opts, (error, data, response) => {
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
 **serial** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 1 day from today. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 1 day. The default is 1 day. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceWirelessConnectionStats"></a>
# **getDeviceWirelessConnectionStats**
> Object getDeviceWirelessConnectionStats(serial, opts)

Aggregated connectivity info for a given AP on this network

Aggregated connectivity info for a given AP on this network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let serial = "serial_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
  'band': "band_example", // String | Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
  'ssid': 56, // Number | Filter results by SSID
  'vlan': 56, // Number | Filter results by VLAN
  'apTag': "apTag_example" // String | Filter results by AP Tag
};
apiInstance.getDeviceWirelessConnectionStats(serial, opts, (error, data, response) => {
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
 **serial** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 180 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 7 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. | [optional] 
 **band** | **String**| Filter results by band (either &#x27;2.4&#x27; or &#x27;5&#x27;). Note that data prior to February 2020 will not have band information. | [optional] 
 **ssid** | **Number**| Filter results by SSID | [optional] 
 **vlan** | **Number**| Filter results by VLAN | [optional] 
 **apTag** | **String**| Filter results by AP Tag | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceWirelessLatencyStats"></a>
# **getDeviceWirelessLatencyStats**
> Object getDeviceWirelessLatencyStats(serial, opts)

Aggregated latency info for a given AP on this network

Aggregated latency info for a given AP on this network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let serial = "serial_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
  'band': "band_example", // String | Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
  'ssid': 56, // Number | Filter results by SSID
  'vlan': 56, // Number | Filter results by VLAN
  'apTag': "apTag_example", // String | Filter results by AP Tag
  'fields': "fields_example" // String | Partial selection: If present, this call will return only the selected fields of [\"rawDistribution\", \"avg\"]. All fields will be returned by default. Selected fields must be entered as a comma separated string.
};
apiInstance.getDeviceWirelessLatencyStats(serial, opts, (error, data, response) => {
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
 **serial** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 180 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 7 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. | [optional] 
 **band** | **String**| Filter results by band (either &#x27;2.4&#x27; or &#x27;5&#x27;). Note that data prior to February 2020 will not have band information. | [optional] 
 **ssid** | **Number**| Filter results by SSID | [optional] 
 **vlan** | **Number**| Filter results by VLAN | [optional] 
 **apTag** | **String**| Filter results by AP Tag | [optional] 
 **fields** | **String**| Partial selection: If present, this call will return only the selected fields of [\&quot;rawDistribution\&quot;, \&quot;avg\&quot;]. All fields will be returned by default. Selected fields must be entered as a comma separated string. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceWirelessStatus"></a>
# **getDeviceWirelessStatus**
> Object getDeviceWirelessStatus(serial)

Return the SSID statuses of an access point

Return the SSID statuses of an access point

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let serial = "serial_example"; // String | 

apiInstance.getDeviceWirelessStatus(serial, (error, data, response) => {
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
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkApplianceClientSecurityEvents"></a>
# **getNetworkApplianceClientSecurityEvents**
> Object getNetworkApplianceClientSecurityEvents(networkId, clientId, opts)

List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 
let clientId = "clientId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 791 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 791 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 791 days. The default is 31 days.
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example", // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'sortOrder': "sortOrder_example" // String | Sorted order of security events based on event detection time. Order options are 'ascending' or 'descending'. Default is ascending order.
};
apiInstance.getNetworkApplianceClientSecurityEvents(networkId, clientId, opts, (error, data, response) => {
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
 **clientId** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 791 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 791 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 791 days. The default is 31 days. | [optional] 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **sortOrder** | **String**| Sorted order of security events based on event detection time. Order options are &#x27;ascending&#x27; or &#x27;descending&#x27;. Default is ascending order. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkApplianceSecurityEvents"></a>
# **getNetworkApplianceSecurityEvents**
> Object getNetworkApplianceSecurityEvents(networkId, opts)

List the security events for a network

List the security events for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 365 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 365 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 31 days.
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example", // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'sortOrder': "sortOrder_example" // String | Sorted order of security events based on event detection time. Order options are 'ascending' or 'descending'. Default is ascending order.
};
apiInstance.getNetworkApplianceSecurityEvents(networkId, opts, (error, data, response) => {
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
 **t0** | **String**| The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 365 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 365 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 31 days. | [optional] 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **sortOrder** | **String**| Sorted order of security events based on event detection time. Order options are &#x27;ascending&#x27; or &#x27;descending&#x27;. Default is ascending order. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkBluetoothClient"></a>
# **getNetworkBluetoothClient**
> Object getNetworkBluetoothClient(networkId, bluetoothClientId, opts)

Return a Bluetooth client. Bluetooth clients can be identified by their ID or their MAC.

Return a Bluetooth client. Bluetooth clients can be identified by their ID or their MAC.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 
let bluetoothClientId = "bluetoothClientId_example"; // String | 
let opts = { 
  'includeConnectivityHistory': true, // Boolean | Include the connectivity history for this client
  'connectivityHistoryTimespan': 56 // Number | The timespan, in seconds, for the connectivityHistory data. By default 1 day, 86400, will be used.
};
apiInstance.getNetworkBluetoothClient(networkId, bluetoothClientId, opts, (error, data, response) => {
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
 **bluetoothClientId** | **String**|  | 
 **includeConnectivityHistory** | **Boolean**| Include the connectivity history for this client | [optional] 
 **connectivityHistoryTimespan** | **Number**| The timespan, in seconds, for the connectivityHistory data. By default 1 day, 86400, will be used. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkBluetoothClients"></a>
# **getNetworkBluetoothClients**
> Object getNetworkBluetoothClients(networkId, opts)

List the Bluetooth clients seen by APs in this network

List the Bluetooth clients seen by APs in this network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 7 days from today.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 7 days. The default is 1 day.
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 5 - 1000. Default is 10.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example", // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'includeConnectivityHistory': true // Boolean | Include the connectivity history for this client
};
apiInstance.getNetworkBluetoothClients(networkId, opts, (error, data, response) => {
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
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 7 days from today. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 7 days. The default is 1 day. | [optional] 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 5 - 1000. Default is 10. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **includeConnectivityHistory** | **Boolean**| Include the connectivity history for this client | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkClient"></a>
# **getNetworkClient**
> Object getNetworkClient(networkId, clientId)

Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 
let clientId = "clientId_example"; // String | 

apiInstance.getNetworkClient(networkId, clientId, (error, data, response) => {
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
 **clientId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkClientTrafficHistory"></a>
# **getNetworkClientTrafficHistory**
> Object getNetworkClientTrafficHistory(networkId, clientId, opts)

Return the client&#x27;s network traffic data over time. Usage data is in kilobytes. This endpoint requires detailed traffic analysis to be enabled on the Network-wide &gt; General page. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

Return the client&#x27;s network traffic data over time. Usage data is in kilobytes. This endpoint requires detailed traffic analysis to be enabled on the Network-wide &gt; General page. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 
let clientId = "clientId_example"; // String | 
let opts = { 
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example" // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
};
apiInstance.getNetworkClientTrafficHistory(networkId, clientId, opts, (error, data, response) => {
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
 **clientId** | **String**|  | 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 1000. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkClientUsageHistory"></a>
# **getNetworkClientUsageHistory**
> Object getNetworkClientUsageHistory(networkId, clientId)

Return the client&#x27;s daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

Return the client&#x27;s daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 
let clientId = "clientId_example"; // String | 

apiInstance.getNetworkClientUsageHistory(networkId, clientId, (error, data, response) => {
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
 **clientId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkClients"></a>
# **getNetworkClients**
> Object getNetworkClients(networkId, opts)

List the clients that have used this network in the timespan

List the clients that have used this network in the timespan

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example" // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
};
apiInstance.getNetworkClients(networkId, opts, (error, data, response) => {
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
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkEvents"></a>
# **getNetworkEvents**
> Object getNetworkEvents(networkId, opts)

List the events for the network

List the events for the network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'productType': "productType_example", // String | The product type to fetch events for. This parameter is required for networks with multiple device types. Valid types are wireless, appliance, switch, systemsManager, camera, and cellularGateway
  'includedEventTypes': ["includedEventTypes_example"], // [String] | A list of event types. The returned events will be filtered to only include events with these types.
  'excludedEventTypes': ["excludedEventTypes_example"], // [String] | A list of event types. The returned events will be filtered to exclude events with these types.
  'deviceMac': "deviceMac_example", // String | The MAC address of the Meraki device which the list of events will be filtered with
  'deviceSerial': "deviceSerial_example", // String | The serial of the Meraki device which the list of events will be filtered with
  'deviceName': "deviceName_example", // String | The name of the Meraki device which the list of events will be filtered with
  'clientIp': "clientIp_example", // String | The IP of the client which the list of events will be filtered with. Only supported for track-by-IP networks.
  'clientMac': "clientMac_example", // String | The MAC address of the client which the list of events will be filtered with. Only supported for track-by-MAC networks.
  'clientName': "clientName_example", // String | The name, or partial name, of the client which the list of events will be filtered with
  'smDeviceMac': "smDeviceMac_example", // String | The MAC address of the Systems Manager device which the list of events will be filtered with
  'smDeviceName': "smDeviceName_example", // String | The name of the Systems Manager device which the list of events will be filtered with
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example" // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
};
apiInstance.getNetworkEvents(networkId, opts, (error, data, response) => {
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
 **productType** | **String**| The product type to fetch events for. This parameter is required for networks with multiple device types. Valid types are wireless, appliance, switch, systemsManager, camera, and cellularGateway | [optional] 
 **includedEventTypes** | [**[String]**](String.md)| A list of event types. The returned events will be filtered to only include events with these types. | [optional] 
 **excludedEventTypes** | [**[String]**](String.md)| A list of event types. The returned events will be filtered to exclude events with these types. | [optional] 
 **deviceMac** | **String**| The MAC address of the Meraki device which the list of events will be filtered with | [optional] 
 **deviceSerial** | **String**| The serial of the Meraki device which the list of events will be filtered with | [optional] 
 **deviceName** | **String**| The name of the Meraki device which the list of events will be filtered with | [optional] 
 **clientIp** | **String**| The IP of the client which the list of events will be filtered with. Only supported for track-by-IP networks. | [optional] 
 **clientMac** | **String**| The MAC address of the client which the list of events will be filtered with. Only supported for track-by-MAC networks. | [optional] 
 **clientName** | **String**| The name, or partial name, of the client which the list of events will be filtered with | [optional] 
 **smDeviceMac** | **String**| The MAC address of the Systems Manager device which the list of events will be filtered with | [optional] 
 **smDeviceName** | **String**| The name of the Systems Manager device which the list of events will be filtered with | [optional] 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkEventsEventTypes"></a>
# **getNetworkEventsEventTypes**
> Object getNetworkEventsEventTypes(networkId)

List the event type to human-readable description

List the event type to human-readable description

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkEventsEventTypes(networkId, (error, data, response) => {
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

<a name="getNetworkSmDeviceCellularUsageHistory"></a>
# **getNetworkSmDeviceCellularUsageHistory**
> Object getNetworkSmDeviceCellularUsageHistory(networkId, deviceId)

Return the client&#x27;s daily cellular data usage history. Usage data is in kilobytes.

Return the client&#x27;s daily cellular data usage history. Usage data is in kilobytes.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 
let deviceId = "deviceId_example"; // String | 

apiInstance.getNetworkSmDeviceCellularUsageHistory(networkId, deviceId, (error, data, response) => {
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
 **deviceId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSmDeviceConnectivity"></a>
# **getNetworkSmDeviceConnectivity**
> Object getNetworkSmDeviceConnectivity(networkId, deviceId, opts)

Returns historical connectivity data (whether a device is regularly checking in to Dashboard).

Returns historical connectivity data (whether a device is regularly checking in to Dashboard).

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 
let deviceId = "deviceId_example"; // String | 
let opts = { 
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example" // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
};
apiInstance.getNetworkSmDeviceConnectivity(networkId, deviceId, opts, (error, data, response) => {
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
 **deviceId** | **String**|  | 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSmDeviceDesktopLogs"></a>
# **getNetworkSmDeviceDesktopLogs**
> Object getNetworkSmDeviceDesktopLogs(networkId, deviceId, opts)

Return historical records of various Systems Manager network connection details for desktop devices.

Return historical records of various Systems Manager network connection details for desktop devices.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 
let deviceId = "deviceId_example"; // String | 
let opts = { 
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example" // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
};
apiInstance.getNetworkSmDeviceDesktopLogs(networkId, deviceId, opts, (error, data, response) => {
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
 **deviceId** | **String**|  | 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSmDeviceDeviceCommandLogs"></a>
# **getNetworkSmDeviceDeviceCommandLogs**
> Object getNetworkSmDeviceDeviceCommandLogs(networkId, deviceId, opts)

    Return historical records of commands sent to Systems Manager devices.     &lt;p&gt;Note that this will include the name of the Dashboard user who initiated the command if it was generated     by a Dashboard admin rather than the automatic behavior of the system; you may wish to filter this out     of any reports.&lt;/p&gt; 

    Return historical records of commands sent to Systems Manager devices.     &lt;p&gt;Note that this will include the name of the Dashboard user who initiated the command if it was generated     by a Dashboard admin rather than the automatic behavior of the system; you may wish to filter this out     of any reports.&lt;/p&gt; 

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 
let deviceId = "deviceId_example"; // String | 
let opts = { 
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example" // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
};
apiInstance.getNetworkSmDeviceDeviceCommandLogs(networkId, deviceId, opts, (error, data, response) => {
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
 **deviceId** | **String**|  | 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSmDevicePerformanceHistory"></a>
# **getNetworkSmDevicePerformanceHistory**
> Object getNetworkSmDevicePerformanceHistory(networkId, deviceId, opts)

Return historical records of various Systems Manager client metrics for desktop devices.

Return historical records of various Systems Manager client metrics for desktop devices.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 
let deviceId = "deviceId_example"; // String | 
let opts = { 
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example" // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
};
apiInstance.getNetworkSmDevicePerformanceHistory(networkId, deviceId, opts, (error, data, response) => {
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
 **deviceId** | **String**|  | 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSplashLoginAttempts"></a>
# **getNetworkSplashLoginAttempts**
> Object getNetworkSplashLoginAttempts(networkId, opts)

List the splash login attempts for a network

List the splash login attempts for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'ssidNumber': 56, // Number | Only return the login attempts for the specified SSID
  'loginIdentifier': "loginIdentifier_example", // String | The username, email, or phone number used during login
  'timespan': 56 // Number | The timespan, in seconds, for the login attempts. The period will be from [timespan] seconds ago until now. The maximum timespan is 3 months
};
apiInstance.getNetworkSplashLoginAttempts(networkId, opts, (error, data, response) => {
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
 **ssidNumber** | **Number**| Only return the login attempts for the specified SSID | [optional] 
 **loginIdentifier** | **String**| The username, email, or phone number used during login | [optional] 
 **timespan** | **Number**| The timespan, in seconds, for the login attempts. The period will be from [timespan] seconds ago until now. The maximum timespan is 3 months | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkTraffic"></a>
# **getNetworkTraffic**
> Object getNetworkTraffic(networkId, opts)

    The traffic analysis data for this network.     &lt;a href&#x3D;\&quot;https://documentation.meraki.com/MR/Monitoring_and_Reporting/Hostname_Visibility\&quot;&gt;Traffic Analysis with Hostname Visibility&lt;/a&gt; must be enabled on the network. 

    The traffic analysis data for this network.     &lt;a href&#x3D;\&quot;https://documentation.meraki.com/MR/Monitoring_and_Reporting/Hostname_Visibility\&quot;&gt;Traffic Analysis with Hostname Visibility&lt;/a&gt; must be enabled on the network. 

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 30 days from today.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 30 days.
  'deviceType': "deviceType_example" // String |     Filter the data by device type: 'combined', 'wireless', 'switch' or 'appliance'. Defaults to 'combined'.     When using 'combined', for each rule the data will come from the device type with the most usage. 
};
apiInstance.getNetworkTraffic(networkId, opts, (error, data, response) => {
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
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 30 days from today. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 30 days. | [optional] 
 **deviceType** | **String**|     Filter the data by device type: &#x27;combined&#x27;, &#x27;wireless&#x27;, &#x27;switch&#x27; or &#x27;appliance&#x27;. Defaults to &#x27;combined&#x27;.     When using &#x27;combined&#x27;, for each rule the data will come from the device type with the most usage.  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWirelessAirMarshal"></a>
# **getNetworkWirelessAirMarshal**
> Object getNetworkWirelessAirMarshal(networkId, opts)

List Air Marshal scan results from a network

List Air Marshal scan results from a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  'timespan': 3.4 // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 7 days.
};
apiInstance.getNetworkWirelessAirMarshal(networkId, opts, (error, data, response) => {
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
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWirelessChannelUtilizationHistory"></a>
# **getNetworkWirelessChannelUtilizationHistory**
> Object getNetworkWirelessChannelUtilizationHistory(networkId, opts)

Return AP channel utilization over time for a device or network client

Return AP channel utilization over time for a device or network client

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days.
  'resolution': 56, // Number | The time resolution in seconds for returned data. The valid resolutions are: 600, 1200, 3600, 14400, 86400. The default is 86400.
  'autoResolution': true, // Boolean | Automatically select a data resolution based on the given timespan; this overrides the value specified by the 'resolution' parameter. The default setting is false.
  'clientId': "clientId_example", // String | Filter results by network client to return per-device, per-band AP channel utilization metrics inner joined by the queried client's connection history.
  'deviceSerial': "deviceSerial_example", // String | Filter results by device to return AP channel utilization metrics for the queried device; either :band or :clientId must be jointly specified.
  'apTag': "apTag_example", // String | Filter results by AP tag to return AP channel utilization metrics for devices labeled with the given tag; either :clientId or :deviceSerial must be jointly specified.
  'band': "band_example" // String | Filter results by band (either '2.4' or '5').
};
apiInstance.getNetworkWirelessChannelUtilizationHistory(networkId, opts, (error, data, response) => {
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
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. | [optional] 
 **resolution** | **Number**| The time resolution in seconds for returned data. The valid resolutions are: 600, 1200, 3600, 14400, 86400. The default is 86400. | [optional] 
 **autoResolution** | **Boolean**| Automatically select a data resolution based on the given timespan; this overrides the value specified by the &#x27;resolution&#x27; parameter. The default setting is false. | [optional] 
 **clientId** | **String**| Filter results by network client to return per-device, per-band AP channel utilization metrics inner joined by the queried client&#x27;s connection history. | [optional] 
 **deviceSerial** | **String**| Filter results by device to return AP channel utilization metrics for the queried device; either :band or :clientId must be jointly specified. | [optional] 
 **apTag** | **String**| Filter results by AP tag to return AP channel utilization metrics for devices labeled with the given tag; either :clientId or :deviceSerial must be jointly specified. | [optional] 
 **band** | **String**| Filter results by band (either &#x27;2.4&#x27; or &#x27;5&#x27;). | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWirelessClientConnectionStats"></a>
# **getNetworkWirelessClientConnectionStats**
> Object getNetworkWirelessClientConnectionStats(networkId, clientId, opts)

Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.

Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 
let clientId = "clientId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
  'band': "band_example", // String | Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
  'ssid': 56, // Number | Filter results by SSID
  'vlan': 56, // Number | Filter results by VLAN
  'apTag': "apTag_example" // String | Filter results by AP Tag
};
apiInstance.getNetworkWirelessClientConnectionStats(networkId, clientId, opts, (error, data, response) => {
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
 **clientId** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 180 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 7 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. | [optional] 
 **band** | **String**| Filter results by band (either &#x27;2.4&#x27; or &#x27;5&#x27;). Note that data prior to February 2020 will not have band information. | [optional] 
 **ssid** | **Number**| Filter results by SSID | [optional] 
 **vlan** | **Number**| Filter results by VLAN | [optional] 
 **apTag** | **String**| Filter results by AP Tag | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWirelessClientConnectivityEvents"></a>
# **getNetworkWirelessClientConnectivityEvents**
> Object getNetworkWirelessClientConnectivityEvents(networkId, clientId, opts)

List the wireless connectivity events for a client within a network in the timespan.

List the wireless connectivity events for a client within a network in the timespan.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 
let clientId = "clientId_example"; // String | 
let opts = { 
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example", // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.
  'types': ["types_example"], // [String] | A list of event types to include. If not specified, events of all types will be returned. Valid types are 'assoc', 'disassoc', 'auth', 'deauth', 'dns', 'dhcp', 'roam' and/or 'connection'.
  'includedSeverities': ["includedSeverities_example"], // [String] | A list of severities to include. If not specified, events of all severities will be returned. Valid severities are 'good', 'info', 'warn' and/or 'bad'.
  'band': "band_example", // String | Filter results by band (either '2.4' or '5').
  'ssidNumber': 56, // Number | An SSID number to include. If not specified, events for all SSIDs will be returned.
  'deviceSerial': "deviceSerial_example" // String | Filter results by an AP's serial number.
};
apiInstance.getNetworkWirelessClientConnectivityEvents(networkId, clientId, opts, (error, data, response) => {
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
 **clientId** | **String**|  | 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 1000. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 
 **types** | [**[String]**](String.md)| A list of event types to include. If not specified, events of all types will be returned. Valid types are &#x27;assoc&#x27;, &#x27;disassoc&#x27;, &#x27;auth&#x27;, &#x27;deauth&#x27;, &#x27;dns&#x27;, &#x27;dhcp&#x27;, &#x27;roam&#x27; and/or &#x27;connection&#x27;. | [optional] 
 **includedSeverities** | [**[String]**](String.md)| A list of severities to include. If not specified, events of all severities will be returned. Valid severities are &#x27;good&#x27;, &#x27;info&#x27;, &#x27;warn&#x27; and/or &#x27;bad&#x27;. | [optional] 
 **band** | **String**| Filter results by band (either &#x27;2.4&#x27; or &#x27;5&#x27;). | [optional] 
 **ssidNumber** | **Number**| An SSID number to include. If not specified, events for all SSIDs will be returned. | [optional] 
 **deviceSerial** | **String**| Filter results by an AP&#x27;s serial number. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWirelessClientCountHistory"></a>
# **getNetworkWirelessClientCountHistory**
> Object getNetworkWirelessClientCountHistory(networkId, opts)

Return wireless client counts over time for a network, device, or network client

Return wireless client counts over time for a network, device, or network client

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days.
  'resolution': 56, // Number | The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400.
  'autoResolution': true, // Boolean | Automatically select a data resolution based on the given timespan; this overrides the value specified by the 'resolution' parameter. The default setting is false.
  'clientId': "clientId_example", // String | Filter results by network client to return per-device client counts over time inner joined by the queried client's connection history.
  'deviceSerial': "deviceSerial_example", // String | Filter results by device.
  'apTag': "apTag_example", // String | Filter results by AP tag.
  'band': "band_example", // String | Filter results by band (either '2.4' or '5').
  'ssid': 56 // Number | Filter results by SSID number.
};
apiInstance.getNetworkWirelessClientCountHistory(networkId, opts, (error, data, response) => {
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
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. | [optional] 
 **resolution** | **Number**| The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400. | [optional] 
 **autoResolution** | **Boolean**| Automatically select a data resolution based on the given timespan; this overrides the value specified by the &#x27;resolution&#x27; parameter. The default setting is false. | [optional] 
 **clientId** | **String**| Filter results by network client to return per-device client counts over time inner joined by the queried client&#x27;s connection history. | [optional] 
 **deviceSerial** | **String**| Filter results by device. | [optional] 
 **apTag** | **String**| Filter results by AP tag. | [optional] 
 **band** | **String**| Filter results by band (either &#x27;2.4&#x27; or &#x27;5&#x27;). | [optional] 
 **ssid** | **Number**| Filter results by SSID number. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWirelessClientLatencyHistory"></a>
# **getNetworkWirelessClientLatencyHistory**
> Object getNetworkWirelessClientLatencyHistory(networkId, clientId, opts)

Return the latency history for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.

Return the latency history for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 
let clientId = "clientId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 791 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 791 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 791 days. The default is 1 day.
  'resolution': 56 // Number | The time resolution in seconds for returned data. The valid resolutions are: 86400. The default is 86400.
};
apiInstance.getNetworkWirelessClientLatencyHistory(networkId, clientId, opts, (error, data, response) => {
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
 **clientId** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 791 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 791 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 791 days. The default is 1 day. | [optional] 
 **resolution** | **Number**| The time resolution in seconds for returned data. The valid resolutions are: 86400. The default is 86400. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWirelessClientLatencyStats"></a>
# **getNetworkWirelessClientLatencyStats**
> Object getNetworkWirelessClientLatencyStats(networkId, clientId, opts)

Aggregated latency info for a given client on this network. Clients are identified by their MAC.

Aggregated latency info for a given client on this network. Clients are identified by their MAC.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 
let clientId = "clientId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
  'band': "band_example", // String | Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
  'ssid': 56, // Number | Filter results by SSID
  'vlan': 56, // Number | Filter results by VLAN
  'apTag': "apTag_example", // String | Filter results by AP Tag
  'fields': "fields_example" // String | Partial selection: If present, this call will return only the selected fields of [\"rawDistribution\", \"avg\"]. All fields will be returned by default. Selected fields must be entered as a comma separated string.
};
apiInstance.getNetworkWirelessClientLatencyStats(networkId, clientId, opts, (error, data, response) => {
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
 **clientId** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 180 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 7 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. | [optional] 
 **band** | **String**| Filter results by band (either &#x27;2.4&#x27; or &#x27;5&#x27;). Note that data prior to February 2020 will not have band information. | [optional] 
 **ssid** | **Number**| Filter results by SSID | [optional] 
 **vlan** | **Number**| Filter results by VLAN | [optional] 
 **apTag** | **String**| Filter results by AP Tag | [optional] 
 **fields** | **String**| Partial selection: If present, this call will return only the selected fields of [\&quot;rawDistribution\&quot;, \&quot;avg\&quot;]. All fields will be returned by default. Selected fields must be entered as a comma separated string. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWirelessClientsConnectionStats"></a>
# **getNetworkWirelessClientsConnectionStats**
> Object getNetworkWirelessClientsConnectionStats(networkId, opts)

Aggregated connectivity info for this network, grouped by clients

Aggregated connectivity info for this network, grouped by clients

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
  'band': "band_example", // String | Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
  'ssid': 56, // Number | Filter results by SSID
  'vlan': 56, // Number | Filter results by VLAN
  'apTag': "apTag_example" // String | Filter results by AP Tag
};
apiInstance.getNetworkWirelessClientsConnectionStats(networkId, opts, (error, data, response) => {
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
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 180 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 7 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. | [optional] 
 **band** | **String**| Filter results by band (either &#x27;2.4&#x27; or &#x27;5&#x27;). Note that data prior to February 2020 will not have band information. | [optional] 
 **ssid** | **Number**| Filter results by SSID | [optional] 
 **vlan** | **Number**| Filter results by VLAN | [optional] 
 **apTag** | **String**| Filter results by AP Tag | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWirelessClientsLatencyStats"></a>
# **getNetworkWirelessClientsLatencyStats**
> Object getNetworkWirelessClientsLatencyStats(networkId, opts)

Aggregated latency info for this network, grouped by clients

Aggregated latency info for this network, grouped by clients

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
  'band': "band_example", // String | Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
  'ssid': 56, // Number | Filter results by SSID
  'vlan': 56, // Number | Filter results by VLAN
  'apTag': "apTag_example", // String | Filter results by AP Tag
  'fields': "fields_example" // String | Partial selection: If present, this call will return only the selected fields of [\"rawDistribution\", \"avg\"]. All fields will be returned by default. Selected fields must be entered as a comma separated string.
};
apiInstance.getNetworkWirelessClientsLatencyStats(networkId, opts, (error, data, response) => {
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
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 180 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 7 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. | [optional] 
 **band** | **String**| Filter results by band (either &#x27;2.4&#x27; or &#x27;5&#x27;). Note that data prior to February 2020 will not have band information. | [optional] 
 **ssid** | **Number**| Filter results by SSID | [optional] 
 **vlan** | **Number**| Filter results by VLAN | [optional] 
 **apTag** | **String**| Filter results by AP Tag | [optional] 
 **fields** | **String**| Partial selection: If present, this call will return only the selected fields of [\&quot;rawDistribution\&quot;, \&quot;avg\&quot;]. All fields will be returned by default. Selected fields must be entered as a comma separated string. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWirelessConnectionStats"></a>
# **getNetworkWirelessConnectionStats**
> Object getNetworkWirelessConnectionStats(networkId, opts)

Aggregated connectivity info for this network

Aggregated connectivity info for this network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
  'band': "band_example", // String | Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
  'ssid': 56, // Number | Filter results by SSID
  'vlan': 56, // Number | Filter results by VLAN
  'apTag': "apTag_example" // String | Filter results by AP Tag
};
apiInstance.getNetworkWirelessConnectionStats(networkId, opts, (error, data, response) => {
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
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 180 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 7 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. | [optional] 
 **band** | **String**| Filter results by band (either &#x27;2.4&#x27; or &#x27;5&#x27;). Note that data prior to February 2020 will not have band information. | [optional] 
 **ssid** | **Number**| Filter results by SSID | [optional] 
 **vlan** | **Number**| Filter results by VLAN | [optional] 
 **apTag** | **String**| Filter results by AP Tag | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWirelessDataRateHistory"></a>
# **getNetworkWirelessDataRateHistory**
> Object getNetworkWirelessDataRateHistory(networkId, opts)

Return PHY data rates over time for a network, device, or network client

Return PHY data rates over time for a network, device, or network client

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days.
  'resolution': 56, // Number | The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400.
  'autoResolution': true, // Boolean | Automatically select a data resolution based on the given timespan; this overrides the value specified by the 'resolution' parameter. The default setting is false.
  'clientId': "clientId_example", // String | Filter results by network client.
  'deviceSerial': "deviceSerial_example", // String | Filter results by device.
  'apTag': "apTag_example", // String | Filter results by AP tag.
  'band': "band_example", // String | Filter results by band (either '2.4' or '5').
  'ssid': 56 // Number | Filter results by SSID number.
};
apiInstance.getNetworkWirelessDataRateHistory(networkId, opts, (error, data, response) => {
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
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. | [optional] 
 **resolution** | **Number**| The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400. | [optional] 
 **autoResolution** | **Boolean**| Automatically select a data resolution based on the given timespan; this overrides the value specified by the &#x27;resolution&#x27; parameter. The default setting is false. | [optional] 
 **clientId** | **String**| Filter results by network client. | [optional] 
 **deviceSerial** | **String**| Filter results by device. | [optional] 
 **apTag** | **String**| Filter results by AP tag. | [optional] 
 **band** | **String**| Filter results by band (either &#x27;2.4&#x27; or &#x27;5&#x27;). | [optional] 
 **ssid** | **Number**| Filter results by SSID number. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWirelessDevicesConnectionStats"></a>
# **getNetworkWirelessDevicesConnectionStats**
> Object getNetworkWirelessDevicesConnectionStats(networkId, opts)

Aggregated connectivity info for this network, grouped by node

Aggregated connectivity info for this network, grouped by node

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
  'band': "band_example", // String | Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
  'ssid': 56, // Number | Filter results by SSID
  'vlan': 56, // Number | Filter results by VLAN
  'apTag': "apTag_example" // String | Filter results by AP Tag
};
apiInstance.getNetworkWirelessDevicesConnectionStats(networkId, opts, (error, data, response) => {
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
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 180 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 7 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. | [optional] 
 **band** | **String**| Filter results by band (either &#x27;2.4&#x27; or &#x27;5&#x27;). Note that data prior to February 2020 will not have band information. | [optional] 
 **ssid** | **Number**| Filter results by SSID | [optional] 
 **vlan** | **Number**| Filter results by VLAN | [optional] 
 **apTag** | **String**| Filter results by AP Tag | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWirelessDevicesLatencyStats"></a>
# **getNetworkWirelessDevicesLatencyStats**
> Object getNetworkWirelessDevicesLatencyStats(networkId, opts)

Aggregated latency info for this network, grouped by node

Aggregated latency info for this network, grouped by node

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
  'band': "band_example", // String | Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
  'ssid': 56, // Number | Filter results by SSID
  'vlan': 56, // Number | Filter results by VLAN
  'apTag': "apTag_example", // String | Filter results by AP Tag
  'fields': "fields_example" // String | Partial selection: If present, this call will return only the selected fields of [\"rawDistribution\", \"avg\"]. All fields will be returned by default. Selected fields must be entered as a comma separated string.
};
apiInstance.getNetworkWirelessDevicesLatencyStats(networkId, opts, (error, data, response) => {
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
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 180 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 7 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. | [optional] 
 **band** | **String**| Filter results by band (either &#x27;2.4&#x27; or &#x27;5&#x27;). Note that data prior to February 2020 will not have band information. | [optional] 
 **ssid** | **Number**| Filter results by SSID | [optional] 
 **vlan** | **Number**| Filter results by VLAN | [optional] 
 **apTag** | **String**| Filter results by AP Tag | [optional] 
 **fields** | **String**| Partial selection: If present, this call will return only the selected fields of [\&quot;rawDistribution\&quot;, \&quot;avg\&quot;]. All fields will be returned by default. Selected fields must be entered as a comma separated string. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWirelessFailedConnections"></a>
# **getNetworkWirelessFailedConnections**
> Object getNetworkWirelessFailedConnections(networkId, opts)

List of all failed client connection events on this network in a given time range

List of all failed client connection events on this network in a given time range

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
  'band': "band_example", // String | Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
  'ssid': 56, // Number | Filter results by SSID
  'vlan': 56, // Number | Filter results by VLAN
  'apTag': "apTag_example", // String | Filter results by AP Tag
  'serial': "serial_example", // String | Filter by AP
  'clientId': "clientId_example" // String | Filter by client MAC
};
apiInstance.getNetworkWirelessFailedConnections(networkId, opts, (error, data, response) => {
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
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 180 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 7 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. | [optional] 
 **band** | **String**| Filter results by band (either &#x27;2.4&#x27; or &#x27;5&#x27;). Note that data prior to February 2020 will not have band information. | [optional] 
 **ssid** | **Number**| Filter results by SSID | [optional] 
 **vlan** | **Number**| Filter results by VLAN | [optional] 
 **apTag** | **String**| Filter results by AP Tag | [optional] 
 **serial** | **String**| Filter by AP | [optional] 
 **clientId** | **String**| Filter by client MAC | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWirelessLatencyHistory"></a>
# **getNetworkWirelessLatencyHistory**
> Object getNetworkWirelessLatencyHistory(networkId, opts)

Return average wireless latency over time for a network, device, or network client

Return average wireless latency over time for a network, device, or network client

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days.
  'resolution': 56, // Number | The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400.
  'autoResolution': true, // Boolean | Automatically select a data resolution based on the given timespan; this overrides the value specified by the 'resolution' parameter. The default setting is false.
  'clientId': "clientId_example", // String | Filter results by network client.
  'deviceSerial': "deviceSerial_example", // String | Filter results by device.
  'apTag': "apTag_example", // String | Filter results by AP tag.
  'band': "band_example", // String | Filter results by band (either '2.4' or '5').
  'ssid': 56, // Number | Filter results by SSID number.
  'accessCategory': "accessCategory_example" // String | Filter by access category.
};
apiInstance.getNetworkWirelessLatencyHistory(networkId, opts, (error, data, response) => {
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
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. | [optional] 
 **resolution** | **Number**| The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400. | [optional] 
 **autoResolution** | **Boolean**| Automatically select a data resolution based on the given timespan; this overrides the value specified by the &#x27;resolution&#x27; parameter. The default setting is false. | [optional] 
 **clientId** | **String**| Filter results by network client. | [optional] 
 **deviceSerial** | **String**| Filter results by device. | [optional] 
 **apTag** | **String**| Filter results by AP tag. | [optional] 
 **band** | **String**| Filter results by band (either &#x27;2.4&#x27; or &#x27;5&#x27;). | [optional] 
 **ssid** | **Number**| Filter results by SSID number. | [optional] 
 **accessCategory** | **String**| Filter by access category. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWirelessLatencyStats"></a>
# **getNetworkWirelessLatencyStats**
> Object getNetworkWirelessLatencyStats(networkId, opts)

Aggregated latency info for this network

Aggregated latency info for this network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
  'band': "band_example", // String | Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
  'ssid': 56, // Number | Filter results by SSID
  'vlan': 56, // Number | Filter results by VLAN
  'apTag': "apTag_example", // String | Filter results by AP Tag
  'fields': "fields_example" // String | Partial selection: If present, this call will return only the selected fields of [\"rawDistribution\", \"avg\"]. All fields will be returned by default. Selected fields must be entered as a comma separated string.
};
apiInstance.getNetworkWirelessLatencyStats(networkId, opts, (error, data, response) => {
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
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 180 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 7 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. | [optional] 
 **band** | **String**| Filter results by band (either &#x27;2.4&#x27; or &#x27;5&#x27;). Note that data prior to February 2020 will not have band information. | [optional] 
 **ssid** | **Number**| Filter results by SSID | [optional] 
 **vlan** | **Number**| Filter results by VLAN | [optional] 
 **apTag** | **String**| Filter results by AP Tag | [optional] 
 **fields** | **String**| Partial selection: If present, this call will return only the selected fields of [\&quot;rawDistribution\&quot;, \&quot;avg\&quot;]. All fields will be returned by default. Selected fields must be entered as a comma separated string. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWirelessMeshStatuses"></a>
# **getNetworkWirelessMeshStatuses**
> Object getNetworkWirelessMeshStatuses(networkId, opts)

List wireless mesh statuses for repeaters

List wireless mesh statuses for repeaters

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 500. Default is 50.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example" // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
};
apiInstance.getNetworkWirelessMeshStatuses(networkId, opts, (error, data, response) => {
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
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 500. Default is 50. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWirelessSignalQualityHistory"></a>
# **getNetworkWirelessSignalQualityHistory**
> Object getNetworkWirelessSignalQualityHistory(networkId, opts)

Return signal quality (SNR/RSSI) over time for a device or network client

Return signal quality (SNR/RSSI) over time for a device or network client

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days.
  'resolution': 56, // Number | The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400.
  'autoResolution': true, // Boolean | Automatically select a data resolution based on the given timespan; this overrides the value specified by the 'resolution' parameter. The default setting is false.
  'clientId': "clientId_example", // String | Filter results by network client.
  'deviceSerial': "deviceSerial_example", // String | Filter results by device.
  'apTag': "apTag_example", // String | Filter results by AP tag; either :clientId or :deviceSerial must be jointly specified.
  'band': "band_example", // String | Filter results by band (either '2.4' or '5').
  'ssid': 56 // Number | Filter results by SSID number.
};
apiInstance.getNetworkWirelessSignalQualityHistory(networkId, opts, (error, data, response) => {
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
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. | [optional] 
 **resolution** | **Number**| The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400. | [optional] 
 **autoResolution** | **Boolean**| Automatically select a data resolution based on the given timespan; this overrides the value specified by the &#x27;resolution&#x27; parameter. The default setting is false. | [optional] 
 **clientId** | **String**| Filter results by network client. | [optional] 
 **deviceSerial** | **String**| Filter results by device. | [optional] 
 **apTag** | **String**| Filter results by AP tag; either :clientId or :deviceSerial must be jointly specified. | [optional] 
 **band** | **String**| Filter results by band (either &#x27;2.4&#x27; or &#x27;5&#x27;). | [optional] 
 **ssid** | **Number**| Filter results by SSID number. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWirelessUsageHistory"></a>
# **getNetworkWirelessUsageHistory**
> Object getNetworkWirelessUsageHistory(networkId, opts)

Return AP usage over time for a device or network client

Return AP usage over time for a device or network client

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days.
  'resolution': 56, // Number | The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400.
  'autoResolution': true, // Boolean | Automatically select a data resolution based on the given timespan; this overrides the value specified by the 'resolution' parameter. The default setting is false.
  'clientId': "clientId_example", // String | Filter results by network client to return per-device AP usage over time inner joined by the queried client's connection history.
  'deviceSerial': "deviceSerial_example", // String | Filter results by device. Requires :band.
  'apTag': "apTag_example", // String | Filter results by AP tag; either :clientId or :deviceSerial must be jointly specified.
  'band': "band_example", // String | Filter results by band (either '2.4' or '5').
  'ssid': 56 // Number | Filter results by SSID number.
};
apiInstance.getNetworkWirelessUsageHistory(networkId, opts, (error, data, response) => {
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
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. | [optional] 
 **resolution** | **Number**| The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400. | [optional] 
 **autoResolution** | **Boolean**| Automatically select a data resolution based on the given timespan; this overrides the value specified by the &#x27;resolution&#x27; parameter. The default setting is false. | [optional] 
 **clientId** | **String**| Filter results by network client to return per-device AP usage over time inner joined by the queried client&#x27;s connection history. | [optional] 
 **deviceSerial** | **String**| Filter results by device. Requires :band. | [optional] 
 **apTag** | **String**| Filter results by AP tag; either :clientId or :deviceSerial must be jointly specified. | [optional] 
 **band** | **String**| Filter results by band (either &#x27;2.4&#x27; or &#x27;5&#x27;). | [optional] 
 **ssid** | **Number**| Filter results by SSID number. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationApiRequests"></a>
# **getOrganizationApiRequests**
> Object getOrganizationApiRequests(organizationId, opts)

List the API requests made by an organization

List the API requests made by an organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let organizationId = "organizationId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days.
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example", // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'adminId': "adminId_example", // String | Filter the results by the ID of the admin who made the API requests
  'path': "path_example", // String | Filter the results by the path of the API requests
  'method': "method_example", // String | Filter the results by the method of the API requests (must be 'GET', 'PUT', 'POST' or 'DELETE')
  'responseCode': 56, // Number | Filter the results by the response code of the API requests
  'sourceIp': "sourceIp_example" // String | Filter the results by the IP address of the originating API request
};
apiInstance.getOrganizationApiRequests(organizationId, opts, (error, data, response) => {
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
 **organizationId** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days. | [optional] 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **adminId** | **String**| Filter the results by the ID of the admin who made the API requests | [optional] 
 **path** | **String**| Filter the results by the path of the API requests | [optional] 
 **method** | **String**| Filter the results by the method of the API requests (must be &#x27;GET&#x27;, &#x27;PUT&#x27;, &#x27;POST&#x27; or &#x27;DELETE&#x27;) | [optional] 
 **responseCode** | **Number**| Filter the results by the response code of the API requests | [optional] 
 **sourceIp** | **String**| Filter the results by the IP address of the originating API request | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationApiRequestsOverview"></a>
# **getOrganizationApiRequestsOverview**
> Object getOrganizationApiRequestsOverview(organizationId, opts)

Return an aggregated overview of API requests data

Return an aggregated overview of API requests data

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let organizationId = "organizationId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
  'timespan': 3.4 // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days.
};
apiInstance.getOrganizationApiRequestsOverview(organizationId, opts, (error, data, response) => {
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
 **organizationId** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationApplianceSecurityEvents"></a>
# **getOrganizationApplianceSecurityEvents**
> Object getOrganizationApplianceSecurityEvents(organizationId, opts)

List the security events for an organization

List the security events for an organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let organizationId = "organizationId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 365 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 365 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 31 days.
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example", // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'sortOrder': "sortOrder_example" // String | Sorted order of security events based on event detection time. Order options are 'ascending' or 'descending'. Default is ascending order.
};
apiInstance.getOrganizationApplianceSecurityEvents(organizationId, opts, (error, data, response) => {
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
 **organizationId** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 365 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 365 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 31 days. | [optional] 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **sortOrder** | **String**| Sorted order of security events based on event detection time. Order options are &#x27;ascending&#x27; or &#x27;descending&#x27;. Default is ascending order. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationApplianceUplinkStatuses"></a>
# **getOrganizationApplianceUplinkStatuses**
> Object getOrganizationApplianceUplinkStatuses(organizationId, opts)

List the uplink status of every Meraki MX and Z series appliances in the organization

List the uplink status of every Meraki MX and Z series appliances in the organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let organizationId = "organizationId_example"; // String | 
let opts = { 
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example" // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
};
apiInstance.getOrganizationApplianceUplinkStatuses(organizationId, opts, (error, data, response) => {
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
 **organizationId** | **String**|  | 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationApplianceVpnStats"></a>
# **getOrganizationApplianceVpnStats**
> Object getOrganizationApplianceVpnStats(organizationId, opts)

Show VPN history stat for networks in an organization

Show VPN history stat for networks in an organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let organizationId = "organizationId_example"; // String | 
let opts = { 
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 300. Default is 300.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example", // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'networkIds': ["networkIds_example"], // [String] | A list of Meraki network IDs to filter results to contain only specified networks. E.g.: networkIds[]=N_12345678&networkIds[]=L_3456
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
  'timespan': 3.4 // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.
};
apiInstance.getOrganizationApplianceVpnStats(organizationId, opts, (error, data, response) => {
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
 **organizationId** | **String**|  | 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 300. Default is 300. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **networkIds** | [**[String]**](String.md)| A list of Meraki network IDs to filter results to contain only specified networks. E.g.: networkIds[]&#x3D;N_12345678&amp;networkIds[]&#x3D;L_3456 | [optional] 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationApplianceVpnStatuses"></a>
# **getOrganizationApplianceVpnStatuses**
> Object getOrganizationApplianceVpnStatuses(organizationId, opts)

Show VPN status for networks in an organization

Show VPN status for networks in an organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let organizationId = "organizationId_example"; // String | 
let opts = { 
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 300. Default is 300.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example", // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'networkIds': ["networkIds_example"] // [String] | A list of Meraki network IDs to filter results to contain only specified networks. E.g.: networkIds[]=N_12345678&networkIds[]=L_3456
};
apiInstance.getOrganizationApplianceVpnStatuses(organizationId, opts, (error, data, response) => {
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
 **organizationId** | **String**|  | 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 300. Default is 300. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **networkIds** | [**[String]**](String.md)| A list of Meraki network IDs to filter results to contain only specified networks. E.g.: networkIds[]&#x3D;N_12345678&amp;networkIds[]&#x3D;L_3456 | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationConfigurationChanges"></a>
# **getOrganizationConfigurationChanges**
> Object getOrganizationConfigurationChanges(organizationId, opts)

View the Change Log for your organization

View the Change Log for your organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let organizationId = "organizationId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 365 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 365 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 365 days.
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 5000. Default is 5000.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example", // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'networkId': "networkId_example", // String | Filters on the given network
  'adminId': "adminId_example" // String | Filters on the given Admin
};
apiInstance.getOrganizationConfigurationChanges(organizationId, opts, (error, data, response) => {
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
 **organizationId** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 365 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 365 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 365 days. | [optional] 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 5000. Default is 5000. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **networkId** | **String**| Filters on the given network | [optional] 
 **adminId** | **String**| Filters on the given Admin | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationDevicesStatuses"></a>
# **getOrganizationDevicesStatuses**
> Object getOrganizationDevicesStatuses(organizationId, opts)

List the status of every Meraki device in the organization

List the status of every Meraki device in the organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let organizationId = "organizationId_example"; // String | 
let opts = { 
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example" // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
};
apiInstance.getOrganizationDevicesStatuses(organizationId, opts, (error, data, response) => {
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
 **organizationId** | **String**|  | 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationDevicesUplinksLossAndLatency"></a>
# **getOrganizationDevicesUplinksLossAndLatency**
> Object getOrganizationDevicesUplinksLossAndLatency(organizationId, opts)

Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let organizationId = "organizationId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 365 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 5 minutes after t0. The latest possible time that t1 can be is 2 minutes into the past.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 5 minutes. The default is 5 minutes.
  'uplink': "uplink_example", // String | Optional filter for a specific WAN uplink. Valid uplinks are wan1, wan2, cellular. Default will return all uplinks.
  'ip': "ip_example" // String | Optional filter for a specific destination IP. Default will return all destination IPs.
};
apiInstance.getOrganizationDevicesUplinksLossAndLatency(organizationId, opts, (error, data, response) => {
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
 **organizationId** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 365 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 5 minutes after t0. The latest possible time that t1 can be is 2 minutes into the past. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 5 minutes. The default is 5 minutes. | [optional] 
 **uplink** | **String**| Optional filter for a specific WAN uplink. Valid uplinks are wan1, wan2, cellular. Default will return all uplinks. | [optional] 
 **ip** | **String**| Optional filter for a specific destination IP. Default will return all destination IPs. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationLicensesOverview"></a>
# **getOrganizationLicensesOverview**
> Object getOrganizationLicensesOverview(organizationId)

Return an overview of the license state for an organization

Return an overview of the license state for an organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let organizationId = "organizationId_example"; // String | 

apiInstance.getOrganizationLicensesOverview(organizationId, (error, data, response) => {
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
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationOpenapiSpec"></a>
# **getOrganizationOpenapiSpec**
> Object getOrganizationOpenapiSpec(organizationId)

Return the OpenAPI 2.0 Specification of the organization&#x27;s API documentation in JSON

Return the OpenAPI 2.0 Specification of the organization&#x27;s API documentation in JSON

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let organizationId = "organizationId_example"; // String | 

apiInstance.getOrganizationOpenapiSpec(organizationId, (error, data, response) => {
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
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationWebhooksLogs"></a>
# **getOrganizationWebhooksLogs**
> Object getOrganizationWebhooksLogs(organizationId, opts)

Return the log of webhook POSTs sent

Return the log of webhook POSTs sent

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.MonitorApi();
let organizationId = "organizationId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 90 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example", // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'url': "url_example" // String | The URL the webhook was sent to
};
apiInstance.getOrganizationWebhooksLogs(organizationId, opts, (error, data, response) => {
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
 **organizationId** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 90 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **url** | **String**| The URL the webhook was sent to | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

