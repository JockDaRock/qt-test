# MerakiDashboardApi.SmApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNetworkSmBypassActivationLockAttempt**](SmApi.md#createNetworkSmBypassActivationLockAttempt) | **POST** /networks/{networkId}/sm/bypassActivationLockAttempts | Bypass activation lock attempt
[**createNetworkSmTargetGroup**](SmApi.md#createNetworkSmTargetGroup) | **POST** /networks/{networkId}/sm/targetGroups | Add a target group
[**deleteNetworkSmTargetGroup**](SmApi.md#deleteNetworkSmTargetGroup) | **DELETE** /networks/{networkId}/sm/targetGroups/{targetGroupId} | Delete a target group from a network
[**getNetworkSmBypassActivationLockAttempt**](SmApi.md#getNetworkSmBypassActivationLockAttempt) | **GET** /networks/{networkId}/sm/bypassActivationLockAttempts/{attemptId} | Bypass activation lock attempt status
[**getNetworkSmDeviceCellularUsageHistory**](SmApi.md#getNetworkSmDeviceCellularUsageHistory) | **GET** /networks/{networkId}/sm/devices/{deviceId}/cellularUsageHistory | Return the client&#x27;s daily cellular data usage history. Usage data is in kilobytes.
[**getNetworkSmDeviceCerts**](SmApi.md#getNetworkSmDeviceCerts) | **GET** /networks/{networkId}/sm/devices/{deviceId}/certs | List the certs on a device
[**getNetworkSmDeviceConnectivity**](SmApi.md#getNetworkSmDeviceConnectivity) | **GET** /networks/{networkId}/sm/devices/{deviceId}/connectivity | Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
[**getNetworkSmDeviceDesktopLogs**](SmApi.md#getNetworkSmDeviceDesktopLogs) | **GET** /networks/{networkId}/sm/devices/{deviceId}/desktopLogs | Return historical records of various Systems Manager network connection details for desktop devices.
[**getNetworkSmDeviceDeviceCommandLogs**](SmApi.md#getNetworkSmDeviceDeviceCommandLogs) | **GET** /networks/{networkId}/sm/devices/{deviceId}/deviceCommandLogs |     Return historical records of commands sent to Systems Manager devices.     &lt;p&gt;Note that this will include the name of the Dashboard user who initiated the command if it was generated     by a Dashboard admin rather than the automatic behavior of the system; you may wish to filter this out     of any reports.&lt;/p&gt; 
[**getNetworkSmDeviceDeviceProfiles**](SmApi.md#getNetworkSmDeviceDeviceProfiles) | **GET** /networks/{networkId}/sm/devices/{deviceId}/deviceProfiles | Get the profiles associated with a device
[**getNetworkSmDeviceNetworkAdapters**](SmApi.md#getNetworkSmDeviceNetworkAdapters) | **GET** /networks/{networkId}/sm/devices/{deviceId}/networkAdapters | List the network adapters of a device
[**getNetworkSmDevicePerformanceHistory**](SmApi.md#getNetworkSmDevicePerformanceHistory) | **GET** /networks/{networkId}/sm/devices/{deviceId}/performanceHistory | Return historical records of various Systems Manager client metrics for desktop devices.
[**getNetworkSmDeviceRestrictions**](SmApi.md#getNetworkSmDeviceRestrictions) | **GET** /networks/{networkId}/sm/devices/{deviceId}/restrictions | List the restrictions on a device
[**getNetworkSmDeviceSecurityCenters**](SmApi.md#getNetworkSmDeviceSecurityCenters) | **GET** /networks/{networkId}/sm/devices/{deviceId}/securityCenters | List the security centers on a device
[**getNetworkSmDeviceSoftwares**](SmApi.md#getNetworkSmDeviceSoftwares) | **GET** /networks/{networkId}/sm/devices/{deviceId}/softwares | Get a list of softwares associated with a device
[**getNetworkSmDeviceWlanLists**](SmApi.md#getNetworkSmDeviceWlanLists) | **GET** /networks/{networkId}/sm/devices/{deviceId}/wlanLists | List the saved SSID names on a device
[**getNetworkSmProfiles**](SmApi.md#getNetworkSmProfiles) | **GET** /networks/{networkId}/sm/profiles | List all profiles in a network
[**getNetworkSmTargetGroup**](SmApi.md#getNetworkSmTargetGroup) | **GET** /networks/{networkId}/sm/targetGroups/{targetGroupId} | Return a target group
[**getNetworkSmTargetGroups**](SmApi.md#getNetworkSmTargetGroups) | **GET** /networks/{networkId}/sm/targetGroups | List the target groups in this network
[**getNetworkSmUserDeviceProfiles**](SmApi.md#getNetworkSmUserDeviceProfiles) | **GET** /networks/{networkId}/sm/users/{userId}/deviceProfiles | Get the profiles associated with a user
[**getNetworkSmUserSoftwares**](SmApi.md#getNetworkSmUserSoftwares) | **GET** /networks/{networkId}/sm/users/{userId}/softwares | Get a list of softwares associated with a user
[**getOrganizationSmApnsCert**](SmApi.md#getOrganizationSmApnsCert) | **GET** /organizations/{organizationId}/sm/apnsCert | Get the organization&#x27;s APNS certificate
[**getOrganizationSmVppAccount**](SmApi.md#getOrganizationSmVppAccount) | **GET** /organizations/{organizationId}/sm/vppAccounts/{vppAccountId} | Get a hash containing the unparsed token of the VPP account with the given ID
[**getOrganizationSmVppAccounts**](SmApi.md#getOrganizationSmVppAccounts) | **GET** /organizations/{organizationId}/sm/vppAccounts | List the VPP accounts in the organization
[**refreshNetworkSmDeviceDetails**](SmApi.md#refreshNetworkSmDeviceDetails) | **POST** /networks/{networkId}/sm/devices/{deviceId}/refreshDetails | Refresh the details of a device
[**unenrollNetworkSmDevice**](SmApi.md#unenrollNetworkSmDevice) | **POST** /networks/{networkId}/sm/devices/{deviceId}/unenroll | Unenroll a device
[**updateNetworkSmDevicesFields**](SmApi.md#updateNetworkSmDevicesFields) | **PUT** /networks/{networkId}/sm/devices/fields | Modify the fields of a device
[**updateNetworkSmTargetGroup**](SmApi.md#updateNetworkSmTargetGroup) | **PUT** /networks/{networkId}/sm/targetGroups/{targetGroupId} | Update a target group
[**wipeNetworkSmDevices**](SmApi.md#wipeNetworkSmDevices) | **POST** /networks/{networkId}/sm/devices/wipe | Wipe a device

<a name="createNetworkSmBypassActivationLockAttempt"></a>
# **createNetworkSmBypassActivationLockAttempt**
> Object createNetworkSmBypassActivationLockAttempt(bodynetworkId)

Bypass activation lock attempt

Bypass activation lock attempt

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.SmApi();
let body = new MerakiDashboardApi.Body71(); // Body71 | 
let networkId = "networkId_example"; // String | 

apiInstance.createNetworkSmBypassActivationLockAttempt(bodynetworkId, (error, data, response) => {
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
 **body** | [**Body71**](Body71.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkSmTargetGroup"></a>
# **createNetworkSmTargetGroup**
> Object createNetworkSmTargetGroup(networkId, opts)

Add a target group

Add a target group

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.SmApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body74() // Body74 | 
};
apiInstance.createNetworkSmTargetGroup(networkId, opts, (error, data, response) => {
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
 **body** | [**Body74**](Body74.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNetworkSmTargetGroup"></a>
# **deleteNetworkSmTargetGroup**
> deleteNetworkSmTargetGroup(networkId, targetGroupId)

Delete a target group from a network

Delete a target group from a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.SmApi();
let networkId = "networkId_example"; // String | 
let targetGroupId = "targetGroupId_example"; // String | 

apiInstance.deleteNetworkSmTargetGroup(networkId, targetGroupId, (error, data, response) => {
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
 **targetGroupId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getNetworkSmBypassActivationLockAttempt"></a>
# **getNetworkSmBypassActivationLockAttempt**
> Object getNetworkSmBypassActivationLockAttempt(networkId, attemptId)

Bypass activation lock attempt status

Bypass activation lock attempt status

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.SmApi();
let networkId = "networkId_example"; // String | 
let attemptId = "attemptId_example"; // String | 

apiInstance.getNetworkSmBypassActivationLockAttempt(networkId, attemptId, (error, data, response) => {
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
 **attemptId** | **String**|  | 

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

let apiInstance = new MerakiDashboardApi.SmApi();
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

<a name="getNetworkSmDeviceCerts"></a>
# **getNetworkSmDeviceCerts**
> Object getNetworkSmDeviceCerts(networkId, deviceId)

List the certs on a device

List the certs on a device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.SmApi();
let networkId = "networkId_example"; // String | 
let deviceId = "deviceId_example"; // String | 

apiInstance.getNetworkSmDeviceCerts(networkId, deviceId, (error, data, response) => {
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

let apiInstance = new MerakiDashboardApi.SmApi();
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

let apiInstance = new MerakiDashboardApi.SmApi();
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

let apiInstance = new MerakiDashboardApi.SmApi();
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

<a name="getNetworkSmDeviceDeviceProfiles"></a>
# **getNetworkSmDeviceDeviceProfiles**
> Object getNetworkSmDeviceDeviceProfiles(networkId, deviceId)

Get the profiles associated with a device

Get the profiles associated with a device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.SmApi();
let networkId = "networkId_example"; // String | 
let deviceId = "deviceId_example"; // String | 

apiInstance.getNetworkSmDeviceDeviceProfiles(networkId, deviceId, (error, data, response) => {
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

<a name="getNetworkSmDeviceNetworkAdapters"></a>
# **getNetworkSmDeviceNetworkAdapters**
> Object getNetworkSmDeviceNetworkAdapters(networkId, deviceId)

List the network adapters of a device

List the network adapters of a device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.SmApi();
let networkId = "networkId_example"; // String | 
let deviceId = "deviceId_example"; // String | 

apiInstance.getNetworkSmDeviceNetworkAdapters(networkId, deviceId, (error, data, response) => {
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

let apiInstance = new MerakiDashboardApi.SmApi();
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

<a name="getNetworkSmDeviceRestrictions"></a>
# **getNetworkSmDeviceRestrictions**
> Object getNetworkSmDeviceRestrictions(networkId, deviceId)

List the restrictions on a device

List the restrictions on a device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.SmApi();
let networkId = "networkId_example"; // String | 
let deviceId = "deviceId_example"; // String | 

apiInstance.getNetworkSmDeviceRestrictions(networkId, deviceId, (error, data, response) => {
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

<a name="getNetworkSmDeviceSecurityCenters"></a>
# **getNetworkSmDeviceSecurityCenters**
> Object getNetworkSmDeviceSecurityCenters(networkId, deviceId)

List the security centers on a device

List the security centers on a device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.SmApi();
let networkId = "networkId_example"; // String | 
let deviceId = "deviceId_example"; // String | 

apiInstance.getNetworkSmDeviceSecurityCenters(networkId, deviceId, (error, data, response) => {
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

<a name="getNetworkSmDeviceSoftwares"></a>
# **getNetworkSmDeviceSoftwares**
> Object getNetworkSmDeviceSoftwares(networkId, deviceId)

Get a list of softwares associated with a device

Get a list of softwares associated with a device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.SmApi();
let networkId = "networkId_example"; // String | 
let deviceId = "deviceId_example"; // String | 

apiInstance.getNetworkSmDeviceSoftwares(networkId, deviceId, (error, data, response) => {
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

<a name="getNetworkSmDeviceWlanLists"></a>
# **getNetworkSmDeviceWlanLists**
> Object getNetworkSmDeviceWlanLists(networkId, deviceId)

List the saved SSID names on a device

List the saved SSID names on a device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.SmApi();
let networkId = "networkId_example"; // String | 
let deviceId = "deviceId_example"; // String | 

apiInstance.getNetworkSmDeviceWlanLists(networkId, deviceId, (error, data, response) => {
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

<a name="getNetworkSmProfiles"></a>
# **getNetworkSmProfiles**
> Object getNetworkSmProfiles(networkId)

List all profiles in a network

List all profiles in a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.SmApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkSmProfiles(networkId, (error, data, response) => {
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

<a name="getNetworkSmTargetGroup"></a>
# **getNetworkSmTargetGroup**
> Object getNetworkSmTargetGroup(networkId, targetGroupId, opts)

Return a target group

Return a target group

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.SmApi();
let networkId = "networkId_example"; // String | 
let targetGroupId = "targetGroupId_example"; // String | 
let opts = { 
  'withDetails': true // Boolean | Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response
};
apiInstance.getNetworkSmTargetGroup(networkId, targetGroupId, opts, (error, data, response) => {
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
 **targetGroupId** | **String**|  | 
 **withDetails** | **Boolean**| Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSmTargetGroups"></a>
# **getNetworkSmTargetGroups**
> Object getNetworkSmTargetGroups(networkId, opts)

List the target groups in this network

List the target groups in this network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.SmApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'withDetails': true // Boolean | Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response
};
apiInstance.getNetworkSmTargetGroups(networkId, opts, (error, data, response) => {
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
 **withDetails** | **Boolean**| Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSmUserDeviceProfiles"></a>
# **getNetworkSmUserDeviceProfiles**
> Object getNetworkSmUserDeviceProfiles(networkId, userId)

Get the profiles associated with a user

Get the profiles associated with a user

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.SmApi();
let networkId = "networkId_example"; // String | 
let userId = "userId_example"; // String | 

apiInstance.getNetworkSmUserDeviceProfiles(networkId, userId, (error, data, response) => {
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
 **userId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSmUserSoftwares"></a>
# **getNetworkSmUserSoftwares**
> Object getNetworkSmUserSoftwares(networkId, userId)

Get a list of softwares associated with a user

Get a list of softwares associated with a user

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.SmApi();
let networkId = "networkId_example"; // String | 
let userId = "userId_example"; // String | 

apiInstance.getNetworkSmUserSoftwares(networkId, userId, (error, data, response) => {
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
 **userId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationSmApnsCert"></a>
# **getOrganizationSmApnsCert**
> Object getOrganizationSmApnsCert(organizationId)

Get the organization&#x27;s APNS certificate

Get the organization&#x27;s APNS certificate

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.SmApi();
let organizationId = "organizationId_example"; // String | 

apiInstance.getOrganizationSmApnsCert(organizationId, (error, data, response) => {
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

<a name="getOrganizationSmVppAccount"></a>
# **getOrganizationSmVppAccount**
> Object getOrganizationSmVppAccount(organizationId, vppAccountId)

Get a hash containing the unparsed token of the VPP account with the given ID

Get a hash containing the unparsed token of the VPP account with the given ID

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.SmApi();
let organizationId = "organizationId_example"; // String | 
let vppAccountId = "vppAccountId_example"; // String | 

apiInstance.getOrganizationSmVppAccount(organizationId, vppAccountId, (error, data, response) => {
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
 **vppAccountId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationSmVppAccounts"></a>
# **getOrganizationSmVppAccounts**
> Object getOrganizationSmVppAccounts(organizationId)

List the VPP accounts in the organization

List the VPP accounts in the organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.SmApi();
let organizationId = "organizationId_example"; // String | 

apiInstance.getOrganizationSmVppAccounts(organizationId, (error, data, response) => {
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

<a name="refreshNetworkSmDeviceDetails"></a>
# **refreshNetworkSmDeviceDetails**
> refreshNetworkSmDeviceDetails(networkId, deviceId)

Refresh the details of a device

Refresh the details of a device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.SmApi();
let networkId = "networkId_example"; // String | 
let deviceId = "deviceId_example"; // String | 

apiInstance.refreshNetworkSmDeviceDetails(networkId, deviceId, (error, data, response) => {
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
 **deviceId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="unenrollNetworkSmDevice"></a>
# **unenrollNetworkSmDevice**
> Object unenrollNetworkSmDevice(networkId, deviceId)

Unenroll a device

Unenroll a device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.SmApi();
let networkId = "networkId_example"; // String | 
let deviceId = "deviceId_example"; // String | 

apiInstance.unenrollNetworkSmDevice(networkId, deviceId, (error, data, response) => {
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

<a name="updateNetworkSmDevicesFields"></a>
# **updateNetworkSmDevicesFields**
> Object updateNetworkSmDevicesFields(bodynetworkId)

Modify the fields of a device

Modify the fields of a device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.SmApi();
let body = new MerakiDashboardApi.Body72(); // Body72 | 
let networkId = "networkId_example"; // String | 

apiInstance.updateNetworkSmDevicesFields(bodynetworkId, (error, data, response) => {
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
 **body** | [**Body72**](Body72.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSmTargetGroup"></a>
# **updateNetworkSmTargetGroup**
> Object updateNetworkSmTargetGroup(networkIdtargetGroupId, opts)

Update a target group

Update a target group

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.SmApi();
let networkId = "networkId_example"; // String | 
let targetGroupId = "targetGroupId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body75() // Body75 | 
};
apiInstance.updateNetworkSmTargetGroup(networkIdtargetGroupId, opts, (error, data, response) => {
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
 **targetGroupId** | **String**|  | 
 **body** | [**Body75**](Body75.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="wipeNetworkSmDevices"></a>
# **wipeNetworkSmDevices**
> Object wipeNetworkSmDevices(networkId, opts)

Wipe a device

Wipe a device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.SmApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body73() // Body73 | 
};
apiInstance.wipeNetworkSmDevices(networkId, opts, (error, data, response) => {
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
 **body** | [**Body73**](Body73.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

