# MerakiDashboardApi.VlansApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNetworkApplianceVlan**](VlansApi.md#createNetworkApplianceVlan) | **POST** /networks/{networkId}/appliance/vlans | Add a VLAN
[**deleteNetworkApplianceVlan**](VlansApi.md#deleteNetworkApplianceVlan) | **DELETE** /networks/{networkId}/appliance/vlans/{vlanId} | Delete a VLAN from a network
[**getNetworkApplianceVlan**](VlansApi.md#getNetworkApplianceVlan) | **GET** /networks/{networkId}/appliance/vlans/{vlanId} | Return a VLAN
[**getNetworkApplianceVlans**](VlansApi.md#getNetworkApplianceVlans) | **GET** /networks/{networkId}/appliance/vlans | List the VLANs for an MX network
[**getNetworkApplianceVlansSettings**](VlansApi.md#getNetworkApplianceVlansSettings) | **GET** /networks/{networkId}/appliance/vlans/settings | Returns the enabled status of VLANs for the network
[**updateNetworkApplianceVlan**](VlansApi.md#updateNetworkApplianceVlan) | **PUT** /networks/{networkId}/appliance/vlans/{vlanId} | Update a VLAN
[**updateNetworkApplianceVlansSettings**](VlansApi.md#updateNetworkApplianceVlansSettings) | **PUT** /networks/{networkId}/appliance/vlans/settings | Enable/Disable VLANs for the given network

<a name="createNetworkApplianceVlan"></a>
# **createNetworkApplianceVlan**
> Object createNetworkApplianceVlan(bodynetworkId)

Add a VLAN

Add a VLAN

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.VlansApi();
let body = new MerakiDashboardApi.Body42(); // Body42 | 
let networkId = "networkId_example"; // String | 

apiInstance.createNetworkApplianceVlan(bodynetworkId, (error, data, response) => {
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
 **body** | [**Body42**](Body42.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNetworkApplianceVlan"></a>
# **deleteNetworkApplianceVlan**
> deleteNetworkApplianceVlan(networkId, vlanId)

Delete a VLAN from a network

Delete a VLAN from a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.VlansApi();
let networkId = "networkId_example"; // String | 
let vlanId = "vlanId_example"; // String | 

apiInstance.deleteNetworkApplianceVlan(networkId, vlanId, (error, data, response) => {
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
 **vlanId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getNetworkApplianceVlan"></a>
# **getNetworkApplianceVlan**
> Object getNetworkApplianceVlan(networkId, vlanId)

Return a VLAN

Return a VLAN

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.VlansApi();
let networkId = "networkId_example"; // String | 
let vlanId = "vlanId_example"; // String | 

apiInstance.getNetworkApplianceVlan(networkId, vlanId, (error, data, response) => {
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
 **vlanId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkApplianceVlans"></a>
# **getNetworkApplianceVlans**
> Object getNetworkApplianceVlans(networkId)

List the VLANs for an MX network

List the VLANs for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.VlansApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceVlans(networkId, (error, data, response) => {
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

<a name="getNetworkApplianceVlansSettings"></a>
# **getNetworkApplianceVlansSettings**
> Object getNetworkApplianceVlansSettings(networkId)

Returns the enabled status of VLANs for the network

Returns the enabled status of VLANs for the network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.VlansApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceVlansSettings(networkId, (error, data, response) => {
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

<a name="updateNetworkApplianceVlan"></a>
# **updateNetworkApplianceVlan**
> Object updateNetworkApplianceVlan(networkIdvlanId, opts)

Update a VLAN

Update a VLAN

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.VlansApi();
let networkId = "networkId_example"; // String | 
let vlanId = "vlanId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body44() // Body44 | 
};
apiInstance.updateNetworkApplianceVlan(networkIdvlanId, opts, (error, data, response) => {
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
 **vlanId** | **String**|  | 
 **body** | [**Body44**](Body44.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkApplianceVlansSettings"></a>
# **updateNetworkApplianceVlansSettings**
> Object updateNetworkApplianceVlansSettings(networkId, opts)

Enable/Disable VLANs for the given network

Enable/Disable VLANs for the given network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.VlansApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body43() // Body43 | 
};
apiInstance.updateNetworkApplianceVlansSettings(networkId, opts, (error, data, response) => {
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
 **body** | [**Body43**](Body43.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

