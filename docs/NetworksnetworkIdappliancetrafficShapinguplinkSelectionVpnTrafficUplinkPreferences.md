# MerakiDashboardApi.NetworksnetworkIdappliancetrafficShapinguplinkSelectionVpnTrafficUplinkPreferences

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trafficFilters** | [**[NetworksnetworkIdappliancetrafficShapinguplinkSelectionTrafficFilters1]**](NetworksnetworkIdappliancetrafficShapinguplinkSelectionTrafficFilters1.md) | Array of traffic filters for this uplink preference rule | 
**preferredUplink** | **String** | Preferred uplink for this uplink preference rule. Must be one of: 'wan1', 'wan2', 'bestForVoIP', 'loadBalancing' or 'defaultUplink' | 
**failOverCriterion** | **String** | Fail over criterion for this uplink preference rule. Must be one of: 'poorPerformance' or 'uplinkDown' | [optional] 
**performanceClass** | [**NetworksnetworkIdappliancetrafficShapinguplinkSelectionPerformanceClass**](NetworksnetworkIdappliancetrafficShapinguplinkSelectionPerformanceClass.md) |  | [optional] 


<a name="PreferredUplinkEnum"></a>
## Enum: PreferredUplinkEnum


* `wan1` (value: `"wan1"`)

* `wan2` (value: `"wan2"`)

* `bestForVoIP` (value: `"bestForVoIP"`)

* `loadBalancing` (value: `"loadBalancing"`)

* `defaultUplink` (value: `"defaultUplink"`)




<a name="FailOverCriterionEnum"></a>
## Enum: FailOverCriterionEnum


* `poorPerformance` (value: `"poorPerformance"`)

* `uplinkDown` (value: `"uplinkDown"`)




