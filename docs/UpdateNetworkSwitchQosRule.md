# MerakiDashboardApi.UpdateNetworkSwitchQosRule

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vlan** | **Number** | The VLAN of the incoming packet. A null value will match any VLAN. | [optional] 
**protocol** | **String** | The protocol of the incoming packet. Can be one of \"ANY\", \"TCP\" or \"UDP\". Default value is \"ANY\". | [optional] 
**srcPort** | **Number** | The source port of the incoming packet. Applicable only if protocol is TCP or UDP. | [optional] 
**srcPortRange** | **String** | The source port range of the incoming packet. Applicable only if protocol is set to TCP or UDP. Example: 70-80 | [optional] 
**dstPort** | **Number** | The destination port of the incoming packet. Applicable only if protocol is TCP or UDP. | [optional] 
**dstPortRange** | **String** | The destination port range of the incoming packet. Applicable only if protocol is set to TCP or UDP. Example: 70-80 | [optional] 
**dscp** | **Number** | DSCP tag that should be assigned to incoming packet. Set this to -1 to trust incoming DSCP. Default value is 0. | [optional] 


<a name="ProtocolEnum"></a>
## Enum: ProtocolEnum


* `ANY` (value: `"ANY"`)

* `TCP` (value: `"TCP"`)

* `UDP` (value: `"UDP"`)




