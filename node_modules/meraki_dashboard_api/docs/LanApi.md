# MerakiDashboardApi.LanApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDeviceCellularGatewayLan**](LanApi.md#getDeviceCellularGatewayLan) | **GET** /devices/{serial}/cellularGateway/lan | Show the LAN Settings of a MG
[**updateDeviceCellularGatewayLan**](LanApi.md#updateDeviceCellularGatewayLan) | **PUT** /devices/{serial}/cellularGateway/lan | Update the LAN Settings for a single MG.

<a name="getDeviceCellularGatewayLan"></a>
# **getDeviceCellularGatewayLan**
> Object getDeviceCellularGatewayLan(serial)

Show the LAN Settings of a MG

Show the LAN Settings of a MG

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.LanApi();
let serial = "serial_example"; // String | 

apiInstance.getDeviceCellularGatewayLan(serial, (error, data, response) => {
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

<a name="updateDeviceCellularGatewayLan"></a>
# **updateDeviceCellularGatewayLan**
> Object updateDeviceCellularGatewayLan(serial, opts)

Update the LAN Settings for a single MG.

Update the LAN Settings for a single MG.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.LanApi();
let serial = "serial_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body6() // Body6 | 
};
apiInstance.updateDeviceCellularGatewayLan(serial, opts, (error, data, response) => {
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
 **body** | [**Body6**](Body6.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

