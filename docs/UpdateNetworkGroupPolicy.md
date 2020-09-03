# MerakiDashboardApi.UpdateNetworkGroupPolicy

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name for your group policy. | [optional] 
**scheduling** | [**NetworksnetworkIdgroupPoliciesScheduling**](NetworksnetworkIdgroupPoliciesScheduling.md) |  | [optional] 
**bandwidth** | [**NetworksnetworkIdgroupPoliciesBandwidth**](NetworksnetworkIdgroupPoliciesBandwidth.md) |  | [optional] 
**firewallAndTrafficShaping** | [**NetworksnetworkIdgroupPoliciesFirewallAndTrafficShaping**](NetworksnetworkIdgroupPoliciesFirewallAndTrafficShaping.md) |  | [optional] 
**contentFiltering** | [**NetworksnetworkIdgroupPoliciesContentFiltering**](NetworksnetworkIdgroupPoliciesContentFiltering.md) |  | [optional] 
**splashAuthSettings** | **String** | Whether clients bound to your policy will bypass splash authorization or behave according to the network's rules. Can be one of 'network default' or 'bypass'. Only available if your network has a wireless configuration. | [optional] 
**vlanTagging** | [**NetworksnetworkIdgroupPoliciesVlanTagging**](NetworksnetworkIdgroupPoliciesVlanTagging.md) |  | [optional] 
**bonjourForwarding** | [**NetworksnetworkIdgroupPoliciesBonjourForwarding**](NetworksnetworkIdgroupPoliciesBonjourForwarding.md) |  | [optional] 


<a name="SplashAuthSettingsEnum"></a>
## Enum: SplashAuthSettingsEnum


* `networkDefault` (value: `"network default"`)

* `bypass` (value: `"bypass"`)




