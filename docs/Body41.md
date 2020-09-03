# MerakiDashboardApi.Body41

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activeActiveAutoVpnEnabled** | **Boolean** | Toggle for enabling or disabling active-active AutoVPN | [optional] 
**defaultUplink** | **String** | The default uplink. Must be one of: &#x27;wan1&#x27; or &#x27;wan2&#x27; | [optional] 
**loadBalancingEnabled** | **Boolean** | Toggle for enabling or disabling load balancing | [optional] 
**wanTrafficUplinkPreferences** | [**[NetworksnetworkIdappliancetrafficShapinguplinkSelectionWanTrafficUplinkPreferences]**](NetworksnetworkIdappliancetrafficShapinguplinkSelectionWanTrafficUplinkPreferences.md) | Array of uplink preference rules for WAN traffic | [optional] 
**vpnTrafficUplinkPreferences** | [**[NetworksnetworkIdappliancetrafficShapinguplinkSelectionVpnTrafficUplinkPreferences]**](NetworksnetworkIdappliancetrafficShapinguplinkSelectionVpnTrafficUplinkPreferences.md) | Array of uplink preference rules for VPN traffic | [optional] 

<a name="DefaultUplinkEnum"></a>
## Enum: DefaultUplinkEnum

* `wan1` (value: `"wan1"`)
* `wan2` (value: `"wan2"`)

