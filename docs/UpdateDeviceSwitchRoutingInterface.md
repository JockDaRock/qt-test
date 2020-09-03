# MerakiDashboardApi.UpdateDeviceSwitchRoutingInterface

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A friendly name or description for the interface or VLAN. | [optional] 
**subnet** | **String** | The network that this routed interface is on, in CIDR notation (ex. 10.1.1.0/24). | [optional] 
**interfaceIp** | **String** | The IP address this switch will use for layer 3 routing on this VLAN or subnet. This cannot be the same as the switch's management IP. | [optional] 
**multicastRouting** | **String** | Enable multicast support if, multicast routing between VLANs is required. Options are, 'disabled', 'enabled' or 'IGMP snooping querier'. | [optional] 
**vlanId** | **Number** | The VLAN this routed interface is on. VLAN must be between 1 and 4094. | [optional] 
**ospfSettings** | [**DevicesserialswitchroutinginterfacesinterfaceIdOspfSettings**](DevicesserialswitchroutinginterfacesinterfaceIdOspfSettings.md) |  | [optional] 


<a name="MulticastRoutingEnum"></a>
## Enum: MulticastRoutingEnum


* `disabled` (value: `"disabled"`)

* `enabled` (value: `"enabled"`)

* `iGMPSnoopingQuerier` (value: `"IGMP snooping querier"`)




