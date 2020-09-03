# MerakiDashboardApi.UpdateOrganizationConfigTemplateSwitchProfilePort

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the switch profile port | [optional] 
**tags** | **[String]** | The list of tags of the switch profile port | [optional] 
**enabled** | **Boolean** | The status of the switch profile port | [optional] 
**type** | **String** | The type of the switch profile port ('trunk' or 'access') | [optional] 
**vlan** | **Number** | The VLAN of the switch profile port. A null value will clear the value set for trunk ports. | [optional] 
**voiceVlan** | **Number** | The voice VLAN of the switch profile port. Only applicable to access ports | [optional] 
**allowedVlans** | **String** | The VLANs allowed on the switch profile port. Only applicable to trunk ports | [optional] 
**poeEnabled** | **Boolean** | The PoE status of the switch profile port | [optional] 
**isolationEnabled** | **Boolean** | The isolation status of the switch profile port | [optional] 
**rstpEnabled** | **Boolean** | The rapid spanning tree protocol status | [optional] 
**stpGuard** | **String** | The state of the STP guard ('disabled', 'root guard', 'bpdu guard' or 'loop guard') | [optional] 
**linkNegotiation** | **String** | The link speed for the switch profile port | [optional] 
**portScheduleId** | **String** | The ID of the port schedule. A value of null will clear the port schedule. | [optional] 
**udld** | **String** | The action to take when Unidirectional Link is detected (Alert only, Enforce). Default configuration is Alert only. | [optional] 
**accessPolicyType** | **String** | The type of the access policy of the switch profile port. Only applicable to access ports. Can be one of 'Open', 'Custom access policy', 'MAC allow list' or 'Sticky MAC allow list' | [optional] 
**accessPolicyNumber** | **Number** | The number of a custom access policy to configure on the switch profile port. Only applicable when 'accessPolicyType' is 'Custom access policy' | [optional] 
**macAllowList** | **[String]** | Only devices with MAC addresses specified in this list will have access to this port. Up to 20 MAC addresses can be defined. Only applicable when 'accessPolicyType' is 'MAC allow list' | [optional] 
**stickyMacAllowList** | **[String]** | The initial list of MAC addresses for sticky Mac allow list. Only applicable when 'accessPolicyType' is 'Sticky MAC allow list' | [optional] 
**stickyMacAllowListLimit** | **Number** | The maximum number of MAC addresses for sticky MAC allow list. Only applicable when 'accessPolicyType' is 'Sticky MAC allow list' | [optional] 
**stormControlEnabled** | **Boolean** | The storm control status of the switch profile port | [optional] 
**flexibleStackingEnabled** | **Boolean** | For supported switches (e.g. MS420/MS425), whether or not the port has flexible stacking enabled. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `trunk` (value: `"trunk"`)

* `access` (value: `"access"`)




<a name="StpGuardEnum"></a>
## Enum: StpGuardEnum


* `disabled` (value: `"disabled"`)

* `rootGuard` (value: `"root guard"`)

* `bpduGuard` (value: `"bpdu guard"`)

* `loopGuard` (value: `"loop guard"`)




<a name="UdldEnum"></a>
## Enum: UdldEnum


* `alertOnly` (value: `"Alert only"`)

* `enforce` (value: `"Enforce"`)




<a name="AccessPolicyTypeEnum"></a>
## Enum: AccessPolicyTypeEnum


* `open` (value: `"Open"`)

* `customAccessPolicy` (value: `"Custom access policy"`)

* `mACAllowList` (value: `"MAC allow list"`)

* `stickyMACAllowList` (value: `"Sticky MAC allow list"`)




