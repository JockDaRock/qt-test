# MerakiDashboardApi.NetworksnetworkIdappliancetrafficShapinguplinkSelectionVpnTrafficUplinkPreferences

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trafficFilters** | [**[NetworksnetworkIdappliancetrafficShapinguplinkSelectionTrafficFilters1]**](NetworksnetworkIdappliancetrafficShapinguplinkSelectionTrafficFilters1.md) | Array of traffic filters for this uplink preference rule | 
**preferredUplink** | **String** | Preferred uplink for this uplink preference rule. Must be one of: &#x27;wan1&#x27;, &#x27;wan2&#x27;, &#x27;bestForVoIP&#x27;, &#x27;loadBalancing&#x27; or &#x27;defaultUplink&#x27; | 
**failOverCriterion** | **String** | Fail over criterion for this uplink preference rule. Must be one of: &#x27;poorPerformance&#x27; or &#x27;uplinkDown&#x27; | [optional] 
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

