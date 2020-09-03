# MerakiDashboardApi.DevicesserialmanagementInterfaceWan2

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**wanEnabled** | **String** | Enable or disable the interface (only for MX devices). Valid values are &#x27;enabled&#x27;, &#x27;disabled&#x27;, and &#x27;not configured&#x27;. | [optional] 
**usingStaticIp** | **Boolean** | Configue the interface to have static IP settings or use DHCP. | [optional] 
**staticIp** | **String** | The IP the device should use on the WAN. | [optional] 
**staticGatewayIp** | **String** | The IP of the gateway on the WAN. | [optional] 
**staticSubnetMask** | **String** | The subnet mask for the WAN. | [optional] 
**staticDns** | **[String]** | Up to two DNS IPs. | [optional] 
**vlan** | **Number** | The VLAN that management traffic should be tagged with. Applies whether usingStaticIp is true or false. | [optional] 

<a name="WanEnabledEnum"></a>
## Enum: WanEnabledEnum

* `enabled` (value: `"enabled"`)
* `disabled` (value: `"disabled"`)
* `not configured` (value: `"not configured"`)

