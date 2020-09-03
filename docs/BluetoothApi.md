# MerakiDashboardApi.BluetoothApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDeviceWirelessBluetoothSettings**](BluetoothApi.md#getDeviceWirelessBluetoothSettings) | **GET** /devices/{serial}/wireless/bluetooth/settings | Return the bluetooth settings for a wireless device
[**getNetworkWirelessBluetoothSettings**](BluetoothApi.md#getNetworkWirelessBluetoothSettings) | **GET** /networks/{networkId}/wireless/bluetooth/settings | Return the Bluetooth settings for a network. <a href=\"https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\">Bluetooth settings</a> must be enabled on the network.
[**updateDeviceWirelessBluetoothSettings**](BluetoothApi.md#updateDeviceWirelessBluetoothSettings) | **PUT** /devices/{serial}/wireless/bluetooth/settings | Update the bluetooth settings for a wireless device
[**updateNetworkWirelessBluetoothSettings**](BluetoothApi.md#updateNetworkWirelessBluetoothSettings) | **PUT** /networks/{networkId}/wireless/bluetooth/settings | Update the Bluetooth settings for a network. See the docs page for <a href=\"https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\">Bluetooth settings</a>.


<a name="getDeviceWirelessBluetoothSettings"></a>
# **getDeviceWirelessBluetoothSettings**
> Object getDeviceWirelessBluetoothSettings(serial)

Return the bluetooth settings for a wireless device

Return the bluetooth settings for a wireless device

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.BluetoothApi();

var serial = "serial_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeviceWirelessBluetoothSettings(serial, callback);
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

<a name="getNetworkWirelessBluetoothSettings"></a>
# **getNetworkWirelessBluetoothSettings**
> Object getNetworkWirelessBluetoothSettings(networkId)

Return the Bluetooth settings for a network. <a href=\"https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\">Bluetooth settings</a> must be enabled on the network.

Return the Bluetooth settings for a network. <a href=\"https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\">Bluetooth settings</a> must be enabled on the network.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.BluetoothApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkWirelessBluetoothSettings(networkId, callback);
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

<a name="updateDeviceWirelessBluetoothSettings"></a>
# **updateDeviceWirelessBluetoothSettings**
> Object updateDeviceWirelessBluetoothSettings(serial, opts)

Update the bluetooth settings for a wireless device

Update the bluetooth settings for a wireless device

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.BluetoothApi();

var serial = "serial_example"; // String | 

var opts = { 
  'updateDeviceWirelessBluetoothSettings': new MerakiDashboardApi.UpdateDeviceWirelessBluetoothSettings() // UpdateDeviceWirelessBluetoothSettings | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDeviceWirelessBluetoothSettings(serial, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **updateDeviceWirelessBluetoothSettings** | [**UpdateDeviceWirelessBluetoothSettings**](UpdateDeviceWirelessBluetoothSettings.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkWirelessBluetoothSettings"></a>
# **updateNetworkWirelessBluetoothSettings**
> Object updateNetworkWirelessBluetoothSettings(networkId, opts)

Update the Bluetooth settings for a network. See the docs page for <a href=\"https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\">Bluetooth settings</a>.

Update the Bluetooth settings for a network. See the docs page for <a href=\"https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\">Bluetooth settings</a>.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.BluetoothApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  'updateNetworkWirelessBluetoothSettings': new MerakiDashboardApi.UpdateNetworkWirelessBluetoothSettings() // UpdateNetworkWirelessBluetoothSettings | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkWirelessBluetoothSettings(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **updateNetworkWirelessBluetoothSettings** | [**UpdateNetworkWirelessBluetoothSettings**](UpdateNetworkWirelessBluetoothSettings.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

