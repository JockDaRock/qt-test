# MerakiDashboardApi.IdentityPsksApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNetworkWirelessSsidIdentityPsk**](IdentityPsksApi.md#createNetworkWirelessSsidIdentityPsk) | **POST** /networks/{networkId}/wireless/ssids/{number}/identityPsks | Create an Identity PSK
[**deleteNetworkWirelessSsidIdentityPsk**](IdentityPsksApi.md#deleteNetworkWirelessSsidIdentityPsk) | **DELETE** /networks/{networkId}/wireless/ssids/{number}/identityPsks/{identityPskId} | Delete an Identity PSK
[**getNetworkWirelessSsidIdentityPsk**](IdentityPsksApi.md#getNetworkWirelessSsidIdentityPsk) | **GET** /networks/{networkId}/wireless/ssids/{number}/identityPsks/{identityPskId} | Return an Identity PSK
[**getNetworkWirelessSsidIdentityPsks**](IdentityPsksApi.md#getNetworkWirelessSsidIdentityPsks) | **GET** /networks/{networkId}/wireless/ssids/{number}/identityPsks | List all Identity PSKs in a wireless network
[**updateNetworkWirelessSsidIdentityPsk**](IdentityPsksApi.md#updateNetworkWirelessSsidIdentityPsk) | **PUT** /networks/{networkId}/wireless/ssids/{number}/identityPsks/{identityPskId} | Update an Identity PSK


<a name="createNetworkWirelessSsidIdentityPsk"></a>
# **createNetworkWirelessSsidIdentityPsk**
> Object createNetworkWirelessSsidIdentityPsk(networkId, _number, createNetworkWirelessSsidIdentityPsk)

Create an Identity PSK

Create an Identity PSK

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.IdentityPsksApi();

var networkId = "networkId_example"; // String | 

var _number = "_number_example"; // String | 

var createNetworkWirelessSsidIdentityPsk = new MerakiDashboardApi.CreateNetworkWirelessSsidIdentityPsk(); // CreateNetworkWirelessSsidIdentityPsk | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNetworkWirelessSsidIdentityPsk(networkId, _number, createNetworkWirelessSsidIdentityPsk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **_number** | **String**|  | 
 **createNetworkWirelessSsidIdentityPsk** | [**CreateNetworkWirelessSsidIdentityPsk**](CreateNetworkWirelessSsidIdentityPsk.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNetworkWirelessSsidIdentityPsk"></a>
# **deleteNetworkWirelessSsidIdentityPsk**
> deleteNetworkWirelessSsidIdentityPsk(networkId, _number, identityPskId)

Delete an Identity PSK

Delete an Identity PSK

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.IdentityPsksApi();

var networkId = "networkId_example"; // String | 

var _number = "_number_example"; // String | 

var identityPskId = "identityPskId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteNetworkWirelessSsidIdentityPsk(networkId, _number, identityPskId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **_number** | **String**|  | 
 **identityPskId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkWirelessSsidIdentityPsk"></a>
# **getNetworkWirelessSsidIdentityPsk**
> Object getNetworkWirelessSsidIdentityPsk(networkId, _number, identityPskId)

Return an Identity PSK

Return an Identity PSK

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.IdentityPsksApi();

var networkId = "networkId_example"; // String | 

var _number = "_number_example"; // String | 

var identityPskId = "identityPskId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkWirelessSsidIdentityPsk(networkId, _number, identityPskId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **_number** | **String**|  | 
 **identityPskId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkWirelessSsidIdentityPsks"></a>
# **getNetworkWirelessSsidIdentityPsks**
> Object getNetworkWirelessSsidIdentityPsks(networkId, _number)

List all Identity PSKs in a wireless network

List all Identity PSKs in a wireless network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.IdentityPsksApi();

var networkId = "networkId_example"; // String | 

var _number = "_number_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkWirelessSsidIdentityPsks(networkId, _number, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **_number** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkWirelessSsidIdentityPsk"></a>
# **updateNetworkWirelessSsidIdentityPsk**
> Object updateNetworkWirelessSsidIdentityPsk(networkId, _number, identityPskId, opts)

Update an Identity PSK

Update an Identity PSK

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.IdentityPsksApi();

var networkId = "networkId_example"; // String | 

var _number = "_number_example"; // String | 

var identityPskId = "identityPskId_example"; // String | 

var opts = { 
  'updateNetworkWirelessSsidIdentityPsk': new MerakiDashboardApi.UpdateNetworkWirelessSsidIdentityPsk() // UpdateNetworkWirelessSsidIdentityPsk | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkWirelessSsidIdentityPsk(networkId, _number, identityPskId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **_number** | **String**|  | 
 **identityPskId** | **String**|  | 
 **updateNetworkWirelessSsidIdentityPsk** | [**UpdateNetworkWirelessSsidIdentityPsk**](UpdateNetworkWirelessSsidIdentityPsk.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

